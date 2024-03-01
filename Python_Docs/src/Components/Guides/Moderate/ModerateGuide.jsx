import { Accordion } from '@chakra-ui/react'
import React from 'react'
import ChapterDropdown from '../Beginner/ChapterDropdown'

const topics1 = [
    "Reading and Writing Files",
    "Working with different file formats (JSON, CSV)",
    "Exception handling in file operations",
    "Advanced File Operations",
    "Working with Text and Binary Files",
    "Working with CSV and Excel Files"
]
const topics2 = [
    "OrderedDict and ChainMap",
    "Namedtuples and Deque",
    "Heapq module",
    "DefaultDict and Counter",
    "Graphs and Graph Algorithms",
    "Trie and B-trees",
    "Skip lists and Red-Black Trees",
    "Interval trees and Splay trees",
    "Suffix trees and Bloom filters",
    "Multidimensional arrays (NumPy)",
    "Sparse matrices representation",
    "Union-Find (Disjoint Set)",
    "Persistent data structures",
    "Geometric algorithms",
    "Topological sorting",
    "Distributed data structures",
    "Probabilistic structures (HyperLogLog, Count-Min Sketch)"
]

const topics3 = [
    "Lambda functions and anonymous functions",
    "Map, Filter, and Reduce functions",
    "List comprehensions and generator expressions",
    "Higher-order functions and first-class functions",
    "Closures and lexical scope",
    "Partial functions and function currying",
    "Recursion and tail recursion",
    "Immutability and side effects",
    "Functional programming with Python libraries",
    "Monads and functional composition",
    "Lazy evaluation and infinite sequences",
    "Function decorators and their applications",
    "Pattern matching (available in recent Python versions)"
]

const topics4 = [
    "Creating and organizing modules",
    "Importing modules and using namespaces",
    "Exploring the Python Standard Library",
    "Third-party libraries and package management (pip)",
    "Packaging Python code for distribution",
    "Virtual environments for project isolation",
    "Module initialization with __init__.py",
    "Relative and absolute imports",
    "Namespace packages and PEP 420",
    "Working with package metadata and setup.py",
    "Importing from packages and sub-packages",
    "Module caching and sys.modules",
    "Module reloading with importlib.reload()"
]

const topics5 = [
    "Basics of regular expressions",
    "Metacharacters and character classes",
    "Quantifiers and anchors",
    "Capturing groups and backreferences",
    "Lookahead and lookbehind assertions",
    "Using the `re` module for pattern matching",
    "Matching and searching patterns",
    "Extracting and replacing text",
    "Compiling regular expressions for efficiency",
    "Common use cases for regular expressions",
    "Pattern flags and options",
    "Working with multiple lines and DOTALL",
    "Greedy vs. non-greedy matching",
    "Regular expressions in file operations",
    "Validation and sanitization with regex",
    "Regular expressions in data processing"
]

const topics6 = [
    "Creating and using function decorators",
    "Decorating functions and methods",
    "Class decorators and use cases",
    "Decorators with arguments",
    "Built-in decorators (e.g., @staticmethod, @classmethod)",
    "Decorator chaining and order of execution",
    "Decorators for memoization and caching",
    "Handling exceptions in decorators",
    "Decorator patterns and best practices",
    "Understanding and implementing generators",
    "Yield statement and generator expressions",
    "Iterators and iterables in Python",
    "Generator comprehensions",
    "Asynchronous programming with generators (async generators)",
    "Coroutine basics and async/await syntax",
    "Building asynchronous generators",
    "Concurrency with asyncio and generators"
]

const topics7 = [
    "Making HTTP requests using the `requests` library",
    "GET, POST, PUT, DELETE requests",
    "Handling request parameters and headers",
    "Session management for multiple requests",
    "Handling API responses (JSON parsing)",
    "Extracting data from JSON responses",
    "Error handling with APIs",
    "Authentication with APIs",
    "API keys, OAuth, and tokens",
    "Rate limiting and throttling",
    "Handling paginated responses",
    "Working with RESTful APIs",
    "Versioning and backward compatibility",
    "API documentation and interactive testing",
    "Testing APIs with tools like Postman",
    "Best practices for API design",
    "Exploring GraphQL for flexible API queries"
]

