---
tags: ['CSS', 'Layout']
---

Tags : [[CSS, Layout]]

# 🎨 CSS Flexbox

CSS Flexbox (Flexible Box Layout) is a one-dimensional layout method for arranging items in rows or columns. It's perfect for creating responsive layouts and aligning content.

## 🏗️ Flex Container Properties

### display: flex
Creates a flex container:

```css
.container {
  display: flex;
}
```

### flex-direction
Controls the main axis direction:

```css
.container {
  flex-direction: row; /* default */
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}
```

### justify-content
Aligns items along the main axis:

```css
.container {
  justify-content: flex-start; /* default */
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

### align-items
Aligns items along the cross axis:

```css
.container {
  align-items: stretch; /* default */
  align-items: center;
  align-items: flex-start;
  align-items: flex-end;
}
```

## 📦 Flex Item Properties

### flex-grow
Defines how much an item should grow:

```css
.item {
  flex-grow: 1; /* Takes available space */
}
```

### flex-shrink
Defines how much an item should shrink:

```css
.item {
  flex-shrink: 0; /* Won't shrink */
}
```

### align-self
Overrides the container's align-items for individual items:

```css
.item {
  align-self: center;
}
```

## 🎯 Common Use Cases

- Navigation bars
- Card layouts
- Centering content
- Equal height columns
- Responsive design

Flexbox is essential for modern web layouts!