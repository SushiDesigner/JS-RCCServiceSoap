const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let controller = new AbortController();
 url = 'http://127.0.0.1:64989';
var convert = require('xml-js');
const sampleHeaders = {
  'Content-Type': 'text/xml;charset=UTF-8',
};



async function OpenJob(jobid,script,expiration){
    return new Promise(async (resolve, reject) => {
    // this is all boilerplate because soap sucks
var xml = {
    _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
    'SOAP-ENV:Envelope': {
      _attributes: {
        'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
        'xmlns:ns1': 'http://roblox.com/'
      },
      'SOAP-ENV:Body': {
        'ns1:OpenJobEx': {
          'ns1:job': {
            'ns1:id': { _text: 'StringTest11' },
            'ns1:expirationInSeconds': { _text: '10' },
            'ns1:category': { _text: '0' },
            'ns1:cores': { _text: '1' }
          },
          'ns1:script': {
            'ns1:name': { _text: 'StringTest11-Script' },
            'ns1:script': {
              _text: 'print("Recieved job with ID " .. game.JobId)\r\n'
            },
            'ns1:arguments': {}
          }
        }
      }
    }
  }
xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:OpenJobEx']['ns1:job']['ns1:id']._text = jobid
xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:OpenJobEx']['ns1:job']['ns1:expirationInSeconds']._text = expiration
if (!expiration) {
    xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:OpenJobEx']['ns1:job']['ns1:expirationInSeconds']._text = "10"
}
xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:OpenJobEx']['ns1:script']['ns1:script']._text = script
const body = convert.js2xml(xml, { compact: true, spaces: 4 })
    
        try {
          const result = await fetch(url, { method: 'POST', body })
          const data = await result.text()
          const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
          return resolve(
            convertedData
          )
        } catch (error) {
          return reject(error)
        }
    })
}



async function GetAllJobs() {
    return new Promise(async (resolve, reject) => {
        const xmlData = (xml = {
          _declaration: {
            _attributes: { version: '1.0', encoding: 'UTF - 8' },
          },
          'SOAP-ENV:Envelope': {
            _attributes: {
              'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
              'xmlns:SOAP-ENC': 'http://schemas.xmlsoap.org/soap/encoding/',
              'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
              'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
              'xmlns:ns2': 'http://roblox.com/RCCServiceSoap',
              'xmlns:ns1': 'http://roblox.com/',
              'xmlns:ns3': 'http://roblox.com/RCCServiceSoap12',
            },
            'SOAP-ENV:Body': { 'ns1:GetAllJobsEx': {} },
          },
        })
    
        const body = convert.js2xml(xmlData, { compact: true, spaces: 4 })
    
        try {
          const result = await fetch(url, { method: 'POST', body })
          const data = await result.text()
          const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
          return resolve(
            convertedData['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetAllJobsExResponse']['ns1:GetAllJobsExResult']
          )
        } catch (error) {
          return reject(error)
        }
      })
}

async function Execute(jobid,script) {
    return new Promise(async (resolve, reject) => {
    var xml = {
        _declaration: { _attributes: { version: '1.0', encoding: 'UTF - 8' } },
        'SOAP-ENV:Envelope': {
          _attributes: {
            'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
            'xmlns:SOAP-ENC': 'http://schemas.xmlsoap.org/soap/encoding/',
            'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
            'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
            'xmlns:ns2': 'http://roblox.com/RCCServiceSoap',
            'xmlns:ns1': 'http://roblox.com/',
            'xmlns:ns3': 'http://roblox.com/RCCServiceSoap12'
          },
          'SOAP-ENV:Body': {
            'ns1:ExecuteEx': {
              'ns1:jobID': { _text: 'Test' },
              'ns1:script': {
                'ns1:name': { _text: 'Script' },
                'ns1:script': { _text: 'print("no")' },
                'ns1:arguments': { _text: '' }
              }
            }
          }
        }
      }
xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:ExecuteEx']['ns1:jobID']._text = jobid
xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:ExecuteEx']['ns1:script']['ns1:script']._text = script
      const body = convert.js2xml(xml, { compact: true, spaces: 4 })
    
        try {
          const result = await fetch(url, { method: 'POST', body })
          const data = await result.text()
          const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
          return resolve(
            convertedData
          )
        } catch (error) {
          return reject(error)
        }
      })

}
async function CloseJob(jobid) {
    return new Promise(async (resolve, reject) => {
        var xml = {
            _declaration: { _attributes: { version: '1.0', encoding: 'UTF - 8' } },
            'SOAP-ENV:Envelope': {
              _attributes: {
                'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
                'xmlns:SOAP-ENC': 'http://schemas.xmlsoap.org/soap/encoding/',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
                'xmlns:ns2': 'http://roblox.com/RCCServiceSoap',
                'xmlns:ns1': 'http://roblox.com/',
                'xmlns:ns3': 'http://roblox.com/RCCServiceSoap12'
              },
              'SOAP-ENV:Body': {
                'ns1:CloseJob': {
                  'ns1:jobID': { _text: 'Test' }
                }
              }
            }
          }
    xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:CloseJob']['ns1:jobID']._text = jobid
          const body = convert.js2xml(xml, { compact: true, spaces: 4 })
        
            try {
              const result = await fetch(url, { method: 'POST', body })
              const data = await result.text()
              const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
              return resolve(
                convertedData
              )
            } catch (error) {
              return reject(error)
            }
          })
}


