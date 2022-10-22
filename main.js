const np = {
    pos: 0,
    name: "",
    value: 0,
}

var stack = []
var intstack = []
var ip = 0

var program = '10 20 + write'.split(' ')

for (ip = 0; ip < program.length;) {
    var code = program[ip]
    // console.log(program[ip])
    if (code == "write") {
        // console.log(intstack)
        np["name"] = code
        np["pos"] = ip
        console.log(`The coords are: {\n\tname: ${np.name},\n\tposition: ${np.pos}\n}`)
        console.log(`\n[DEBUG] STDOUT: ${intstack.pop()}`)
    }
    else if (code == '+') {
        var a = intstack.pop()
        var b = intstack.pop()
        intstack.push(a + b)
        // console.log(intstack)
        np["name"] = "Plus"
        np["pos"] = ip
        np["value"] = a + b
        console.log(`The coords are: {\n\tname: ${np.name},\n\tposition: ${np.pos},\n\tvalue: ${np.value}\n}`)
    }
    else {
        intstack.push(parseInt(code))
        // console.log(intstack)
        np["name"] = "Push Int"
        np["pos"] = ip
        np["value"] = code
        console.log(`The coords are: {\n\tname: ${np.name},\n\tposition: ${np.pos},\n\tvalue: ${np.value}\n}`)

    }
    console.log('--------------------------------------')
    ip += 1
}