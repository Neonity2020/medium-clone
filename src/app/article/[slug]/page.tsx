import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

// Placeholder data for articles (ideally fetched from a database)
const articles = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    authorName: "Jane Doe",
    authorAvatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
    publishDate: "Jul 15, 2024",
    readingTime: "7 min",
    description: "A comprehensive guide to building your first application with Next.js 14 and the App Router.",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Updated image URL
    content: `
      <p class="mb-4">Next.js 14 brings exciting new features and improvements, making web development even more efficient and enjoyable. This guide will walk you through the essential steps to get your first Next.js 14 application up and running using the App Router.</p>
      <h2 class="text-2xl font-bold mb-3">1. Setting up your project</h2>
      <p class="mb-4">To start, ensure you have Node.js (version 18.17 or later) installed. Then, open your terminal and run the following command:</p>
      <pre class="bg-muted p-3 rounded-md mb-4 text-sm"><code>npx create-next-app@latest my-next-app</code></pre>
      <p class="mb-4">Follow the prompts to configure your project. We recommend using TypeScript and the App Router for the best experience.</p>
      <h2 class="text-2xl font-bold mb-3">2. Understanding the App Router</h2>
      <p class="mb-4">The App Router, introduced in Next.js 13, is a powerful new paradigm for building web applications. It leverages React Server Components and nested layouts to provide a highly performant and flexible routing system.</p>
      <p class="mb-4">Key concepts include:</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Layouts:</strong> Shared UI that remains consistent across multiple routes.</li>
        <li><strong>Pages:</strong> UI unique to a route.</li>
        <li><strong>Loading UI:</strong> Instant loading states with <code>loading.tsx</code>.</li>
        <li><strong>Error UI:</strong> Graceful error handling with <code>error.tsx</code>.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">3. Data Fetching</h2>
      <p class="mb-4">With the App Router, data fetching can be done directly within Server Components using <code>async/await</code>. This allows you to fetch data closer to your data source, reducing client-side JavaScript bundles.</p>
      <pre class="bg-muted p-3 rounded-md mb-4 text-sm"><code>async function getData() {
  const res = await fetch('https://api.example.com/data');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return &lt;h1&gt;{data.title}&lt;/h1&gt;;
}</code></pre>
      <p class="mb-4">This is just the beginning! Next.js 14 offers a rich ecosystem for building modern, scalable web applications. Happy coding!</p>
    `,
  },
  {
    slug: "understanding-tailwind-css",
    title: "Understanding Tailwind CSS for Rapid UI Development",
    authorName: "John Smith",
    authorAvatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=JS",
    publishDate: "Jul 10, 2024",
    readingTime: "5 min",
    description: "Dive deep into the utility-first approach of Tailwind CSS and how it can boost your development workflow.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <p class="mb-4">Tailwind CSS has revolutionized the way developers approach styling web applications. By providing a utility-first framework, it empowers you to build custom designs directly in your HTML without writing a single line of custom CSS.</p>
      <h2 class="text-2xl font-bold mb-3">What is Utility-First CSS?</h2>
      <p class="mb-4">Unlike traditional CSS frameworks that provide pre-built components (like buttons or cards), Tailwind CSS offers low-level utility classes that let you build completely custom designs. For example, instead of a <code>.btn-primary</code> class, you'd combine classes like <code>bg-blue-500 text-white font-bold py-2 px-4 rounded</code>.</p>
      <h2 class="text-2xl font-bold mb-3">Benefits of Tailwind CSS</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Faster Development:</strong> No need to switch between HTML and CSS files.</li>
        <li><strong>No Naming Conflicts:</strong> Utility classes are atomic, so you don't worry about global styles clashing.</li>
        <li><strong>Easier Maintenance:</strong> Changes are localized to the component.</li>
        <li><strong>Highly Customizable:</strong> You can configure Tailwind to match your design system perfectly.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">Getting Started</h2>
      <p class="mb-4">To integrate Tailwind CSS into your Next.js project, you typically install it via npm and then configure your <code>tailwind.config.js</code> file. The official documentation provides excellent guides for various frameworks.</p>
      <p class="mb-4">Embrace the utility-first approach, and you'll find yourself building beautiful, responsive UIs with unprecedented speed!</p>
    `,
  },
  {
    slug: "the-power-of-typescript",
    title: "The Power of TypeScript in Modern Web Applications",
    authorName: "Alice Johnson",
    authorAvatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=AJ",
    publishDate: "Jul 01, 2024",
    readingTime: "8 min",
    description: "Explore how TypeScript enhances code quality, maintainability, and developer experience.",
    imageUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Updated image URL
    content: `
      <p class="mb-4">TypeScript has become an indispensable tool for building robust and scalable web applications. As a superset of JavaScript, it adds static typing, which helps catch errors early in the development cycle and improves code maintainability.</p>
      <h2 class="text-2xl font-bold mb-3">Why Use TypeScript?</h2>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Early Error Detection:</strong> Catches type-related bugs during development, not at runtime.</li>
        <li><strong>Improved Readability:</strong> Types make code easier to understand and reason about.</li>
        <li><strong>Better Tooling:</strong> Enhanced autocompletion, refactoring, and navigation in IDEs.</li>
        <li><strong>Scalability:</strong> Essential for large codebases and teams.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">Key Features</h2>
      <p class="mb-4">TypeScript introduces several powerful features:</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Static Types:</strong> Define types for variables, function parameters, and return values.</li>
        <li><strong>Interfaces:</strong> Define contracts for objects.</li>
        <li><strong>Generics:</strong> Write reusable code that works with various types.</li>
        <li><strong>Enums:</strong> Define a set of named constants.</li>
      </ul>
      <h2 class="text-2xl font-bold mb-3">Getting Started with TypeScript</h2>
      <p class="mb-4">Most modern frameworks like Next.js and React have excellent TypeScript support. You can gradually introduce TypeScript into an existing JavaScript project or start a new one with TypeScript enabled by default.</p>
      <p class="mb-4">Investing time in learning TypeScript pays off significantly in the long run, leading to more stable and maintainable applications.</p>
    `,
  },
  {
    slug: "wild-fullstack-cultivation",
    title: "教你一套左脚踩右脚的野生全栈修仙之道",
    authorName: "野生程序员",
    authorAvatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=YZP",
    publishDate: "Dec 02, 2024",
    readingTime: "12 min",
    description: "一套颠覆常规的全栈开发修仙秘籍，让你在代码的世界里飞檐走壁，左脚踩右脚直冲云霄。",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      <p class="mb-4">各位道友，今天贫道要传授的是一套流传于程序员江湖中的绝世武功——左脚踩右脚的野生全栈修仙之道。此功法一旦练成，你就能在代码的江湖中飞檐走壁，遇山开路，遇水搭桥，直抵技术巅峰。</p>

      <h2 class="text-2xl font-bold mb-3">第一章：心法总纲——左脚为何能踩右脚？</h2>
      <p class="mb-4">很多人问：左脚踩右脚，这不是违背物理学常识吗？在编程的世界里，没有什么是不可能的。所谓左脚踩右脚，指的是<strong>用已经掌握的知识作为跳板，去攀登更高的技术山峰</strong>。</p>
      <p class="mb-4">就像你学会了HTML，就可以踩着这个"左脚"，去够CSS和JavaScript这个"右脚"；当你熟练掌握前端三剑客，又能踩着它们去够React、Vue这些框架...</p>

      <h2 class="text-2xl font-bold mb-3">第二章：第一层功法——前端筑基</h2>
      <p class="mb-4">修仙第一步，筑基为重。全栈之路，始于前端。</p>
      <h3 class="text-xl font-semibold mb-2">功法要诀：</h3>
      <ul class="list-disc list-inside mb-4">
        <li><strong>HTML心经：</strong>万丈高楼平地起，HTML就是你的地基。别看它简单，但语义化的HTML是你修仙路上最重要的内功心法。</li>
        <li><strong>CSS神功：</strong>Flexbox、Grid、响应式设计，这些不是简单的样式，而是你的轻功。练好了，页面布局就能行云流水。</li>
        <li><strong>JavaScript绝学：</strong>这是你的核心功法。从ES6到ESNext，从同步到异步，每一步都是功力的提升。</li>
      </ul>
      <pre class="bg-muted p-3 rounded-md mb-4 text-sm"><code>// 左脚踩右脚的JavaScript修炼示例
const 左脚 = "已掌握的基础知识";
const 右脚 = "想要学习的新技术";

function 修炼心法(基础, 目标) {
  return 基础 + "作为跳板 -> " + 目标;
}

console.log(修炼心法(左脚, 右脚));
// 输出：已掌握的基础知识作为跳板 -> 想要学习的新技术</code></pre>

      <h2 class="text-2xl font-bold mb-3">第三章：第二层功法——后墙筑墙</h2>
      <p class="mb-4">前端功法小成之后，就要开始修炼后端神功了。很多人在此时感到困惑，其实不然，前端的经验就是你最好的跳板。</p>
      <h3 class="text-xl font-semibold mb-2">转修要诀：</h3>
      <ul class="list-disc list-inside mb-4">
        <li><strong>API设计心法：</strong>你在前端调用过无数API，现在轮到你来设计了。站在调用者的角度思考，这就是你的优势。</li>
        <li><strong>数据库神功：</strong>前端的状态管理经验，能让你更好地理解数据库的设计原理。</li>
        <li><strong>服务器绝学：</strong>Node.js让你用JavaScript写后端，这不就是最完美的左脚踩右脚吗？</li>
      </ul>

      <h2 class="text-2xl font-bold mb-3">第四章：第三层功法——DevOps飞升</h2>
      <p class="mb-4">当前后端皆已精通，就该修炼DevOps这门仙术了。部署、监控、CI/CD，这些都是让你从程序员飞升为架构师的关键一步。</p>
      <h3 class="text-xl font-semibold mb-2">飞升法门：</h3>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Docker容器术：</strong>把你的应用打包成容器，随时随地都能运行。</li>
        <li><strong>CI/CD神功：</strong>自动化部署，让代码一提交就能自动上线。</li>
        <li><strong>云修仙术：</strong>AWS、阿里云、腾讯云，选一个作为你的洞天福地。</li>
      </ul>

      <h2 class="text-2xl font-bold mb-3">第五章：秘籍心法——实战演练</h2>
      <p class="mb-4">理论再多，不如实战一次。让我们用左脚踩右脚的方法，快速搭建一个全栈应用。</p>
      <pre class="bg-muted p-3 rounded-md mb-4 text-sm"><code># 第一脚：初始化项目（你已经会的）
npx create-next-app@latest my-wild-app

# 第二脚：踩着Next.js搭建后端API
# pages/api/users.js
export default function handler(req, res) {
  res.status(200).json({
    message: "左脚踩右脚，起飞！",
    users: ["张三", "李四", "王五"]
  });
}

# 第三脚：用Next.js前端调用后端
# 在组件中使用useEffect获取数据
const [users, setUsers] = useState([]);

useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(data => setUsers(data.users));
}, []);</code></pre>

      <h2 class="text-2xl font-bold mb-3">第六章：避坑指南——修仙路上的九死一生</h2>
      <p class="mb-4">修仙之路并非一帆风顺，左脚踩右脚也有踩空的时候。以下是一些常见的陷阱：</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>贪多嚼不烂：</strong>什么都想学，结果什么都学不精。建议一次只修炼一门功法。</li>
        <li><strong>眼高手低：</strong>看了太多教程，却很少动手实践。代码是敲出来的，不是看出来的。</li>
        <li><strong>闭门造车：</strong>一个人闷头学，不如找几个道友一起修炼，互相督促。</li>
        <li><strong>急功近利：</strong>修仙需要时间积累，不要期望一夜成仙。</li>
      </ul>

      <h2 class="text-2xl font-bold mb-3">第七章：成仙之后——持续进阶</h2>
      <p class="mb-4">当你已经掌握了全栈神功，会发现修炼之路永无止境。微服务、架构设计、团队管理，每一个领域都值得深入探索。</p>
      <p class="mb-4">记住，<strong>左脚踩右脚不是终点，而是永恒的修炼方式</strong>。每学会一项新技术，都要思考如何用它作为跳板，去够下一个目标。</p>

      <h2 class="text-2xl font-bold mb-3">结语：野生道友的修炼心得</h2>
      <p class="mb-4">贫道修仙多年，总结出几个核心心得与各位道友分享：</p>
      <ol class="list-decimal list-inside mb-4">
        <li><strong>永远保持初学者心态：</strong>技术更新太快，保持谦逊才能持续进步。</li>
        <li><strong>实践出真知：</strong>多写代码，多做项目，在实践中发现问题、解决问题。</li>
        <li><strong>分享是最好的学习：</strong>教会别人是检验自己理解的最好方式。</li>
        <li><strong>身体是修仙的本钱：</strong>别修仙修到脱发、颈椎病，适度锻炼，保持健康。</li>
      </ol>
      <p class="mb-4">各位道友，贫道的野生全栈修仙之道就传授到这里。记住，<strong>左脚踩右脚的精髓在于：永远在已有基础上寻找新的突破点</strong>。愿各位在代码的江湖中，早日修成正果，成为真正的技术仙君！</p>
      <p class="mb-4"><em>（本文纯属娱乐，如有雷同，纯属巧合。真正的技术成长需要扎实的理论基础和大量的实践积累。）</em></p>
    `,
  },
];

interface ArticlePageProps {
  // Next.js expects `params` to be a Promise (or undefined) in the generated PageProps.
  // Make it optional and a Promise to satisfy the framework's type checks.
  params?: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = params ? await params : { slug: "" };
  const { slug } = resolvedParams;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The article you are looking for does not exist.
        </p>
        <Link href="/">
          <Button>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10 max-w-3xl mx-auto"> {/* Removed px-4 sm:px-6 lg:px-8 */}
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-center space-x-3 mb-6">
        <Avatar className="h-8 w-8">
          <AvatarImage src={article.authorAvatarUrl} alt={article.authorName} />
          <AvatarFallback>{article.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{article.authorName}</p>
          <p className="text-xs text-muted-foreground">
            {article.publishDate} • {article.readingTime} read
          </p>
        </div>
      </div>

      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}