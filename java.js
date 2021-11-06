/*const love= document.getElementsByClassName('love')

love.forEach(love => {
love.addEventListener('mousedown', (e)=>{
love.style.background= 'red';
love.style.color='blue';
love.querySelector('.text').innerHTML='Sent to Gala'});
 */
const love_btns = document.querySelectorAll('.love');

love_btns.forEach(love_btn => {
	love_btn.addEventListener('mousedown', (e) => {
		love_btn.style.background = '#fff';
		love_btn.style.color = '#E7273F';
		love_btn.querySelector('.text').innerHTML = '<span class="grey-text">Sent to:</span> GALA';
y
		createHearts(love_btn.querySelector('.icon-container'));
	});

	love_btn.addEventListener('mouseup', (e) => {
		love_btn.style.background = '#E7273F';
		love_btn.style.color = '#fff';
		love_btn.querySelector('.text').innerHTML = 'Sending you back! <i class="fas fa-redo"></i>';
	});
})


