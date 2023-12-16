function checkClassOnline() {
  var flag1 = false;
  var flag2 = false;
  var flag3 = false;
  const courseID1 = '20233PE6026001';
  const courseID2 = '20233PE6026002';
  const courseID3 = '20233PE6026003';
  kPortal.OpenDialog('/ajax/register/actionclassbymodules?fid=6441', 99, 70, 0, 1);

  setTimeout(() => {
    const tableRows = document.querySelectorAll('tbody tr');
    let classOnlineSpan;

    for (const row of tableRows) {
      const courseIDColumn = row.querySelector('td:nth-child(2)');

      if (courseIDColumn && courseIDColumn.textContent.trim() === courseID1) {
        classOnlineSpan = row.querySelector('#classonline');

        if (classOnlineSpan) {
          if (parseInt(classOnlineSpan.textContent, 10) < 65) {
            window.confirm = function () {
              return true;
            };
            AddNewRegister('199792');

            flag1 = true;
            break;
          }
        }
        console.log('classonline1 >= 65');
      }

      if (courseIDColumn && courseIDColumn.textContent.trim() === courseID2) {
        classOnlineSpan = row.querySelector('#classonline');

        if (classOnlineSpan) {
          if (parseInt(classOnlineSpan.textContent, 10) < 65) {
            window.confirm = function () {
              return true;
            };
            AddNewRegister('199793');

            flag2 = true;
            break;
          }
        }
        console.log('classonline2 >= 65');
      }

      if (courseIDColumn && courseIDColumn.textContent.trim() === courseID3) {
        classOnlineSpan = row.querySelector('#classonline');

        if (classOnlineSpan) {
          if (parseInt(classOnlineSpan.textContent, 10) < 65) {
            window.confirm = function () {
              return true;
            };
            AddNewRegister('199794');

            flag3 = true;
            break;
          }
        }
        console.log('classonline3 >= 65');
      }
    }

    if (flag1 || flag2 || flag3) {
      console.log('Found classonline < 65, registered');
    } else {
      console.log('classonline >= 65');
      kPortal.CloseBox();
      setTimeout(checkClassOnline, 1000);
    }
  }, 2000);
}
checkClassOnline()