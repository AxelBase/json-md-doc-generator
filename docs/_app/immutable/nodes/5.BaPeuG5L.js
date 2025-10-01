import{S as n,i,s as l,n as a,d as p,b as d,m as c,o as m,e as h,p as g,j as f}from"../chunks/Bmy3Ah6d.js";import"../chunks/IHki7fMi.js";import{b as u}from"../chunks/dqv6y2aA.js";const y=!0,w=Object.freeze(Object.defineProperty({__proto__:null,prerender:y},Symbol.toStringTag,{value:"Module"}));function b(s){let e,r=`<article><h1 class="mb-4">Formatting Arrays and Objects Effectively</h1> <p>One of the key strengths of the json-md-doc-generator tool is its ability to intelligently format JSON arrays and objects into Markdown, creating documents that are both functional and easy to navigate. Understanding how these structures map to Markdown elements—lists, headings, and tables—can greatly enhance your documentation workflow. This article dives into the mechanics, provides examples, and offers tips for handling nested data.</p> <h2>Arrays of Primitives: Bullet Lists</h2> <p>When JSON contains an array of simple values (e.g., strings, numbers), the tool converts it into a Markdown bullet list. This is ideal for task lists or itemized data. Example:</p> <pre><script type="text/plain">{ "tasks": ["Design UI", "Write Code", "Test App"] }<\/script></pre> <p>Converts to:</p> <pre>## tasks
- Design UI
- Write Code
- Test App</pre> <p>This format is perfect for quick readability and can be extended with nested lists if needed.</p> <h2>Arrays of Objects: Markdown Tables</h2> <p>For arrays of objects, the tool generates Markdown tables, with keys becoming column headers. This is great for structured data like team rosters or project milestones. Example:</p> <pre><script type="text/plain">{ "team": [{ "name": "Alice", "role": "Developer" }, { "name": "Bob", "role": "Designer" }] }<\/script></pre> <p>Converts to:</p> <pre>## team
| name   | role      |
|--------|-----------|
| Alice  | Developer |
| Bob    | Designer  |</pre> <p>Tables are automatically aligned and can handle multiple fields, making complex data digestible.</p> <h2>Nested Structures: Hierarchical Documents</h2> <p>Nested JSON objects are transformed into a hierarchy of Markdown headings, allowing for deep navigation. Example:</p> <pre><script type="text/plain">{ "project": { "name": "DocGen", "details": { "version": "1.0", "date": "2025-10-01" } } }<\/script></pre> <p>Converts to:</p> <pre># project
## name
DocGen
## details
### version
1.0
### date
2025-10-01</pre> <p>This structure mirrors the JSON nesting, making it easy to drill down into details.</p> <h2>Consistent Key Ordering</h2> <p>The tool orders JSON keys consistently, ensuring that the resulting Markdown structure doesn’t vary. For example:</p> <pre><script type="text/plain">{ "b": 2, "a": 1 }<\/script></pre> <p>Always converts to:</p> <pre>## a
1
## b
2</pre> <h2>Tips for Effective Formatting</h2> <p>- Use consistent key names for uniform table headers.
        - Keep arrays of objects small for readability; split large datasets if necessary.
        - Leverage nesting to organize complex projects into logical sections.</p> <p>Experiment with the tool using these examples. Upload a \`.json\` file or paste the text to see how arrays and objects transform into polished Markdown, enhancing your documentation efficiency.</p></article> <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;"><a href="${u}/blog">← Back to Blog</a></div>`;return{c(){e=f("div"),e.innerHTML=r,this.h()},l(t){e=h(t,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),g(e)!=="svelte-1adikqc"&&(e.innerHTML=r),this.h()},h(){c(e,"class","container py-4"),m(e,"max-width","800px")},m(t,o){d(t,e,o)},p:a,i:a,o:a,d(t){t&&p(e)}}}class j extends n{constructor(e){super(),i(this,e,null,b,l,{})}}export{j as component,w as universal};
