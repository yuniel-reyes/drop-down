# Drop-down Menus

**TODO**

- You can allow the menu to show up either on click or on hover.
- You should hard-code the menu items into your HTML but
  hide/reveal them using JavaScript. You can do this either by
  adding a class (visible or something) or by manually setting the
  style in JS.
- Make sure the code is reusable! `You should be able to create multiple drop-downs on a page without repeating the JavaScript code.`
- If you bundle your code into a module you can publish it to npm
  and then install and use it anytime you like! Nothing like publishing your own
  modules to make you feel like a pro 😎.

_Discoveries_

- When using the opacity property on an element, all children of that element will be affected by the property. To avoid that, use the RGBA model and the property background/background-color.

  - If user hover over the option: (1)
    - option gets blue
    - drop down is shown.
  - If then hover over the next option: (2)
    - remove blue from previus option
    - remove drop down from previus option
    - repeat (1)
  - If user hover over drop-down-option\*:
    - option remain blue
    - drop-down-option\* remains
  - If user leave drop-down-option\*:
    - remove blue from option
    - remove drop-down-option\*
