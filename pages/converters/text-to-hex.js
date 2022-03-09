import Head from 'next/head'
import { saveAs } from 'file-saver'
import { useRef, useState } from "react"
import Nav from '../../components/Nav'
import Footer from "../../components/Footer"
export default function TextToHex() {
	const [data, setData] = useState("")
	const [result, setResult] = useState("")
	const resultRef = useRef(null);
	const copyNoti = useRef(null);

	function copyToClipbloard() {
		resultRef.current.select();
		resultRef.current.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(resultRef.current.value);
		copyNoti.current.innerText = "copied!";
		setTimeout(() => {
		  copyNoti.current.innerText = "copy to clipboard";
		}, 1500)
	}
	function handleData(e) {
		setData(e.target.value);
	}
	function handleResult(e) {
		setResult(e.target.value);
	}
	function submitResult() {
		setResult("");
		if(data.length > 0) {
			var str = '';
		    for(var i = 0; i < data.length; i++) {
		        str += data[i].charCodeAt(0).toString(16);
		    }
		    setResult(str);
		}
	}
	function Download() {
		if(result.length > 0) {
			var blob = new Blob(
	        	[result],
	        	{
	        		type: "text/plain;charset=utf-8"
	        	}
	        );
			saveAs(blob,`Text to hex by veritoolz.txt`);
		}
	}

	return(
       <>
			<Head>
				<title>Convert text to Hex | veritoolz</title>
				<meta id="description" name="description" content="Best free online tool to convert text or string to hexadecimal (hex) and download the result as a text file. This tool is made to make developer's life easier." />
				<meta id="og-title" property="og:title" content="Convert text to Hex | veritoolz" />
				<meta property="og:description" content="Best free online tool to convert text or string to hexadecimal (hex) and download the result as a text file. This tool is made to make developer's life easier."/>
			    <meta name="twitter:title" content="Convert text to Hex | veritoolz"/>
			    <meta name="twitter:description" content="Best free online tool to convert text or string to hexadecimal (hex) and download the result as a text file. This tool is made to make developer's life easier."/>
			    <meta name="robots" content="all"/>
			    <meta name="keywords" content="text to hex, text to hexadecimal, convert string to hex,
			    string to hex"/>
			    <link rel="canonical" href="https://veritoolz.com/converters/text-to-hex" />
			</Head>
			<Nav/>
			<article className="content">
				<h1>Convert text to Hex</h1>
				<p>
					Best free online tool to convert text or string to hexadecimal (hex) and download the result as a text file. This tool is made to make developer's life easier.
				</p>
			</article>
			<article className="content">
				   			<h2>How to use</h2>
   			<ul className="how-to">
					<li>Put your text in the text area.</li>
					<li>Click on the submit button.</li>
					<li><span className="span-optional">optional:</span> click on the download button to download your result as a text file.</li>
				</ul>
			</article>
			<div className="wrapper-parent">
				<div className="two-wrapper">
					<div className="input-container">
						<span className="input-name">text</span>
						<textarea onChange={handleData} defaultValue={data} spellCheck="false"></textarea>
					</div>
					<div className="input-container">
						<span className="input-name">result</span>
						<textarea ref={resultRef} onChange={handleResult} defaultValue={result} spellCheck="false"></textarea>
						<div className="clipboard-svg-box">
							<div className="clipboard-svg-bg">
								<svg onClick={copyToClipbloard} version="1.1" className="clipboard-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" xmlSpace="preserve" width="22px" height="22px">
				    	        <g>
				    	            <polygon points="295.343,31.863 262.549,31.863 262.549,0 192.451,0 192.451,31.863 159.657,31.863 159.657,86.961 295.343,86.961
				    					" />
				    	            <polygon points="325.343,31.863 325.343,116.961 129.657,116.961 129.657,31.863 74.559,31.863 74.559,455 380.441,455
				    				380.441,31.863"/>
				    	        </g>
				    	    </svg>
							</div>
		    	    <div ref={copyNoti} className="copy-notification">copy to clipbloard</div>
						</div>
					</div>
				</div>
				<div className="submit-set-box">
					<button className="btn-submit" onClick={submitResult}>Submit</button>
					<button className="btn-submit" onClick={Download}>Download</button>
				</div>
			</div>
			<Footer/>
       </>

   );
}
