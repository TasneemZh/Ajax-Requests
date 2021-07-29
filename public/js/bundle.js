(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// eslint-disable-next-line no-var
var xhr;

function verifyRequest() {
  // Without the promise, the app would continue alerting until the request is ready and done
  return new Promise((resolve, reject) => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      document.getElementById('container').innerHTML = xhr.responseText;
      resolve(xhr.responseText);
    } else {
      reject(new Error('Error! The request couldn\'t be done'));
    }
  });
}

function makeRequest() {
  try {
    xhr = new XMLHttpRequest();

    if (!xhr) {
      throw new Error('Error! Couldn\'t create an XML-HTTP-Request');
    }
    xhr.onreadystatechange = verifyRequest;
    xhr.open('GET', 'result.html', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
  } catch (error) {
    alert(`Well, errors can happen: ${error.description}`);
  }
}

document.getElementById('reqs_btn_file').addEventListener('click', makeRequest);

},{}],2:[function(require,module,exports){
// eslint-disable-next-line no-var
var xhr;

function verifyRequest() {
// Without the promise, the app would continue alerting until the request is ready and done
  return new Promise((resolve, reject) => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.getElementById('container').innerHTML = xhr.responseText;
        resolve(xhr.responseText);
      } else {
        reject(new Error('Error! Somthing went wrong in the request'));
      }
    } else {
      reject(new Error('Error! The request couldn\'t be done'));
    }
  });
}

function makeRequest() {
  try {
    xhr = new XMLHttpRequest();

    if (!xhr) {
      throw new Error('Error! Couldn\'t create an XML-HTTP-Request');
    }
    xhr.onreadystatechange = verifyRequest;
    xhr.open('GET', 'https://tasneemzh-newspaper.herokuapp.com/', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
  } catch (error) {
    alert(`Well, errors can happen: ${error.description}`);
  }
}

document.getElementById('reqs_btn_url').addEventListener('click', makeRequest);

},{}]},{},[1,2]);