async function RenewLease(jobid,expiration) {
    return new Promise(async (resolve, reject) => {
        var xml = {
            _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
            'SOAP-ENV:Envelope': {
              _attributes: {
                'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
                'xmlns:ns1': 'http://roblox.com/',
                'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
              },
              'SOAP-ENV:Body': {
                'ns1:RenewLease': {
                  'ns1:jobID': {
                    _attributes: { 'xsi:type': 'ns1:Job' },
                    'ns1:id': { _text: 'StringTest11' },
                    'ns1:expirationInSeconds': { _text: '10' },
                    'ns1:category': { _text: '0' },
                    'ns1:cores': { _text: '1' }
                  },
                  'ns1:expirationInSeconds': { _text: '100' }
                }
              }
            }
          }
    xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:RenewLease']['ns1:jobID']['ns1:id']._text = jobid
    xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:RenewLease']['ns1:expirationInSeconds']._text = expiration
          const body = convert.js2xml(xml, { compact: true, spaces: 4 })
        
            try {
              const result = await fetch(url, { method: 'POST', body })
              const data = await result.text()
              const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
              return resolve(
                convertedData
              )
            } catch (error) {
              return reject(error)
            }
          })
}

async function GetExpiration(jobid){
    return new Promise(async (resolve, reject) => {
        var xml = {
            _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
            'SOAP-ENV:Envelope': {
              _attributes: {
                'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
                'xmlns:ns1': 'http://roblox.com/'
              },
              'SOAP-ENV:Body': { 'ns1:GetExpiration': { 'ns1:jobID': { _text: 'Test' } } }
            }
          }
    xml['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:GetExpiration']['ns1:jobID']._text = jobid
          const body = convert.js2xml(xml, { compact: true, spaces: 4 })
        
            try {
              const result = await fetch(url, { method: 'POST', body })
              const data = await result.text()
              const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
              return resolve(
                convertedData
              )
            } catch (error) {
              return reject(error)
            }
    })
}
//var gameservertxt = fs.readFileSync('actualgameserver.txt','utf-8')
//gameservertxt = gameservertxt.replace('function start(placeId, port, url)','function start(1111, port)')

async function CloseExpiredJobs(){
    return new Promise(async (resolve, reject) => {
        var xml = xml = {
            _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
            'SOAP-ENV:Envelope': {
              _attributes: {
                'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
                'xmlns:ns1': 'http://roblox.com/'
              },
              'SOAP-ENV:Body': { 'ns1:CloseExpiredJobs': {} }
            }
          }
        
          const body = convert.js2xml(xml, { compact: true, spaces: 4 })
        
            try {
              const result = await fetch(url, { method: 'POST', body })
              const data = await result.text()
              const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
              return resolve(
                convertedData
              )
            } catch (error) {
              return reject(error)
            }
    })
}

async function CloseAllJobs(){
    return new Promise(async (resolve, reject) => {
        var xml = xml = {
            _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
            'SOAP-ENV:Envelope': {
              _attributes: {
                'xmlns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
                'xmlns:ns1': 'http://roblox.com/'
              },
              'SOAP-ENV:Body': { 'ns1:CloseAllJobs': {} }
            }
          }
        
          const body = convert.js2xml(xml, { compact: true, spaces: 4 })
        
            try {
              const result = await fetch(url, { method: 'POST', body })
              const data = await result.text()
              const convertedData = convert.xml2js(data, { compact: true, spaces: 4 })
              return resolve(
                convertedData
              )
            } catch (error) {
              return reject(error)
            }
    })
}


module.exports = {OpenJob, GetAllJobs,Execute,CloseJob,RenewLease,GetExpiration,CloseExpiredJobs,CloseAllJobs}









