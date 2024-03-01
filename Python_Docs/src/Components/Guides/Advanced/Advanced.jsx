import { Accordion } from '@chakra-ui/react'
import React from 'react'
import ChapterDropdown from '../Beginner/ChapterDropdown'

const topics1 = [
    "NumPy advanced array manipulation",
    "Broadcasting and vectorized operations",
    "Structured arrays and custom ufuncs",
    "Memory layout and performance considerations",
    "Advanced indexing and slicing",
    "Pandas MultiIndex and hierarchical indexing",
    "Data cleaning and preprocessing",
    "Reshaping and pivoting data",
    "Merging, joining, and aggregation",
    "Time series analysis",
    "Handling missing data and categorical types",
    "Pandas performance optimization",
    "Dask for parallel computing"
]
const topics2 = [
    "Basic plots with Matplotlib",
    "Customizing Matplotlib plots",
    "Subplots and multiple axes",
    "3D plotting with Matplotlib",
    "Advanced plotting with Seaborn",
    "Statistical data visualization",
    "Creating interactive visualizations",
    "Geospatial plotting",
    "Custom color mapping and palettes",
    "Plotting with Pandas",
    "Animations in Matplotlib"
]

const topics3 = [
    "Lookbehind and Lookahead assertions",
    "Named groups and backreferences",
    "Advanced character classes",
    "Lazy and possessive quantifiers",
    "Unicode and multiline support",
    "Customizing match behavior with flags",
    "Positive and negative lookarounds",
    "Atomic groups and conditional expressions",
    "Matching HTML/XML tags",
    "Embedding code in patterns",
    "Advanced error handling",
    "Performance optimizations"
]

const topics4 = [
    "Understanding Global Interpreter Lock (GIL)",
    "Thread synchronization and locks",
    "Thread-safe data structures",
    "Deadlocks and race conditions",
    "Multiprocessing with the multiprocessing module",
    "Shared memory and inter-process communication",
    "Thread and process pools",
    "Asynchronous programming with asyncio",
    "Concurrency and parallelism strategies",
    "Thread and process safety considerations",
    "Task scheduling and queuing"
]

const topics5 = [
    "Flask blueprints and extensions",
    "Middleware in Flask",
    "RESTful API development with Flask",
    "Flask SQLAlchemy and ORM",
    "Django signals and custom managers",
    "Django REST framework for API development",
    "Authentication and authorization in Django",
    "Custom template tags and filters in Django",
    "Advanced Django forms and formsets",
    "Middleware in Django",
    "Handling file uploads and media files",
    "Caching strategies in Flask and Django",
    "Database migrations in Django"
]

const topics6 = [
    "Socket programming basics",
    "TCP/IP and UDP sockets",
    "Server and client architectures",
    "Socket options and configurations",
    "Handling multiple connections concurrently",
    "Non-blocking sockets and asynchronous I/O",
    "Secure socket communication with TLS/SSL",
    "UDP multicast and broadcast",
    "Network protocols and protocol design",
    "WebSockets for real-time communication",
    "Proxy servers and reverse proxies",
    "Packet sniffing and analysis",
    "Implementing custom protocols"
]

const topics7 = [
    "Class decorators and Decorators with arguments",
    "Built-in decorators (@staticmethod, @classmethod)",
    "Decorator chaining and order of execution",
    "Decorators for memoization and caching",
    "Decorator patterns and best practices",
    "Using decorators for debugging",
    "Decorators for code profiling",
    "Asynchronous decorators",
    "Implementing decorators as classes",
    "Decorators for access control and permissions",
    "Conditional decorators and parameterized decorators",
    "Functionality testing with decorators"
]

const topics8 = [
    "Introduction to spaCy and its architecture",
    "Tokenization and Part-of-Speech tagging",
    "Named Entity Recognition (NER) in spaCy",
    "Dependency parsing and syntactic analysis",
    "Customizing spaCy pipelines",
    "Handling large text corpora with spaCy",
    "Rule-based matching and text patterns",
    "Training custom models with spaCy",
    "Integrating spaCy with deep learning frameworks",
    "Text similarity and vector representations",
    "Entity linking and coreference resolution",
    "Multilingual and domain-specific NLP with spaCy",
    "Advanced text processing workflows"
]

const topics9 = [
    "Feature engineering and preprocessing",
    "Model evaluation metrics and optimization",
    "Ensemble learning and stacking",
    "Advanced model interpretability",
    "Handling imbalanced datasets and outliers",
    "Time series forecasting",
    "Neural network architectures in TensorFlow",
    "Transfer learning and fine-tuning",
    "Custom loss functions and metrics",
    "TensorFlow model deployment",
    "Model explainability with SHAP and LIME",
    "Implementing custom layers in TensorFlow",
    "Handling large datasets with Dask",
    "Deploying ML models as APIs",
    "Federated learning and AutoML",
    "Reinforcement learning with TensorFlow",
    "Scaling ML systems"
]

const Advanced = () => {
    return (
        <div>
            <Accordion allowMultiple w={"100"} bg={"#011627"} p={10} pl={"18%"}>
                <ChapterDropdown Chapter={"Advanced NumPy and Pandas"} topicList={topics1}/>
                <ChapterDropdown Chapter={"Matplotlib and Seaborn for Data Visualization"} topicList={topics2}/>
                <ChapterDropdown Chapter={"Advanced Regular Expressions with re Module"} topicList={topics3}/>
                <ChapterDropdown Chapter={"Advanced Threading and Multiprocessing"} topicList={topics4}/>
                <ChapterDropdown Chapter={"Advanced Flask/Django Features"} topicList={topics5}/>
                <ChapterDropdown Chapter={"Advanced Network Programming with socket"} topicList={topics6}/>
                <ChapterDropdown Chapter={"Advanced Python Decorators"} topicList={topics7}/>
                <ChapterDropdown Chapter={"Advanced NLP with spaCy"} topicList={topics8}/>
                <ChapterDropdown Chapter={"Advanced Machine Learning with scikit-learn and TensorFlow"} topicList={topics9}/>
            </Accordion>
        </div>
    )
}

export default Advanced
