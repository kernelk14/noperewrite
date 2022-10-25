const np = {
    pos: 0,
    name: "",
    value: 0,
}

var stack = []
var intstack = []
var ip = 0

// var program = '34 35 + write'.split(' ')
function main() {
    var program = document.getElementById("codebox").value.split(' ')
    evaluate(program)
}
function evaluate(program) {
    for (ip = 0; ip < program.length;) {
        var code = program[ip]
        // console.log(program[ip])
        if (code == "write") {
            // console.log(intstack)
            np["name"] = code
            np["pos"] = ip
            document.write("<code>" + `The coords are: {` + "<br>" + `    name: ${np.name},` + "<br>" + `    position: ${np.pos}`+ "<br>" + `}` + "</code>")
            document.write("<br>")
            document.write(`\n[DEBUG] STDOUT: ${intstack.pop()}`)
            document.write("<br>")
        }
        else if (code == '+') {
            var a = intstack.pop()
            var b = intstack.pop()
            intstack.push(a + b)
            // console.log(intstack)
            np["name"] = "Plus"
            np["pos"] = ip
            np["value"] = a + b
            document.write(`The coords are: {\n\tname: ${np.name},\n\tposition: ${np.pos},\n\tvalue: ${np.value}\n}`)
            document.write("<br>")
        }
        else {
            intstack.push(parseInt(code))
            // console.log(intstack)
            np["name"] = "Push Int"
            np["pos"] = ip
            np["value"] = code
            document.write(`The coords are: {\n\tname: ${np.name},\n\tposition: ${np.pos},\n\tvalue: ${np.value}\n}`)
            document.write("<br>")
    
        }
        document.write('--------------------------------------')
        document.write("<br>")
        ip += 1
    }
}