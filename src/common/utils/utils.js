import { httpService } from '@/common/http/index.js';
const utils = {
	getImgUrl:function(imgs){
		return imgs.split(',')[0];
	},
	urlTransform(jsonObj) {
		var urlStr = '';
		var arr = [];
		for(var key in jsonObj) {
			arr.push(key + '=' + jsonObj[key]);
		}
		if(arr.length > 0) {
			for(var i = 0; i < arr.length; i++) {
				if(i == 0) {
					urlStr += '?' + arr[i];
				} else {
					urlStr += '&' + arr[i];
				}
			}
		}
		return urlStr;
	},
	//导出
	exportUtil(api, obj) {
		let _accessToken = localStorage.getItem('code') ? localStorage.getItem('code') : null;
		obj.accessToken = _accessToken;
		window.location = httpService + api + this.urlTransform(obj);
	},
	idTostringUtil(arr) {
		var str = "";
		arr.forEach(function(item, idx) {
			if(idx == 0) {
				str += item.toString();
			} else {
				str += ',' + item.toString();
			}
		})
		return str;
	},
	//根据时间间隔天数，获取具体日期区间
	getStartAndEndDate(days) {
		var now = new Date();
		var end = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + ' 23:59:59';
		var nowAfterDays = now.setDate(now.getDate() - days);
		nowAfterDays = new Date(nowAfterDays);
		var start = nowAfterDays.getFullYear() + "-" + (nowAfterDays.getMonth() + 1) + "-" + nowAfterDays.getDate() + ' 00:00:00';
		return {
			beginTime: start,
			endTime: end
		};
	},
	
	//返回昨天的开始时间和结束时间
	getYestodayStartAndEndDate() {
		var now = new Date();
		var nowAfterDays = now.setDate(now.getDate() - 1);
		nowAfterDays = new Date(nowAfterDays);
		var end = nowAfterDays.getFullYear() + "-" + (nowAfterDays.getMonth() + 1) + "-" + nowAfterDays.getDate() + ' 23:59:59';
		var start = nowAfterDays.getFullYear() + "-" + (nowAfterDays.getMonth() + 1) + "-" + nowAfterDays.getDate() + ' 00:00:00';
		return {
			beginTime: start,
			endTime: end
		};
	},
	//返回当天的开始时间和结束时间
	getTodayStartAndEndDate(days) {
		var now = new Date();
		var start = now.getFullYear() + "-" + ((now.getMonth() + 1) >= 10 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1)) + "-" + (now.getDate() >= 10 ? now.getDate() : '0' + now.getDate()) + ' 00:00:00';
		var end = now.getFullYear() + "-" + ((now.getMonth() + 1) >= 10 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1)) + "-" + (now.getDate() >= 10 ? now.getDate() : '0' + now.getDate()) + ' 23:59:59';
		//  console.log(now.getFullYear() + "-" + (now.getMonth() + 1))
		return {
			beginTime: start,
			endTime: end
		};
	},
	//返到视图顶部
	scrollTopUtil() {
		var scrollToptimer = setInterval(function() {
			var top = document.querySelector('.app-router').scrollTop
			var speed = top / 4;
			if(document.querySelector('.app-router').scrollTop != 0) {
				document.querySelector('.app-router').scrollTop -= speed;
			}

			if(top == 0) {
				clearInterval(scrollToptimer);
			}
		}, 30);
	},
	getLocalStorage: function(obj) {
		var _storage = localStorage.getItem('LocalStorage') ? JSON.parse(localStorage.getItem('LocalStorage')) : [];
		var _obj = null;
		_storage.forEach(function(item, idx) {
			if(item.pageName.indexOf(obj.name) > -1) {
				_obj = item;
			}
		});
		if(_obj == null) {
			if(typeof obj.fail == "function") {
				obj.fail();
			}
		} else {
			if(typeof obj.success == "function") {
				obj.success(_obj);
			}
		}
	},
	setLocalStorage: function(name, obj) {
		var _storage = localStorage.getItem('LocalStorage') ? JSON.parse(localStorage.getItem('LocalStorage')) : [];
		var _idx = null;
		var _obj = {
			pageName: name,
			data: obj
		};
		if(_storage.length > 0) {
			_storage.forEach(function(item, idx) {
				if(item.pageName.indexOf(name) > -1) {
					_idx = idx;
				}
			});
			//
			if(_idx != null) {
				_storage.splice(_idx, 1);
			}
		}
		_storage.push(_obj);
		localStorage.setItem('LocalStorage', JSON.stringify(_storage));
	},
	removeLocalStorage: function(name) {
		var _storage = localStorage.getItem('LocalStorage') ? JSON.parse(localStorage.getItem('LocalStorage')) : [];
		var _idx = null;
		if(_storage.length != 0) {
			_storage.forEach(function(item, idx) {
				if(item.pageName.indexOf(name) > -1) {
					_idx = idx;
				}
			});
			if(_idx != null) {
				_storage.splice(_idx, 1);
				localStorage.setItem('LocalStorage', JSON.stringify(_storage));
			}
		}
	},
	getDateTime: function(str) {
		var oDate = new Date(str),
			oYear = oDate.getFullYear(),
			oMonth = oDate.getMonth() + 1,
			oDay = oDate.getDate(),
			oHour = oDate.getHours(),
			oMin = oDate.getMinutes(),
			oSen = oDate.getSeconds(),
			oTime = oYear + '-' + this.getzf(oMonth) + '-' + this.getzf(oDay) + ' ' + this.getzf(oHour) + ':' + this.getzf(oMin) + ':' + this.getzf(oSen); //最后拼接时间
		return oTime;
	},
	getzf: function(num) {
		if(parseInt(num) < 10) {
			num = '0' + num;
		}
		return num;
	},
	addPolylinescircle(centerpoint, radius, num) {
		var r = 6371000.79; //地球半径
		var options = [];
		var numpoints = num;
		var phase = 2 * Math.PI / numpoints;
		//画图
		for(var i = 0; i < numpoints; i++) {
			/**
			 * 计算坐标点
			 */
			var dx = (radius * Math.cos(i * phase));
			var dy = (radius * Math.sin(i * phase)); //乘以1.6 椭圆比例
			/**
			 * 转换成经纬度
			 */
			var dlng = dx / (r * Math.cos(centerpoint.latitude * Math.PI / 180) * Math.PI / 180);
			var dlat = dy / (r * Math.PI / 180);
			var newlng = Number(centerpoint.longitude) + Number(dlng);
			var newlat = Number(centerpoint.latitude) + Number(dlat);
			options.push({
				lng: newlng.toFixed(8),
				lat: newlat.toFixed(8)
			});
		}
		return options;
	},
	timeTransform(timeNum){
		var mss = Math.abs(timeNum);
		var days = parseInt(mss / (60 *  24));
	    var hours = parseInt((mss % (60 * 24)) / 60);
	    var minutes = parseInt(mss % (60));
	    if(days > 0){
	    	return days + " d " + hours + " h " + minutes + " m ";
	    }else if(hours > 0){
	    	return  hours + " h " + minutes + " m ";
	    }else{
	    	return  minutes + " m ";
	    }
	}
}
export default utils;