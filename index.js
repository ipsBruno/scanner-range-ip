var request = require('request');
var fs = require("fs");
var range = fs.readFileSync("rages.txt").toString().split("\n");
var ipsToVerify = getIpRangeSize();
var maxThread = 100
var currentThreads = 0
var currentIpVerify = 0

const _cliProgress = require('cli-progress');
const bar1 = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic);
bar1.start(ipsToVerify, 0);


setInterval(function() {
	if (currentThreads < maxThread) {
		let ip = getIpRangeById(currentIpVerify);
		currentIpVerify++;
		bar1.update(currentIpVerify);
		currentThreads++;
		verifyIp(ip)
	}
}, 1);




function verifyIp(ip) {
	request({

			method: 'HEAD',
			uri: ip,
			timeout: 3000
		},
		function(error, response, body) {
			currentThreads--;
			if (!error) {				
				return fs.appendFileSync("logs.txt", ip+"\r\n");
			}
		})

}




function getIpRangeSize(id) {
	let tempId = 0;
	for (var i in range) {
		let rangeIps = range[i].split(",");
		tempId += ip2int(rangeIps[1]) - ip2int(rangeIps[0])
	}
	return tempId
}

function ip2int(ip) {
	return ip.split('.').reduce(function(ipInt, octet) {
		return (ipInt << 8) + parseInt(octet, 10)
	}, 0) >>> 0;
}

function getIpRangeById(id) {
	let tempId = 0;
	for (var i in range) {
		let rangeIps = range[i].split(",");
		let inicio = rangeIps[0].split(".");
		let fim = rangeIps[1].split(".");

		if (id > (tempId + ip2int(rangeIps[1]) - ip2int(rangeIps[0]))) {
			tempId += ip2int(rangeIps[1]) - ip2int(rangeIps[0]);
			continue;
		}
		for (var a = inicio[0]; a <= fim[0]; a++) {
			for (var b = inicio[1]; b <= fim[1]; b++) {
				for (var c = inicio[2]; c <= fim[2]; c++) {
					if (id > (tempId + (fim[3] - inicio[3]))) {
						tempId += (fim[3] - inicio[3] + 1);
						continue;
					}
					for (var d = inicio[3]; d <= fim[3]; d++) {
						if (tempId == id) {
							return ("http://" + a + "." + b + "." + c + "." + d);
						}
						tempId++;
					}
				}
			}
		}
	}
	return false;
}
