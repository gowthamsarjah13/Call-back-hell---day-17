let body = document.querySelector("body");

setTimeout(() => {
  let hh = document.createElement("h1");
  hh.innerText = 10;
  body.append(hh);
  setTimeout(() => {
    hh.innerText = 09;
    body.append(hh);

    setTimeout(() => {
      hh.innerText = 08;
      body.append(hh);

      setTimeout(() => {
        hh.innerText = 07;
        body.append(hh);

        setTimeout(() => {
          hh.innerText = 06;
          body.append(hh);

          setTimeout(() => {
            hh.innerText = 05;
            body.append(hh);

            setTimeout(() => {
              hh.innerText = 04;
              body.append(hh);

              setTimeout(() => {
                hh.innerText = 03;
                body.append(hh);

                setTimeout(() => {
                  hh.innerText = 02;
                  body.append(hh);

                  setTimeout(() => {
                    hh.innerText = 01;
                    body.append(hh);

                    setTimeout(() => {
                      hh.innerText = "Happy Independence Day";
                      body.append(hh);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
