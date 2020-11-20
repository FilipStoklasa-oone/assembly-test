import React, { useEffect, useState } from "react"

const App = () => {
	const [value, setValue] = useState(null)
	useEffect(()=>{
		var memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
		fetch("build/optimized.wasm")
		.then(response => response.arrayBuffer())
		.then(buffer => WebAssembly.instantiate(buffer, {
			env: {
				memory,
				abort: function() {}
			}
		}))
		.then(module => {
			const exports = module.instance.exports;
			//@ts-ignore
			setValue(exports.printN(10000e10))
		}).catch(err => {
		});
	},[])
	return(
		<h1>Hello, max value of i32 is {value}</h1>
	)}
export default App