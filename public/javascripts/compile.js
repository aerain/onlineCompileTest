var codeText = document.querySelector('#code');
var compileButton = document.querySelector('#compile')
var result = document.querySelector('#result');

async function testIt() {
    console.log(codeText.value, "전송하자");
    try {
        let compileResponse = 
        await fetch('http://localhost:3000/compile', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify({
                'sourceCode': codeText.value,
            })
        });
    
        let compile = await compileResponse.json();
        result.innerText = (compile.error === "") ? compile.execute : compile.error;
    } catch(err) {
        console.log(err);
    }
    
}

compileButton.addEventListener('click', testIt)
