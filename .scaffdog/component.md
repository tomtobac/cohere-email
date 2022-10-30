---
name: 'component'
root: './src'
output: './components'
questions:
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}";
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.css`

```css
.{{ inputs.name | pascal }} {
  font-weight: bold;
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import './{{ inputs.name | pascal }}.css';

export type Props = {};

export const {{ inputs.name | pascal }}: React.FC<Props> = () => {
  return <h1>Hi {{ inputs.name | pascal }}</h1>;
};
```
