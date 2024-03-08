//Опишите кнопку отправки сообщений в чат с помощью конструктора класса
class Button {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.type = 'button'
    this.color = 'green'
  }
  //создайте метод кнопки (onClick, выводящий в консоль информацию о нашей кнопке- выводим все свойства
  onClick() {
    console.log(this.props)
  }
}
//создайте экземпляр класса button и передайте аргументы в наш конструктор класса
function testButton() {
  const button = new Button(80, 40)

  // проверьте свойства этого экземпляра класса соответствуют заданным
  if (
    button.width === 80 &&
    button.height === 40 &&
    button.type === 'button' &&
    button.color === 'green'
  ) {
    console.log('Button properties match the expected values.')
  } else {
    console.log('Button properties do not match the expected values.')
  }
}

// вызваем функцию
testButton()
