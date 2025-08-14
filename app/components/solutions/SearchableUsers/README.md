## Notes for this exercise

# 🧠 Accessibility + Tailwind Quick Cheat Sheet

## 1. Inputs & Selects

- **Label:** Always use `<label htmlFor="id">` (or `sr-only` if hidden)
- **Focus:** `focus:outline-none focus:ring-2 focus:ring-blue-500`
- **Errors:**
  ```html
  <p id="error">Message</p>
  <input aria-describedby="error" />
  ```

## 2. Checkboxes

-**label** Wrap input in a <label> OR use htmlFor to increase click target:

- **Focus:** `focus:outline-none focus:ring-2 focus:ring-blue-500`

```html
<fieldset class="border p-4 rounded-md">
  <legend class="font-medium mb-2">Select your hobbies</legend>

  <div class="flex flex-col gap-2">
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        name="hobbies"
        value="reading"
        class="w-4 h-4 text-green-500 focus:ring-2 focus:ring-green-500"
      />
      Reading
    </label>

    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        name="hobbies"
        value="coding"
        class="w-4 h-4 text-green-500 focus:ring-2 focus:ring-green-500"
      />
      Coding
    </label>

    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        name="hobbies"
        value="sports"
        class="w-4 h-4 text-green-500 focus:ring-2 focus:ring-green-500"
      />
      Sports
    </label>
  </div>
</fieldset>
```

## 3. Radio Buttons

Group with <fieldset> + <legend> for context

Use same name for all radios in the group

Make each label clickable

```html
<fieldset class="border p-4 rounded-md">
  <legend class="font-medium mb-2">Choose your plan</legend>

  <div class="flex flex-col gap-2">
    <label class="flex items-center gap-2">
      <input
        type="radio"
        name="plan"
        value="basic"
        class="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
      />
      Basic
    </label>

    <label class="flex items-center gap-2">
      <input
        type="radio"
        name="plan"
        value="pro"
        class="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
      />
      Pro
    </label>
  </div>
</fieldset>
```

## What makes this accessible

- <fieldset> + <legend> provides context for screen readers.

- Labels wrap inputs so the text is clickable.

- Tailwind focus rings make it clear which checkbox is selected.

- Each checkbox has a unique value and shares the same name if grouped logically.

## Golden Rules

- ✅ Every control has a label (visible or sr-only)
- ✅ Placeholder ≠ label
- ✅ Focus ring is visible
- ✅ Errors linked with aria-describedby
- ✅ Use native HTML elements whenever possible
