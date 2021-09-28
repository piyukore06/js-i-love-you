import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div className="centered heading">
      <Heading fontSize="h4">It matters where the variable is declared</Heading>
      <CodePane language="js" theme={lightTheme}>
                {`
                  const A = "A";
                  let F;
                  
                  function doStuff(B) {
                    console.log(B);
                    const C = "C";
                    let H = "H";
                    if (1 + 1 === 2) {
                      const D = "D";
                      H = "something else";
                    }
                    console.log(D);
                    console.log(H);
                    F = "F";
                  }
                  
                  let E = 0;
                  while (E < 3) {
                    E++;
                    console.log(A);
                    const G = "G";
                  }
                  console.log(E);
                  console.log(G);
                  
                  doStuff("B");
                  console.log(B);
                  console.log(C);
                  console.log(F);
                `}
            </CodePane>
    </div>
  );
}
export default SubHeading;
