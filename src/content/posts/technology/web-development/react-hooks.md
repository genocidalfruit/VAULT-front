---
tags: ['React', 'JavaScript']
---

Tags : [[React, JavaScript]]

# ⚛️ React Hooks

React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have revolutionized how we write React components.

## 🎯 What are Hooks?

Hooks are JavaScript functions that:
- Start with the word "use"
- Can only be called at the top level of React functions
- Allow you to "hook into" React features

## 📋 Most Common Hooks

### useState
Manages local state in functional components:

```javascript
const [count, setCount] = useState(0);
```

### useEffect
Handles side effects like API calls, subscriptions, or DOM manipulation:

```javascript
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

### useContext
Consumes context values without nesting:

```javascript
const theme = useContext(ThemeContext);
```

## 🔧 Custom Hooks

You can create your own hooks to share stateful logic between components:

```javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return { count, increment, decrement };
}
```

## 📚 Rules of Hooks

1. Only call hooks at the top level
2. Only call hooks from React functions
3. Use the ESLint plugin to enforce these rules

Hooks make React code more reusable and easier to test!