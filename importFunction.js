import { logUserName, logTextParameter } from './functions.js'
import chai from 'chai'

logUserName('Kheladze', 'Lisa') // Kheladze Lisa
console.log(logTextParameter('Automate')) // 8

chai.assert.include('my string', 'my', 'There is no such string')