const topics8 = [
    "Basics of database connections",
    "Connecting to SQLite, MySQL, or PostgreSQL",
    "CRUD operations with databases",
    "Executing SQL queries with Python",
    "Using transactions for data consistency",
    "Handling database errors and exceptions",
    "ORM (Object-Relational Mapping) concepts",
    "Introduction to SQLAlchemy for ORM",
    "Defining models and relationships",
    "Querying and updating data with SQLAlchemy",
    "Database migration strategies",
    "Connection pooling for performance",
    "Working with NoSQL databases (e.g., MongoDB)",
    "Using database connection libraries (e.g., psycopg2, PyMySQL)",
    "Data integrity and constraints",
    "Securing database connections with SSL",
    "Asynchronous database access with asyncpg or aiomysql"
]

const topics9 = [
    "Basics of web scraping",
    "HTML structure and tags",
    "Inspecting web elements",
    "Using the `requests` library for HTTP requests",
    "Parsing HTML with BeautifulSoup",
    "Navigating and searching the DOM",
    "Extracting data from HTML elements",
    "Handling dynamic content with Selenium",
    "Scraping data from tables and lists",
    "Submitting forms and interacting with websites",
    "Dealing with AJAX requests",
    "Avoiding web scraping restrictions (robots.txt)",
    "Web scraping ethics and legal considerations",
    "Scraping with Scrapy framework",
    "Advanced parsing techniques",
    "Logging in and session management",
    "Using proxies for IP rotation",
    "Handling CAPTCHAs and reCAPTCHAs",
    "Scraping JavaScript-rendered pages with headless browsers",
    "Testing and debugging web scraping scripts"
]

const topics10 = [
    "Inheritance, polymorphism, and super()",
    "Abstract base classes (ABC)",
    "Multiple inheritance and mixins",
    "Property decorators and descriptors",
    "Metaclasses and class creation",
    "Class and static methods",
    "Operator overloading and special methods",
    "Design patterns in Python",
    "Singleton, Factory, Observer patterns",
    "Strategy and Adapter patterns"
]

const topics11 = [
    "Using debugging tools like pdb",
    "Setting breakpoints and stepping through code",
    "Inspecting variables and the call stack",
    "Conditional breakpoints and watchpoints",
    "Post-mortem debugging",
    "Remote debugging with pdb",
    "Profiling code for performance optimization",
    "Identifying bottlenecks with cProfile",
    "Memory profiling with memory_profiler",
    "Line profiling with line_profiler",
    "Profiling in Jupyter Notebooks",
    "Visualizing profiling results",
    "Debugging and profiling in IDEs",
    "Common debugging pitfalls and strategies",
    "Optimizing code with performance profiling",
    "Concurrency debugging and profiling"
]

const ModerateGuide = () => {
    return (
        <div>
            <Accordion allowMultiple w={"100"} bg={"#011627"} p={10} pl={"18%"}>
                <ChapterDropdown Chapter={"File Handling and I/O Operations"} topicList={topics1}/>
                <ChapterDropdown Chapter={"Advanced Data Structures"} topicList={topics2}/>
                <ChapterDropdown Chapter={"Functional Programming"} topicList={topics3}/>
                <ChapterDropdown Chapter={"Modules and Packages"} topicList={topics4}/>
                <ChapterDropdown Chapter={"Regular Expressions"} topicList={topics5}/>
                <ChapterDropdown Chapter={"Decorators and Generators"} topicList={topics6}/>
                <ChapterDropdown Chapter={"Working with APIs"} topicList={topics7}/>
                <ChapterDropdown Chapter={"Database Access with Python"} topicList={topics8}/>
                <ChapterDropdown Chapter={"Web Scraping"} topicList={topics9}/>
                <ChapterDropdown Chapter={"Advanced Object-Oriented Programming"} topicList={topics10}/>
                <ChapterDropdown Chapter={"Debugging and Profiling"} topicList={topics11}/>
            </Accordion>
        </div>
    )
}

export default ModerateGuide
