export default function _DROP_DOWN() {
  // bar options state
  const onBarOption = (() => {
    const BAROPTIONS = {
      'option-1': false,
      'option-2': false,
      'option-3': false,
    };
    return { BAROPTIONS };
  })();

  const _nodeRef = (() => {
    const dropdownContainer = document.querySelectorAll('.nav-bar');
    return { dropdownContainer };
  })();

  // get drop option of each nav_bar
  const setBarStyle = (() => {
    _nodeRef.dropdownContainer.forEach((nav_bar) => {
      const rand = Math.trunc(Math.random(1) * 999);
      // nav_bar.classList.add(rand);
      nav_bar.style.position = 'fixed';
      if (nav_bar.firstElementChild) {
        nav_bar.firstElementChild.style.cssText =
          'display:flex; gap:10px; list-style: none; padding: 0; margin: 0; color: black; font-weight: 250; background: rgba(239, 228, 228, 1); width: 220px;';
        nav_bar.firstElementChild.classList.add(rand);
      }
    });
  })();

  const setDropDownStyle = (() => {
    _nodeRef.dropdownContainer.forEach((nav_bar) => {
      // const rand = Math.trunc(Math.random(1) * 999);
      Array.from(nav_bar.querySelectorAll('.bar')).forEach((drop_down) => {
        drop_down.style.position = 'relative';
        drop_down.style.cssText =
          ' visibility: hidden;display: flex; flex-direction: column; gap: 11px; border-radius: 5px; box-shadow: 0px 1px 1px 0 grey; width:183px; padding: 14px;';
        // drop_down.classList.add(rand);
      });
    });
  })();

  const styleBarOptions = (() => {
    _nodeRef.dropdownContainer.forEach((nav_bar) => {
      Array.from(nav_bar.getElementsByTagName('li')).forEach((bar_option) => {
        bar_option.style.cssText =
          'padding: 10px; cursor: pointer; position: relative;';
      });
    });
  })();

  const addHandlers = (() => {
    _nodeRef.dropdownContainer.forEach((nav_bar) => {
      const thisNumber = nav_bar.firstElementChild.className;
      Array.from(nav_bar.getElementsByTagName('li')).forEach((bar_option) => {
        bar_option.classList.add(thisNumber);
        bar_option.addEventListener('mouseenter', (e) => {
          bar_option.style.backgroundColor = 'rgb(42, 133, 247)';
          bar_option.style.color = 'white';
          showDrop(e, bar_option);
        });
        bar_option.addEventListener('mouseleave', (e) => {
          setTimeout(() => {
            if (!checkEventTriggered(e)) {
              bar_option.style.backgroundColor = '';
              bar_option.style.color = 'black';
              hideDrop(bar_option);
            }
          }, 5);
        });
      });
    });
  })();

  const checkEventTriggered = (e) => {
    for (const [key, value] of Object.entries(onBarOption.BAROPTIONS)) {
      if (key === e.target.className.slice(10).trim()) {
        return value;
      }
    }
  };

  const showDrop = (e, bar_option) => {
    _nodeRef.dropdownContainer.forEach((nav_bar) => {
      Array.from(nav_bar.querySelectorAll('.bar')).forEach((drop_down) => {
        drop_down.classList.add(nav_bar.firstElementChild.className);
        if (
          e.target.className.slice(10).trim() === drop_down.className.slice(4)
        ) {
          drop_down.style.visibility = 'visible';
          drop_down.style.position = 'absolute';
          drop_down.style.top = `${bar_option.offsetTop + 40}px`;
          drop_down.style.left = `${bar_option.offsetLeft}px`;
          drop_down.addEventListener('mouseenter', (e) => {
            onBarOption.BAROPTIONS[drop_down.className.slice(4)] = true;
          });
          drop_down.addEventListener('mouseleave', (e) => {
            drop_down.style.visibility = 'hidden';
            bar_option.style.backgroundColor = '';
            bar_option.style.color = 'black';
            onBarOption.BAROPTIONS[drop_down.className.slice(4)] = false;
          });
        }
      });
    });
  };

  const hideDrop = (bar_option) => {
    _nodeRef.dropdownContainer.forEach((nav_bar) => {
      Array.from(nav_bar.querySelectorAll('.bar')).forEach((drop_down) => {
        if (
          bar_option.className.slice(10).trim() === drop_down.className.slice(4)
        ) {
          drop_down.style.visibility = 'hidden';
        }
      });
    });
  };
}
