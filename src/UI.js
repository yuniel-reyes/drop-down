export default class DROP_DOWN {
  constructor(nav_bar1) {
    this.nav_bar1 = nav_bar1;
    // console.log(this.nav_bar1);
    this.dropDown = document.querySelectorAll('.bar1');

    this.setBarStyle();
    this.addHandlers();
    this.setDropDownStyle();
  }

  static onBarOption = {
    'option-1': false,
    'option-2': false,
    'option-3': false,
  };

  addHandlers() {
    for (const eachChild of Array.from(this.nav_bar1.children)) {
      this.styleBarOptions(eachChild);
      eachChild.addEventListener('mouseenter', (e) => {
        this.addBlue(eachChild);
        this.showDrop(e, eachChild);
      });
      eachChild.addEventListener('mouseleave', (e) => {
        // console.log(e);
        setTimeout(() => {
          if (!this.checkEventTriggered(e)) {
            // wait 15 ms and check true: hover over drop option or
            // false: not hover over drop option
            this.removeBlue(eachChild);
            this.hideDrop(eachChild);
          }
        }, 3);
      });
    }
  }

  checkEventTriggered(e) {
    for (const [key, value] of Object.entries(DROP_DOWN.onBarOption)) {
      if (key == e.target.className.slice(10).trim()) {
        return value;
      }
    }
  }

  removeBlue(eachChild) {
    eachChild.style.backgroundColor = '';
    eachChild.style.color = 'black';
  }

  addBlue(eachChild) {
    eachChild.style.backgroundColor = 'rgb(42, 133, 247)';
    eachChild.style.color = 'white';
  }

  styleBarOptions(eachChild) {
    eachChild.style.cssText =
      'padding: 10px; cursor: pointer; position: relative;';
  }

  setBarStyle() {
    this.nav_bar1.style.cssText =
      'display:flex; gap:10px; list-style: none; padding: 0; margin: 0; color: black; font-weight: 250; background: rgba(239, 228, 228, 1)';
    // this.content.style.cssText = 'background: rgba(239, 228, 228, 1);';
  }

  // down infos
  setDropDownStyle() {
    for (const eachChild of this.dropDown) {
      eachChild.style.position = 'relative';
      eachChild.style.cssText =
        ' visibility: hidden;display: flex; flex-direction: column; gap: 11px; border-radius: 5px; box-shadow: 0px 1px 1px 0 grey; width:183px; padding: 14px;';
    }
    // console.log(this.spans);
  }

  showDrop(event, eachChild) {
    // console.log(rect);
    this.dropDown.forEach((eachDown) => {
      if (
        event.target.className.slice(10).trim() === eachDown.className.slice(5)
      ) {
        eachDown.style.visibility = 'visible';
        eachDown.style.position = 'absolute';
        eachDown.style.top = `${eachChild.offsetTop + 40}px`;
        eachDown.style.left = `${eachChild.offsetLeft}px`;
        eachDown.addEventListener('mouseenter', (e) => {
          // if user hover over the drop option
          DROP_DOWN.onBarOption[eachDown.className.slice(5)] = true;
          //   console.log(DROP_DOWN.onBarOption);
        });
        eachDown.addEventListener('mouseleave', (e) => {
          eachDown.style.visibility = 'hidden';
          this.removeBlue(eachChild);
          DROP_DOWN.onBarOption[eachDown.className.slice(5)] = false;
        });
      }
    });
  }

  hideDrop(eachChild) {
    this.dropDown.forEach((eachDown) => {
      if (
        eachChild.className.slice(10).trim() === eachDown.className.slice(5)
      ) {
        eachDown.style.visibility = 'hidden';
      }
    });
  }
}
