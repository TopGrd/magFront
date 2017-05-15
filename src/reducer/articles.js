const initalState = [
  {
    id: '1',
    title: '简单告诉你为什么需要 https',
    author: 'mmiaow',
    time: 'April 27th 2017 11:12:21 +0000',
    avatar: 'https://avatars2.githubusercontent.com/u/8687182?s=200',
    summary: '<h2 id="Functor"><a href="#Functor" class="headerlink" title="Functor"></a>Functor</h2><h3 id="Container"><a href="#Container" class="headerlink" title="Container"></a>Container</h3><p>创建一个容器Container,里面可以存储任意值<br><figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="function"><span class="keyword">function</span> <span class="title">Container</span>(<span class="params">x</span>) </span>&#123;</div><div class="line"> <span class="keyword">this</span>.__value = x</div><div class="line">&#125;</div></pre></td></tr></table></figure></p>'
  }
]
const articlesReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return state.concat([{
        id: '2',
        title: '简单告诉你为什么不需要 https',
        author: 'mmiaow',
        time: 'April 27th 2017 11:12:21 +0000',
        avatar: 'https://avatars2.githubusercontent.com/u/8687182?s=200',
        summary: '<p>牛客上有这么一道 JavaScript 的<a href="https://www.nowcoder.com/questionTerminal/9c76e58c2ce94eb9b8168b43adef4f50">题目</a>。</p> <pre><code>//填写内容让下面代码支持a.name = “name1”; b.name = “name2”; function obj(name){ 【1】 } obj.【2】 = &quot;name2&quot;; var a = obj(&quot;name1&quot;); var b = new obj; </code></pre> <p>【1】和【2】是填写的内容，【2】的答案是 <code>prototype.name</code>，没争议。</p> <p>问题是【1】，参考答案居然是 <code>if(name){ this.name = name;}return this;</code>，这么随便地玩弄 <code>this</code> 不就是明摆着污染全局变量吗？暴力赋值不可取。</p> <p>下面的一些高票讨论还说了一大堆解释的废话，连他自己都说自己好罗嗦。对，你不但罗嗦，而且还没有改错。注释里都说了给 window 的属性赋值，还不自知出问题，真是误人子弟。</p> <p>先来分析一下题目，a 和 b 都从 obj 来，为什么同名的属性值不一样？可以看出，是对 obj 这个函数的调用方式不一样，a 是 obj 函数的调用结果，而 b 则是 obj 作为<em>构造函数</em>调用的结果。所以这题的重点应该是如何区分<em>函数调用</em>和<em>构造函数调用</em>。</p> <p>一个关键字 <code>new</code> 决定了不同。<code>new</code> 的作用是什么呢？<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new">MDN</a> 上说了，面试也会考你的，简单来说是三步，<code>new foo</code>：</p> <ol> <li>生成一个继承于 foo.prototype 的对象 </li> <li>foo 会被调用，其中的 <code>this</code> 值会被绑定为 1 中的对象 </li> <li>如果 foo 没有返回一个对象（注意是对象！），则返回 1 的对象</li> </ol> <p>从 2 就可以看出 <code>this</code> 值会被 <code>new</code> 绑定为一个确定的对象，而不是像普通函数调用中那样自己不可预料，要看上下文的进程。</p> <p>于是就可以在这里做文章。先来判断 <code>this</code> 的值。</p> <pre><code>if (this instanceof obj) {} </code></pre> <p><code>instanceof</code> 会检查 <code>this</code> 的原型链上是否存在 <code>foo.prototype</code>。也就是说能判断是否满足第 1 条，确保了对象能从 <code>prototype</code> 中读取到 <code>name</code> 属性。（毕竟代码中并没有给 b 的赋值中传入）</p> <blockquote> <p><code>instanceof</code> 并不是完美的判断方法，但是在这里足够了，后面会谈到这个问题。</p> </blockquote> <pre><code>if (this instanceof obj) { // new 调用 } else { // 非 new 调用 return { name: name } } </code></pre> <p>非 new 调用的情况下，直接返回一个新对象就 OK 了。</p> <p>而在 new 调用的情况下，可以看到 <code>function obj(name)</code> 定义的时候是有参数的，调用的时候却没参数，这就要小心了，为了安全起见，还是判断一下为妙。</p> <pre><code>if (this instanceof obj) { // new 调用 if (name !== undefined) { this.name = name } } else { // 非 new 调用 return { name: name } } </code></pre> <p>一般来说，判断会写成 <code>if (name)</code>，但是碰到 <code>null</code>、<code>0</code>、<code>false</code> 就 GG 了，所以还是谨慎点吧。</p> <p>问题到这里就可以比较完美地解答了。</p> <h2>bonus: instanceof 的问题</h2> <p>『<code>instanceof</code> 会检查 <code>this</code> 的原型链上是否存在 <code>foo.prototype</code>』，为什么说得这么拗口，是因为需要表达出 <code>instanceof</code> 本来就不是真的用来检测是否调用 <code>new</code> 的方法。</p> <p>在题目里面，要求的是 a 需要从原型链上读取到特定的属性值，所以 <code>instanceof</code> 的作用刚好在这里能符合要求而已。</p> <p>函数调用除了题目中的方法还有第三种方法，那就是 <code>foo.call</code>、<code>foo.apply</code>，而且也能为函数指定 <code>this</code> 的值（所以还有 <code>bind</code>）。因此是存在方法调戏 <code>instanceof</code> 的。</p> <pre><code>foo.prototype.name = \'foo\' var midman = new foo(\'fake foo\') var a = foo.call(midman) var b = foo.call(midman, \'b\') a // undefined, WTF?! b // undefined, WTF?! </code></pre> <p>这里的 <code>foo</code> 调用的方式是作为函数来调用，但是为 <code>this</code> 绑定的值是从 <code>foo</code> 上 <code>new</code> 出来的，换句话说，其原型链上存在 <code>foo.prototype</code>，于是就骗过了 <code>instanceof</code>。</p> <p>于是 ES2015 来搭救你了，新增了一个 <code>new.target</code>。于是修改成：</p> <pre><code>if (new.target !== undefined) { // new 调用 if (name !== undefined) { this.name = name } } else { // 非 new 调用 return { name: name } } </code></pre>'
      }])
    default:
      return state
  }
}

export default articlesReducer
