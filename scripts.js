
var a = 10
var h = 6


function getTriangleArea(a, h) {
	//sprawdź czy przekazane parametry a oraz h mają wartość większą od zera. Jeśli któryś z parametrów nie spełni tego warunku (będzie mniejszy bądź równy zero), zwróć wartość 'Nieprawidłowe dane'.
	if ( (a > 0) && (h > 0) ) {
		console.log('Obie wartości są dodatnie')
		//Jeśli oba parametry są dodatnie, to poniżej instrukcji warunkowej dodaj polecenie return, aby funkcja zwracała wynik działania a*h/2.
		return a*h/2
	} 
	
	else { ( (a <= 0) || (h <= 0) )
		console.log('Nieprawidłowe dane')
	}
}

//Poniżej deklaracji funkcji wywołaj następujące polecanie: console.log( getTriangleArea(10,6) ). Jeśli wszystko zrobiłeś prawidłowo, w konsoli powinien pojawić się wynik działania.
console.log( getTriangleArea(10,6) )


//Zrób trzy zmienne, które będą posiadały pole trójkąta, za każdym razem przekazując różne liczby w parametrze. Podpowiedź: var triangle1Area = getTriangleArea(10, 15);







