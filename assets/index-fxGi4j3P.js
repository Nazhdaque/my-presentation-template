var Ur=Object.defineProperty;var Kr=(i,t,e)=>t in i?Ur(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var L=(i,t,e)=>(Kr(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const Zr=`<section class="swiper-slide __slide-title-slide"
				 data-hash="title-slide">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg w-img"></div>
			<div class="slide-bg-overlay trapeze"></div>

			<div class="scroll-down d-none md-d-grid">
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<span class="scroll-down__text">Scroll down</span>
			</div>

			<div class="unit fs-3xl width-x slide-ttl">
				<div class="unit__img -pipe"></div>
				<h1 class="unit__head">Шаблон-конструктор презентаций</h1>
				<div class="unit__body fs-md grid-full-width">
					<p>Альтернатива .pptx</p>
				</div>
			</div>

			<div class="grid-x __title-slide-info">
				<section class="unit">
					<div class="unit__img img-box icon-bg">
						<svg class="o-fit-contain">
							<use href="./images/icons/sprites/figures.svg#figure-1"></use>
						</svg>
					</div>

					<div class="unit unit__head">
						<div class="unit__img -pipe"></div>
						<h2 class="unit__head caps z-down">Следует понимать</h2>
					</div>

					<div class="unit__body grid-full-width">
						<p>Дизайн, контент, макет представлены в демонстрационных целях. Они могут
							быть
							любыми в рамках предложенного формата.</p>
					</div>
				</section>

				<section class="unit">
					<div class="unit__img img-box icon-bg">
						<svg class="o-fit-contain">
							<use href="./images/icons/sprites/figures.svg#figure-3"></use>
						</svg>
					</div>

					<div class="unit unit__head">
						<div class="unit__img -pipe"></div>
						<h2 class="unit__head caps z-down">Важно подчеркнуть</h2>
					</div>

					<div class="unit__body grid-full-width">
						<p>Основные усилия направлены на создание универсальной
							функциональности без привязки к контенту.</p>
					</div>
				</section>

				<section class="unit">
					<div class="unit__img img-box icon-bg">
						<svg class="o-fit-contain">
							<use href="./images/icons/sprites/figures.svg#figure-4"></use>
						</svg>
					</div>

					<div class="unit unit__head">
						<div class="unit__img -pipe"></div>
						<h2 class="unit__head caps z-down">Стоит отметить</h2>
					</div>

					<div class="unit__body grid-full-width">
						<p>Быстрая и удобная кастомизация под конкретные задачи и содержание —
							главная
							цель проекта.</p>
					</div>
				</section>

				<section class="unit">
					<div class="unit__img img-box icon-bg round sphere-1b">
						<svg class="inner-icon">
							<use href="./images/icons/sprites/figures.svg#figure-2"></use>
						</svg>
					</div>

					<div class="unit unit__head">
						<div class="unit__img -pipe"></div>
						<h2 class="unit__head caps z-down">Тем не менее</h2>
					</div>

					<div class="unit__body grid-full-width">
						<p>Уже сейчас это полнофункциональный продукт, готовый к использованию по
							назначению.</p>
					</div>
				</section>
			</div>

			<div class="place-on-circle __browsers"
					 style="--total: 5">
				<div class="img-box icon-bg"
						 style="--i:1">
					<img class="inner-icon o-fit-contain"
							 src="./images/icons/firefox.svg"
							 alt="">
				</div>
				<div class="img-box icon-bg"
						 style="--i:2">
					<img class="inner-icon o-fit-contain"
							 src="./images/icons/chrome.svg"
							 alt="">
				</div>
				<div class="img-box icon-bg"
						 style="--i:3">
					<img class="inner-icon o-fit-contain"
							 src="./images/icons/edge.svg"
							 alt="">
				</div>
				<div class="img-box icon-bg"
						 style="--i:4">
					<img class="inner-icon o-fit-contain __safari"
							 src="./images/icons/opera.svg"
							 alt="">
				</div>
				<div class="img-box icon-bg"
						 style="--i:5">
					<img class="inner-icon o-fit-contain __safari"
							 src="./images/icons/safari.svg"
							 alt="">
					<i class="material-icons-round mui-icon clr-2b">not_interested</i>
				</div>
			</div>

			<p class="side-ribbon -br fs-rg caps">under development</p>
		</div>
	</div>
</section>`,Jr=`<section class="swiper-slide __slide-advantages"
				 data-hash="advantages">
	<div class="layout-center">
		<div class="flex-x">
			<div class="slide-bg w-img"></div>

			<div class="scroll-down">
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<span class="scroll-down__text">Scroll down</span>
			</div>

			<article class="clr-1a">
				<div class="unit -rl fs-xl slide-ttl">
					<div class="unit__img -pipe"></div>
					<h1 class="unit__head">Достоинства <br>MS PowerPoint</h1>
					<div class="unit__body fs-md grid-full-width t-align-r">
						<p>Всего два, зато какие!</p>
					</div>
				</div>

				<ul class="plain-list">
					<li class="unit">
						<div class="unit__img img-box icon-bg round sphere-2b">
							<i class="material-icons-round mui-icon">child_care</i>
						</div>
						<h2 class="unit__head -pipe caps">Что-то получится даже у ребенка</h2>
						<div class="arrow-right clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Сделать презентацию в PP <b>с нуля</b> куда проще и быстрее, чем сверстать и настроить веб-проект. Но
								только самую обычную. Потому что и содержанием, и оформлением презентации занимается один и тот же
								человек. И
								у него, как правило,
								нет ни
								времени, ни навыков для ее полноценного оформления.</p>
							<p>Первоклассные с точки зрения визуального оформления презентации создаются профессиональными
								дизайнерами, в совершенстве владеющими PP. И на основе уже готового контента.</p>
							<p>Парадокс здесь
								заключается в том, что многие из тех удивительных трюков, которые они демонстрируют,
								— это зачастую имитация совершенно обычных для веб-проекта вещей.</p>
						</div>
					</li>

					<li class="unit">
						<div class="unit__img img-box icon-bg round sphere-2b">
							<i class="material-icons-round mui-icon">screenshot_monitor</i>
						</div>
						<h2 class="unit__head -pipe caps">Никаких сюрпризов</h2>
						<div class="arrow-right clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Пожалуй, главное преимущество PP заключается в том, что такая презентация будет выглядеть одинаково
								на любом устройстве. С оговоркой, правда, что на этом устройстве должен быть установлен собственно
								MS PP. Google docs не очень хорошо умеет открывать сделанные в MS PP презентации, особенно если там
								что-то не совсем примитивное. Поэтому для бизнес-задач — только конвертация в PDF. А .pdf — это
								просто статичное изображение. Т.е. совершенно точно никаких интересных динамических эффектов,
								анимаций. Плюс, как
								правило,
								еще и
								очень заметная потеря качества.</p>
						</div>
					</li>

					<li class="img-box filters __demo-pic-1">
						<picture>
							<img class="o-fit-contain"
									 src="./images/rubik-0.svg"
									 alt="">
						</picture>
					</li>
				</ul>
			</article>

			<article class="clr-2b">
				<div class="unit fs-xl slide-ttl">
					<div class="unit__img -pipe"></div>
					<h1 class="unit__head">Почему web-проект лучше, <br> чем MS PowerPoint</h1>
					<div class="unit__body fs-md grid-full-width">
						<p>Спойлер: счет 13:2 не в пользу PP</p>
					</div>
				</div>

				<ol class="plain-list ordered-list">
					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Можно быстро актуализировать контент</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Нужно срочно дополнить презентацию новыми слайдами, изменить формулировки, убрать или добавить какую-то
								информацию,
								исправить неточность, ошибку, адаптировать контент под конкретного клиента? Без проблем! У вас всегда
								есть
								возможность максимально оперативно внести все необходимые изменения и тут же опубликовать их. При этом
								нет необходимости рассылать всем заинтересованным лицам эту обновленную версию.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Полноценный веб-ресурс</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Который начинает работать на вас с момента публикации на домене компании. Страница проиндексируется и
								будет попадать в выдачу поисковиков. Если контент годный, его удобно потреблять (помним про
								адаптивность, доступность с мобильных устройств), все сделано технически грамотно, быстро грузится и
								т.д., вы получаете трафик.</p>
							<p>Также помимо собственно текстового контента в вашем распоряжении есть метатеги — один из основных
								инструментов SEO-продвижения. Формы обратной связи, если это вам нужно.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Адаптивность и responsive</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Возможность комфортного просмотра на любом устройстве, с т.ч. с экрана смартфона. В этом легко
								убедиться: плавно потяните за уголок окна браузера, чтобы уменьшить область просмотра до размеров экрана
								смартфона. Макет страницы на ваших глазах гибко подстроится («резиновая» верстка) под эти изменения,
								сохраняя при этом аккуратный вид и читаемость. А теперь вспомните, что из себя представляет просмотр
								.pdf или .pptx на смартфоне.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Легко кастомизировать</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Здесь разница просто колоссальная. В .pptx презентации любые изменения — это утомительный ручной труд в
								каждом слайде, которых у вас может быть... много. Поменять фон, айдентику в
								нескольких презентациях — целая проблема: неудобно, времязатратно.</p>
							<p>В веб-проекте же можно моментально изменить стилизацию любого компонента: шрифты, цвета, размеры,
								положение на странице, изображения. Это делается централизованно, изменения затрагивают все однотипные
								элементы сразу.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Reusability</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Это преимущество прямо следует из предыдущего пункта. PP-презентация — вещь, как правило, одноразовая,
								это статичный формат, тяжело поддающийся радикальной переработке. Веб-проект — совсем другое дело:
								потратив время и усилия на разработку с нуля, вы получаете функциональную базу для всех последующих
								проектов. И с каждой итерацией эта база усовершенствуется, оптимизируется, дополняется новыми
								возможностями.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Выглядит отлично</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Все мы примерно представляем, как выглядит среднестатистическая презентация в .pptx, да еще, как
								водится, хорошенько пожатая при конвертации в .pdf. Как правило, не важно.</p>
							<p>Здесь же за качество визуализации отвечает браузер, он использует аппаратные ресурсы ПК, чтобы идеально
								отрисовать все на вашем мониторе. Поэтому: яркие, насыщенные цвета, четкие линии, шрифты, плавные
								градиенты, хай-рез, никакого муара, пиксельной каши и т.д. Словом — максимальное качество картинки в
								любом разрешении.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Аккуратно</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Опрятность, перфектность во всем, что касается макета и расположения элементов на странице. Модульная
								сетка, отступы, размеры, формы, позиционирование, поведение на странице, цвета — абсолютно все задается
								параметрически, программным кодом, а не на глазок, вручную, как это часто бывает при создании .pptx
								презентации.</p>
							<p>Когда презентация элементарно аккуратно выполнена — это уже треть всего успеха, даже без особых
								дизайнерских изысков и навыков.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Все поместится</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Добавить контент в слайд — никаких проблем даже в том случае, если что-то не помещается в область
								просмотра. Просто появится возможность вертикальной прокрутки. Как на этой странице, например.</p>
							<p>Провернуть такой трюк с .pptx, очевидно, не удастся. Все знают, как это бывает: либо новый слайд, либо
								вот
								эти пятнашки, когда все куда-то сдвигается, уплотняется, налезает и в итоге выглядит печально.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Готово к использованию</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Не нужны никакие спец. программы для просмотра — все открывается по ссылке и работает в браузере,
								на любом устройстве.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Без лишних телодвижений</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Нет необходимости скачивать и / или пересылать файлы по почте, хранить их где-то. Кроме того, они имеют
								замечательное свойство теряться.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Интуитивно понятно</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Привычные каждому пользователю возможности управления мышкой, клавиатурой, тачпэдом ноутбука, жестами
								на сенсорных дисплеях: листаем слайды стрелками, колесом мыши, драг-н-дропом, перемещаемся между
								интерактивными элементами (ссылки, кнопки, поля формы) по Tab, свайпаем, тапаем, масштабируем и т.д.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Огромный потенциал</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Возможности связки HTML — CSS — JS в плане визуализации контента несоизмеримо шире, чем в PP.
								Экскаватор и лопата, танк и самокат — такие примерно ассоциации должны возникать при сравнении
								инструментов веб-разработки и PP.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-1a"></div>
						<h2 class="unit__head -pipe -rl caps">Сторонние библиотеки</h2>
						<div class="arrow-left clr-1a"></div>

						<div class="unit__body grid-full-width">
							<p>Доступно множество профессиональных решений мирового уровня, позволяющих создавать
								интересный, функциональный, впечатляющий контент. Простой пример: интерактивные графики с
								помощью
								<a class="txt-link"
									 href="https://www.chartjs.org/"
									 target="_blank"
									 rel="noopener noreferrer">chart.js</a>, слайдеры (в этом проекте используется <a class="txt-link"
									 href="https://swiperjs.com/"
									 target="_blank"
									 rel="noopener noreferrer">swiper.js</a>), анимации…
							</p>
						</div>
					</li>
				</ol>
			</article>
		</div>
	</div>
</section>`,Qr=`<section class="swiper-slide __slide-grid-system"
				 data-hash="grid-system">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg w-img"></div>

			<div class="scroll-down">
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<span class="scroll-down__text">Scroll down</span>
			</div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img -pipe"></div>
				<h2 class="unit__head">Модульная сетка</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Настраиваемая, любой конфигурации, «резиновая», responsive без
						медиа-запросов</p>
				</div>
			</div>

			<ol class="demo grid-x"
					id="grid-x"
					style="--col: 12;">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ol>

			<ol class="demo"
					id="width-x">
				<li class="width-x"
						style="--col: 12; --x: 3"></li>
				<li class="width-x"
						style="--col: 12; --x: 6"></li>
				<li class="width-x"
						style="--col: 12; --x: 9"></li>
			</ol>

			<ol class="flex-x demo"
					id="flex-x"
					style="--col: 3">
				<li class="w-master-1"></li>
				<li></li>
				<li></li>
				<li class="w-slave-1"></li>
				<li class="w-slave-1"></li>
			</ol>

			<ol class="demo gta"
					id="gta">
				<li></li>
				<li></li>
				<li>
					<picture>
						<img class="o-fit-cover"
								 src="images/demo-1-xl.webp"
								 alt="">
					</picture>
				</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ol>

			<ol class="demo grid-x masonry"
					id="masonry"
					style="--col: 6">
				<li class="r-span-x"
						style="--span: 4"></li>
				<li class="r-span-x"
						style="--span: 2"></li>
				<li class="r-span-x"
						style="--span: 5"></li>
				<li class="r-span-x"
						style="--span: 3">
					<picture>
						<img class="o-fit-cover"
								 style="--pos: 80%;"
								 src="images/demo-1-xl.webp"
								 alt="">
					</picture>
				</li>
				<li class="r-span-x"
						style="--span: 6"></li>
				<li class="r-span-x"
						style="--span: 4"></li>
				<li class="r-span-x"
						style="--span: 5">
					<picture>
						<img class="o-fit-cover"
								 style="--pos: 40%"
								 src="images/demo-1-xl.webp"
								 alt="">
					</picture>
				</li>
				<li class="r-span-x"
						style="--span: 5"></li>
				<li class="r-span-x"
						style="--span: 2"></li>
				<li class="r-span-x"
						style="--span: 5">
					<picture>
						<img class="o-fit-cover"
								 style="--pos: 10%"
								 src="images/demo-1-xl.webp"
								 alt="">
					</picture>
				</li>
				<li class="r-span-x"
						style="--span: 4"></li>
				<li class="r-span-x"
						style="--span: 3"></li>
			</ol>

			<!-- <ol class="demo chess-grid-12 grid-x">
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
				<li class="xs-grid-col-a"></li>
			</ol> -->
		</div>
	</div>
</section>`,to=`<section class="swiper-slide __slide-typography"
				 data-hash="typography">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg zigzag w-img"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img -pipe"></div>
				<h2 class="unit__head">Типографика</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>fluid, + адаптируется к размеру экрана на отметке 768px <br><small class="fs-xs">везде, кроме инфографики
							на этом слайде</small></p>
				</div>
			</div>

			<div class="slide-body plain-list flex-x">
				<section class="unit -rl">
					<div class="unit__img img-box icon-bg round sphere-2c">
						<i class="material-icons-round mui-icon">monitor</i>
					</div>
					<h3 class="unit__head -pipe caps fs-md">Большая терция</h3>
					<div class="arrow-left"></div>

					<ul class="unit__body grid-full-width">
						<li class="fs-3xl"
								style="--fs-3xl: 3.052rem;">Lorem ipsum</li>
						<li class="fs-2xl"
								style="--fs-2xl: 2.441rem;">Lorem ipsum</li>
						<li class="fs-xl"
								style="--fs-xl: 1.953rem;">Lorem ipsum</li>
						<li class="fs-lg"
								style="--fs-lg: 1.563rem;">Lorem ipsum</li>
						<li class="fs-md"
								style="--fs-md: 1.25rem;">Lorem ipsum</li>
						<li class="fs-rg"
								style="--fs-rg: 1rem;">Lorem ipsum</li>
						<li class="fs-sm"
								style="--fs-sm: 0.8rem;">Lorem ipsum</li>
						<li class="fs-xs"
								style="--fs-xs: 0.64rem;">Lorem ipsum</li>
					</ul>
				</section>

				<section class="unit clr-1a">
					<div class="unit__img img-box icon-bg round sphere-1b">
						<i class="material-icons-round mui-icon">phone_android</i>
					</div>
					<h3 class="unit__head -rl -pipe caps fs-md">Большая секунда</h3>
					<div class="arrow-right"></div>

					<ul class="unit__body grid-full-width">
						<li class="fs-3xl"
								style="--fs-3xl: 1.802rem;">Lorem ipsum</li>
						<li class="fs-2xl"
								style="--fs-2xl: 1.602rem;">Lorem ipsum</li>
						<li class="fs-xl"
								style="--fs-xl: 1.424rem;">Lorem ipsum</li>
						<li class="fs-lg"
								style="--fs-lg: 1.266rem;">Lorem ipsum</li>
						<li class="fs-md"
								style="--fs-md: 1.125rem;">Lorem ipsum</li>
						<li class="fs-rg"
								style="--fs-rg: 1rem;">Lorem ipsum</li>
						<li class="fs-sm"
								style="--fs-sm: 0.889rem;">Lorem ipsum</li>
						<li class="fs-xs"
								style="--fs-xs: 0.79rem;">Lorem ipsum</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</section>`,eo=`<section class="swiper-slide __slide-cards"
				 data-hash="demo-cards">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg spike"></div>

			<div class="scroll-down">
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<span class="scroll-down__text">Scroll down</span>
			</div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-1b">
					<svg class="inner-icon figures">
						<use href="./images/icons/sprites/figures.svg#figure-2"></use>
					</svg>
				</div>
				<h2 class="unit__head">Карточки</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Текстовые блоки с картинками, иконками, графиками, перечнями и т.д.<br><small class="fs-xs">библиотека
							Material Icons установлена по умолчанию, но иконки могут быть абсолютно
							любые</small></p>
				</div>
			</div>

			<div class="grid-x -col-3 cards">
				<section class="card">
					<div class="card__head">
						<div class="card__img img-box overlay cq-container"
								 style="--overlay: hsl(175, 85%, 30%, 0.25)">
							<div class="glitch"
									 style="background-image: url(images/lekom-360p.webp)">
								<div class="channel r"></div>
								<div class="channel g"></div>
								<div class="channel b"></div>
							</div>
							<div class="corners-1"></div>
							<div class="corners-2"></div>
							<div class="rec">REC</div>
						</div>
					</div>

					<div class="unit">
						<div class="unit__img -pipe"></div>
						<h3 class="unit__head caps">Lekom ipsum dolor sit</h3>
						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum dicta iusto saepe aliquam, sint
								quis debitis doloribus tempora blanditiis, ipsum ratione a impedit quibusdam! Odio amet dolorem
								repudiandae. Eveniet placeat ducimus reprehenderit enim tempore atque ipsam consectetur repudiandae
								quaerat!</p>
						</div>
					</div>
				</section>

				<section class="card x-axis xs-a-flow-row">
					<div class="card__head">
						<picture class="card__img img-box xs-shadow-bottom">
							<source media="(max-width: 576px)"
											srcset="./images/demo-4-xs.webp">
							<img class="o-fit-cover"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-4-xs-vertical.webp"
									 alt="">
						</picture>
					</div>

					<div class="unit">
						<div class="unit__img img-box icon-bg round sphere-1b"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quod natus odio voluptas tempore hic quo
								debitis perferendis mollitia voluptatum accusamus, culpa, officia similique ratione doloribus sint
								architecto? Provident dignissimos a obcaecati corrupti deserunt iusto quidem. Veritatis voluptatem
								reiciendis sapiente! Maiores dolores vero adipisci corporis atque soluta debitis placeat aut.</p>
						</div>
					</div>
				</section>

				<section class="card">
					<div class="card__head">
						<picture class="card__img img-box">
							<source media="(max-width: 576px)"
											srcset="./images/demo-4-xs.webp">
							<img class="o-fit-cover"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-4-xl.webp"
									 alt="">
						</picture>
						<h3 class="card__ttl -bg caps ellipsis">Lorem ipsum dolor</h3>
					</div>

					<div class="unit">
						<div class="unit__body grid-full-width">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi officia illum facere expedita
								aspernatur nisi non alias enim ducimus repellendus accusamus eum iure voluptates suscipit asperiores
								laborum animi magnam, iusto delectus.</p>

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, atque possimus, accusamus, in
								perferendis adipisci molestias hic consectetur aut maxime ratione? Magni accusantium reiciendis vel sunt
								asperiores praesentium?</p>
						</div>
					</div>
				</section>

				<section class="card">
					<div class="unit">
						<div class="unit__img img-box icon-bg round sphere-1b"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nesciunt quas? Amet, dignissimos
								eligendi? Sed, rerum maiores, quidem saepe laudantium iste laborum quae nam doloremque ipsum culpa
								placeat
								in sit!</p>
							<picture class="img-box icon-bg round txt-icon clr-2b">
								<img class="inner-icon"
										 src="./images/rubik-0.svg"
										 alt="">
							</picture>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis suscipit minima deleniti
								maiores
								tempora facere aut, esse adipisci aliquid quia neque quo consectetur earum, dicta amet qui excepturi?
								Voluptatibus id minus dolore nemo eveniet assumenda unde, vitae voluptates atque?</p>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fugiat non eveniet accusantium ex
								voluptas iste neque, facere cupiditate aperiam.</p>
						</div>
					</div>
				</section>

				<div class="card">
					<picture class="card__img img-box img-card figure filters">
						<img class="o-fit-contain"
								 src="./images/rubik-0.svg"
								 alt="">
					</picture>
				</div>

				<section class="card x-axis xs-a-flow-row gap-0">
					<div class="card__head">
						<picture class="card__img img-box xs-shadow-bottom">
							<source media="(max-width: 576px)"
											srcset="./images/demo-3-xs.webp">
							<img class="o-fit-cover"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-3-xs-vertical.webp"
									 alt="">
						</picture>
					</div>

					<div class="unit -bg">
						<div class="unit__img -pipe"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum dicta iusto saepe aliquam, sint
								quis debitis doloribus tempora blanditiis, ipsum ratione a impedit quibusdam! Odio amet dolorem
								repudiandae. Eveniet placeat ducimus reprehenderit enim tempore atque ipsam consectetur repudiandae
								quaerat!</p>
						</div>
					</div>
				</section>

				<section class="card gap-0">
					<div class="card__head">
						<picture class="card__img img-box">
							<img class="o-fit-cover"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-2-sm.webp"
									 alt="">
						</picture>

						<div class="__icons-box clr-0a">
							<i class="material-icons-round mui-icon">gpp_good</i>
							<i class="material-icons-round mui-icon">handshake</i>
							<i class="material-icons-round mui-icon">business_center</i>
						</div>
					</div>

					<div class="unit -bg">
						<div class="unit__img -pipe"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum dicta iusto saepe aliquam, sint
								quis debitis doloribus tempora blanditiis, ipsum ratione a impedit quibusdam! Odio amet dolorem
								repudiandae. Eveniet placeat ducimus reprehenderit enim tempore atque ipsam consectetur repudiandae
								quaerat!</p>
						</div>
					</div>
				</section>

				<section class="card">
					<div class="card__head">
						<picture class="card__img img-box icon-bg round">
							<source media="(max-width: 576px)"
											srcset="./images/demo-3-xs.webp">
							<img class="o-fit-cover"
									 style="--pos: 100%"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-3-xl.webp"
									 alt="">
						</picture>
						<h3 class="card__ttl -bg caps ellipsis">Lorem ipsum dolor sit</h3>
					</div>

					<div class="unit">
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio voluptatum quae! Eveniet
								incidunt
								accusantium veritatis, nostrum sunt dolores ratione. Exercitationem distinctio adipisci repellat?</p>

							<ul class="plain-list fs-sm sphere-2c">
								<li class="unit">
									<div class="unit__img img-box icon-bg round">
										<i class="material-icons-round mui-icon">commute</i>
									</div>
									<p class="unit__head">Lorem ipsum dolor sit</p>
								</li>

								<li class="unit">
									<div class="unit__img img-box icon-bg round">
										<i class="material-icons-round mui-icon">build_circle</i>
									</div>
									<p class="unit__head">Lorem ipsum, dolor sit amet consectetur adipisicing</p>
								</li>

								<li class="unit">
									<div class="unit__img img-box icon-bg round">
										<i class="material-icons-round mui-icon">home</i>
									</div>
									<p class="unit__head">Lorem ipsum dolor sit amet consectetur</p>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="card">
					<div class="card__head -ttl-right xs-a-flow-row">
						<div class="card__img img-box icon-bg overlay eye xs-shadow-bottom">
							<picture>
								<source media="(max-width: 576px)"
												srcset="./images/demo-5-xs.webp">
								<img class="o-fit-cover"
										 style="--pos: 80%"
										 loading="lazy"
										 decoding="async"
										 src="./images/demo-5-xl.webp"
										 alt="">
							</picture>
							<svg class="inner-icon figures">
								<use href="./images/icons/sprites/figures.svg#figure-1"></use>
							</svg>
						</div>

						<div class="unit">
							<div class="unit__img -pipe"></div>
							<h3 class="unit__head caps z-down">Lorem ipsum dolor</h3>
							<div class="unit__body grid-full-width fs-sm z-down">
								<p>Lorem ipsum dolor sit amet</p>
							</div>
						</div>
					</div>

					<div class="unit">
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi aut eaque architecto cum quos iste,
								molestias eum vero. Ea porro deleniti ut dolor quasi nesciunt exercitationem, totam sapiente adipisci
								minus! Beatae eum ipsa odit ex.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit voluptatum ut
								consequatur, soluta tenetur laborum natus recusandae porro sunt.</p>
						</div>
					</div>
				</section>

				<section class="card x-axis xs-a-flow-row">
					<div class="card__head">
						<div class="card__img img-box icon-bg round sphere-1b xs-shadow-bottom">
							<i class="material-icons-round mui-icon">gpp_good</i>
						</div>
					</div>

					<div class="unit -bg">
						<div class="unit__img -pipe"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio voluptatum quae! Eveniet
								incidunt
								accusantium veritatis, nostrum sunt dolores ratione. Exercitationem distinctio adipisci?</p>
						</div>
					</div>
				</section>

				<section class="card">
					<div class="card__head">
						<div class="polygon-ribbon-rounded-cutout-tl fs-sm">Nice!</div>
						<div class="card__img img-box pattern-bg-1"></div>

						<div class="unit card__head-ttl width-x">
							<div class="unit__img img-box icon-bg round sphere-1b">
								<i class="material-icons-round mui-icon">fingerprint</i>
							</div>
							<h3 class="unit__head caps">Lorem ipsum dolor</h3>
							<div class="unit__body grid-full-width fs-sm">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>

					<div class="unit">
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
								pariatur aspernatur exercitationem et
								earum consectetur dolor quisquam ipsam esse tempore!</p>
						</div>
					</div>
				</section>

				<section class="card x-axis xs-a-flow-row">
					<div class="card__head">
						<div class="card__img diamond polygon-9">
							<div class="img-box icon-bg">
								<i class="material-icons-round mui-icon diamond__icon">gpp_good</i>
							</div>
						</div>
					</div>

					<div class="unit">
						<div class="unit__img img-box icon-bg round sphere-1b"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p>Recusandae exercitationem suscipit unde
								laudantium perspiciatis eius ex repellendus odio cum nemo accusamus nam eos non dolor doloribus ratione
								quo facilis facere labore?</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam distinctio cum reiciendis praesentium
								iure vel quam excepturi quaerat error ea!</p>
						</div>
					</div>
				</section>

				<section class="card gap-0">
					<div class="unit -bg">
						<div class="unit__img -pipe"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium neque cum minima blanditiis enim
								quas itaque nemo eaque perspiciatis iste?</p>
						</div>
					</div>

					<div class="card__head">
						<div class="polygon-ribbon-cutout-rt fs-sm">Это не картинка!</div>
						<picture class="card__img img-box">
							<canvas class="chart-line"></canvas>
						</picture>
					</div>

					<div class="unit -bg">
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis quasi eaque rem omnis,
								repudiandae eveniet non quod dolores odio odit doloribus sunt quas officiis est nihil recusandae neque
								aliquam?</p>
						</div>
					</div>
				</section>

				<section class="card x-axis gap-0 card_triple md-a-flow-row c-span-x md-c-span-0">
					<div class="unit -bg">
						<div class="unit__img img-box icon-bg round sphere-1b">
							<i class="material-icons-round mui-icon">gpp_good</i>
						</div>

						<h3 class="unit__head caps">Lorem ipsum dolor</h3>

						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum dicta iusto saepe aliquam, sint
								quis debitis doloribus tempora blanditiis, ipsum ratione a impedit quibusdam! Odio amet dolorem
								repudiandae. Eveniet placeat ducimus reprehenderit enim tempore atque ipsam consectetur repudiandae
								quaerat!</p>

							<div class="unit subttl">
								<div class="unit__img -pipe"></div>
								<h4 class="unit__head">Lorem subtitle</h4>
							</div>

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem quae animi possimus eos in
								qui odio dicta labore quos aperiam, repellendus eaque beatae nam temporibus consequatur a alias
								recusandae quod repellat tempore, autem reprehenderit dolor natus.</p>
						</div>
					</div>

					<div class="card__head">
						<picture class="card__img img-box md-shadow-bottom">
							<source media="(max-width: 992px)"
											srcset="./images/demo-5-xl.webp">
							<img class="o-fit-cover"
									 style="--pos: 0% 100%"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-5-xs-vertical.webp"
									 alt="">
						</picture>
					</div>

					<div class="unit -bg">
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum dicta iusto saepe aliquam, sint
								quis debitis doloribus tempora blanditiis, ipsum ratione a impedit quibusdam! Odio amet dolorem
								repudiandae.</p>

							<ul class="plain-list ordered-list sphere-2c">
								<li class="unit">
									<div class="unit__img img-box icon-bg round"></div>
									<p class="unit__head">Lorem ipsum dolor sit</p>
									<div class="unit__body -shift-r fs-sm">
										<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, cupiditate.</p>
									</div>
									<div class="arrow-down clr-2b"></div>
								</li>

								<li class="unit">
									<div class="unit__img img-box icon-bg round"></div>
									<p class="unit__head">Lorem ipsum, dolor sit amet</p>
									<div class="unit__body -shift-r fs-sm">
										<p>Lorem ipsum, dolor sit amet consectetur adipisicing itaque et nam
											aspernatur unde.</p>
									</div>
									<div class="arrow-down clr-2b"></div>
								</li>

								<li class="unit">
									<div class="unit__img img-box icon-bg round"></div>
									<p class="unit__head">Lorem ipsum dolor sit amet consectetur</p>
								</li>
							</ul>

							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum magni mollitia sapiente saepe nulla
								maxime nihil ut soluta ad facilis.</p>
						</div>
					</div>
				</section>
			</div>

			<div class="cards">
				<section class="card gap-0">

					<div class="card__head">
						<picture class="card__img img-box">
							<source media="(max-width: 576px)"
											srcset="./images/demo-1-xs.webp">
							<img class="o-fit-cover"
									 style="--pos: center 80%"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-1-xl.webp"
									 alt="">
						</picture>
						<h3 class="card__ttl -bg caps ellipsis">Lorem ipsum dolor</h3>
					</div>

					<div class="unit -bg">
						<div class="unit__body grid-full-width txt-col-x -col-3">
							<picture class="img-box icon-bg round txt-icon clr-2b size-x4">
								<img class="inner-icon"
										 src="./images/rubik-1.svg"
										 alt="">
							</picture>

							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit perspiciatis dolor debitis
								atque,
								et velit cum neque nulla est porro. Quidem animi, cupiditate delectus incidunt rem architecto odio.
								Eveniet iusto assumenda dolorem doloribus ad fugit ab sapiente quam corporis aspernatur ipsum
								consequatur
								dolor, ipsam hic maiores totam molestias doloremque! Accusamus voluptatum distinctio reprehenderit!</p>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure vitae tempora, enim explicabo, illo
								velit
								facilis adipisci, quaerat quasi sint corrupti temporibus quo! Adipisci molestiae enim harum veritatis
								magnam vero recusandae doloribus maxime sed soluta, ut error? Pariatur adipisci rem consequuntur
								laudantium totam! Itaque, harum, sapiente iure, dicta eligendi cum dolor nesciunt odio.</p>

							<picture class="img-box icon-bg round txt-icon clr-1b">
								<img class="inner-icon"
										 src="./images/rubik-2.svg"
										 alt="">
							</picture>

							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora unde enim sequi facilis. Aliquam quia
								mollitia ipsum nisi aspernatur, error veniam, adipisci delectus ex ipsam, itaque laudantium nam aperiam
								vel ab cum ullam animi incidunt distinctio aliquid. Explicabo nemo quidem, alias exercitationem
								molestias
								odit nobis. Praesentium dolorum sequi iure atque minima, voluptate eum.</p>

							<picture class="img-box icon-bg round txt-icon clr-2a size-x2">
								<img class="inner-icon"
										 src="./images/rubik-0.svg"
										 alt="">
							</picture>

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam recusandae asperiores quaerat,
								dicta placeat voluptates! Expedita distinctio nam reprehenderit, at iure laboriosam natus illo placeat.
								Doloremque, quos mollitia architecto velit tempore, perferendis quasi minus harum aut itaque magnam
								sequi
								beatae fugiat sunt adipisci. Velit porro quidem aliquid deleniti cupiditate.</p>
						</div>
					</div>
				</section>
			</div>

			<div class="cards">
				<section class="unit">
					<div class="unit__body grid-full-width txt-col-x -col-4">

						<div class="card__head">
							<picture class="card__img img-box">
								<img class="o-fit-cover"
										 loading="lazy"
										 decoding="async"
										 src="./images/demo-2-sm.webp"
										 alt="">
							</picture>
							<h3 class="card__ttl -bg caps ellipsis">Lorem ipsum dolor</h3>
						</div>

						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti odit perspiciatis dolor debitis
							atque,
							et velit cum neque nulla est porro. Quidem animi, cupiditate delectus incidunt rem architecto odio.
							Eveniet iusto assumenda dolorem doloribus ad fugit ab sapiente quam corporis aspernatur ipsum
							consequatur
							dolor, ipsam hic maiores totam molestias doloremque! Accusamus voluptatum distinctio reprehenderit:</p>

						<ul class="plain-list">
							<li class="unit">
								<picture class="unit__img img-box icon-bg">
									<img src="./images/rubik-0.svg"
											 alt="">
								</picture>
								<p class="unit__head fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
									animi.</p>
							</li>

							<li class="unit">
								<picture class="unit__img img-box icon-bg">
									<img src="./images/rubik-1.svg"
											 alt="">
								</picture>
								<p class="unit__head fs-sm">Voluptates magni
									obcaecati optio repellendus delectus quasi.</p>
							</li>

							<li class="unit">
								<picture class="unit__img img-box icon-bg">
									<img src="./images/rubik-2.svg"
											 alt="">
								</picture>
								<p class="unit__head fs-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
							</li>
						</ul>

						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure vitae tempora, enim explicabo, illo
							velit
							facilis adipisci, quaerat quasi sint corrupti temporibus quo! Adipisci molestiae enim harum veritatis
							magnam vero recusandae doloribus maxime sed soluta, ut error? Pariatur adipisci rem consequuntur
							laudantium totam! Itaque, harum, sapiente iure, dicta eligendi cum dolor nesciunt odio.</p>

						<figure class="card__head">
							<picture class="card__img img-box icon-bg round overlay eye">
								<img class="o-fit-cover"
										 style="--pos: 20%"
										 loading="lazy"
										 decoding="async"
										 src="./images/demo-person-1.webp"
										 alt="">
							</picture>

							<figcaption class="unit fs-xs">
								<div class="unit__img -pipe"></div>
								<p class="unit__head caps z-down">Anthony Lekomski</p>
								<div class="unit__body grid-full-width z-down">
									<p>Senior Printer Guru at Lorem Printum company</p>
								</div>
							</figcaption>
						</figure>

						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora unde enim sequi facilis. Aliquam quia
							mollitia ipsum nisi aspernatur, error veniam, adipisci delectus ex ipsam, itaque laudantium nam aperiam
							vel ab cum ullam animi incidunt distinctio aliquid. Explicabo nemo quidem, alias exercitationem molestias
							odit nobis. Praesentium dolorum sequi iure atque minima, voluptate eum.</p>

						<picture class="img-box icon-bg round txt-icon">
							<img src="./images/rubik-1.svg"
									 alt="">
						</picture>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam recusandae asperiores quaerat,
							dicta placeat voluptates! Expedita distinctio nam reprehenderit, at iure laboriosam natus illo placeat.
							Doloremque, quos mollitia architecto velit tempore, perferendis quasi minus harum aut itaque magnam sequi
							beatae fugiat sunt adipisci. Velit porro quidem aliquid deleniti cupiditate.</p>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>`,io=`<section class="swiper-slide __slide-video"
				 data-hash="demo-video-and-scroll-snap">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg circle w-img"></div>
			<div class="slide-bg circle w-img"></div>
			<div class="slide-bg polygon-9 w-img"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img -pipe"></div>
				<h2 class="unit__head">Подгрузка видео по клику, scroll-snap, слайдер</h2>
			</div>

			<div class="grid-x cards">
				<section class="card gap-0">
					<div class="card__head">
						<figure class="video o-hidden">
							<a href="https://www.youtube.com/watch?v=URVHRhBSjj8"
								 class="video__link"
								 rel="noopener noreferrer"
								 aria-label="link to video">
							</a>

							<picture>
								<source srcset="https://i.ytimg.com/vi_webp/URVHRhBSjj8/maxresdefault.webp"
												type="image/webp">
								<img class="video__media"
										 loading="lazy"
										 decoding="async"
										 src="https://i.ytimg.com/vi/URVHRhBSjj8/maxresdefault.jpg"
										 alt="It's a demo video sample">
							</picture>

							<button class="video__button"
											aria-label="Play video">
								<svg width="68"
										 height="48"
										 viewBox="0 0 68 48">
									<path class="video__button-shape"
												d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z">
									</path>
									<path class="video__button-icon"
												d="M 45,24 27,14 27,34"></path>
								</svg>
							</button>
							<figcaption class="side-ribbon -tl fs-xs caps">Just a video sample</figcaption>
						</figure>
					</div>

					<div class="unit -bg">
						<div class="unit__body grid-full-width">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Commodi officia illum facere expedita
								aspernatur nisi non alias enim ducimus repellendus accusamus eum iure voluptates!</p>
						</div>
					</div>
				</section>

				<section class="card">
					<div class="card__head">
						<h3 class="card__ttl -bg caps ellipsis">Scroll-snap</h3>
						<div class="card__img img-box">
							<div class="scroll-snap-block">
								<figure class="img-box pattern-bg-2 clr-1a"
												tabindex="1">
									<figcaption class="side-ribbon -br fs-xs caps">Это интерактивный график</figcaption>
									<canvas class="chart-line"></canvas>
								</figure>
								<picture class="img-box">
									<img class="o-fit-cover"
											 loading="lazy"
											 decoding="async"
											 src="./images/demo-4-xl.webp"
											 alt="">
								</picture>
								<picture class="img-box">
									<img class="o-fit-cover"
											 loading="lazy"
											 decoding="async"
											 src="./images/demo-6-sm.webp"
											 alt="">
								</picture>
								<picture class="img-box">
									<img class="o-fit-cover"
											 loading="lazy"
											 decoding="async"
											 src="./images/demo-5-xl.webp"
											 alt="">
								</picture>
							</div>
						</div>

						<div class="scroll-down z-up">
							<div class="scroll-down__chevron"></div>
							<div class="scroll-down__chevron"></div>
							<div class="scroll-down__chevron"></div>
							<span class="scroll-down__text">Scroll down</span>
						</div>
					</div>

					<div class="unit">
						<div class="unit__img -pipe"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p class="fs-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum dicta iusto saepe aliquam, sint
								quis debitis doloribus tempora blanditiis!</p>
						</div>
					</div>
				</section>

				<section class="card gap-0">
					<div class="card__head">
						<h3 class="card__ttl -bg caps ellipsis z-up"
								style="--z: 2;">Swiper slider</h3>
						<div class="card__img img-box">
							<div class="swiper swiper-basic"
									 id="swiper-basic">
								<div class="swiper-wrapper">

									<picture class="swiper-slide">
										<img class="o-fit-cover"
												 loading="lazy"
												 decoding="async"
												 src="./images/demo-3-xl.webp"
												 alt="">
									</picture>

									<figure class="swiper-slide img-box pattern-bg-1">
										<figcaption class="side-ribbon fs-xs caps clr-2b">Chart.js</figcaption>
										<canvas class="chart-bar"></canvas>
									</figure>

									<picture class="swiper-slide">
										<img class="o-fit-cover"
												 loading="lazy"
												 decoding="async"
												 src="./images/demo-2-sm.webp"
												 alt="">
									</picture>

									<div class="swiper-slide">
										<figure class="video o-hidden">
											<a href="https://www.youtube.com/watch?v=URVHRhBSjj8"
												 class="video__link"
												 rel="noopener noreferrer"
												 aria-label="link to video">
											</a>

											<picture>
												<source srcset="https://i.ytimg.com/vi_webp/URVHRhBSjj8/maxresdefault.webp"
																type="image/webp">
												<img class="video__media"
														 loading="lazy"
														 decoding="async"
														 src="https://i.ytimg.com/vi/URVHRhBSjj8/maxresdefault.jpg"
														 alt="It's a demo video sample">
											</picture>

											<button class="video__button"
															aria-label="Play video">
												<svg width="68"
														 height="48"
														 viewBox="0 0 68 48">
													<path class="video__button-shape"
																d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z">
													</path>
													<path class="video__button-icon"
																d="M 45,24 27,14 27,34"></path>
												</svg>
											</button>
											<figcaption class="side-ribbon -bl fs-xs caps clr-2a">Just a video sample</figcaption>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="unit -bg">
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Necessitatibus recusandae expedita eveniet
								voluptatibus, magnam accusantium sunt architecto esse nam et voluptates facere.</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>`,so=`<section class="swiper-slide __slide-table"
				 data-hash="demo-table">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg rounded clr-1b"></div>

			<table class="demo-table">
				<caption>
					<div class="unit slide-ttl">
						<h2 class="unit__head fs-md caps">Таблица</h2>
						<div class="unit__body fs-xs grid-full-width">
							<p><span class="tag">Адаптивная,</span>
								<span class="tag">семантически
									корректная,</span>
								<span class="tag">с
									подсветкой заголовков,</span>
								<span class="tag">колонок и строк,</span>
								<span class="tag">маркировкой ячеек по клику</span>
							</p>
						</div>
					</div>
				</caption>

				<thead>
					<tr>
						<th scope="row"></th>
						<th scope="col">thead th-1</th>
						<th scope="col">thead th-2</th>
						<th scope="col">thead th-3</th>
						<th scope="col">thead th-4</th>
						<th scope="col">thead th-5</th>
						<th scope="col">thead th-6</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th scope="row">tbody th-1</th>
						<td data-cell="thead th-1">tbody tr-1 td-1</td>
						<td data-cell="thead th-2">tbody tr-1 td-2</td>
						<td data-cell="thead th-3">tbody tr-1 td-3</td>
						<td data-cell="thead th-4">tbody tr-1 td-4</td>
						<td data-cell="thead th-5">tbody tr-1 td-5</td>
						<td data-cell="thead th-6">tbody tr-1 td-6</td>
					</tr>

					<tr>
						<th scope="row">tbody th-2</th>
						<td data-cell="thead th-1">tbody tr-2 td-1</td>
						<td data-cell="thead th-2">tbody tr-2 td-2</td>
						<td data-cell="thead th-3">tbody tr-2 td-3</td>
						<td data-cell="thead th-4">tbody tr-2 td-4</td>
						<td data-cell="thead th-5">tbody tr-2 td-5</td>
						<td data-cell="thead th-6">tbody tr-2 td-6</td>
					</tr>

					<tr>
						<th scope="row">tbody th-3</th>
						<td data-cell="thead th-1">tbody tr-3 td-1</td>
						<td data-cell="thead th-2">tbody tr-3 td-2</td>
						<td data-cell="thead th-3">tbody tr-3 td-3</td>
						<td data-cell="thead th-4">tbody tr-3 td-4</td>
						<td data-cell="thead th-5">tbody tr-3 td-5</td>
						<td data-cell="thead th-6">tbody tr-3 td-6</td>
					</tr>

					<tr>
						<th scope="row">tbody th-4</th>
						<td data-cell="thead th-1">tbody tr-4 td-1</td>
						<td data-cell="thead th-2">tbody tr-4 td-2</td>
						<td data-cell="thead th-3">tbody tr-4 td-3</td>
						<td data-cell="thead th-4">tbody tr-4 td-4</td>
						<td data-cell="thead th-5">tbody tr-4 td-5</td>
						<td data-cell="thead th-6">tbody tr-4 td-6</td>
					</tr>

					<tr>
						<th scope="row">tbody th-5</th>
						<td data-cell="thead th-1">tbody tr-5 td-1</td>
						<td data-cell="thead th-2">tbody tr-5 td-2</td>
						<td data-cell="thead th-3">tbody tr-5 td-3</td>
						<td data-cell="thead th-4">tbody tr-5 td-4</td>
						<td data-cell="thead th-5">tbody tr-5 td-5</td>
						<td data-cell="thead th-6">tbody tr-5 td-6</td>
					</tr>

					<tr>
						<th scope="row">tbody th-6</th>
						<td data-cell="thead th-1">tbody tr-6 td-1</td>
						<td data-cell="thead th-2">tbody tr-6 td-2</td>
						<td data-cell="thead th-3">tbody tr-6 td-3</td>
						<td data-cell="thead th-4">tbody tr-6 td-4</td>
						<td data-cell="thead th-5">tbody tr-6 td-5</td>
						<td data-cell="thead th-6">tbody tr-6 td-6</td>
					</tr>

					<tr>
						<th scope="row">tbody th-7</th>
						<td data-cell="thead th-1">tbody tr-7 td-1</td>
						<td data-cell="thead th-2">tbody tr-7 td-2</td>
						<td data-cell="thead th-3">tbody tr-7 td-3</td>
						<td data-cell="thead th-4">tbody tr-7 td-4</td>
						<td data-cell="thead th-5">tbody tr-7 td-5</td>
						<td data-cell="thead th-6">tbody tr-7 td-6</td>
					</tr>

					<tr>
						<th scope="row">tbody th-8</th>
						<td data-cell="thead th-1">tbody tr-8 td-1</td>
						<td data-cell="thead th-2">tbody tr-8 td-2</td>
						<td data-cell="thead th-3">tbody tr-8 td-3</td>
						<td data-cell="thead th-4">tbody tr-8 td-4</td>
						<td data-cell="thead th-5">tbody tr-8 td-5</td>
						<td data-cell="thead th-6">tbody tr-8 td-6</td>
					</tr>
				</tbody>
			</table>

		</div>
	</div>
</section>`,no=`<section class="swiper-slide __slide-charts"
				 data-hash="demo-charts">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg spike clr-1b"></div>
			<div class="slide-bg spike w-img xs-d-none"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-1b">
					<i class="material-icons-round mui-icon">bar_chart</i>
				</div>
				<h2 class="unit__head">Сhart.js</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Интерактивные <a class="tag clr-1a"
							 href="https://www.chartjs.org/"
							 target="_blank"
							 rel="noopener noreferrer">графики</a> для визуализации любых типов данных</p>
				</div>
			</div>

			<ul class="slide-body flex-x z-up">
				<li>
					<canvas class="chart-bar"></canvas>
				</li>
				<li>
					<canvas class="chart-doughnut"></canvas>
				</li>
				<li>
					<canvas class="chart-line"></canvas>
				</li>
			</ul>
		</div>
	</div>
</section>`,ao=`<section class="swiper-slide __slide-doughnut"
				 data-hash="demo-doughnut-chart">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg polygon-15 w-img"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-2c">
					<i class="material-icons-round mui-icon">pie_chart</i>
				</div>
				<h2 class="unit__head">Круговая диаграмма</h2>
			</div>

			<div class="grid-x slide-body">
				<div class="grid-x cards">
					<div class="card">
						<div class="card__head">
							<div class="card__img img-box __demo-chart"
									 style="--shadow: none;">
								<canvas class="chart-doughnut"></canvas>
							</div>
						</div>

						<div class="txt-col-x">
							<picture class="img-box icon-bg round txt-icon"
											 style="--size-x: 4;">
								<img class="o-fit-cover"
										 style="--pos: 0%"
										 src="./images/demo-3-xl.webp"
										 alt="">
							</picture>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, labore possimus fugiat architecto nobis
								placeat, aut accusamus ipsa quaerat libero fugit earum voluptatem, voluptatibus culpa quos! Quis
								deleniti
								facilis repudiandae obcaecati autem neque, sunt, ut molestias voluptatibus quasi atque magni, voluptates
								exercitationem. Fuga porro voluptas maxime, debitis sapiente harum adipisci vero in obcaecati!</p>
						</div>
					</div>
				</div>

				<section class="card">
					<div class="unit">
						<div class="unit__body grid-full-width txt-col-x">

							<div class="unit __right-col-heading">
								<div class="unit__img img-box icon-bg round sphere-1b">
									<svg class="inner-icon figures">
										<use href="./images/icons/sprites/figures.svg#figure-2"></use>
									</svg>
								</div>
								<h3 class="unit__head caps">Lorem ipsum dolor</h3>
							</div>

							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum adipisci autem, eius dolore ad suscipit
								dolorum voluptate, velit laudantium deserunt quos nulla dolores obcaecati quam ullam animi dolor
								recusandae, ipsum voluptatum repellendus beatae nobis tempora soluta esse? Consectetur, labore nemo odio
								tempora ratione obcaecati dolore incidunt nisi, ut voluptatibus suscipit, totam perspiciatis illum autem
								qui nam inventore quibusdam! Accusamus, natus./p>

							<ul class="plain-list fs-sm clr-1b">
								<li class="unit">
									<div class="arrow-right"></div>
									<p class="unit__head">Lorem ipsum dolor sit!</p>
								</li>

								<li class="unit">
									<div class="arrow-right"></div>
									<p class="unit__head">Sit amet consectetur adipisicing.</p>
								</li>

								<li class="unit">
									<div class="arrow-right"></div>
									<p class="unit__head">Consectetur, labore nemo odio
										tempora.</p>
								</li>
							</ul>
						</div>
					</div>

					<div class="card__head">
						<picture class="card__img img-box __bottom-pic">
							<img class="o-fit-contain filters"
									 src="./images/rubik-1.svg"
									 alt="">
						</picture>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>`,ro=`<section class="swiper-slide __slide-form"
				 data-hash="demo-form">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg trapeze w-img xs-d-none"></div>
			<div class="slide-bg spike w-img d-none xs-d-contents"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-1a">
					<i class="material-icons-round mui-icon">alternate_email</i>
				</div>
				<h2 class="unit__head">Форма обратной связи</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>С валидацией на фронте и сообщением об успешной отправке</p>
				</div>
			</div>

			<div class="grid-x width-x slide-body">
				<form class="sign-up-form"
							id="sign-up-form">

					<div class="sign-up-form__item">
						<label for="email"
									 class="fs-xs fw-sb z-down">Ваш email</label>
						<input type="email"
									 name="email"
									 id="email"
									 inputmode="email"
									 placeholder="email@company.com"
									 class="input-field ellipsis fs-rg"
									 autocomplete="on">
					</div>

					<div class="sign-up-form__item">
						<button class="btn-glow form-btn locked"
										id="submit-form"
										type="submit"><span class="ellipsis">Подписаться на рассылку</span></button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>`,oo=`<section class="swiper-slide __slide-snake-list"
				 data-hash="snake-list">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg diag w-img"></div>
			<div class="slide-bg-overlay diag"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-1a">
					<i class="material-icons-round mui-icon">css</i>
				</div>
				<h2 class="unit__head caps">Test area</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Fun with CSS Grid</p>
				</div>
			</div>

			<div class="slide-body grid-x width-x">
				<ul class="plain-list grid-x __snake-list clr-2b">
					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b">
							<i class="material-icons-round mui-icon">directions_run</i>
						</div>
						<h3 class="unit__head -pipe -rl caps">Ready Steady Go!</h3>
						<div class="arrow-right"></div>
						<div class="unit__body -shift-l">
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea veniam labore, magni officiis maiores
								aliquid fugit fuga aliquam dicta, ipsum odit commodi expedita alias necessitatibus. Fugit,
								blanditiis
								tempore beatae magnam iure rerum ut eum! Adipisci minima fugiat odit fugit. Quidem suscipit tempora
								autem, modi iure voluptates magnam delectus a maiores!</p>
						</div>
						<div class="arrow-down"></div>
					</li>

					<li class="unit">
						<div class="unit__img img-box icon-bg round sphere-2b">
							<i class="material-icons-round mui-icon">location_on</i>
						</div>
						<div class="arrow-left"></div>
						<div class="unit__img img-box icon-bg round sphere-2b">
							<i class="material-icons-round mui-icon">location_on</i>
						</div>
						<div class="unit__body -shift-r">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio rem sapiente porro esse tempore
								dolorum consequatur recusandae fuga quibusdam, sed ad, dolorem nostrum? Eveniet atque amet magni
								nulla
								sequi fugiat praesentium iure numquam quos, accusantium dicta at tempora voluptas.</p>
						</div>
						<div class="arrow-down"></div>
					</li>

					<li class="unit">
						<div class="unit__img img-box icon-bg round sphere-2b">
							<i class="material-icons-round mui-icon">location_on</i>
						</div>
						<div class="arrow-right"></div>
						<div class="unit__img img-box icon-bg round sphere sphere-2b d-none md-d-grid">
							<i class="material-icons-round mui-icon">location_on</i>
						</div>
						<div class="arrow-right md-d-none"></div>
						<div class="unit__body -md-shift-l grid-full-width">
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, sunt ad. Aliquam provident iste
								reiciendis harum quibusdam itaque laborum, voluptates nobis rerum? Aspernatur suscipit molestiae a
								numquam, recusandae impedit veniam!</p>
						</div>
						<div class="arrow-down d-none md-d-grid"></div>
					</li>

					<li class="unit order-up md-order-0 clr-2a"
							style="--order: 2">
						<div class="unit__img img-box icon-bg round sphere-2a">
							<i class="material-icons-round mui-icon">directions_bike</i>
						</div>
						<div class="arrow-right md-d-none"></div>
						<div class="arrow-left d-none md-d-grid"></div>
						<div class="unit__img img-box icon-bg round sphere-2a">
							<i class="material-icons-round mui-icon">location_on</i>
						</div>
						<div class="unit__body -md-shift-r grid-full-width">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum voluptates quo sed deleniti
								nulla
								magnam iusto suscipit assumenda. Laboriosam dolorem, maiores quos ex animi debitis at
								necessitatibus?
								Aliquid, exercitationem animi? Ducimus cumque molestiae laboriosam reprehenderit eum quidem libero
								molestias ea iure quos hic iusto temporibus nisi tenetur maxime exercitationem, nemo quasi possimus?
								Iure architecto quia ullam amet dicta magni?</p>
						</div>
						<div class="arrow-down d-none md-d-grid"></div>
					</li>

					<li class="unit order-up md-order-0 clr-2a">
						<div class="unit__img img-box icon-bg round sphere-2a">
							<i class="material-icons-round mui-icon">location_on</i>
						</div>
						<div class="arrow-left md-d-none"></div>
						<div class="arrow-right d-none md-d-grid"></div>
						<div class="unit__img img-box icon-bg round sphere-2a">
							<i class="material-icons-round mui-icon">location_on</i>
						</div>
						<div class="unit__body -shift-l">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa dolor excepturi corrupti
								illo
								commodi tempora temporibus nulla voluptas quaerat. Optio, facere possimus eius odit magnam iure
								maxime
								neque a quia deleniti atque facilis non, dolores excepturi rerum est doloribus accusantium? Esse,
								ipsa
								magnam. A, adipisci eum laborum est possimus soluta omnis quas dolor repellendus odit consequatur
								deleniti vero magni!</p>
						</div>
						<div class="arrow-up md-d-none"></div>
						<div class="arrow-down d-none md-d-grid"></div>
					</li>

					<li class="unit clr-2a">
						<div class="arrow-left d-none md-d-grid"></div>
						<h3 class="unit__head -pipe caps">Finish!</h3>
						<div class="unit__img img-box icon-bg round sphere-2a">
							<i class="material-icons-round mui-icon">flag_circle</i>
						</div>
						<div class="unit__body -shift-r md-grid-full-width">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, consequatur amet. Quasi
								aliquam
								totam voluptatem quibusdam nam et rem qui.</p>
						</div>
						<div class="arrow-up md-d-none"></div>
						<div class="arrow-right md-d-none"></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>`,lo=`<section class="swiper-slide __slide-yandex-map"
				 data-hash="yandex-map">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg trapeze"></div>
			<div class="slide-bg trapeze w-img xs-d-none"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<picture class="unit__img img-box icon-bg">
					<img class="o-fit-contain"
							 src="./images/icons/yandex.svg"
							 alt="">
				</picture>
				<h2 class="unit__head">Яндекс-карты</h2>
			</div>

			<div class="cards">
				<section class="card x-axis md-a-flow-row gap-0">
					<div class="card__head">
						<picture class="card__img img-box xs-shadow-bottom"
										 id="ymap">
						</picture>
					</div>

					<div class="unit -bg">
						<div class="unit__body grid-full-width">
							<ul class="plain-list">
								<li class="unit sphere-2b">
									<div class="unit__img img-box icon-bg round">
										<i class="material-icons-round mui-icon">location_on</i>
									</div>
									<h3 class="unit__head">Lorem ipsum dolor sit.</h3>
									<div class="unit__body grid-full-width fs-sm">
										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea veniam labore, magni officiis
											maiores.</p>
									</div>
								</li>

								<li class="unit sphere-2a">
									<div class="unit__img img-box icon-bg round">
										<i class="material-icons-round mui-icon">location_on</i>
									</div>
									<h3 class="unit__head">Lorem ipsum dolor sit amet.</h3>
									<div class="unit__body grid-full-width fs-sm">
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>`,co=`<section class="swiper-slide __slide-diamonds-bg"
				 data-hash="diamonds-bg">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg w-img polygon-13"></div>
			<div class="slide-bg w-img polygon-11"></div>
			<div class="slide-bg w-img polygon-9"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-2b">
					<i class="material-icons-round mui-icon">css</i>
				</div>
				<h2 class="unit__head caps">Test area</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Fun with layers, blend-modes, filters</p>
				</div>
			</div>

		</div>
	</div>
</section>`,uo=`<section class="swiper-slide __slide-stripes-rubik-bg"
				 data-hash="stripes-rubik-bg">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg w-img"></div>
			<div class="slide-bg-overlay"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-2c">
					<i class="material-icons-round mui-icon">css</i>
				</div>
				<h2 class="unit__head caps">Test area</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Fun with layers, blend-modes, filters</p>
				</div>
			</div>

		</div>
	</div>
</section>`,ho=`<div class="form-modal__content width-x">
	<img class="form-modal__icon"
			 src="./images/icons/icon-success.svg"
			 alt="round orange-pink gradient check mark icon svg">

	<div class="form-modal__txt">
		<h2 class="fs-lg fw-sb">Ура, все получилось!</h2>
		<p>Ваш email <span class="user-email fw-sb"></span> зарегистрирован в нашей базе данных! <small class="ital">На
				самом
				деле
				нет,
				потому что бэкенда нет.</small></p>
	</div>

	<form method="dialog">
		<div class="sign-up__form-item">
			<button class="btn-glow fw-bd"
							type="submit">Ок</button>
		</div>
	</form>
</div>`,fo=`<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Титульный слайд</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">MS PowerPoint vs веб-проект</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Модульная сетка</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Типографика</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Карточки</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Подгрузка видео по клику и scroll-snap</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Таблица</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Сhart.js</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Круговая диаграмма демо</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Форма обратной связи</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">

			<picture class="img-box icon-bg">
				<img class="o-fit-cover"
						 src="./images/icons/yandex.svg"
						 alt="">
			</picture>

			<span class="ellipsis">Яндекс-карты</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">

			<div class="img-box icon-bg arrow-right"></div>

			<span class="ellipsis">Snake-list</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">

			<picture class="diamond polygon-9 icon-bg">
				<div class="img-box"></div>
			</picture>

			<span class="ellipsis">Слайд</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">

			<picture class="img-box icon-bg">
				<img class="inner-icon"
						 src="./images/rubik-0.svg"
						 alt="">
			</picture>

			<span class="ellipsis">Слайд</span>
			<svg class="chevron chevron-right">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<!-- sidebar accordion item -->
<!-- <li class="ac sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="ac-trigger sidebar-item__btn marker ellipsis-box"
						type="button">
			<div class="img-box icon-bg">
				<svg class="o-fit-contain inner-icon figures">
					<use href="./images/icons/sprites/figures.svg#figure-2"></use>
				</svg>
			</div>
			<span class="ellipsis">Перейти к группе слайдов одной тематики</span>
			<svg class="chevron">
				<use href="images/icons/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>

	<div class="ac-panel">
		<ol class="sidebar-item__links">
			<li>
				<a href="#"
					 class="marker sidebar-item__link ellipsis-box slide-to">
					<span class="ellipsis">Lorem ipsum dolor.</span>
				</a>
			</li>

			<li>
				<a href="#"
					 class="marker sidebar-item__link ellipsis-box slide-to">
					<span class="ellipsis">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						inventore.
					</span>
				</a>
			</li>

			<li>
				<a href="#"
					 class="marker sidebar-item__link ellipsis-box slide-to">
					<span class="ellipsis">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						inventore.
					</span>
				</a>
			</li>
		</ol>
	</div>
</li> -->`;document.querySelector(".sidebar").insertAdjacentHTML("beforeend",fo);const ot=document.querySelector(".swiper-wrapper");ot.insertAdjacentHTML("beforeend",Zr);ot.insertAdjacentHTML("beforeend",Jr);ot.insertAdjacentHTML("beforeend",Qr);ot.insertAdjacentHTML("beforeend",to);ot.insertAdjacentHTML("beforeend",eo);ot.insertAdjacentHTML("beforeend",io);ot.insertAdjacentHTML("beforeend",so);ot.insertAdjacentHTML("beforeend",no);ot.insertAdjacentHTML("beforeend",ao);ot.insertAdjacentHTML("beforeend",ro);ot.insertAdjacentHTML("beforeend",lo);ot.insertAdjacentHTML("beforeend",oo);ot.insertAdjacentHTML("beforeend",co);ot.insertAdjacentHTML("beforeend",uo);document.querySelector(".form-modal").insertAdjacentHTML("beforeend",ho);const te=document.querySelector(".sidebar"),tn=document.querySelector(".sidebar-toggle");let en=null;tn.addEventListener("click",()=>{tn.classList.toggle("active"),te.classList.contains("isOpen")?(te.classList.remove("isOpen"),clearTimeout(en)):(te.style.display="initial",en=setTimeout(()=>requestAnimationFrame(()=>te.classList.add("isOpen")),.1))});te.addEventListener("transitionend",()=>!te.classList.contains("isOpen")&&(te.style.display="none"));function sn(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Os(i,t){i===void 0&&(i={}),t===void 0&&(t={}),Object.keys(t).forEach(e=>{typeof i[e]>"u"?i[e]=t[e]:sn(t[e])&&sn(i[e])&&Object.keys(t[e]).length>0&&Os(i[e],t[e])})}const Fa={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function gt(){const i=typeof document<"u"?document:{};return Os(i,Fa),i}const po={document:Fa,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function et(){const i=typeof window<"u"?window:{};return Os(i,po),i}function go(i){return i===void 0&&(i=""),i.trim().split(" ").filter(t=>!!t.trim())}function mo(i){const t=i;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function $e(i,t){return t===void 0&&(t=0),setTimeout(i,t)}function Pt(){return Date.now()}function bo(i){const t=et();let e;return t.getComputedStyle&&(e=t.getComputedStyle(i,null)),!e&&i.currentStyle&&(e=i.currentStyle),e||(e=i.style),e}function vo(i,t){t===void 0&&(t="x");const e=et();let s,n,a;const r=bo(i);return e.WebKitCSSMatrix?(n=r.transform||r.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),a=new e.WebKitCSSMatrix(n==="none"?"":n)):(a=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=a.toString().split(",")),t==="x"&&(e.WebKitCSSMatrix?n=a.m41:s.length===16?n=parseFloat(s[12]):n=parseFloat(s[4])),t==="y"&&(e.WebKitCSSMatrix?n=a.m42:s.length===16?n=parseFloat(s[13]):n=parseFloat(s[5])),n||0}function Qe(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function xo(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function dt(){const i=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let e=1;e<arguments.length;e+=1){const s=e<0||arguments.length<=e?void 0:arguments[e];if(s!=null&&!xo(s)){const n=Object.keys(Object(s)).filter(a=>t.indexOf(a)<0);for(let a=0,r=n.length;a<r;a+=1){const o=n[a],l=Object.getOwnPropertyDescriptor(s,o);l!==void 0&&l.enumerable&&(Qe(i[o])&&Qe(s[o])?s[o].__swiper__?i[o]=s[o]:dt(i[o],s[o]):!Qe(i[o])&&Qe(s[o])?(i[o]={},s[o].__swiper__?i[o]=s[o]:dt(i[o],s[o])):i[o]=s[o])}}}return i}function ti(i,t,e){i.style.setProperty(t,e)}function za(i){let{swiper:t,targetPosition:e,side:s}=i;const n=et(),a=-t.translate;let r=null,o;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(t.cssModeFrameID);const c=e>a?"next":"prev",d=(h,f)=>c==="next"&&h>=f||c==="prev"&&h<=f,u=()=>{o=new Date().getTime(),r===null&&(r=o);const h=Math.max(Math.min((o-r)/l,1),0),f=.5-Math.cos(h*Math.PI)/2;let g=a+f*(e-a);if(d(g,e)&&(g=e),t.wrapperEl.scrollTo({[s]:g}),d(g,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[s]:g})}),n.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=n.requestAnimationFrame(u)};u()}function Ds(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function bt(i,t){return t===void 0&&(t=""),[...i.children].filter(e=>e.matches(t))}function Li(i){try{console.warn(i);return}catch{}}function He(i,t){t===void 0&&(t=[]);const e=document.createElement(i);return e.classList.add(...Array.isArray(t)?t:go(t)),e}function yo(i){const t=et(),e=gt(),s=i.getBoundingClientRect(),n=e.body,a=i.clientTop||n.clientTop||0,r=i.clientLeft||n.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-a,left:s.left+l-r}}function _o(i,t){const e=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function wo(i,t){const e=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function zt(i,t){return et().getComputedStyle(i,null).getPropertyValue(t)}function Pi(i){let t=i,e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function Ai(i,t){const e=[];let s=i.parentElement;for(;s;)t?s.matches(t)&&e.push(s):e.push(s),s=s.parentElement;return e}function So(i,t){function e(s){s.target===i&&(t.call(i,s),i.removeEventListener("transitionend",e))}t&&i.addEventListener("transitionend",e)}function hs(i,t,e){const s=et();return e?i[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let Wi;function Mo(){const i=et(),t=gt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&t instanceof i.DocumentTouch)}}function Ra(){return Wi||(Wi=Mo()),Wi}let Gi;function To(i){let{userAgent:t}=i===void 0?{}:i;const e=Ra(),s=et(),n=s.navigator.platform,a=t||s.navigator.userAgent,r={ios:!1,android:!1},o=s.screen.width,l=s.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/);let d=a.match(/(iPad).*OS\s([\d_]+)/);const u=a.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=n==="Win32";let g=n==="MacIntel";const p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&g&&e.touch&&p.indexOf(`${o}x${l}`)>=0&&(d=a.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),g=!1),c&&!f&&(r.os="android",r.android=!0),(d||h||u)&&(r.os="ios",r.ios=!0),r}function ko(i){return i===void 0&&(i={}),Gi||(Gi=To(i)),Gi}let Yi;function Co(){const i=et();let t=!1;function e(){const s=i.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(e()){const s=String(i.navigator.userAgent);if(s.includes("Version/")){const[n,a]=s.split("Version/")[1].split(" ")[0].split(".").map(r=>Number(r));t=n<16||n===16&&a<2}}return{isSafari:t||e(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function Eo(){return Yi||(Yi=Co()),Yi}function Lo(i){let{swiper:t,on:e,emit:s}=i;const n=et();let a=null,r=null;const o=()=>{!t||t.destroyed||!t.initialized||(s("beforeResize"),s("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(u=>{r=n.requestAnimationFrame(()=>{const{width:h,height:f}=t;let g=h,p=f;u.forEach(v=>{let{contentBoxSize:x,contentRect:m,target:b}=v;b&&b!==t.el||(g=m?m.width:(x[0]||x).inlineSize,p=m?m.height:(x[0]||x).blockSize)}),(g!==h||p!==f)&&o()})}),a.observe(t.el))},c=()=>{r&&n.cancelAnimationFrame(r),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},d=()=>{!t||t.destroyed||!t.initialized||s("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof n.ResizeObserver<"u"){l();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",d)}),e("destroy",()=>{c(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",d)})}function Po(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a=[],r=et(),o=function(d,u){u===void 0&&(u={});const h=r.MutationObserver||r.WebkitMutationObserver,f=new h(g=>{if(t.__preventObserver__)return;if(g.length===1){n("observerUpdate",g[0]);return}const p=function(){n("observerUpdate",g[0])};r.requestAnimationFrame?r.requestAnimationFrame(p):r.setTimeout(p,0)});f.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),a.push(f)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=Ai(t.hostEl);for(let u=0;u<d.length;u+=1)o(d[u])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},c=()=>{a.forEach(d=>{d.disconnect()}),a.splice(0,a.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",l),s("destroy",c)}var Ao={on(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const n=e?"unshift":"push";return i.split(" ").forEach(a=>{s.eventsListeners[a]||(s.eventsListeners[a]=[]),s.eventsListeners[a][n](t)}),s},once(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function n(){s.off(i,n),n.__emitterProxy&&delete n.__emitterProxy;for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];t.apply(s,r)}return n.__emitterProxy=t,s.on(i,n,e)},onAny(i,t){const e=this;if(!e.eventsListeners||e.destroyed||typeof i!="function")return e;const s=t?"unshift":"push";return e.eventsAnyListeners.indexOf(i)<0&&e.eventsAnyListeners[s](i),e},offAny(i){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const e=t.eventsAnyListeners.indexOf(i);return e>=0&&t.eventsAnyListeners.splice(e,1),t},off(i,t){const e=this;return!e.eventsListeners||e.destroyed||!e.eventsListeners||i.split(" ").forEach(s=>{typeof t>"u"?e.eventsListeners[s]=[]:e.eventsListeners[s]&&e.eventsListeners[s].forEach((n,a)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&e.eventsListeners[s].splice(a,1)})}),e},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let t,e,s;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],e=a.slice(1,a.length),s=i):(t=a[0].events,e=a[0].data,s=a[0].context||i),e.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(c=>{c.apply(s,[l,...e])}),i.eventsListeners&&i.eventsListeners[l]&&i.eventsListeners[l].forEach(c=>{c.apply(s,e)})}),i}};function Oo(){const i=this;let t,e;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?t=i.params.width:t=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?e=i.params.height:e=s.clientHeight,!(t===0&&i.isHorizontal()||e===0&&i.isVertical())&&(t=t-parseInt(zt(s,"padding-left")||0,10)-parseInt(zt(s,"padding-right")||0,10),e=e-parseInt(zt(s,"padding-top")||0,10)-parseInt(zt(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(e)&&(e=0),Object.assign(i,{width:t,height:e,size:i.isHorizontal()?t:e}))}function Do(){const i=this;function t(S,T){return parseFloat(S.getPropertyValue(i.getDirectionLabel(T))||0)}const e=i.params,{wrapperEl:s,slidesEl:n,size:a,rtlTranslate:r,wrongRTL:o}=i,l=i.virtual&&e.virtual.enabled,c=l?i.virtual.slides.length:i.slides.length,d=bt(n,`.${i.params.slideClass}, swiper-slide`),u=l?i.virtual.slides.length:d.length;let h=[];const f=[],g=[];let p=e.slidesOffsetBefore;typeof p=="function"&&(p=e.slidesOffsetBefore.call(i));let v=e.slidesOffsetAfter;typeof v=="function"&&(v=e.slidesOffsetAfter.call(i));const x=i.snapGrid.length,m=i.slidesGrid.length;let b=e.spaceBetween,y=-p,_=0,w=0;if(typeof a>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*a:typeof b=="string"&&(b=parseFloat(b)),i.virtualSize=-b,d.forEach(S=>{r?S.style.marginLeft="":S.style.marginRight="",S.style.marginBottom="",S.style.marginTop=""}),e.centeredSlides&&e.cssMode&&(ti(s,"--swiper-centered-offset-before",""),ti(s,"--swiper-centered-offset-after",""));const E=e.grid&&e.grid.rows>1&&i.grid;E?i.grid.initSlides(d):i.grid&&i.grid.unsetSlides();let M;const k=e.slidesPerView==="auto"&&e.breakpoints&&Object.keys(e.breakpoints).filter(S=>typeof e.breakpoints[S].slidesPerView<"u").length>0;for(let S=0;S<u;S+=1){M=0;let T;if(d[S]&&(T=d[S]),E&&i.grid.updateSlide(S,T,d),!(d[S]&&zt(T,"display")==="none")){if(e.slidesPerView==="auto"){k&&(d[S].style[i.getDirectionLabel("width")]="");const P=getComputedStyle(T),C=T.style.transform,A=T.style.webkitTransform;if(C&&(T.style.transform="none"),A&&(T.style.webkitTransform="none"),e.roundLengths)M=i.isHorizontal()?hs(T,"width",!0):hs(T,"height",!0);else{const O=t(P,"width"),I=t(P,"padding-left"),j=t(P,"padding-right"),D=t(P,"margin-left"),B=t(P,"margin-right"),q=P.getPropertyValue("box-sizing");if(q&&q==="border-box")M=O+D+B;else{const{clientWidth:ft,offsetWidth:mt}=T;M=O+I+j+D+B+(mt-ft)}}C&&(T.style.transform=C),A&&(T.style.webkitTransform=A),e.roundLengths&&(M=Math.floor(M))}else M=(a-(e.slidesPerView-1)*b)/e.slidesPerView,e.roundLengths&&(M=Math.floor(M)),d[S]&&(d[S].style[i.getDirectionLabel("width")]=`${M}px`);d[S]&&(d[S].swiperSlideSize=M),g.push(M),e.centeredSlides?(y=y+M/2+_/2+b,_===0&&S!==0&&(y=y-a/2-b),S===0&&(y=y-a/2-b),Math.abs(y)<1/1e3&&(y=0),e.roundLengths&&(y=Math.floor(y)),w%e.slidesPerGroup===0&&h.push(y),f.push(y)):(e.roundLengths&&(y=Math.floor(y)),(w-Math.min(i.params.slidesPerGroupSkip,w))%i.params.slidesPerGroup===0&&h.push(y),f.push(y),y=y+M+b),i.virtualSize+=M+b,_=M,w+=1}}if(i.virtualSize=Math.max(i.virtualSize,a)+v,r&&o&&(e.effect==="slide"||e.effect==="coverflow")&&(s.style.width=`${i.virtualSize+b}px`),e.setWrapperSize&&(s.style[i.getDirectionLabel("width")]=`${i.virtualSize+b}px`),E&&i.grid.updateWrapperSize(M,h),!e.centeredSlides){const S=[];for(let T=0;T<h.length;T+=1){let P=h[T];e.roundLengths&&(P=Math.floor(P)),h[T]<=i.virtualSize-a&&S.push(P)}h=S,Math.floor(i.virtualSize-a)-Math.floor(h[h.length-1])>1&&h.push(i.virtualSize-a)}if(l&&e.loop){const S=g[0]+b;if(e.slidesPerGroup>1){const T=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/e.slidesPerGroup),P=S*e.slidesPerGroup;for(let C=0;C<T;C+=1)h.push(h[h.length-1]+P)}for(let T=0;T<i.virtual.slidesBefore+i.virtual.slidesAfter;T+=1)e.slidesPerGroup===1&&h.push(h[h.length-1]+S),f.push(f[f.length-1]+S),i.virtualSize+=S}if(h.length===0&&(h=[0]),b!==0){const S=i.isHorizontal()&&r?"marginLeft":i.getDirectionLabel("marginRight");d.filter((T,P)=>!e.cssMode||e.loop?!0:P!==d.length-1).forEach(T=>{T.style[S]=`${b}px`})}if(e.centeredSlides&&e.centeredSlidesBounds){let S=0;g.forEach(P=>{S+=P+(b||0)}),S-=b;const T=S-a;h=h.map(P=>P<=0?-p:P>T?T+v:P)}if(e.centerInsufficientSlides){let S=0;if(g.forEach(T=>{S+=T+(b||0)}),S-=b,S<a){const T=(a-S)/2;h.forEach((P,C)=>{h[C]=P-T}),f.forEach((P,C)=>{f[C]=P+T})}}if(Object.assign(i,{slides:d,snapGrid:h,slidesGrid:f,slidesSizesGrid:g}),e.centeredSlides&&e.cssMode&&!e.centeredSlidesBounds){ti(s,"--swiper-centered-offset-before",`${-h[0]}px`),ti(s,"--swiper-centered-offset-after",`${i.size/2-g[g.length-1]/2}px`);const S=-i.snapGrid[0],T=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(P=>P+S),i.slidesGrid=i.slidesGrid.map(P=>P+T)}if(u!==c&&i.emit("slidesLengthChange"),h.length!==x&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),f.length!==m&&i.emit("slidesGridLengthChange"),e.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!l&&!e.cssMode&&(e.effect==="slide"||e.effect==="fade")){const S=`${e.containerModifierClass}backface-hidden`,T=i.el.classList.contains(S);u<=e.maxBackfaceHiddenSlides?T||i.el.classList.add(S):T&&i.el.classList.remove(S)}}function Io(i){const t=this,e=[],s=t.virtual&&t.params.virtual.enabled;let n=0,a;typeof i=="number"?t.setTransition(i):i===!0&&t.setTransition(t.params.speed);const r=o=>s?t.slides[t.getSlideIndexByData(o)]:t.slides[o];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(o=>{e.push(o)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const o=t.activeIndex+a;if(o>t.slides.length&&!s)break;e.push(r(o))}else e.push(r(t.activeIndex));for(a=0;a<e.length;a+=1)if(typeof e[a]<"u"){const o=e[a].offsetHeight;n=o>n?o:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function Fo(){const i=this,t=i.slides,e=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(i.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-e-i.cssOverflowAdjustment()}function zo(i){i===void 0&&(i=this&&this.translate||0);const t=this,e=t.params,{slides:s,rtlTranslate:n,snapGrid:a}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let r=-i;n&&(r=i),s.forEach(l=>{l.classList.remove(e.slideVisibleClass,e.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=e.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<s.length;l+=1){const c=s[l];let d=c.swiperSlideOffset;e.cssMode&&e.centeredSlides&&(d-=s[0].swiperSlideOffset);const u=(r+(e.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+o),h=(r-a[0]+(e.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+o),f=-(r-d),g=f+t.slidesSizesGrid[l],p=f>=0&&f<=t.size-t.slidesSizesGrid[l];(f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size)&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l),s[l].classList.add(e.slideVisibleClass)),p&&s[l].classList.add(e.slideFullyVisibleClass),c.progress=n?-u:u,c.originalProgress=n?-h:h}}function Ro(i){const t=this;if(typeof i>"u"){const d=t.rtlTranslate?-1:1;i=t&&t.translate&&t.translate*d||0}const e=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:a,isEnd:r,progressLoop:o}=t;const l=a,c=r;if(s===0)n=0,a=!0,r=!0;else{n=(i-t.minTranslate())/s;const d=Math.abs(i-t.minTranslate())<1,u=Math.abs(i-t.maxTranslate())<1;a=d||n<=0,r=u||n>=1,d&&(n=0),u&&(n=1)}if(e.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[d],f=t.slidesGrid[u],g=t.slidesGrid[t.slidesGrid.length-1],p=Math.abs(i);p>=h?o=(p-h)/g:o=(p+g-f)/g,o>1&&(o-=1)}Object.assign(t,{progress:n,progressLoop:o,isBeginning:a,isEnd:r}),(e.watchSlidesProgress||e.centeredSlides&&e.autoHeight)&&t.updateSlidesProgress(i),a&&!l&&t.emit("reachBeginning toEdge"),r&&!c&&t.emit("reachEnd toEdge"),(l&&!a||c&&!r)&&t.emit("fromEdge"),t.emit("progress",n)}function Vo(){const i=this,{slides:t,params:e,slidesEl:s,activeIndex:n}=i,a=i.virtual&&e.virtual.enabled,r=i.grid&&e.grid&&e.grid.rows>1,o=u=>bt(s,`.${e.slideClass}${u}, swiper-slide${u}`)[0];t.forEach(u=>{u.classList.remove(e.slideActiveClass,e.slideNextClass,e.slidePrevClass)});let l,c,d;if(a)if(e.loop){let u=n-i.virtual.slidesBefore;u<0&&(u=i.virtual.slides.length+u),u>=i.virtual.slides.length&&(u-=i.virtual.slides.length),l=o(`[data-swiper-slide-index="${u}"]`)}else l=o(`[data-swiper-slide-index="${n}"]`);else r?(l=t.filter(u=>u.column===n)[0],d=t.filter(u=>u.column===n+1)[0],c=t.filter(u=>u.column===n-1)[0]):l=t[n];l&&(l.classList.add(e.slideActiveClass),r?(d&&d.classList.add(e.slideNextClass),c&&c.classList.add(e.slidePrevClass)):(d=wo(l,`.${e.slideClass}, swiper-slide`)[0],e.loop&&!d&&(d=t[0]),d&&d.classList.add(e.slideNextClass),c=_o(l,`.${e.slideClass}, swiper-slide`)[0],e.loop&&!c===0&&(c=t[t.length-1]),c&&c.classList.add(e.slidePrevClass))),i.emitSlidesClasses()}const _i=(i,t)=>{if(!i||i.destroyed||!i.params)return;const e=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=t.closest(e());if(s){let n=s.querySelector(`.${i.params.lazyPreloaderClass}`);!n&&i.isElement&&(s.shadowRoot?n=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(n=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},Xi=(i,t)=>{if(!i.slides[t])return;const e=i.slides[t].querySelector('[loading="lazy"]');e&&e.removeAttribute("loading")},fs=i=>{if(!i||i.destroyed||!i.params)return;let t=i.params.lazyPreloadPrevNext;const e=i.slides.length;if(!e||!t||t<0)return;t=Math.min(t,e);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),n=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const r=n,o=[r-t];o.push(...Array.from({length:t}).map((l,c)=>r+s+c)),i.slides.forEach((l,c)=>{o.includes(l.column)&&Xi(i,c)});return}const a=n+s-1;if(i.params.rewind||i.params.loop)for(let r=n-t;r<=a+t;r+=1){const o=(r%e+e)%e;(o<n||o>a)&&Xi(i,o)}else for(let r=Math.max(n-t,0);r<=Math.min(a+t,e-1);r+=1)r!==n&&(r>a||r<n)&&Xi(i,r)};function Bo(i){const{slidesGrid:t,params:e}=i,s=i.rtlTranslate?i.translate:-i.translate;let n;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?s>=t[a]&&s<t[a+1]-(t[a+1]-t[a])/2?n=a:s>=t[a]&&s<t[a+1]&&(n=a+1):s>=t[a]&&(n=a);return e.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function No(i){const t=this,e=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:n,activeIndex:a,realIndex:r,snapIndex:o}=t;let l=i,c;const d=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=Bo(t)),s.indexOf(e)>=0)c=s.indexOf(e);else{const f=Math.min(n.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/n.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===a&&!t.params.loop){c!==o&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&n.grid&&n.grid.rows>1;let h;if(t.virtual&&n.virtual.enabled&&n.loop)h=d(l);else if(u){const f=t.slides.filter(p=>p.column===l)[0];let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),h=Math.floor(g/n.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?h=parseInt(f,10):h=l}else h=l;Object.assign(t,{previousSnapIndex:o,snapIndex:c,previousRealIndex:r,realIndex:h,previousIndex:a,activeIndex:l}),t.initialized&&fs(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(r!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function $o(i,t){const e=this,s=e.params;let n=i.closest(`.${s.slideClass}, swiper-slide`);!n&&e.isElement&&t&&t.length>1&&t.includes(i)&&[...t.slice(t.indexOf(i)+1,t.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${s.slideClass}, swiper-slide`)&&(n=o)});let a=!1,r;if(n){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===n){a=!0,r=o;break}}if(n&&a)e.clickedSlide=n,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=r;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}s.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var Ho={updateSize:Oo,updateSlides:Do,updateAutoHeight:Io,updateSlidesOffset:Fo,updateSlidesProgress:zo,updateProgress:Ro,updateSlidesClasses:Vo,updateActiveIndex:No,updateClickedSlide:$o};function jo(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const t=this,{params:e,rtlTranslate:s,translate:n,wrapperEl:a}=t;if(e.virtualTranslate)return s?-n:n;if(e.cssMode)return n;let r=vo(a,i);return r+=t.cssOverflowAdjustment(),s&&(r=-r),r||0}function qo(i,t){const e=this,{rtlTranslate:s,params:n,wrapperEl:a,progress:r}=e;let o=0,l=0;const c=0;e.isHorizontal()?o=s?-i:i:l=i,n.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),e.previousTranslate=e.translate,e.translate=e.isHorizontal()?o:l,n.cssMode?a[e.isHorizontal()?"scrollLeft":"scrollTop"]=e.isHorizontal()?-o:-l:n.virtualTranslate||(e.isHorizontal()?o-=e.cssOverflowAdjustment():l-=e.cssOverflowAdjustment(),a.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let d;const u=e.maxTranslate()-e.minTranslate();u===0?d=0:d=(i-e.minTranslate())/u,d!==r&&e.updateProgress(i),e.emit("setTranslate",e.translate,t)}function Wo(){return-this.snapGrid[0]}function Go(){return-this.snapGrid[this.snapGrid.length-1]}function Yo(i,t,e,s,n){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),s===void 0&&(s=!0);const a=this,{params:r,wrapperEl:o}=a;if(a.animating&&r.preventInteractionOnTransition)return!1;const l=a.minTranslate(),c=a.maxTranslate();let d;if(s&&i>l?d=l:s&&i<c?d=c:d=i,a.updateProgress(d),r.cssMode){const u=a.isHorizontal();if(t===0)o[u?"scrollLeft":"scrollTop"]=-d;else{if(!a.support.smoothScroll)return za({swiper:a,targetPosition:-d,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(d),e&&(a.emit("beforeTransitionStart",t,n),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(d),e&&(a.emit("beforeTransitionStart",t,n),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(h){!a||a.destroyed||h.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,e&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var Xo={getTranslate:jo,setTranslate:qo,minTranslate:Wo,maxTranslate:Go,translateTo:Yo};function Uo(i,t){const e=this;e.params.cssMode||(e.wrapperEl.style.transitionDuration=`${i}ms`,e.wrapperEl.style.transitionDelay=i===0?"0ms":""),e.emit("setTransition",i,t)}function Va(i){let{swiper:t,runCallbacks:e,direction:s,step:n}=i;const{activeIndex:a,previousIndex:r}=t;let o=s;if(o||(a>r?o="next":a<r?o="prev":o="reset"),t.emit(`transition${n}`),e&&a!==r){if(o==="reset"){t.emit(`slideResetTransition${n}`);return}t.emit(`slideChangeTransition${n}`),o==="next"?t.emit(`slideNextTransition${n}`):t.emit(`slidePrevTransition${n}`)}}function Ko(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;s.cssMode||(s.autoHeight&&e.updateAutoHeight(),Va({swiper:e,runCallbacks:i,direction:t,step:"Start"}))}function Zo(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;e.animating=!1,!s.cssMode&&(e.setTransition(0),Va({swiper:e,runCallbacks:i,direction:t,step:"End"}))}var Jo={setTransition:Uo,transitionStart:Ko,transitionEnd:Zo};function Qo(i,t,e,s,n){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const a=this;let r=i;r<0&&(r=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:h,wrapperEl:f,enabled:g}=a;if(a.animating&&o.preventInteractionOnTransition||!g&&!s&&!n)return!1;const p=Math.min(a.params.slidesPerGroupSkip,r);let v=p+Math.floor((r-p)/a.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const x=-l[v];if(o.normalizeSlideIndex)for(let b=0;b<c.length;b+=1){const y=-Math.floor(x*100),_=Math.floor(c[b]*100),w=Math.floor(c[b+1]*100);typeof c[b+1]<"u"?y>=_&&y<w-(w-_)/2?r=b:y>=_&&y<w&&(r=b+1):y>=_&&(r=b)}if(a.initialized&&r!==u&&(!a.allowSlideNext&&(h?x>a.translate&&x>a.minTranslate():x<a.translate&&x<a.minTranslate())||!a.allowSlidePrev&&x>a.translate&&x>a.maxTranslate()&&(u||0)!==r))return!1;r!==(d||0)&&e&&a.emit("beforeSlideChangeStart"),a.updateProgress(x);let m;if(r>u?m="next":r<u?m="prev":m="reset",h&&-x===a.translate||!h&&x===a.translate)return a.updateActiveIndex(r),o.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),o.effect!=="slide"&&a.setTranslate(x),m!=="reset"&&(a.transitionStart(e,m),a.transitionEnd(e,m)),!1;if(o.cssMode){const b=a.isHorizontal(),y=h?x:-x;if(t===0){const _=a.virtual&&a.params.virtual.enabled;_&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),_&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[b?"scrollLeft":"scrollTop"]=y})):f[b?"scrollLeft":"scrollTop"]=y,_&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1})}else{if(!a.support.smoothScroll)return za({swiper:a,targetPosition:y,side:b?"left":"top"}),!0;f.scrollTo({[b?"left":"top"]:y,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(x),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(e,m),t===0?a.transitionEnd(e,m):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(y){!a||a.destroyed||y.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(e,m))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function tl(i,t,e,s){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this,a=n.grid&&n.params.grid&&n.params.grid.rows>1;let r=i;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)r=r+n.virtual.slidesBefore;else{let o;if(a){const h=r*n.params.grid.rows;o=n.slides.filter(f=>f.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=n.getSlideIndexByData(r);const l=a?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c}=n.params;let d=n.params.slidesPerView;d==="auto"?d=n.slidesPerViewDynamic():(d=Math.ceil(parseFloat(n.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-o<d;if(c&&(u=u||o<Math.ceil(d/2)),u){const h=c?o<n.activeIndex?"prev":"next":o-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?o+1:o-l+1,slideRealIndex:h==="next"?n.realIndex:void 0})}if(a){const h=r*n.params.grid.rows;r=n.slides.filter(f=>f.getAttribute("data-swiper-slide-index")*1===h)[0].column}else r=n.getSlideIndexByData(r)}return requestAnimationFrame(()=>{n.slideTo(r,t,e,s)}),n}function el(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{enabled:n,params:a,animating:r}=s;if(!n)return s;let o=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(o=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<a.slidesPerGroupSkip?1:o,c=s.virtual&&a.virtual.enabled;if(a.loop){if(r&&!c&&a.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,i,t,e)}),!0}return a.rewind&&s.isEnd?s.slideTo(0,i,t,e):s.slideTo(s.activeIndex+l,i,t,e)}function il(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{params:n,snapGrid:a,slidesGrid:r,rtlTranslate:o,enabled:l,animating:c}=s;if(!l)return s;const d=s.virtual&&n.virtual.enabled;if(n.loop){if(c&&!d&&n.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const u=o?s.translate:-s.translate;function h(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const f=h(u),g=a.map(x=>h(x));let p=a[g.indexOf(f)-1];if(typeof p>"u"&&n.cssMode){let x;a.forEach((m,b)=>{f>=m&&(x=b)}),typeof x<"u"&&(p=a[x>0?x-1:x])}let v=0;if(typeof p<"u"&&(v=r.indexOf(p),v<0&&(v=s.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(v=v-s.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),n.rewind&&s.isBeginning){const x=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(x,i,t,e)}else if(n.loop&&s.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(v,i,t,e)}),!0;return s.slideTo(v,i,t,e)}function sl(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this;return s.slideTo(s.activeIndex,i,t,e)}function nl(i,t,e,s){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=.5);const n=this;let a=n.activeIndex;const r=Math.min(n.params.slidesPerGroupSkip,a),o=r+Math.floor((a-r)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[o]){const c=n.snapGrid[o],d=n.snapGrid[o+1];l-c>(d-c)*s&&(a+=n.params.slidesPerGroup)}else{const c=n.snapGrid[o-1],d=n.snapGrid[o];l-c<=(d-c)*s&&(a-=n.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,n.slidesGrid.length-1),n.slideTo(a,i,t,e)}function al(){const i=this,{params:t,slidesEl:e}=i,s=t.slidesPerView==="auto"?i.slidesPerViewDynamic():t.slidesPerView;let n=i.clickedIndex,a;const r=i.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(i.animating)return;a=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?n<i.loopedSlides-s/2||n>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),n=i.getSlideIndex(bt(e,`${r}[data-swiper-slide-index="${a}"]`)[0]),$e(()=>{i.slideTo(n)})):i.slideTo(n):n>i.slides.length-s?(i.loopFix(),n=i.getSlideIndex(bt(e,`${r}[data-swiper-slide-index="${a}"]`)[0]),$e(()=>{i.slideTo(n)})):i.slideTo(n)}else i.slideTo(n)}var rl={slideTo:Qo,slideToLoop:tl,slideNext:el,slidePrev:il,slideReset:sl,slideToClosest:nl,slideToClickedSlide:al};function ol(i){const t=this,{params:e,slidesEl:s}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;const n=()=>{bt(s,`.${e.slideClass}, swiper-slide`).forEach((u,h)=>{u.setAttribute("data-swiper-slide-index",h)})},a=t.grid&&e.grid&&e.grid.rows>1,r=e.slidesPerGroup*(a?e.grid.rows:1),o=t.slides.length%r!==0,l=a&&t.slides.length%e.grid.rows!==0,c=d=>{for(let u=0;u<d;u+=1){const h=t.isElement?He("swiper-slide",[e.slideBlankClass]):He("div",[e.slideClass,e.slideBlankClass]);t.slidesEl.append(h)}};if(o){if(e.loopAddBlankSlides){const d=r-t.slides.length%r;c(d),t.recalcSlides(),t.updateSlides()}else Li("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(l){if(e.loopAddBlankSlides){const d=e.grid.rows-t.slides.length%e.grid.rows;c(d),t.recalcSlides(),t.updateSlides()}else Li("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();t.loopFix({slideRealIndex:i,direction:e.centeredSlides?void 0:"next"})}function ll(i){let{slideRealIndex:t,slideTo:e=!0,direction:s,setTranslate:n,activeSlideIndex:a,byController:r,byMousewheel:o}=i===void 0?{}:i;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:h,params:f}=l,{centeredSlides:g}=f;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){e&&(!f.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):f.centeredSlides&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let p=f.slidesPerView;p==="auto"?p=l.slidesPerViewDynamic():(p=Math.ceil(parseFloat(f.slidesPerView,10)),g&&p%2===0&&(p=p+1));const v=f.slidesPerGroupAuto?p:f.slidesPerGroup;let x=v;x%v!==0&&(x+=v-x%v),x+=f.loopAdditionalSlides,l.loopedSlides=x;const m=l.grid&&f.grid&&f.grid.rows>1;c.length<p+x?Li("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):m&&f.grid.fill==="row"&&Li("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const b=[],y=[];let _=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(c.filter(C=>C.classList.contains(f.slideActiveClass))[0]):_=a;const w=s==="next"||!s,E=s==="prev"||!s;let M=0,k=0;const S=m?Math.ceil(c.length/f.grid.rows):c.length,P=(m?c[a].column:a)+(g&&typeof n>"u"?-p/2+.5:0);if(P<x){M=Math.max(x-P,v);for(let C=0;C<x-P;C+=1){const A=C-Math.floor(C/S)*S;if(m){const O=S-A-1;for(let I=c.length-1;I>=0;I-=1)c[I].column===O&&b.push(I)}else b.push(S-A-1)}}else if(P+p>S-x){k=Math.max(P-(S-x*2),v);for(let C=0;C<k;C+=1){const A=C-Math.floor(C/S)*S;m?c.forEach((O,I)=>{O.column===A&&y.push(I)}):y.push(A)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),E&&b.forEach(C=>{c[C].swiperLoopMoveDOM=!0,h.prepend(c[C]),c[C].swiperLoopMoveDOM=!1}),w&&y.forEach(C=>{c[C].swiperLoopMoveDOM=!0,h.append(c[C]),c[C].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():m&&(b.length>0&&E||y.length>0&&w)&&l.slides.forEach((C,A)=>{l.grid.updateSlide(A,C,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),e){if(b.length>0&&E){if(typeof t>"u"){const C=l.slidesGrid[_],O=l.slidesGrid[_+M]-C;o?l.setTranslate(l.translate-O):(l.slideTo(_+M,0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-O,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-O))}else if(n){const C=m?b.length/f.grid.rows:b.length;l.slideTo(l.activeIndex+C,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(y.length>0&&w)if(typeof t>"u"){const C=l.slidesGrid[_],O=l.slidesGrid[_-k]-C;o?l.setTranslate(l.translate-O):(l.slideTo(_-k,0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-O,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-O))}else{const C=m?y.length/f.grid.rows:y.length;l.slideTo(l.activeIndex-C,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!r){const C={slideRealIndex:t,direction:s,setTranslate:n,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(A=>{!A.destroyed&&A.params.loop&&A.loopFix({...C,slideTo:A.params.slidesPerView===f.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...C,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?e:!1})}l.emit("loopFix")}function cl(){const i=this,{params:t,slidesEl:e}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(n=>{const a=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;s[a]=n}),i.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),s.forEach(n=>{e.append(n)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var dl={loopCreate:ol,loopFix:ll,loopDestroy:cl};function ul(i){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const e=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),e.style.cursor="move",e.style.cursor=i?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function hl(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var fl={setGrabCursor:ul,unsetGrabCursor:hl};function pl(i,t){t===void 0&&(t=this);function e(s){if(!s||s===gt()||s===et())return null;s.assignedSlot&&(s=s.assignedSlot);const n=s.closest(i);return!n&&!s.getRootNode?null:n||e(s.getRootNode().host)}return e(t)}function nn(i,t,e){const s=et(),{params:n}=i,a=n.edgeSwipeDetection,r=n.edgeSwipeThreshold;return a&&(e<=r||e>=s.innerWidth-r)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function gl(i){const t=this,e=gt();let s=i;s.originalEvent&&(s=s.originalEvent);const n=t.touchEventsData;if(s.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==s.pointerId)return;n.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(n.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){nn(t,s,s.targetTouches[0].pageX);return}const{params:a,touches:r,enabled:o}=t;if(!o||!a.simulateTouch&&s.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=s.target;if(a.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in s&&s.which===3||"button"in s&&s.button>0||n.isTouched&&n.isMoved)return;const c=!!a.noSwipingClass&&a.noSwipingClass!=="",d=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&d&&(l=d[0]);const u=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,h=!!(s.target&&s.target.shadowRoot);if(a.noSwiping&&(h?pl(u,l):l.closest(u))){t.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;r.currentX=s.pageX,r.currentY=s.pageY;const f=r.currentX,g=r.currentY;if(!nn(t,s,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=f,r.startY=g,n.touchStartTime=Pt(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(n.allowThresholdMove=!1);let p=!0;l.matches(n.focusableElements)&&(p=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==l&&e.activeElement.blur();const v=p&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||v)&&!l.isContentEditable&&s.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function ml(i){const t=gt(),e=this,s=e.touchEventsData,{params:n,touches:a,rtlTranslate:r,enabled:o}=e;if(!o||!n.simulateTouch&&i.pointerType==="mouse")return;let l=i;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(s.touchId!==null||l.pointerId!==s.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(w=>w.identifier===s.touchId)[0],!c||c.identifier!==s.touchId)return}else c=l;if(!s.isTouched){s.startMoving&&s.isScrolling&&e.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){a.startX=d,a.startY=u;return}if(!e.allowTouchMove){l.target.matches(s.focusableElements)||(e.allowClick=!1),s.isTouched&&(Object.assign(a,{startX:d,startY:u,currentX:d,currentY:u}),s.touchStartTime=Pt());return}if(n.touchReleaseOnEdges&&!n.loop){if(e.isVertical()){if(u<a.startY&&e.translate<=e.maxTranslate()||u>a.startY&&e.translate>=e.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(d<a.startX&&e.translate<=e.maxTranslate()||d>a.startX&&e.translate>=e.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,e.allowClick=!1;return}s.allowTouchCallbacks&&e.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=d,a.currentY=u;const h=a.currentX-a.startX,f=a.currentY-a.startY;if(e.params.threshold&&Math.sqrt(h**2+f**2)<e.params.threshold)return;if(typeof s.isScrolling>"u"){let w;e.isHorizontal()&&a.currentY===a.startY||e.isVertical()&&a.currentX===a.startX?s.isScrolling=!1:h*h+f*f>=25&&(w=Math.atan2(Math.abs(f),Math.abs(h))*180/Math.PI,s.isScrolling=e.isHorizontal()?w>n.touchAngle:90-w>n.touchAngle)}if(s.isScrolling&&e.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(s.startMoving=!0),s.isScrolling){s.isTouched=!1;return}if(!s.startMoving)return;e.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let g=e.isHorizontal()?h:f,p=e.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;n.oneWayMovement&&(g=Math.abs(g)*(r?1:-1),p=Math.abs(p)*(r?1:-1)),a.diff=g,g*=n.touchRatio,r&&(g=-g,p=-p);const v=e.touchesDirection;e.swipeDirection=g>0?"prev":"next",e.touchesDirection=p>0?"prev":"next";const x=e.params.loop&&!n.cssMode,m=e.touchesDirection==="next"&&e.allowSlideNext||e.touchesDirection==="prev"&&e.allowSlidePrev;if(!s.isMoved){if(x&&m&&e.loopFix({direction:e.swipeDirection}),s.startTranslate=e.getTranslate(),e.setTransition(0),e.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(w)}s.allowMomentumBounce=!1,n.grabCursor&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!0),e.emit("sliderFirstMove",l)}let b;if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&v!==e.touchesDirection&&x&&m&&Math.abs(g)>=1){Object.assign(a,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}e.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=g+s.startTranslate;let y=!0,_=n.resistanceRatio;if(n.touchReleaseOnEdges&&(_=0),g>0?(x&&m&&!b&&s.allowThresholdMove&&s.currentTranslate>(n.centeredSlides?e.minTranslate()-e.slidesSizesGrid[e.activeIndex+1]:e.minTranslate())&&e.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>e.minTranslate()&&(y=!1,n.resistance&&(s.currentTranslate=e.minTranslate()-1+(-e.minTranslate()+s.startTranslate+g)**_))):g<0&&(x&&m&&!b&&s.allowThresholdMove&&s.currentTranslate<(n.centeredSlides?e.maxTranslate()+e.slidesSizesGrid[e.slidesSizesGrid.length-1]:e.maxTranslate())&&e.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:e.slides.length-(n.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<e.maxTranslate()&&(y=!1,n.resistance&&(s.currentTranslate=e.maxTranslate()+1-(e.maxTranslate()-s.startTranslate-g)**_))),y&&(l.preventedByNestedSwiper=!0),!e.allowSlideNext&&e.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&e.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&!e.allowSlideNext&&(s.currentTranslate=s.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,s.currentTranslate=s.startTranslate,a.diff=e.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{s.currentTranslate=s.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&e.freeMode||n.watchSlidesProgress)&&(e.updateActiveIndex(),e.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.freeMode.onTouchMove(),e.updateProgress(s.currentTranslate),e.setTranslate(s.currentTranslate))}function bl(i){const t=this,e=t.touchEventsData;let s=i;s.originalEvent&&(s=s.originalEvent);let n;if(s.type==="touchend"||s.type==="touchcancel"){if(n=[...s.changedTouches].filter(_=>_.identifier===e.touchId)[0],!n||n.identifier!==e.touchId)return}else{if(e.touchId!==null||s.pointerId!==e.pointerId)return;n=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(t.browser.isSafari||t.browser.isWebView)))return;e.pointerId=null,e.touchId=null;const{params:r,touches:o,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!r.simulateTouch&&s.pointerType==="mouse")return;if(e.allowTouchCallbacks&&t.emit("touchEnd",s),e.allowTouchCallbacks=!1,!e.isTouched){e.isMoved&&r.grabCursor&&t.setGrabCursor(!1),e.isMoved=!1,e.startMoving=!1;return}r.grabCursor&&e.isMoved&&e.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Pt(),h=u-e.touchStartTime;if(t.allowClick){const _=s.path||s.composedPath&&s.composedPath();t.updateClickedSlide(_&&_[0]||s.target,_),t.emit("tap click",s),h<300&&u-e.lastClickTime<300&&t.emit("doubleTap doubleClick",s)}if(e.lastClickTime=Pt(),$e(()=>{t.destroyed||(t.allowClick=!0)}),!e.isTouched||!e.isMoved||!t.swipeDirection||o.diff===0&&!e.loopSwapReset||e.currentTranslate===e.startTranslate&&!e.loopSwapReset){e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;return}e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;let f;if(r.followFinger?f=l?t.translate:-t.translate:f=-e.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let p=0,v=t.slidesSizesGrid[0];for(let _=0;_<c.length;_+=_<r.slidesPerGroupSkip?1:r.slidesPerGroup){const w=_<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof c[_+w]<"u"?(g||f>=c[_]&&f<c[_+w])&&(p=_,v=c[_+w]-c[_]):(g||f>=c[_])&&(p=_,v=c[c.length-1]-c[c.length-2])}let x=null,m=null;r.rewind&&(t.isBeginning?m=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(x=0));const b=(f-c[p])/v,y=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(h>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?x:p+y):t.slideTo(p)),t.swipeDirection==="prev"&&(b>1-r.longSwipesRatio?t.slideTo(p+y):m!==null&&b<0&&Math.abs(b)>r.longSwipesRatio?t.slideTo(m):t.slideTo(p))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(s.target===t.navigation.nextEl||s.target===t.navigation.prevEl)?s.target===t.navigation.nextEl?t.slideTo(p+y):t.slideTo(p):(t.swipeDirection==="next"&&t.slideTo(x!==null?x:p+y),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:p))}}function an(){const i=this,{params:t,el:e}=i;if(e&&e.offsetWidth===0)return;t.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:n,snapGrid:a}=i,r=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const o=r&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!o?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!r?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=n,i.allowSlideNext=s,i.params.watchOverflow&&a!==i.snapGrid&&i.checkOverflow()}function vl(i){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&i.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function xl(){const i=this,{wrapperEl:t,rtlTranslate:e,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-t.scrollLeft:i.translate=-t.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let n;const a=i.maxTranslate()-i.minTranslate();a===0?n=0:n=(i.translate-i.minTranslate())/a,n!==i.progress&&i.updateProgress(e?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function yl(i){const t=this;_i(t,i.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function _l(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Ba=(i,t)=>{const e=gt(),{params:s,el:n,wrapperEl:a,device:r}=i,o=!!s.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;e[l]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:o}),n[l]("touchstart",i.onTouchStart,{passive:!1}),n[l]("pointerdown",i.onTouchStart,{passive:!1}),e[l]("touchmove",i.onTouchMove,{passive:!1,capture:o}),e[l]("pointermove",i.onTouchMove,{passive:!1,capture:o}),e[l]("touchend",i.onTouchEnd,{passive:!0}),e[l]("pointerup",i.onTouchEnd,{passive:!0}),e[l]("pointercancel",i.onTouchEnd,{passive:!0}),e[l]("touchcancel",i.onTouchEnd,{passive:!0}),e[l]("pointerout",i.onTouchEnd,{passive:!0}),e[l]("pointerleave",i.onTouchEnd,{passive:!0}),e[l]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&n[l]("click",i.onClick,!0),s.cssMode&&a[l]("scroll",i.onScroll),s.updateOnWindowResize?i[c](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",an,!0):i[c]("observerUpdate",an,!0),n[l]("load",i.onLoad,{capture:!0})};function wl(){const i=this,{params:t}=i;i.onTouchStart=gl.bind(i),i.onTouchMove=ml.bind(i),i.onTouchEnd=bl.bind(i),i.onDocumentTouchStart=_l.bind(i),t.cssMode&&(i.onScroll=xl.bind(i)),i.onClick=vl.bind(i),i.onLoad=yl.bind(i),Ba(i,"on")}function Sl(){Ba(this,"off")}var Ml={attachEvents:wl,detachEvents:Sl};const rn=(i,t)=>i.grid&&t.grid&&t.grid.rows>1;function Tl(){const i=this,{realIndex:t,initialized:e,params:s,el:n}=i,a=s.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const r=i.getBreakpoint(a,i.params.breakpointsBase,i.el);if(!r||i.currentBreakpoint===r)return;const l=(r in a?a[r]:void 0)||i.originalParams,c=rn(i,s),d=rn(i,l),u=s.enabled;c&&!d?(n.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!c&&d&&(n.classList.add(`${s.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&s.grid.fill==="column")&&n.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(x=>{if(typeof l[x]>"u")return;const m=s[x]&&s[x].enabled,b=l[x]&&l[x].enabled;m&&!b&&i[x].disable(),!m&&b&&i[x].enable()});const h=l.direction&&l.direction!==s.direction,f=s.loop&&(l.slidesPerView!==s.slidesPerView||h),g=s.loop;h&&e&&i.changeDirection(),dt(i.params,l);const p=i.params.enabled,v=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),u&&!p?i.disable():!u&&p&&i.enable(),i.currentBreakpoint=r,i.emit("_beforeBreakpoint",l),e&&(f?(i.loopDestroy(),i.loopCreate(t),i.updateSlides()):!g&&v?(i.loopCreate(t),i.updateSlides()):g&&!v&&i.loopDestroy()),i.emit("breakpoint",l)}function kl(i,t,e){if(t===void 0&&(t="window"),!i||t==="container"&&!e)return;let s=!1;const n=et(),a=t==="window"?n.innerHeight:e.clientHeight,r=Object.keys(i).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:a*l,point:o}}return{value:o,point:o}});r.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<r.length;o+=1){const{point:l,value:c}=r[o];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=e.clientWidth&&(s=l)}return s||"max"}var Cl={setBreakpoint:Tl,getBreakpoint:kl};function El(i,t){const e=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(n=>{s[n]&&e.push(t+n)}):typeof s=="string"&&e.push(t+s)}),e}function Ll(){const i=this,{classNames:t,params:e,rtl:s,el:n,device:a}=i,r=El(["initialized",e.direction,{"free-mode":i.params.freeMode&&e.freeMode.enabled},{autoheight:e.autoHeight},{rtl:s},{grid:e.grid&&e.grid.rows>1},{"grid-column":e.grid&&e.grid.rows>1&&e.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":e.cssMode},{centered:e.cssMode&&e.centeredSlides},{"watch-progress":e.watchSlidesProgress}],e.containerModifierClass);t.push(...r),n.classList.add(...t),i.emitContainerClasses()}function Pl(){const i=this,{el:t,classNames:e}=i;t.classList.remove(...e),i.emitContainerClasses()}var Al={addClasses:Ll,removeClasses:Pl};function Ol(){const i=this,{isLocked:t,params:e}=i,{slidesOffsetBefore:s}=e;if(s){const n=i.slides.length-1,a=i.slidesGrid[n]+i.slidesSizesGrid[n]+s*2;i.isLocked=i.size>a}else i.isLocked=i.snapGrid.length===1;e.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),e.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),t&&t!==i.isLocked&&(i.isEnd=!1),t!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Dl={checkOverflow:Ol},on={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Il(i,t){return function(s){s===void 0&&(s={});const n=Object.keys(s)[0],a=s[n];if(typeof a!="object"||a===null){dt(t,s);return}if(i[n]===!0&&(i[n]={enabled:!0}),n==="navigation"&&i[n]&&i[n].enabled&&!i[n].prevEl&&!i[n].nextEl&&(i[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&i[n]&&i[n].enabled&&!i[n].el&&(i[n].auto=!0),!(n in i&&"enabled"in a)){dt(t,s);return}typeof i[n]=="object"&&!("enabled"in i[n])&&(i[n].enabled=!0),i[n]||(i[n]={enabled:!1}),dt(t,s)}}const Ui={eventsEmitter:Ao,update:Ho,translate:Xo,transition:Jo,slide:rl,loop:dl,grabCursor:fl,events:Ml,breakpoints:Cl,checkOverflow:Dl,classes:Al},Ki={};class ct{constructor(){let t,e;for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?e=n[0]:[t,e]=n,e||(e={}),e=dt({},e),t&&!e.el&&(e.el=t);const r=gt();if(e.el&&typeof e.el=="string"&&r.querySelectorAll(e.el).length>1){const d=[];return r.querySelectorAll(e.el).forEach(u=>{const h=dt({},e,{el:u});d.push(new ct(h))}),d}const o=this;o.__swiper__=!0,o.support=Ra(),o.device=ko({userAgent:e.userAgent}),o.browser=Eo(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],e.modules&&Array.isArray(e.modules)&&o.modules.push(...e.modules);const l={};o.modules.forEach(d=>{d({params:e,swiper:o,extendParams:Il(e,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=dt({},on,l);return o.params=dt({},c,Ki,e),o.originalParams=dt({},o.params),o.passedParams=dt({},e),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:e,params:s}=this,n=bt(e,`.${s.slideClass}, swiper-slide`),a=Pi(n[0]);return Pi(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(e=>e.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:e,params:s}=t;t.slides=bt(e,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,e){const s=this;t=Math.min(Math.max(t,0),1);const n=s.minTranslate(),r=(s.maxTranslate()-n)*t+n;s.translateTo(r,typeof e>"u"?0:e),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",e.join(" "))}getSlideClasses(t){const e=this;return e.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(e.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=[];t.slides.forEach(s=>{const n=t.getSlideClasses(s);e.push({slideEl:s,classNames:n}),t.emit("_slideClass",s,n)}),t.emit("_slideClasses",e)}slidesPerViewDynamic(t,e){t===void 0&&(t="current"),e===void 0&&(e=!1);const s=this,{params:n,slides:a,slidesGrid:r,slidesSizesGrid:o,size:l,activeIndex:c}=s;let d=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let u=a[c]?a[c].swiperSlideSize:0,h;for(let f=c+1;f<a.length;f+=1)a[f]&&!h&&(u+=a[f].swiperSlideSize,d+=1,u>l&&(h=!0));for(let f=c-1;f>=0;f-=1)a[f]&&!h&&(u+=a[f].swiperSlideSize,d+=1,u>l&&(h=!0))}else if(t==="current")for(let u=c+1;u<a.length;u+=1)(e?r[u]+o[u]-r[c]<l:r[u]-r[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)r[c]-r[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:e,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete&&_i(t,r)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const r=t.rtlTranslate?t.translate*-1:t.translate,o=Math.min(Math.max(r,t.maxTranslate()),t.minTranslate());t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)n(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const r=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(r.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||n()}s.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,e){e===void 0&&(e=!0);const s=this,n=s.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),s.emit("changeDirection"),e&&s.update()),s}changeLanguageDirection(t){const e=this;e.rtl&&t==="rtl"||!e.rtl&&t==="ltr"||(e.rtl=t==="rtl",e.rtlTranslate=e.params.direction==="horizontal"&&e.rtl,e.rtl?(e.el.classList.add(`${e.params.containerModifierClass}rtl`),e.el.dir="rtl"):(e.el.classList.remove(`${e.params.containerModifierClass}rtl`),e.el.dir="ltr"),e.update())}mount(t){const e=this;if(e.mounted)return!0;let s=t||e.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=e,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(e.isElement=!0);const n=()=>`.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(n()):bt(s,n())[0];return!r&&e.params.createElements&&(r=He("div",e.params.wrapperClass),s.append(r),bt(s,`.${e.params.slideClass}`).forEach(o=>{r.append(o)})),Object.assign(e,{el:s,wrapperEl:r,slidesEl:e.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:r,hostEl:e.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||zt(s,"direction")==="rtl",rtlTranslate:e.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||zt(s,"direction")==="rtl"),wrongRTL:zt(r,"display")==="-webkit-box"}),!0}init(t){const e=this;if(e.initialized||e.mount(t)===!1)return e;e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.enabled&&e.setGrabCursor(),e.params.loop&&e.virtual&&e.params.virtual.enabled?e.slideTo(e.params.initialSlide+e.virtual.slidesBefore,0,e.params.runCallbacksOnInit,!1,!0):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit,!1,!0),e.params.loop&&e.loopCreate(),e.attachEvents();const n=[...e.el.querySelectorAll('[loading="lazy"]')];return e.isElement&&n.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(a=>{a.complete?_i(e,a):a.addEventListener("load",r=>{_i(e,r.target)})}),fs(e),e.initialized=!0,fs(e),e.emit("init"),e.emit("afterInit"),e}destroy(t,e){t===void 0&&(t=!0),e===void 0&&(e=!0);const s=this,{params:n,el:a,wrapperEl:r,slides:o}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),n.loop&&s.loopDestroy(),e&&(s.removeClasses(),a.removeAttribute("style"),r.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),t!==!1&&(s.el.swiper=null,mo(s)),s.destroyed=!0),null}static extendDefaults(t){dt(Ki,t)}static get extendedDefaults(){return Ki}static get defaults(){return on}static installModule(t){ct.prototype.__modules__||(ct.prototype.__modules__=[]);const e=ct.prototype.__modules__;typeof t=="function"&&e.indexOf(t)<0&&e.push(t)}static use(t){return Array.isArray(t)?(t.forEach(e=>ct.installModule(e)),ct):(ct.installModule(t),ct)}}Object.keys(Ui).forEach(i=>{Object.keys(Ui[i]).forEach(t=>{ct.prototype[t]=Ui[i][t]})});ct.use([Lo,Po]);function Na(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a=gt(),r=et();t.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(d){if(!t.enabled)return;const{rtlTranslate:u}=t;let h=d;h.originalEvent&&(h=h.originalEvent);const f=h.keyCode||h.charCode,g=t.params.keyboard.pageUpDown,p=g&&f===33,v=g&&f===34,x=f===37,m=f===39,b=f===38,y=f===40;if(!t.allowSlideNext&&(t.isHorizontal()&&m||t.isVertical()&&y||v)||!t.allowSlidePrev&&(t.isHorizontal()&&x||t.isVertical()&&b||p))return!1;if(!(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)&&!(a.activeElement&&a.activeElement.nodeName&&(a.activeElement.nodeName.toLowerCase()==="input"||a.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(p||v||x||m||b||y)){let _=!1;if(Ai(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&Ai(t.el,`.${t.params.slideActiveClass}`).length===0)return;const w=t.el,E=w.clientWidth,M=w.clientHeight,k=r.innerWidth,S=r.innerHeight,T=yo(w);u&&(T.left-=w.scrollLeft);const P=[[T.left,T.top],[T.left+E,T.top],[T.left,T.top+M],[T.left+E,T.top+M]];for(let C=0;C<P.length;C+=1){const A=P[C];if(A[0]>=0&&A[0]<=k&&A[1]>=0&&A[1]<=S){if(A[0]===0&&A[1]===0)continue;_=!0}}if(!_)return}t.isHorizontal()?((p||v||x||m)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),((v||m)&&!u||(p||x)&&u)&&t.slideNext(),((p||x)&&!u||(v||m)&&u)&&t.slidePrev()):((p||v||b||y)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),(v||y)&&t.slideNext(),(p||b)&&t.slidePrev()),n("keyPress",f)}}function l(){t.keyboard.enabled||(a.addEventListener("keydown",o),t.keyboard.enabled=!0)}function c(){t.keyboard.enabled&&(a.removeEventListener("keydown",o),t.keyboard.enabled=!1)}s("init",()=>{t.params.keyboard.enabled&&l()}),s("destroy",()=>{t.keyboard.enabled&&c()}),Object.assign(t.keyboard,{enable:l,disable:c})}function Fl(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a=et();e({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let r,o=Pt(),l;const c=[];function d(b){let E=0,M=0,k=0,S=0;return"detail"in b&&(M=b.detail),"wheelDelta"in b&&(M=-b.wheelDelta/120),"wheelDeltaY"in b&&(M=-b.wheelDeltaY/120),"wheelDeltaX"in b&&(E=-b.wheelDeltaX/120),"axis"in b&&b.axis===b.HORIZONTAL_AXIS&&(E=M,M=0),k=E*10,S=M*10,"deltaY"in b&&(S=b.deltaY),"deltaX"in b&&(k=b.deltaX),b.shiftKey&&!k&&(k=S,S=0),(k||S)&&b.deltaMode&&(b.deltaMode===1?(k*=40,S*=40):(k*=800,S*=800)),k&&!E&&(E=k<1?-1:1),S&&!M&&(M=S<1?-1:1),{spinX:E,spinY:M,pixelX:k,pixelY:S}}function u(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(b){return t.params.mousewheel.thresholdDelta&&b.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&Pt()-o<t.params.mousewheel.thresholdTime?!1:b.delta>=6&&Pt()-o<60?!0:(b.direction<0?(!t.isEnd||t.params.loop)&&!t.animating&&(t.slideNext(),n("scroll",b.raw)):(!t.isBeginning||t.params.loop)&&!t.animating&&(t.slidePrev(),n("scroll",b.raw)),o=new a.Date().getTime(),!1)}function g(b){const y=t.params.mousewheel;if(b.direction<0){if(t.isEnd&&!t.params.loop&&y.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&y.releaseOnEdges)return!0;return!1}function p(b){let y=b,_=!0;if(!t.enabled||b.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const w=t.params.mousewheel;t.params.cssMode&&y.preventDefault();let E=t.el;t.params.mousewheel.eventsTarget!=="container"&&(E=document.querySelector(t.params.mousewheel.eventsTarget));const M=E&&E.contains(y.target);if(!t.mouseEntered&&!M&&!w.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let k=0;const S=t.rtlTranslate?-1:1,T=d(y);if(w.forceToAxis)if(t.isHorizontal())if(Math.abs(T.pixelX)>Math.abs(T.pixelY))k=-T.pixelX*S;else return!0;else if(Math.abs(T.pixelY)>Math.abs(T.pixelX))k=-T.pixelY;else return!0;else k=Math.abs(T.pixelX)>Math.abs(T.pixelY)?-T.pixelX*S:-T.pixelY;if(k===0)return!0;w.invert&&(k=-k);let P=t.getTranslate()+k*w.sensitivity;if(P>=t.minTranslate()&&(P=t.minTranslate()),P<=t.maxTranslate()&&(P=t.maxTranslate()),_=t.params.loop?!0:!(P===t.minTranslate()||P===t.maxTranslate()),_&&t.params.nested&&y.stopPropagation(),!t.params.freeMode||!t.params.freeMode.enabled){const C={time:Pt(),delta:Math.abs(k),direction:Math.sign(k),raw:b};c.length>=2&&c.shift();const A=c.length?c[c.length-1]:void 0;if(c.push(C),A?(C.direction!==A.direction||C.delta>A.delta||C.time>A.time+150)&&f(C):f(C),g(C))return!0}else{const C={time:Pt(),delta:Math.abs(k),direction:Math.sign(k)},A=l&&C.time<l.time+500&&C.delta<=l.delta&&C.direction===l.direction;if(!A){l=void 0;let O=t.getTranslate()+k*w.sensitivity;const I=t.isBeginning,j=t.isEnd;if(O>=t.minTranslate()&&(O=t.minTranslate()),O<=t.maxTranslate()&&(O=t.maxTranslate()),t.setTransition(0),t.setTranslate(O),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!I&&t.isBeginning||!j&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:C.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(r),r=void 0,c.length>=15&&c.shift();const D=c.length?c[c.length-1]:void 0,B=c[0];if(c.push(C),D&&(C.delta>D.delta||C.direction!==D.direction))c.splice(0);else if(c.length>=15&&C.time-B.time<500&&B.delta-C.delta>=1&&C.delta<=6){const q=k>0?.8:.2;l=C,c.splice(0),r=$e(()=>{t.slideToClosest(t.params.speed,!0,void 0,q)},0)}r||(r=$e(()=>{l=C,c.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)},500))}if(A||n("scroll",y),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),w.releaseOnEdges&&(O===t.minTranslate()||O===t.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function v(b){let y=t.el;t.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(t.params.mousewheel.eventsTarget)),y[b]("mouseenter",u),y[b]("mouseleave",h),y[b]("wheel",p)}function x(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",p),!0):t.mousewheel.enabled?!1:(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function m(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,p),!0):t.mousewheel.enabled?(v("removeEventListener"),t.mousewheel.enabled=!1,!0):!1}s("init",()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&m(),t.params.mousewheel.enabled&&x()}),s("destroy",()=>{t.params.cssMode&&x(),t.mousewheel.enabled&&m()}),Object.assign(t.mousewheel,{enable:x,disable:m})}function $a(i,t,e,s){return i.params.createElements&&Object.keys(s).forEach(n=>{if(!e[n]&&e.auto===!0){let a=bt(i.el,`.${s[n]}`)[0];a||(a=He("div",s[n]),a.className=s[n],i.el.append(a)),e[n]=a,t[n]=a}}),e}function zl(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const a=p=>(Array.isArray(p)?p:[p]).filter(v=>!!v);function r(p){let v;return p&&typeof p=="string"&&t.isElement&&(v=t.el.querySelector(p),v)?v:(p&&(typeof p=="string"&&(v=[...document.querySelectorAll(p)]),t.params.uniqueNavElements&&typeof p=="string"&&v.length>1&&t.el.querySelectorAll(p).length===1&&(v=t.el.querySelector(p))),p&&!v?p:v)}function o(p,v){const x=t.params.navigation;p=a(p),p.forEach(m=>{m&&(m.classList[v?"add":"remove"](...x.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=v),t.params.watchOverflow&&t.enabled&&m.classList[t.isLocked?"add":"remove"](x.lockClass))})}function l(){const{nextEl:p,prevEl:v}=t.navigation;if(t.params.loop){o(v,!1),o(p,!1);return}o(v,t.isBeginning&&!t.params.rewind),o(p,t.isEnd&&!t.params.rewind)}function c(p){p.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),n("navigationPrev"))}function d(p){p.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),n("navigationNext"))}function u(){const p=t.params.navigation;if(t.params.navigation=$a(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let v=r(p.nextEl),x=r(p.prevEl);Object.assign(t.navigation,{nextEl:v,prevEl:x}),v=a(v),x=a(x);const m=(b,y)=>{b&&b.addEventListener("click",y==="next"?d:c),!t.enabled&&b&&b.classList.add(...p.lockClass.split(" "))};v.forEach(b=>m(b,"next")),x.forEach(b=>m(b,"prev"))}function h(){let{nextEl:p,prevEl:v}=t.navigation;p=a(p),v=a(v);const x=(m,b)=>{m.removeEventListener("click",b==="next"?d:c),m.classList.remove(...t.params.navigation.disabledClass.split(" "))};p.forEach(m=>x(m,"next")),v.forEach(m=>x(m,"prev"))}s("init",()=>{t.params.navigation.enabled===!1?g():(u(),l())}),s("toEdge fromEdge lock unlock",()=>{l()}),s("destroy",()=>{h()}),s("enable disable",()=>{let{nextEl:p,prevEl:v}=t.navigation;if(p=a(p),v=a(v),t.enabled){l();return}[...p,...v].filter(x=>!!x).forEach(x=>x.classList.add(t.params.navigation.lockClass))}),s("click",(p,v)=>{let{nextEl:x,prevEl:m}=t.navigation;x=a(x),m=a(m);const b=v.target;if(t.params.navigation.hideOnClick&&!m.includes(b)&&!x.includes(b)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===b||t.pagination.el.contains(b)))return;let y;x.length?y=x[0].classList.contains(t.params.navigation.hiddenClass):m.length&&(y=m[0].classList.contains(t.params.navigation.hiddenClass)),n(y===!0?"navigationShow":"navigationHide"),[...x,...m].filter(_=>!!_).forEach(_=>_.classList.toggle(t.params.navigation.hiddenClass))}});const f=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),l()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:f,disable:g,update:l,init:u,destroy:h})}function ve(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Rl(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let r,o=0;const l=m=>(Array.isArray(m)?m:[m]).filter(b=>!!b);function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(m,b){const{bulletActiveClass:y}=t.params.pagination;m&&(m=m[`${b==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${y}-${b}`),m=m[`${b==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${y}-${b}-${b}`)))}function u(m){const b=m.target.closest(ve(t.params.pagination.bulletClass));if(!b)return;m.preventDefault();const y=Pi(b)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===y)return;t.slideToLoop(y)}else t.slideTo(y)}function h(){const m=t.rtl,b=t.params.pagination;if(c())return;let y=t.pagination.el;y=l(y);let _,w;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,M=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(w=t.previousRealIndex||0,_=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(_=t.snapIndex,w=t.previousSnapIndex):(w=t.previousIndex||0,_=t.activeIndex||0),b.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const k=t.pagination.bullets;let S,T,P;if(b.dynamicBullets&&(r=hs(k[0],t.isHorizontal()?"width":"height",!0),y.forEach(C=>{C.style[t.isHorizontal()?"width":"height"]=`${r*(b.dynamicMainBullets+4)}px`}),b.dynamicMainBullets>1&&w!==void 0&&(o+=_-(w||0),o>b.dynamicMainBullets-1?o=b.dynamicMainBullets-1:o<0&&(o=0)),S=Math.max(_-o,0),T=S+(Math.min(k.length,b.dynamicMainBullets)-1),P=(T+S)/2),k.forEach(C=>{const A=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(O=>`${b.bulletActiveClass}${O}`)].map(O=>typeof O=="string"&&O.includes(" ")?O.split(" "):O).flat();C.classList.remove(...A)}),y.length>1)k.forEach(C=>{const A=Pi(C);A===_?C.classList.add(...b.bulletActiveClass.split(" ")):t.isElement&&C.setAttribute("part","bullet"),b.dynamicBullets&&(A>=S&&A<=T&&C.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),A===S&&d(C,"prev"),A===T&&d(C,"next"))});else{const C=k[_];if(C&&C.classList.add(...b.bulletActiveClass.split(" ")),t.isElement&&k.forEach((A,O)=>{A.setAttribute("part",O===_?"bullet-active":"bullet")}),b.dynamicBullets){const A=k[S],O=k[T];for(let I=S;I<=T;I+=1)k[I]&&k[I].classList.add(...`${b.bulletActiveClass}-main`.split(" "));d(A,"prev"),d(O,"next")}}if(b.dynamicBullets){const C=Math.min(k.length,b.dynamicMainBullets+4),A=(r*C-r)/2-P*r,O=m?"right":"left";k.forEach(I=>{I.style[t.isHorizontal()?O:"top"]=`${A}px`})}}y.forEach((k,S)=>{if(b.type==="fraction"&&(k.querySelectorAll(ve(b.currentClass)).forEach(T=>{T.textContent=b.formatFractionCurrent(_+1)}),k.querySelectorAll(ve(b.totalClass)).forEach(T=>{T.textContent=b.formatFractionTotal(M)})),b.type==="progressbar"){let T;b.progressbarOpposite?T=t.isHorizontal()?"vertical":"horizontal":T=t.isHorizontal()?"horizontal":"vertical";const P=(_+1)/M;let C=1,A=1;T==="horizontal"?C=P:A=P,k.querySelectorAll(ve(b.progressbarFillClass)).forEach(O=>{O.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${A})`,O.style.transitionDuration=`${t.params.speed}ms`})}b.type==="custom"&&b.renderCustom?(k.innerHTML=b.renderCustom(t,_+1,M),S===0&&n("paginationRender",k)):(S===0&&n("paginationRender",k),n("paginationUpdate",k)),t.params.watchOverflow&&t.enabled&&k.classList[t.isLocked?"add":"remove"](b.lockClass)})}function f(){const m=t.params.pagination;if(c())return;const b=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let y=t.pagination.el;y=l(y);let _="";if(m.type==="bullets"){let w=t.params.loop?Math.ceil(b/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&w>b&&(w=b);for(let E=0;E<w;E+=1)m.renderBullet?_+=m.renderBullet.call(t,E,m.bulletClass):_+=`<${m.bulletElement} ${t.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?_=m.renderFraction.call(t,m.currentClass,m.totalClass):_=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?_=m.renderProgressbar.call(t,m.progressbarFillClass):_=`<span class="${m.progressbarFillClass}"></span>`),t.pagination.bullets=[],y.forEach(w=>{m.type!=="custom"&&(w.innerHTML=_||""),m.type==="bullets"&&t.pagination.bullets.push(...w.querySelectorAll(ve(m.bulletClass)))}),m.type!=="custom"&&n("paginationRender",y[0])}function g(){t.params.pagination=$a(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const m=t.params.pagination;if(!m.el)return;let b;typeof m.el=="string"&&t.isElement&&(b=t.el.querySelector(m.el)),!b&&typeof m.el=="string"&&(b=[...document.querySelectorAll(m.el)]),b||(b=m.el),!(!b||b.length===0)&&(t.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(b)&&b.length>1&&(b=[...t.el.querySelectorAll(m.el)],b.length>1&&(b=b.filter(y=>Ai(y,".swiper")[0]===t.el)[0])),Array.isArray(b)&&b.length===1&&(b=b[0]),Object.assign(t.pagination,{el:b}),b=l(b),b.forEach(y=>{m.type==="bullets"&&m.clickable&&y.classList.add(...(m.clickableClass||"").split(" ")),y.classList.add(m.modifierClass+m.type),y.classList.add(t.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(y.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&y.classList.add(m.progressbarOppositeClass),m.clickable&&y.addEventListener("click",u),t.enabled||y.classList.add(m.lockClass)}))}function p(){const m=t.params.pagination;if(c())return;let b=t.pagination.el;b&&(b=l(b),b.forEach(y=>{y.classList.remove(m.hiddenClass),y.classList.remove(m.modifierClass+m.type),y.classList.remove(t.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(y.classList.remove(...(m.clickableClass||"").split(" ")),y.removeEventListener("click",u))})),t.pagination.bullets&&t.pagination.bullets.forEach(y=>y.classList.remove(...m.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const m=t.params.pagination;let{el:b}=t.pagination;b=l(b),b.forEach(y=>{y.classList.remove(m.horizontalClass,m.verticalClass),y.classList.add(t.isHorizontal()?m.horizontalClass:m.verticalClass)})}),s("init",()=>{t.params.pagination.enabled===!1?x():(g(),f(),h())}),s("activeIndexChange",()=>{typeof t.snapIndex>"u"&&h()}),s("snapIndexChange",()=>{h()}),s("snapGridLengthChange",()=>{f(),h()}),s("destroy",()=>{p()}),s("enable disable",()=>{let{el:m}=t.pagination;m&&(m=l(m),m.forEach(b=>b.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),s("lock unlock",()=>{h()}),s("click",(m,b)=>{const y=b.target,_=l(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&_&&_.length>0&&!y.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&y===t.navigation.nextEl||t.navigation.prevEl&&y===t.navigation.prevEl))return;const w=_[0].classList.contains(t.params.pagination.hiddenClass);n(w===!0?"paginationShow":"paginationHide"),_.forEach(E=>E.classList.toggle(t.params.pagination.hiddenClass))}});const v=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:m}=t.pagination;m&&(m=l(m),m.forEach(b=>b.classList.remove(t.params.pagination.paginationDisabledClass))),g(),f(),h()},x=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:m}=t.pagination;m&&(m=l(m),m.forEach(b=>b.classList.add(t.params.pagination.paginationDisabledClass))),p()};Object.assign(t.pagination,{enable:v,disable:x,render:f,update:h,init:g,destroy:p})}function Vl(i){let{swiper:t,extendParams:e,emit:s,on:n}=i,a=!1;const r=gt(),o=et();e({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(h,f){if(t.virtual&&t.params.virtual.enabled){const g=t.slides.filter(v=>v.getAttribute("data-hash")===f)[0];return g?parseInt(g.getAttribute("data-swiper-slide-index"),10):0}return t.getSlideIndex(bt(t.slidesEl,`.${t.params.slideClass}[data-hash="${f}"], swiper-slide[data-hash="${f}"]`)[0])}}});const l=()=>{s("hashChange");const h=r.location.hash.replace("#",""),f=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],g=f?f.getAttribute("data-hash"):"";if(h!==g){const p=t.params.hashNavigation.getSlideIndex(t,h);if(typeof p>"u"||Number.isNaN(p))return;t.slideTo(p)}},c=()=>{if(!a||!t.params.hashNavigation.enabled)return;const h=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],f=h?h.getAttribute("data-hash")||h.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&o.history&&o.history.replaceState?(o.history.replaceState(null,null,`#${f}`||""),s("hashSet")):(r.location.hash=f||"",s("hashSet"))},d=()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;a=!0;const h=r.location.hash.replace("#","");if(h){const g=t.params.hashNavigation.getSlideIndex(t,h);t.slideTo(g||0,0,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&o.addEventListener("hashchange",l)},u=()=>{t.params.hashNavigation.watchState&&o.removeEventListener("hashchange",l)};n("init",()=>{t.params.hashNavigation.enabled&&d()}),n("destroy",()=>{t.params.hashNavigation.enabled&&u()}),n("transitionEnd _freeModeNoMomentumRelease",()=>{a&&c()}),n("slideChange",()=>{a&&t.params.cssMode&&c()})}function Bl(i){let{swiper:t,extendParams:e,on:s,emit:n,params:a}=i;t.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,l=a&&a.autoplay?a.autoplay.delay:3e3,c=a&&a.autoplay?a.autoplay.delay:3e3,d,u=new Date().getTime(),h,f,g,p,v,x,m;function b(D){!t||t.destroyed||!t.wrapperEl||D.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",b),!m&&S())}const y=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?h=!0:h&&(c=d,h=!1);const D=t.autoplay.paused?d:u+c-new Date().getTime();t.autoplay.timeLeft=D,n("autoplayTimeLeft",D,D/l),o=requestAnimationFrame(()=>{y()})},_=()=>{let D;return t.virtual&&t.params.virtual.enabled?D=t.slides.filter(q=>q.classList.contains("swiper-slide-active"))[0]:D=t.slides[t.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},w=D=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),y();let B=typeof D>"u"?t.params.autoplay.delay:D;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const q=_();!Number.isNaN(q)&&q>0&&typeof D>"u"&&(B=q,l=q,c=q),d=B;const ft=t.params.speed,mt=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(ft,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,ft,!0,!0),n("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(ft,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,ft,!0,!0),n("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{w()})))};return B>0?(clearTimeout(r),r=setTimeout(()=>{mt()},B)):requestAnimationFrame(()=>{mt()}),B},E=()=>{u=new Date().getTime(),t.autoplay.running=!0,w(),n("autoplayStart")},M=()=>{t.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),n("autoplayStop")},k=(D,B)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(r),D||(x=!0);const q=()=>{n("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",b):S()};if(t.autoplay.paused=!0,B){v&&(d=t.params.autoplay.delay),v=!1,q();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),q())},S=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),x?(x=!1,w(d)):w(),t.autoplay.paused=!1,n("autoplayResume"))},T=()=>{if(t.destroyed||!t.autoplay.running)return;const D=gt();D.visibilityState==="hidden"&&(x=!0,k(!0)),D.visibilityState==="visible"&&S()},P=D=>{D.pointerType==="mouse"&&(x=!0,m=!0,!(t.animating||t.autoplay.paused)&&k(!0))},C=D=>{D.pointerType==="mouse"&&(m=!1,t.autoplay.paused&&S())},A=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",P),t.el.addEventListener("pointerleave",C))},O=()=>{t.el.removeEventListener("pointerenter",P),t.el.removeEventListener("pointerleave",C)},I=()=>{gt().addEventListener("visibilitychange",T)},j=()=>{gt().removeEventListener("visibilitychange",T)};s("init",()=>{t.params.autoplay.enabled&&(A(),I(),E())}),s("destroy",()=>{O(),j(),t.autoplay.running&&M()}),s("_freeModeStaticRelease",()=>{(g||x)&&S()}),s("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?M():k(!0,!0)}),s("beforeTransitionStart",(D,B,q)=>{t.destroyed||!t.autoplay.running||(q||!t.params.autoplay.disableOnInteraction?k(!0,!0):M())}),s("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){M();return}f=!0,g=!1,x=!1,p=setTimeout(()=>{x=!0,g=!0,k(!0)},200)}}),s("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!f)){if(clearTimeout(p),clearTimeout(r),t.params.autoplay.disableOnInteraction){g=!1,f=!1;return}g&&t.params.cssMode&&S(),g=!1,f=!1}}),s("slideChange",()=>{t.destroyed||!t.autoplay.running||(v=!0)}),Object.assign(t.autoplay,{start:E,stop:M,pause:k,resume:S})}function Nl(i){const{effect:t,swiper:e,on:s,setTranslate:n,setTransition:a,overwriteParams:r,perspective:o,recreateShadows:l,getEffectParams:c}=i;s("beforeInit",()=>{if(e.params.effect!==t)return;e.classNames.push(`${e.params.containerModifierClass}${t}`),o&&o()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const u=r?r():{};Object.assign(e.params,u),Object.assign(e.originalParams,u)}),s("setTranslate",()=>{e.params.effect===t&&n()}),s("setTransition",(u,h)=>{e.params.effect===t&&a(h)}),s("transitionEnd",()=>{if(e.params.effect===t&&l){if(!c||!c().slideShadows)return;e.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),l()}});let d;s("virtualUpdate",()=>{e.params.effect===t&&(e.slides.length||(d=!0),requestAnimationFrame(()=>{d&&e.slides&&e.slides.length&&(n(),d=!1)}))})}function $l(i,t){const e=Ds(t);return e!==t&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}function Hl(i){let{swiper:t,duration:e,transformElements:s,allSlides:n}=i;const{activeIndex:a}=t,r=o=>o.parentElement?o.parentElement:t.slides.filter(c=>c.shadowRoot&&c.shadowRoot===o.parentNode)[0];if(t.params.virtualTranslate&&e!==0){let o=!1,l;n?l=s:l=s.filter(c=>{const d=c.classList.contains("swiper-slide-transform")?r(c):c;return t.getSlideIndex(d)===a}),l.forEach(c=>{So(c,()=>{if(o||!t||t.destroyed)return;o=!0,t.animating=!1;const d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(d)})})}}function jl(i,t,e){const s=`swiper-slide-shadow${e?`-${e}`:""}${i?` swiper-slide-shadow-${i}`:""}`,n=Ds(t);let a=n.querySelector(`.${s.split(" ").join(".")}`);return a||(a=He("div",s.split(" ")),n.append(a)),a}function ql(i){let{swiper:t,extendParams:e,on:s}=i;e({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const n=o=>typeof o=="string"?o:`${o}px`;Nl({effect:"creative",swiper:t,on:s,setTranslate:()=>{const{slides:o,wrapperEl:l,slidesSizesGrid:c}=t,d=t.params.creativeEffect,{progressMultiplier:u}=d,h=t.params.centeredSlides;if(h){const f=c[0]/2-t.params.slidesOffsetBefore||0;l.style.transform=`translateX(calc(50% - ${f}px))`}for(let f=0;f<o.length;f+=1){const g=o[f],p=g.progress,v=Math.min(Math.max(g.progress,-d.limitProgress),d.limitProgress);let x=v;h||(x=Math.min(Math.max(g.originalProgress,-d.limitProgress),d.limitProgress));const m=g.swiperSlideOffset,b=[t.params.cssMode?-m-t.translate:-m,0,0],y=[0,0,0];let _=!1;t.isHorizontal()||(b[1]=b[0],b[0]=0);let w={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};v<0?(w=d.next,_=!0):v>0&&(w=d.prev,_=!0),b.forEach((C,A)=>{b[A]=`calc(${C}px + (${n(w.translate[A])} * ${Math.abs(v*u)}))`}),y.forEach((C,A)=>{let O=w.rotate[A]*Math.abs(v*u);t.browser&&t.browser.isSafari&&Math.abs(O)/90%2===1&&(O+=.001),y[A]=O}),g.style.zIndex=-Math.abs(Math.round(p))+o.length;const E=b.join(", "),M=`rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,k=x<0?`scale(${1+(1-w.scale)*x*u})`:`scale(${1-(1-w.scale)*x*u})`,S=x<0?1+(1-w.opacity)*x*u:1-(1-w.opacity)*x*u,T=`translate3d(${E}) ${M} ${k}`;if(_&&w.shadow||!_){let C=g.querySelector(".swiper-slide-shadow");if(!C&&w.shadow&&(C=jl("creative",g)),C){const A=d.shadowPerProgress?v*(1/d.limitProgress):v;C.style.opacity=Math.min(Math.max(Math.abs(A),0),1)}}const P=$l(d,g);P.style.transform=T,P.style.opacity=S,w.origin&&(P.style.transformOrigin=w.origin)}},setTransition:o=>{const l=t.slides.map(c=>Ds(c));l.forEach(c=>{c.style.transitionDuration=`${o}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(d=>{d.style.transitionDuration=`${o}ms`})}),Hl({swiper:t,duration:o,transformElements:l,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}const Wl=i=>Gl.slideTo(i);document.querySelectorAll(".slide-to").forEach((i,t)=>i.addEventListener("click",()=>Wl(t)));const Gl=new ct(".main-slider",{modules:[zl,Rl,Na,Vl],initialSlide:0,slidesPerView:1,speed:0,spaceBetween:32,direction:"horizontal",hashNavigation:!0,virtual:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},simulateTouch:!0,breakpoints:{576:{pagination:{dynamicBullets:!1},simulateTouch:!1}}});new ct(".swiper-basic",{modules:[Bl,Na,Fl,ql],loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!0,pauseOnMouseEnter:!0},spaceBetween:16,direction:"horizontal",mousewheel:{sensitivity:2,invert:!0},grabCursor:!0,slidesPerView:1,initialSlide:0,effect:"creative",creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}}});const Is=document.querySelector('[href="mailto:nospam@google.com"]');let ln=null;const Yl=()=>Is.setAttribute("href","mailto:KrivoshlykovNN@yandex.ru"),Xl=()=>Is.setAttribute("href","mailto:nospampls@google.com"),Ul=()=>{clearTimeout(ln),Yl(),ln=setTimeout(Xl,1)};Is.addEventListener("click",Ul);const Kl=(i,t)=>{document.querySelectorAll(`${i} ${t}`).forEach(s=>{const n=s.closest(`${i}`),a=()=>{s.style.display="none",n.removeEventListener("scrollend",a,{passive:!0})};n.addEventListener("scrollend",a,{passive:!0})})};Kl(".layout-center",".scroll-down");class Zl{constructor(t){L(this,"observer",t=>new ResizeObserver(e=>e.forEach(s=>{switch(this.prop){case"w":const n=s.borderBoxSize[0].inlineSize;t.forEach(r=>r.style.maxWidth=`${n}px`);break;case"h":const a=s.borderBoxSize[0].blockSize;t.forEach(r=>r.style.minHeight=`${a}px`);break}})));L(this,"initWith",t=>{t.forEach(([e,s],n)=>{const a=document.querySelector(`.${e}`),r=document.querySelectorAll(`.${s}`),o=n+1;a&&r?this.observer(r).observe(a):console.error(`SizeSetter: there is no master-${o} or slave-${o}`)})});this.prop=t}}class Jl{constructor(){L(this,"initWith",(t,e)=>{for(const s in e)document.querySelectorAll(`${s}`).forEach(n=>n.setAttribute(`${t}`,`${e[s]}`))})}}class Ha{constructor(t,e){L(this,"setState",t=>t?this.onMobile():this.onDesktop());L(this,"checkState",t=>window.innerWidth<=t?this.setState(!0):this.setState(!1));L(this,"watchState",t=>window.matchMedia(`(max-width: ${t}px)`).addEventListener("change",e=>this.setState(e.matches)));L(this,"toggleStateOn",t=>{this.checkState(t),this.watchState(t)});this.onMobile=t,this.onDesktop=e}}const Ql=i=>{const t=i.querySelectorAll("thead th:not(:first-child)"),e=i.querySelectorAll("tbody th");i.querySelectorAll("tbody tr").forEach((n,a)=>{n.querySelectorAll("td").forEach((o,l)=>{const c=()=>{var p,v;(p=t[l])==null||p.classList.add("clr-accent"),(v=e[a])==null||v.classList.add("clr-accent")},d=()=>{var p,v;(p=t[l])==null||p.classList.remove("clr-accent"),(v=e[a])==null||v.classList.remove("clr-accent")},u=()=>o.classList.toggle("clr-accent"),h=()=>{o.removeEventListener("mouseover",c),o.removeEventListener("mouseout",d),o.removeEventListener("click",u)},f=()=>{o.addEventListener("mouseover",c),o.addEventListener("mouseout",d),o.addEventListener("click",u)};new Ha(h,f).toggleStateOn(992)})})};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Ke(i){return i+.5|0}const Rt=(i,t,e)=>Math.max(Math.min(i,e),t);function Ee(i){return Rt(Ke(i*2.55),0,255)}function $t(i){return Rt(Ke(i*255),0,255)}function Lt(i){return Rt(Ke(i/2.55)/100,0,1)}function cn(i){return Rt(Ke(i*100),0,100)}const pt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ps=[..."0123456789ABCDEF"],tc=i=>ps[i&15],ec=i=>ps[(i&240)>>4]+ps[i&15],ei=i=>(i&240)>>4===(i&15),ic=i=>ei(i.r)&&ei(i.g)&&ei(i.b)&&ei(i.a);function sc(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&pt[i[1]]*17,g:255&pt[i[2]]*17,b:255&pt[i[3]]*17,a:t===5?pt[i[4]]*17:255}:(t===7||t===9)&&(e={r:pt[i[1]]<<4|pt[i[2]],g:pt[i[3]]<<4|pt[i[4]],b:pt[i[5]]<<4|pt[i[6]],a:t===9?pt[i[7]]<<4|pt[i[8]]:255})),e}const nc=(i,t)=>i<255?t(i):"";function ac(i){var t=ic(i)?tc:ec;return i?"#"+t(i.r)+t(i.g)+t(i.b)+nc(i.a,t):void 0}const rc=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ja(i,t,e){const s=t*Math.min(e,1-e),n=(a,r=(a+i/30)%12)=>e-s*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function oc(i,t,e){const s=(n,a=(n+i/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[s(5),s(3),s(1)]}function lc(i,t,e){const s=ja(i,1,.5);let n;for(t+e>1&&(n=1/(t+e),t*=n,e*=n),n=0;n<3;n++)s[n]*=1-t-e,s[n]+=t;return s}function cc(i,t,e,s,n){return i===n?(t-e)/s+(t<e?6:0):t===n?(e-i)/s+2:(i-t)/s+4}function Fs(i){const e=i.r/255,s=i.g/255,n=i.b/255,a=Math.max(e,s,n),r=Math.min(e,s,n),o=(a+r)/2;let l,c,d;return a!==r&&(d=a-r,c=o>.5?d/(2-a-r):d/(a+r),l=cc(e,s,n,d,a),l=l*60+.5),[l|0,c||0,o]}function zs(i,t,e,s){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,s)).map($t)}function Rs(i,t,e){return zs(ja,i,t,e)}function dc(i,t,e){return zs(lc,i,t,e)}function uc(i,t,e){return zs(oc,i,t,e)}function qa(i){return(i%360+360)%360}function hc(i){const t=rc.exec(i);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Ee(+t[5]):$t(+t[5]));const n=qa(+t[2]),a=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=dc(n,a,r):t[1]==="hsv"?s=uc(n,a,r):s=Rs(n,a,r),{r:s[0],g:s[1],b:s[2],a:e}}function fc(i,t){var e=Fs(i);e[0]=qa(e[0]+t),e=Rs(e),i.r=e[0],i.g=e[1],i.b=e[2]}function pc(i){if(!i)return;const t=Fs(i),e=t[0],s=cn(t[1]),n=cn(t[2]);return i.a<255?`hsla(${e}, ${s}%, ${n}%, ${Lt(i.a)})`:`hsl(${e}, ${s}%, ${n}%)`}const dn={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},un={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function gc(){const i={},t=Object.keys(un),e=Object.keys(dn);let s,n,a,r,o;for(s=0;s<t.length;s++){for(r=o=t[s],n=0;n<e.length;n++)a=e[n],o=o.replace(a,dn[a]);a=parseInt(un[r],16),i[o]=[a>>16&255,a>>8&255,a&255]}return i}let ii;function mc(i){ii||(ii=gc(),ii.transparent=[0,0,0,0]);const t=ii[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const bc=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function vc(i){const t=bc.exec(i);let e=255,s,n,a;if(t){if(t[7]!==s){const r=+t[7];e=t[8]?Ee(r):Rt(r*255,0,255)}return s=+t[1],n=+t[3],a=+t[5],s=255&(t[2]?Ee(s):Rt(s,0,255)),n=255&(t[4]?Ee(n):Rt(n,0,255)),a=255&(t[6]?Ee(a):Rt(a,0,255)),{r:s,g:n,b:a,a:e}}}function xc(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Lt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Zi=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,oe=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function yc(i,t,e){const s=oe(Lt(i.r)),n=oe(Lt(i.g)),a=oe(Lt(i.b));return{r:$t(Zi(s+e*(oe(Lt(t.r))-s))),g:$t(Zi(n+e*(oe(Lt(t.g))-n))),b:$t(Zi(a+e*(oe(Lt(t.b))-a))),a:i.a+e*(t.a-i.a)}}function si(i,t,e){if(i){let s=Fs(i);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Rs(s),i.r=s[0],i.g=s[1],i.b=s[2]}}function Wa(i,t){return i&&Object.assign(t||{},i)}function hn(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=$t(i[3]))):(t=Wa(i,{r:0,g:0,b:0,a:1}),t.a=$t(t.a)),t}function _c(i){return i.charAt(0)==="r"?vc(i):hc(i)}class je{constructor(t){if(t instanceof je)return t;const e=typeof t;let s;e==="object"?s=hn(t):e==="string"&&(s=sc(t)||mc(t)||_c(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Wa(this._rgb);return t&&(t.a=Lt(t.a)),t}set rgb(t){this._rgb=hn(t)}rgbString(){return this._valid?xc(this._rgb):void 0}hexString(){return this._valid?ac(this._rgb):void 0}hslString(){return this._valid?pc(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,n=t.rgb;let a;const r=e===a?.5:e,o=2*r-1,l=s.a-n.a,c=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;a=1-c,s.r=255&c*s.r+a*n.r+.5,s.g=255&c*s.g+a*n.g+.5,s.b=255&c*s.b+a*n.b+.5,s.a=r*s.a+(1-r)*n.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=yc(this._rgb,t._rgb,e)),this}clone(){return new je(this.rgb)}alpha(t){return this._rgb.a=$t(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Ke(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return si(this._rgb,2,t),this}darken(t){return si(this._rgb,2,-t),this}saturate(t){return si(this._rgb,1,t),this}desaturate(t){return si(this._rgb,1,-t),this}rotate(t){return fc(this._rgb,t),this}}/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Tt(){}const wc=(()=>{let i=0;return()=>i++})();function z(i){return i===null||typeof i>"u"}function G(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function R(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function K(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function lt(i,t){return K(i)?i:t}function F(i,t){return typeof i>"u"?t:i}const Sc=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,Ga=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function H(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function $(i,t,e,s){let n,a,r;if(G(i))if(a=i.length,s)for(n=a-1;n>=0;n--)t.call(e,i[n],n);else for(n=0;n<a;n++)t.call(e,i[n],n);else if(R(i))for(r=Object.keys(i),a=r.length,n=0;n<a;n++)t.call(e,i[r[n]],r[n])}function Oi(i,t){let e,s,n,a;if(!i||!t||i.length!==t.length)return!1;for(e=0,s=i.length;e<s;++e)if(n=i[e],a=t[e],n.datasetIndex!==a.datasetIndex||n.index!==a.index)return!1;return!0}function Di(i){if(G(i))return i.map(Di);if(R(i)){const t=Object.create(null),e=Object.keys(i),s=e.length;let n=0;for(;n<s;++n)t[e[n]]=Di(i[e[n]]);return t}return i}function Ya(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Mc(i,t,e,s){if(!Ya(i))return;const n=t[i],a=e[i];R(n)&&R(a)?Mt(n,a,s):t[i]=Di(a)}function Mt(i,t,e){const s=G(t)?t:[t],n=s.length;if(!R(i))return i;e=e||{};const a=e.merger||Mc;let r;for(let o=0;o<n;++o){if(r=s[o],!R(r))continue;const l=Object.keys(r);for(let c=0,d=l.length;c<d;++c)a(l[c],i,r,e)}return i}function Oe(i,t){return Mt(i,t,{merger:Tc})}function Tc(i,t,e){if(!Ya(i))return;const s=t[i],n=e[i];R(s)&&R(n)?Oe(s,n):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Di(n))}const fn={"":i=>i,x:i=>i.x,y:i=>i.y};function kc(i){const t=i.split("."),e=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function Cc(i){const t=kc(i);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Ht(i,t){return(fn[t]||(fn[t]=Cc(t)))(i)}function Vs(i){return i.charAt(0).toUpperCase()+i.slice(1)}const qe=i=>typeof i<"u",jt=i=>typeof i=="function",pn=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function Ec(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const X=Math.PI,Y=2*X,Lc=Y+X,Ii=Number.POSITIVE_INFINITY,Pc=X/180,Z=X/2,Yt=X/4,gn=X*2/3,Vt=Math.log10,St=Math.sign;function De(i,t,e){return Math.abs(i-t)<e}function mn(i){const t=Math.round(i);i=De(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(Vt(i))),s=i/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function Ac(i){const t=[],e=Math.sqrt(i);let s;for(s=1;s<e;s++)i%s===0&&(t.push(s),t.push(i/s));return e===(e|0)&&t.push(e),t.sort((n,a)=>n-a).pop(),t}function fe(i){return!isNaN(parseFloat(i))&&isFinite(i)}function Oc(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function Xa(i,t,e){let s,n,a;for(s=0,n=i.length;s<n;s++)a=i[s][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function vt(i){return i*(X/180)}function Bs(i){return i*(180/X)}function bn(i){if(!K(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function Ua(i,t){const e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);let a=Math.atan2(s,e);return a<-.5*X&&(a+=Y),{angle:a,distance:n}}function gs(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function Dc(i,t){return(i-t+Lc)%Y-X}function ut(i){return(i%Y+Y)%Y}function We(i,t,e,s){const n=ut(i),a=ut(t),r=ut(e),o=ut(a-n),l=ut(r-n),c=ut(n-a),d=ut(n-r);return n===a||n===r||s&&a===r||o>l&&c<d}function Q(i,t,e){return Math.max(t,Math.min(e,i))}function Ic(i){return Q(i,-32768,32767)}function At(i,t,e,s=1e-6){return i>=Math.min(t,e)-s&&i<=Math.max(t,e)+s}function Ns(i,t,e){e=e||(r=>i[r]<t);let s=i.length-1,n=0,a;for(;s-n>1;)a=n+s>>1,e(a)?n=a:s=a;return{lo:n,hi:s}}const Ot=(i,t,e,s)=>Ns(i,e,s?n=>{const a=i[n][t];return a<e||a===e&&i[n+1][t]===e}:n=>i[n][t]<e),Fc=(i,t,e)=>Ns(i,e,s=>i[s][t]>=e);function zc(i,t,e){let s=0,n=i.length;for(;s<n&&i[s]<t;)s++;for(;n>s&&i[n-1]>e;)n--;return s>0||n<i.length?i.slice(s,n):i}const Ka=["push","pop","shift","splice","unshift"];function Rc(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Ka.forEach(e=>{const s="_onData"+Vs(e),n=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...a){const r=n.apply(this,a);return i._chartjs.listeners.forEach(o=>{typeof o[s]=="function"&&o[s](...a)}),r}})})}function vn(i,t){const e=i._chartjs;if(!e)return;const s=e.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(Ka.forEach(a=>{delete i[a]}),delete i._chartjs)}function Za(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const Ja=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function Qa(i,t){let e=[],s=!1;return function(...n){e=n,s||(s=!0,Ja.call(window,()=>{s=!1,i.apply(t,e)}))}}function Vc(i,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(i,t,s)):i.apply(this,s),t}}const $s=i=>i==="start"?"left":i==="end"?"right":"center",it=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,Bc=(i,t,e,s)=>i===(s?"left":"right")?e:i==="center"?(t+e)/2:t;function tr(i,t,e){const s=t.length;let n=0,a=s;if(i._sorted){const{iScale:r,_parsed:o}=i,l=r.axis,{min:c,max:d,minDefined:u,maxDefined:h}=r.getUserBounds();u&&(n=Q(Math.min(Ot(o,l,c).lo,e?s:Ot(t,l,r.getPixelForValue(c)).lo),0,s-1)),h?a=Q(Math.max(Ot(o,r.axis,d,!0).hi+1,e?0:Ot(t,l,r.getPixelForValue(d),!0).hi+1),n,s)-n:a=s-n}return{start:n,count:a}}function er(i){const{xScale:t,yScale:e,_scaleRanges:s}=i,n={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return i._scaleRanges=n,!0;const a=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,n),a}const ni=i=>i===0||i===1,xn=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*Y/e)),yn=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*Y/e)+1,Ie={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Z)+1,easeOutSine:i=>Math.sin(i*Z),easeInOutSine:i=>-.5*(Math.cos(X*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>ni(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>ni(i)?i:xn(i,.075,.3),easeOutElastic:i=>ni(i)?i:yn(i,.075,.3),easeInOutElastic(i){return ni(i)?i:i<.5?.5*xn(i*2,.1125,.45):.5+.5*yn(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-Ie.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Ie.easeInBounce(i*2)*.5:Ie.easeOutBounce(i*2-1)*.5+.5};function Hs(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function _n(i){return Hs(i)?i:new je(i)}function Ji(i){return Hs(i)?i:new je(i).saturate(.5).darken(.1).hexString()}const Nc=["x","y","borderWidth","radius","tension"],$c=["color","borderColor","backgroundColor"];function Hc(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:$c},numbers:{type:"number",properties:Nc}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function jc(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const wn=new Map;function qc(i,t){t=t||{};const e=i+JSON.stringify(t);let s=wn.get(e);return s||(s=new Intl.NumberFormat(i,t),wn.set(e,s)),s}function Ze(i,t,e){return qc(t,e).format(i)}const ir={values(i){return G(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const s=this.chart.options.locale;let n,a=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),a=Wc(i,e)}const r=Vt(Math.abs(a)),o=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),Ze(i,s,l)},logarithmic(i,t,e){if(i===0)return"0";const s=e[t].significand||i/Math.pow(10,Math.floor(Vt(i)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?ir.numeric.call(this,i,t,e):""}};function Wc(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var Ni={formatters:ir};function Gc(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ni.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ne=Object.create(null),ms=Object.create(null);function Fe(i,t){if(!t)return i;const e=t.split(".");for(let s=0,n=e.length;s<n;++s){const a=e[s];i=i[a]||(i[a]=Object.create(null))}return i}function Qi(i,t,e){return typeof t=="string"?Mt(Fe(i,t),e):Mt(Fe(i,""),t)}class Yc{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>Ji(n.backgroundColor),this.hoverBorderColor=(s,n)=>Ji(n.borderColor),this.hoverColor=(s,n)=>Ji(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Qi(this,t,e)}get(t){return Fe(this,t)}describe(t,e){return Qi(ms,t,e)}override(t,e){return Qi(ne,t,e)}route(t,e,s,n){const a=Fe(this,t),r=Fe(this,s),o="_"+e;Object.defineProperties(a,{[o]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[o],c=r[n];return R(l)?Object.assign({},c,l):F(l,c)},set(l){this[o]=l}}})}apply(t){t.forEach(e=>e(this))}}var U=new Yc({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Hc,jc,Gc]);function Xc(i){return!i||z(i.size)||z(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Fi(i,t,e,s,n){let a=t[n];return a||(a=t[n]=i.measureText(n).width,e.push(n)),a>s&&(s=a),s}function Uc(i,t,e,s){s=s||{};let n=s.data=s.data||{},a=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},a=s.garbageCollect=[],s.font=t),i.save(),i.font=t;let r=0;const o=e.length;let l,c,d,u,h;for(l=0;l<o;l++)if(u=e[l],u!=null&&!G(u))r=Fi(i,n,a,r,u);else if(G(u))for(c=0,d=u.length;c<d;c++)h=u[c],h!=null&&!G(h)&&(r=Fi(i,n,a,r,h));i.restore();const f=a.length/2;if(f>e.length){for(l=0;l<f;l++)delete n[a[l]];a.splice(0,f)}return r}function Xt(i,t,e){const s=i.currentDevicePixelRatio,n=e!==0?Math.max(e/2,.5):0;return Math.round((t-n)*s)/s+n}function Sn(i,t){t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore()}function bs(i,t,e,s){sr(i,t,e,s,null)}function sr(i,t,e,s,n){let a,r,o,l,c,d,u,h;const f=t.pointStyle,g=t.rotation,p=t.radius;let v=(g||0)*Pc;if(f&&typeof f=="object"&&(a=f.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){i.save(),i.translate(e,s),i.rotate(v),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(p)||p<=0)){switch(i.beginPath(),f){default:n?i.ellipse(e,s,n/2,p,0,0,Y):i.arc(e,s,p,0,Y),i.closePath();break;case"triangle":d=n?n/2:p,i.moveTo(e+Math.sin(v)*d,s-Math.cos(v)*p),v+=gn,i.lineTo(e+Math.sin(v)*d,s-Math.cos(v)*p),v+=gn,i.lineTo(e+Math.sin(v)*d,s-Math.cos(v)*p),i.closePath();break;case"rectRounded":c=p*.516,l=p-c,r=Math.cos(v+Yt)*l,u=Math.cos(v+Yt)*(n?n/2-c:l),o=Math.sin(v+Yt)*l,h=Math.sin(v+Yt)*(n?n/2-c:l),i.arc(e-u,s-o,c,v-X,v-Z),i.arc(e+h,s-r,c,v-Z,v),i.arc(e+u,s+o,c,v,v+Z),i.arc(e-h,s+r,c,v+Z,v+X),i.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*p,d=n?n/2:l,i.rect(e-d,s-l,2*d,2*l);break}v+=Yt;case"rectRot":u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+h,s-r),i.lineTo(e+u,s+o),i.lineTo(e-h,s+r),i.closePath();break;case"crossRot":v+=Yt;case"cross":u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+u,s+o),i.moveTo(e+h,s-r),i.lineTo(e-h,s+r);break;case"star":u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+u,s+o),i.moveTo(e+h,s-r),i.lineTo(e-h,s+r),v+=Yt,u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+u,s+o),i.moveTo(e+h,s-r),i.lineTo(e-h,s+r);break;case"line":r=n?n/2:Math.cos(v)*p,o=Math.sin(v)*p,i.moveTo(e-r,s-o),i.lineTo(e+r,s+o);break;case"dash":i.moveTo(e,s),i.lineTo(e+Math.cos(v)*(n?n/2:p),s+Math.sin(v)*p);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function Dt(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function $i(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function Hi(i){i.restore()}function Kc(i,t,e,s,n){if(!t)return i.lineTo(e.x,e.y);if(n==="middle"){const a=(t.x+e.x)/2;i.lineTo(a,t.y),i.lineTo(a,e.y)}else n==="after"!=!!s?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function Zc(i,t,e,s){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function Jc(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),z(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function Qc(i,t,e,s,n){if(n.strikethrough||n.underline){const a=i.measureText(s),r=t-a.actualBoundingBoxLeft,o=t+a.actualBoundingBoxRight,l=e-a.actualBoundingBoxAscent,c=e+a.actualBoundingBoxDescent,d=n.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=n.decorationWidth||2,i.moveTo(r,d),i.lineTo(o,d),i.stroke()}}function td(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function ae(i,t,e,s,n,a={}){const r=G(t)?t:[t],o=a.strokeWidth>0&&a.strokeColor!=="";let l,c;for(i.save(),i.font=n.string,Jc(i,a),l=0;l<r.length;++l)c=r[l],a.backdrop&&td(i,a.backdrop),o&&(a.strokeColor&&(i.strokeStyle=a.strokeColor),z(a.strokeWidth)||(i.lineWidth=a.strokeWidth),i.strokeText(c,e,s,a.maxWidth)),i.fillText(c,e,s,a.maxWidth),Qc(i,e,s,c,a),s+=Number(n.lineHeight);i.restore()}function Ge(i,t){const{x:e,y:s,w:n,h:a,radius:r}=t;i.arc(e+r.topLeft,s+r.topLeft,r.topLeft,1.5*X,X,!0),i.lineTo(e,s+a-r.bottomLeft),i.arc(e+r.bottomLeft,s+a-r.bottomLeft,r.bottomLeft,X,Z,!0),i.lineTo(e+n-r.bottomRight,s+a),i.arc(e+n-r.bottomRight,s+a-r.bottomRight,r.bottomRight,Z,0,!0),i.lineTo(e+n,s+r.topRight),i.arc(e+n-r.topRight,s+r.topRight,r.topRight,0,-Z,!0),i.lineTo(e+r.topLeft,s)}const ed=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,id=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function sd(i,t){const e=(""+i).match(ed);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const nd=i=>+i||0;function js(i,t){const e={},s=R(t),n=s?Object.keys(t):t,a=R(i)?s?r=>F(i[r],i[t[r]]):r=>i[r]:()=>i;for(const r of n)e[r]=nd(a(r));return e}function nr(i){return js(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ie(i){return js(i,["topLeft","topRight","bottomLeft","bottomRight"])}function tt(i){const t=nr(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function J(i,t){i=i||{},t=t||U.font;let e=F(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=F(i.style,t.style);s&&!(""+s).match(id)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:F(i.family,t.family),lineHeight:sd(F(i.lineHeight,t.lineHeight),e),size:e,style:s,weight:F(i.weight,t.weight),string:""};return n.string=Xc(n),n}function W(i,t,e,s){let n=!0,a,r,o;for(a=0,r=i.length;a<r;++a)if(o=i[a],o!==void 0&&(t!==void 0&&typeof o=="function"&&(o=o(t),n=!1),e!==void 0&&G(o)&&(o=o[e%o.length],n=!1),o!==void 0))return s&&!n&&(s.cacheable=!1),o}function ad(i,t,e){const{min:s,max:n}=i,a=Ga(t,(n-s)/2),r=(o,l)=>e&&o===0?0:o+l;return{min:r(s,-Math.abs(a)),max:r(n,a)}}function qt(i,t){return Object.assign(Object.create(i),t)}function qs(i,t=[""],e,s,n=()=>i[0]){const a=e||i;typeof s>"u"&&(s=lr("_fallback",i));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:a,_fallback:s,_getTarget:n,override:o=>qs([o,...i],t,a,s)};return new Proxy(r,{deleteProperty(o,l){return delete o[l],delete o._keys,delete i[0][l],!0},get(o,l){return rr(o,l,()=>fd(l,t,i,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(o,l){return Tn(o).includes(l)},ownKeys(o){return Tn(o)},set(o,l,c){const d=o._storage||(o._storage=n());return o[l]=d[l]=c,delete o._keys,!0}})}function pe(i,t,e,s){const n={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:ar(i,s),setContext:a=>pe(i,a,e,s),override:a=>pe(i.override(a),t,e,s)};return new Proxy(n,{deleteProperty(a,r){return delete a[r],delete i[r],!0},get(a,r,o){return rr(a,r,()=>od(a,r,o))},getOwnPropertyDescriptor(a,r){return a._descriptors.allKeys?Reflect.has(i,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,r)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(a,r){return Reflect.has(i,r)},ownKeys(){return Reflect.ownKeys(i)},set(a,r,o){return i[r]=o,delete a[r],!0}})}function ar(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=i;return{allKeys:n,scriptable:e,indexable:s,isScriptable:jt(e)?e:()=>e,isIndexable:jt(s)?s:()=>s}}const rd=(i,t)=>i?i+Vs(t):t,Ws=(i,t)=>R(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function rr(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t))return i[t];const s=e();return i[t]=s,s}function od(i,t,e){const{_proxy:s,_context:n,_subProxy:a,_descriptors:r}=i;let o=s[t];return jt(o)&&r.isScriptable(t)&&(o=ld(t,o,i,e)),G(o)&&o.length&&(o=cd(t,o,i,r.isIndexable)),Ws(t,o)&&(o=pe(o,n,a&&a[t],r)),o}function ld(i,t,e,s){const{_proxy:n,_context:a,_subProxy:r,_stack:o}=e;if(o.has(i))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+i);o.add(i);let l=t(a,r||s);return o.delete(i),Ws(i,l)&&(l=Gs(n._scopes,n,i,l)),l}function cd(i,t,e,s){const{_proxy:n,_context:a,_subProxy:r,_descriptors:o}=e;if(typeof a.index<"u"&&s(i))return t[a.index%t.length];if(R(t[0])){const l=t,c=n._scopes.filter(d=>d!==l);t=[];for(const d of l){const u=Gs(c,n,i,d);t.push(pe(u,a,r&&r[i],o))}}return t}function or(i,t,e){return jt(i)?i(t,e):i}const dd=(i,t)=>i===!0?t:typeof i=="string"?Ht(t,i):void 0;function ud(i,t,e,s,n){for(const a of t){const r=dd(e,a);if(r){i.add(r);const o=or(r._fallback,e,n);if(typeof o<"u"&&o!==e&&o!==s)return o}else if(r===!1&&typeof s<"u"&&e!==s)return null}return!1}function Gs(i,t,e,s){const n=t._rootScopes,a=or(t._fallback,e,s),r=[...i,...n],o=new Set;o.add(s);let l=Mn(o,r,e,a||e,s);return l===null||typeof a<"u"&&a!==e&&(l=Mn(o,r,a,l,s),l===null)?!1:qs(Array.from(o),[""],n,a,()=>hd(t,e,s))}function Mn(i,t,e,s,n){for(;e;)e=ud(i,t,e,s,n);return e}function hd(i,t,e){const s=i._getTarget();t in s||(s[t]={});const n=s[t];return G(n)&&R(e)?e:n||{}}function fd(i,t,e,s){let n;for(const a of t)if(n=lr(rd(a,i),e),typeof n<"u")return Ws(i,n)?Gs(e,s,i,n):n}function lr(i,t){for(const e of t){if(!e)continue;const s=e[i];if(typeof s<"u")return s}}function Tn(i){let t=i._keys;return t||(t=i._keys=pd(i._scopes)),t}function pd(i){const t=new Set;for(const e of i)for(const s of Object.keys(e).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function cr(i,t,e,s){const{iScale:n}=i,{key:a="r"}=this._parsing,r=new Array(s);let o,l,c,d;for(o=0,l=s;o<l;++o)c=o+e,d=t[c],r[o]={r:n.parse(Ht(d,a),c)};return r}const gd=Number.EPSILON||1e-14,ge=(i,t)=>t<i.length&&!i[t].skip&&i[t],dr=i=>i==="x"?"y":"x";function md(i,t,e,s){const n=i.skip?t:i,a=t,r=e.skip?t:e,o=gs(a,n),l=gs(r,a);let c=o/(o+l),d=l/(o+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const u=s*c,h=s*d;return{previous:{x:a.x-u*(r.x-n.x),y:a.y-u*(r.y-n.y)},next:{x:a.x+h*(r.x-n.x),y:a.y+h*(r.y-n.y)}}}function bd(i,t,e){const s=i.length;let n,a,r,o,l,c=ge(i,0);for(let d=0;d<s-1;++d)if(l=c,c=ge(i,d+1),!(!l||!c)){if(De(t[d],0,gd)){e[d]=e[d+1]=0;continue}n=e[d]/t[d],a=e[d+1]/t[d],o=Math.pow(n,2)+Math.pow(a,2),!(o<=9)&&(r=3/Math.sqrt(o),e[d]=n*r*t[d],e[d+1]=a*r*t[d])}}function vd(i,t,e="x"){const s=dr(e),n=i.length;let a,r,o,l=ge(i,0);for(let c=0;c<n;++c){if(r=o,o=l,l=ge(i,c+1),!o)continue;const d=o[e],u=o[s];r&&(a=(d-r[e])/3,o[`cp1${e}`]=d-a,o[`cp1${s}`]=u-a*t[c]),l&&(a=(l[e]-d)/3,o[`cp2${e}`]=d+a,o[`cp2${s}`]=u+a*t[c])}}function xd(i,t="x"){const e=dr(t),s=i.length,n=Array(s).fill(0),a=Array(s);let r,o,l,c=ge(i,0);for(r=0;r<s;++r)if(o=l,l=c,c=ge(i,r+1),!!l){if(c){const d=c[t]-l[t];n[r]=d!==0?(c[e]-l[e])/d:0}a[r]=o?c?St(n[r-1])!==St(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}bd(i,n,a),vd(i,a,t)}function ai(i,t,e){return Math.max(Math.min(i,e),t)}function yd(i,t){let e,s,n,a,r,o=Dt(i[0],t);for(e=0,s=i.length;e<s;++e)r=a,a=o,o=e<s-1&&Dt(i[e+1],t),a&&(n=i[e],r&&(n.cp1x=ai(n.cp1x,t.left,t.right),n.cp1y=ai(n.cp1y,t.top,t.bottom)),o&&(n.cp2x=ai(n.cp2x,t.left,t.right),n.cp2y=ai(n.cp2y,t.top,t.bottom)))}function _d(i,t,e,s,n){let a,r,o,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")xd(i,n);else{let c=s?i[i.length-1]:i[0];for(a=0,r=i.length;a<r;++a)o=i[a],l=md(c,o,i[Math.min(a+1,r-(s?0:1))%r],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,c=o}t.capBezierPoints&&yd(i,e)}function Ys(){return typeof window<"u"&&typeof document<"u"}function Xs(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function zi(i,t,e){let s;return typeof i=="string"?(s=parseInt(i,10),i.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=i,s}const ji=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function wd(i,t){return ji(i).getPropertyValue(t)}const Sd=["top","right","bottom","left"];function se(i,t,e){const s={};e=e?"-"+e:"";for(let n=0;n<4;n++){const a=Sd[n];s[a]=parseFloat(i[t+"-"+a+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const Md=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function Td(i,t){const e=i.touches,s=e&&e.length?e[0]:i,{offsetX:n,offsetY:a}=s;let r=!1,o,l;if(Md(n,a,i.target))o=n,l=a;else{const c=t.getBoundingClientRect();o=s.clientX-c.left,l=s.clientY-c.top,r=!0}return{x:o,y:l,box:r}}function Zt(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:s}=t,n=ji(e),a=n.boxSizing==="border-box",r=se(n,"padding"),o=se(n,"border","width"),{x:l,y:c,box:d}=Td(i,e),u=r.left+(d&&o.left),h=r.top+(d&&o.top);let{width:f,height:g}=t;return a&&(f-=r.width+o.width,g-=r.height+o.height),{x:Math.round((l-u)/f*e.width/s),y:Math.round((c-h)/g*e.height/s)}}function kd(i,t,e){let s,n;if(t===void 0||e===void 0){const a=Xs(i);if(!a)t=i.clientWidth,e=i.clientHeight;else{const r=a.getBoundingClientRect(),o=ji(a),l=se(o,"border","width"),c=se(o,"padding");t=r.width-c.width-l.width,e=r.height-c.height-l.height,s=zi(o.maxWidth,a,"clientWidth"),n=zi(o.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:s||Ii,maxHeight:n||Ii}}const ri=i=>Math.round(i*10)/10;function Cd(i,t,e,s){const n=ji(i),a=se(n,"margin"),r=zi(n.maxWidth,i,"clientWidth")||Ii,o=zi(n.maxHeight,i,"clientHeight")||Ii,l=kd(i,t,e);let{width:c,height:d}=l;if(n.boxSizing==="content-box"){const h=se(n,"border","width"),f=se(n,"padding");c-=f.width+h.width,d-=f.height+h.height}return c=Math.max(0,c-a.width),d=Math.max(0,s?c/s:d-a.height),c=ri(Math.min(c,r,l.maxWidth)),d=ri(Math.min(d,o,l.maxHeight)),c&&!d&&(d=ri(c/2)),(t!==void 0||e!==void 0)&&s&&l.height&&d>l.height&&(d=l.height,c=ri(Math.floor(d*s))),{width:c,height:d}}function kn(i,t,e){const s=t||1,n=Math.floor(i.height*s),a=Math.floor(i.width*s);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const r=i.canvas;return r.style&&(e||!r.style.height&&!r.style.width)&&(r.style.height=`${i.height}px`,r.style.width=`${i.width}px`),i.currentDevicePixelRatio!==s||r.height!==n||r.width!==a?(i.currentDevicePixelRatio=s,r.height=n,r.width=a,i.ctx.setTransform(s,0,0,s,0,0),!0):!1}const Ed=function(){let i=!1;try{const t={get passive(){return i=!0,!1}};Ys()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return i}();function Cn(i,t){const e=wd(i,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Jt(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function Ld(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:s==="middle"?e<.5?i.y:t.y:s==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function Pd(i,t,e,s){const n={x:i.cp2x,y:i.cp2y},a={x:t.cp1x,y:t.cp1y},r=Jt(i,n,e),o=Jt(n,a,e),l=Jt(a,t,e),c=Jt(r,o,e),d=Jt(o,l,e);return Jt(c,d,e)}const Ad=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Od=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function he(i,t,e){return i?Ad(t,e):Od()}function ur(i,t){let e,s;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=s)}function hr(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function fr(i){return i==="angle"?{between:We,compare:Dc,normalize:ut}:{between:At,compare:(t,e)=>t-e,normalize:t=>t}}function En({start:i,end:t,count:e,loop:s,style:n}){return{start:i%e,end:t%e,loop:s&&(t-i+1)%e===0,style:n}}function Dd(i,t,e){const{property:s,start:n,end:a}=e,{between:r,normalize:o}=fr(s),l=t.length;let{start:c,end:d,loop:u}=i,h,f;if(u){for(c+=l,d+=l,h=0,f=l;h<f&&r(o(t[c%l][s]),n,a);++h)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:u,style:i.style}}function pr(i,t,e){if(!e)return[i];const{property:s,start:n,end:a}=e,r=t.length,{compare:o,between:l,normalize:c}=fr(s),{start:d,end:u,loop:h,style:f}=Dd(i,t,e),g=[];let p=!1,v=null,x,m,b;const y=()=>l(n,b,x)&&o(n,b)!==0,_=()=>o(a,x)===0||l(a,b,x),w=()=>p||y(),E=()=>!p||_();for(let M=d,k=d;M<=u;++M)m=t[M%r],!m.skip&&(x=c(m[s]),x!==b&&(p=l(x,n,a),v===null&&w()&&(v=o(x,n)===0?M:k),v!==null&&E()&&(g.push(En({start:v,end:M,loop:h,count:r,style:f})),v=null),k=M,b=x));return v!==null&&g.push(En({start:v,end:u,loop:h,count:r,style:f})),g}function gr(i,t){const e=[],s=i.segments;for(let n=0;n<s.length;n++){const a=pr(s[n],i.points,t);a.length&&e.push(...a)}return e}function Id(i,t,e,s){let n=0,a=t-1;if(e&&!s)for(;n<t&&!i[n].skip;)n++;for(;n<t&&i[n].skip;)n++;for(n%=t,e&&(a+=n);a>n&&i[a%t].skip;)a--;return a%=t,{start:n,end:a}}function Fd(i,t,e,s){const n=i.length,a=[];let r=t,o=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%n];c.skip||c.stop?o.skip||(s=!1,a.push({start:t%n,end:(l-1)%n,loop:s}),t=r=c.stop?l:null):(r=l,o.skip&&(t=l)),o=c}return r!==null&&a.push({start:t%n,end:r%n,loop:s}),a}function zd(i,t){const e=i.points,s=i.options.spanGaps,n=e.length;if(!n)return[];const a=!!i._loop,{start:r,end:o}=Id(e,n,a,s);if(s===!0)return Ln(i,[{start:r,end:o,loop:a}],e,t);const l=o<r?o+n:o,c=!!i._fullLoop&&r===0&&o===n-1;return Ln(i,Fd(e,r,l,c),e,t)}function Ln(i,t,e,s){return!s||!s.setContext||!e?t:Rd(i,t,e,s)}function Rd(i,t,e,s){const n=i._chart.getContext(),a=Pn(i.options),{_datasetIndex:r,options:{spanGaps:o}}=i,l=e.length,c=[];let d=a,u=t[0].start,h=u;function f(g,p,v,x){const m=o?-1:1;if(g!==p){for(g+=l;e[g%l].skip;)g-=m;for(;e[p%l].skip;)p+=m;g%l!==p%l&&(c.push({start:g%l,end:p%l,loop:v,style:x}),d=x,u=p%l)}}for(const g of t){u=o?u:g.start;let p=e[u%l],v;for(h=u+1;h<=g.end;h++){const x=e[h%l];v=Pn(s.setContext(qt(n,{type:"segment",p0:p,p1:x,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:r}))),Vd(v,d)&&f(u,h-1,g.loop,d),p=x,d=v}u<h-1&&f(u,h-1,g.loop,d)}return c}function Pn(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function Vd(i,t){if(!t)return!1;const e=[],s=function(n,a){return Hs(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(i,s)!==JSON.stringify(t,s)}/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Bd{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,n){const a=e.listeners[n],r=e.duration;a.forEach(o=>o({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(s-e.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=Ja.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const a=s.items;let r=a.length-1,o=!1,l;for(;r>=0;--r)l=a[r],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),o=!0):(a[r]=a[a.length-1],a.pop());o&&(n.draw(),this._notify(n,s,t,"progress")),a.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ct=new Bd;const An="transparent",Nd={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const s=_n(i||An),n=s.valid&&_n(t||An);return n&&n.valid?n.mix(s,e).hexString():t},number(i,t,e){return i+(t-i)*e}};class $d{constructor(t,e,s,n){const a=e[s];n=W([t.to,n,a,t.from]);const r=W([t.from,a,n]);this._active=!0,this._fn=t.fn||Nd[t.type||typeof r],this._easing=Ie[t.easing]||Ie.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const n=this._target[this._prop],a=s-this._start,r=this._duration-a;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=W([t.to,e,n,t.from]),this._from=W([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,n=this._prop,a=this._from,r=this._loop,o=this._to;let l;if(this._active=a!==o&&(r||e<s),!this._active){this._target[n]=o,this._notify(!0);return}if(e<0){this._target[n]=a;return}l=e/s%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(a,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][e]()}}class mr{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!R(t))return;const e=Object.keys(U.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const a=t[n];if(!R(a))return;const r={};for(const o of e)r[o]=a[o];(G(a.properties)&&a.properties||[n]).forEach(o=>{(o===n||!s.has(o))&&s.set(o,r)})})}_animateOptions(t,e){const s=e.options,n=jd(t,s);if(!n)return[];const a=this._createAnimations(n,s);return s.$shared&&Hd(t.options.$animations,s).then(()=>{t.options=s},()=>{}),a}_createAnimations(t,e){const s=this._properties,n=[],a=t.$animations||(t.$animations={}),r=Object.keys(e),o=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,e));continue}const d=e[c];let u=a[c];const h=s.get(c);if(u)if(h&&u.active()){u.update(h,d,o);continue}else u.cancel();if(!h||!h.duration){t[c]=d;continue}a[c]=u=new $d(h,t,c,d),n.push(u)}return n}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Ct.add(this._chart,s),!0}}function Hd(i,t){const e=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const a=i[s[n]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function jd(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function On(i,t){const e=i&&i.options||{},s=e.reverse,n=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:s?a:n,end:s?n:a}}function qd(i,t,e){if(e===!1)return!1;const s=On(i,e),n=On(t,e);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function Wd(i){let t,e,s,n;return R(i)?(t=i.top,e=i.right,s=i.bottom,n=i.left):t=e=s=n=i,{top:t,right:e,bottom:s,left:n,disabled:i===!1}}function br(i,t){const e=[],s=i._getSortedDatasetMetas(t);let n,a;for(n=0,a=s.length;n<a;++n)e.push(s[n].index);return e}function Dn(i,t,e,s={}){const n=i.keys,a=s.mode==="single";let r,o,l,c;if(t!==null){for(r=0,o=n.length;r<o;++r){if(l=+n[r],l===e){if(s.all)continue;break}c=i.values[l],K(c)&&(a||t===0||St(t)===St(c))&&(t+=c)}return t}}function Gd(i){const t=Object.keys(i),e=new Array(t.length);let s,n,a;for(s=0,n=t.length;s<n;++s)a=t[s],e[s]={x:a,y:i[a]};return e}function In(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function Yd(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function Xd(i){const{min:t,max:e,minDefined:s,maxDefined:n}=i.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?e:Number.POSITIVE_INFINITY}}function Ud(i,t,e){const s=i[t]||(i[t]={});return s[e]||(s[e]={})}function Fn(i,t,e,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const a=i[n.index];if(e&&a>0||!e&&a<0)return n.index}return null}function zn(i,t){const{chart:e,_cachedMeta:s}=i,n=e._stacks||(e._stacks={}),{iScale:a,vScale:r,index:o}=s,l=a.axis,c=r.axis,d=Yd(a,r,s),u=t.length;let h;for(let f=0;f<u;++f){const g=t[f],{[l]:p,[c]:v}=g,x=g._stacks||(g._stacks={});h=x[c]=Ud(n,d,p),h[o]=v,h._top=Fn(h,r,!0,s.type),h._bottom=Fn(h,r,!1,s.type);const m=h._visualValues||(h._visualValues={});m[o]=v}}function ts(i,t){const e=i.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function Kd(i,t){return qt(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Zd(i,t,e){return qt(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function xe(i,t){const e=i.controller.index,s=i.vScale&&i.vScale.axis;if(s){t=t||i._parsed;for(const n of t){const a=n._stacks;if(!a||a[s]===void 0||a[s][e]===void 0)return;delete a[s][e],a[s]._visualValues!==void 0&&a[s]._visualValues[e]!==void 0&&delete a[s]._visualValues[e]}}}const es=i=>i==="reset"||i==="none",Rn=(i,t)=>t?i:Object.assign({},i),Jd=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:br(e,!0),values:null};class xt{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=In(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&xe(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),n=(u,h,f,g)=>u==="x"?h:u==="r"?g:f,a=e.xAxisID=F(s.xAxisID,ts(t,"x")),r=e.yAxisID=F(s.yAxisID,ts(t,"y")),o=e.rAxisID=F(s.rAxisID,ts(t,"r")),l=e.indexAxis,c=e.iAxisID=n(l,a,r,o),d=e.vAxisID=n(l,r,a,o);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(o),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&vn(this._data,this),t._stacked&&xe(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(R(e))this._data=Gd(e);else if(s!==e){if(s){vn(s,this);const n=this._cachedMeta;xe(n),n._parsed=[]}e&&Object.isExtensible(e)&&Rc(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const a=e._stacked;e._stacked=In(e.vScale,e),e.stack!==s.stack&&(n=!0,xe(e),e.stack=s.stack),this._resyncElements(t),(n||a!==e._stacked)&&zn(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:n}=this,{iScale:a,_stacked:r}=s,o=a.axis;let l=t===0&&e===n.length?!0:s._sorted,c=t>0&&s._parsed[t-1],d,u,h;if(this._parsing===!1)s._parsed=n,s._sorted=!0,h=n;else{G(n[t])?h=this.parseArrayData(s,n,t,e):R(n[t])?h=this.parseObjectData(s,n,t,e):h=this.parsePrimitiveData(s,n,t,e);const f=()=>u[o]===null||c&&u[o]<c[o];for(d=0;d<e;++d)s._parsed[d+t]=u=h[d],l&&(f()&&(l=!1),c=u);s._sorted=l}r&&zn(this,h)}parsePrimitiveData(t,e,s,n){const{iScale:a,vScale:r}=t,o=a.axis,l=r.axis,c=a.getLabels(),d=a===r,u=new Array(n);let h,f,g;for(h=0,f=n;h<f;++h)g=h+s,u[h]={[o]:d||a.parse(c[g],g),[l]:r.parse(e[g],g)};return u}parseArrayData(t,e,s,n){const{xScale:a,yScale:r}=t,o=new Array(n);let l,c,d,u;for(l=0,c=n;l<c;++l)d=l+s,u=e[d],o[l]={x:a.parse(u[0],d),y:r.parse(u[1],d)};return o}parseObjectData(t,e,s,n){const{xScale:a,yScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=new Array(n);let d,u,h,f;for(d=0,u=n;d<u;++d)h=d+s,f=e[h],c[d]={x:a.parse(Ht(f,o),h),y:r.parse(Ht(f,l),h)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const n=this.chart,a=this._cachedMeta,r=e[t.axis],o={keys:br(n,!0),values:e._stacks[t.axis]._visualValues};return Dn(o,r,a.index,{mode:s})}updateRangeFromParsed(t,e,s,n){const a=s[e.axis];let r=a===null?NaN:a;const o=n&&s._stacks[e.axis];n&&o&&(n.values=o,r=Dn(n,a,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const s=this._cachedMeta,n=s._parsed,a=s._sorted&&t===s.iScale,r=n.length,o=this._getOtherScale(t),l=Jd(e,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:u}=Xd(o);let h,f;function g(){f=n[h];const p=f[o.axis];return!K(f[t.axis])||d>p||u<p}for(h=0;h<r&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),a));++h);if(a){for(h=r-1;h>=0;--h)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let n,a,r;for(n=0,a=e.length;n<a;++n)r=e[n][t.axis],K(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,n=e.vScale,a=this.getParsed(t);return{label:s?""+s.getLabelForValue(a[s.axis]):"",value:n?""+n.getLabelForValue(a[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Wd(F(this.options.clip,qd(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,n=s.data||[],a=e.chartArea,r=[],o=this._drawStart||0,l=this._drawCount||n.length-o,c=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,a,o,l),d=o;d<o+l;++d){const u=n[d];u.hidden||(u.active&&c?r.push(u):u.draw(t,a))}for(d=0;d<r.length;++d)r[d].draw(t,a)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const n=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];a=r.$context||(r.$context=Zd(this.getContext(),t,r)),a.parsed=this.getParsed(t),a.raw=n.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Kd(this.chart.getContext(),this.index)),a.dataset=n,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=s,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const n=e==="active",a=this._cachedDataOpts,r=t+"-"+e,o=a[r],l=this.enableOptionSharing&&qe(s);if(o)return Rn(o,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),u=n?[`${t}Hover`,"hover",t,""]:[t,""],h=c.getOptionScopes(this.getDataset(),d),f=Object.keys(U.elements[t]),g=()=>this.getContext(s,n,e),p=c.resolveNamedOptions(h,f,g,u);return p.$shared&&(p.$shared=l,a[r]=Object.freeze(Rn(p,l))),p}_resolveAnimations(t,e,s){const n=this.chart,a=this._cachedDataOpts,r=`animation-${e}`,o=a[r];if(o)return o;let l;if(n.options.animation!==!1){const d=this.chart.config,u=d.datasetAnimationScopeKeys(this._type,e),h=d.getOptionScopes(this.getDataset(),u);l=d.createResolver(h,this.getContext(t,s,e))}const c=new mr(n,l&&l.animations);return l&&l._cacheable&&(a[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||es(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),n=this._sharedOptions,a=this.getSharedOptions(s),r=this.includeOptions(e,a)||a!==n;return this.updateSharedOptions(a,e,s),{sharedOptions:a,includeOptions:r}}updateElement(t,e,s,n){es(n)?Object.assign(t,s):this._resolveAnimations(e,n).update(t,s)}updateSharedOptions(t,e,s){t&&!es(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,n){t.active=n;const a=this.getStyle(e,n);this._resolveAnimations(e,s,n).update(t,{options:!n&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[o,l,c]of this._syncList)this[o](l,c);this._syncList=[];const n=s.length,a=e.length,r=Math.min(a,n);r&&this.parse(0,r),a>n?this._insertElements(n,a-n,t):a<n&&this._removeElements(a,n-a)}_insertElements(t,e,s=!0){const n=this._cachedMeta,a=n.data,r=t+e;let o;const l=c=>{for(c.length+=e,o=c.length-1;o>=r;o--)c[o]=c[o-e]};for(l(a),o=t;o<r;++o)a[o]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,e),s&&this.updateElements(a,t,e,"reset")}updateElements(t,e,s,n){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,e);s._stacked&&xe(s,n)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,n]=t;this[e](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}L(xt,"defaults",{}),L(xt,"datasetElementType",null),L(xt,"dataElementType",null);function Qd(i,t){if(!i._cache.$bar){const e=i.getMatchingVisibleMetas(t);let s=[];for(let n=0,a=e.length;n<a;n++)s=s.concat(e[n].controller.getAllParsedValues(i));i._cache.$bar=Za(s.sort((n,a)=>n-a))}return i._cache.$bar}function tu(i){const t=i.iScale,e=Qd(t,i.type);let s=t._length,n,a,r,o;const l=()=>{r===32767||r===-32768||(qe(o)&&(s=Math.min(s,Math.abs(r-o)||s)),o=r)};for(n=0,a=e.length;n<a;++n)r=t.getPixelForValue(e[n]),l();for(o=void 0,n=0,a=t.ticks.length;n<a;++n)r=t.getPixelForTick(n),l();return s}function eu(i,t,e,s){const n=e.barThickness;let a,r;return z(n)?(a=t.min*e.categoryPercentage,r=e.barPercentage):(a=n*s,r=1),{chunk:a/s,ratio:r,start:t.pixels[i]-a/2}}function iu(i,t,e,s){const n=t.pixels,a=n[i];let r=i>0?n[i-1]:null,o=i<n.length-1?n[i+1]:null;const l=e.categoryPercentage;r===null&&(r=a-(o===null?t.end-t.start:o-a)),o===null&&(o=a+a-r);const c=a-(a-Math.min(r,o))/2*l;return{chunk:Math.abs(o-r)/2*l/s,ratio:e.barPercentage,start:c}}function su(i,t,e,s){const n=e.parse(i[0],s),a=e.parse(i[1],s),r=Math.min(n,a),o=Math.max(n,a);let l=r,c=o;Math.abs(r)>Math.abs(o)&&(l=o,c=r),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:a,min:r,max:o}}function vr(i,t,e,s){return G(i)?su(i,t,e,s):t[e.axis]=e.parse(i,s),t}function Vn(i,t,e,s){const n=i.iScale,a=i.vScale,r=n.getLabels(),o=n===a,l=[];let c,d,u,h;for(c=e,d=e+s;c<d;++c)h=t[c],u={},u[n.axis]=o||n.parse(r[c],c),l.push(vr(h,u,a,c));return l}function is(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function nu(i,t,e){return i!==0?St(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function au(i){let t,e,s,n,a;return i.horizontal?(t=i.base>i.x,e="left",s="right"):(t=i.base<i.y,e="bottom",s="top"),t?(n="end",a="start"):(n="start",a="end"),{start:e,end:s,reverse:t,top:n,bottom:a}}function ru(i,t,e,s){let n=t.borderSkipped;const a={};if(!n){i.borderSkipped=a;return}if(n===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:o,reverse:l,top:c,bottom:d}=au(i);n==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===s?n=c:(e._bottom||0)===s?n=d:(a[Bn(d,r,o,l)]=!0,n=c)),a[Bn(n,r,o,l)]=!0,i.borderSkipped=a}function Bn(i,t,e,s){return s?(i=ou(i,t,e),i=Nn(i,e,t)):i=Nn(i,t,e),i}function ou(i,t,e){return i===t?e:i===e?t:i}function Nn(i,t,e){return i==="start"?t:i==="end"?e:i}function lu(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}class wi extends xt{parsePrimitiveData(t,e,s,n){return Vn(t,e,s,n)}parseArrayData(t,e,s,n){return Vn(t,e,s,n)}parseObjectData(t,e,s,n){const{iScale:a,vScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?o:l,d=r.axis==="x"?o:l,u=[];let h,f,g,p;for(h=s,f=s+n;h<f;++h)p=e[h],g={},g[a.axis]=a.parse(Ht(p,c),h),u.push(vr(Ht(p,d),g,r,h));return u}updateRangeFromParsed(t,e,s,n){super.updateRangeFromParsed(t,e,s,n);const a=s._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:n}=e,a=this.getParsed(t),r=a._custom,o=is(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(a[n.axis]);return{label:""+s.getLabelForValue(a[s.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,n){const a=n==="reset",{index:r,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),c=o.isHorizontal(),d=this._getRuler(),{sharedOptions:u,includeOptions:h}=this._getSharedOptions(e,n);for(let f=e;f<e+s;f++){const g=this.getParsed(f),p=a||z(g[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),v=this._calculateBarIndexPixels(f,d),x=(g._stacks||{})[o.axis],m={horizontal:c,base:p.base,enableBorderRadius:!x||is(g._custom)||r===x._top||r===x._bottom,x:c?p.head:v.center,y:c?v.center:p.head,height:c?v.size:Math.abs(p.size),width:c?Math.abs(p.size):v.size};h&&(m.options=u||this.resolveDataElementOptions(f,t[f].active?"active":n));const b=m.options||t[f].options;ru(m,b,x,r),lu(m,b,d.ratio),this.updateElement(t[f],f,m,n)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),a=s.options.stacked,r=[],o=l=>{const c=l.controller.getParsed(e),d=c&&c[l.vScale.axis];if(z(d)||isNaN(d))return!0};for(const l of n)if(!(e!==void 0&&o(l))&&((a===!1||r.indexOf(l.stack)===-1||a===void 0&&l.stack===void 0)&&r.push(l.stack),l.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,s){const n=this._getStacks(t,s),a=e!==void 0?n.indexOf(e):-1;return a===-1?n.length-1:a}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,n=[];let a,r;for(a=0,r=e.data.length;a<r;++a)n.push(s.getPixelForValue(this.getParsed(a)[s.axis],a));const o=t.barThickness;return{min:o||tu(e),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:n},options:{base:a,minBarLength:r}}=this,o=a||0,l=this.getParsed(t),c=l._custom,d=is(c);let u=l[e.axis],h=0,f=s?this.applyStack(e,l,s):u,g,p;f!==u&&(h=f-u,f=u),d&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&St(u)!==St(c.barEnd)&&(h=0),h+=u);const v=!z(a)&&!d?a:h;let x=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(h+f):g=x,p=g-x,Math.abs(p)<r){p=nu(p,e,o)*r,u===o&&(x-=p/2);const m=e.getPixelForDecimal(0),b=e.getPixelForDecimal(1),y=Math.min(m,b),_=Math.max(m,b);x=Math.max(Math.min(x,_),y),g=x+p,s&&!d&&(l._stacks[e.axis]._visualValues[n]=e.getValueForPixel(g)-e.getValueForPixel(x))}if(x===e.getPixelForValue(o)){const m=St(p)*e.getLineWidthForValue(o)/2;x+=m,p-=m}return{size:p,base:x,head:g,center:g+p/2}}_calculateBarIndexPixels(t,e){const s=e.scale,n=this.options,a=n.skipNull,r=F(n.maxBarThickness,1/0);let o,l;if(e.grouped){const c=a?this._getStackCount(t):e.stackCount,d=n.barThickness==="flex"?iu(t,e,n,c):eu(t,e,n,c),u=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0);o=d.start+d.chunk*u+d.chunk/2,l=Math.min(r,d.chunk*d.ratio)}else o=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,e.min*e.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,n=s.length;let a=0;for(;a<n;++a)this.getParsed(a)[e.axis]!==null&&s[a].draw(this._ctx)}}L(wi,"id","bar"),L(wi,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),L(wi,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Si extends xt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,n){const a=super.parsePrimitiveData(t,e,s,n);for(let r=0;r<a.length;r++)a[r]._custom=this.resolveDataElementOptions(r+s).radius;return a}parseArrayData(t,e,s,n){const a=super.parseArrayData(t,e,s,n);for(let r=0;r<a.length;r++){const o=e[s+r];a[r]._custom=F(o[2],this.resolveDataElementOptions(r+s).radius)}return a}parseObjectData(t,e,s,n){const a=super.parseObjectData(t,e,s,n);for(let r=0;r<a.length;r++){const o=e[s+r];a[r]._custom=F(o&&o.r&&+o.r,this.resolveDataElementOptions(r+s).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=e,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y),c=r._custom;return{label:s[t]||"",value:"("+o+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,n){const a=n==="reset",{iScale:r,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,n),d=r.axis,u=o.axis;for(let h=e;h<e+s;h++){const f=t[h],g=!a&&this.getParsed(h),p={},v=p[d]=a?r.getPixelForDecimal(.5):r.getPixelForValue(g[d]),x=p[u]=a?o.getBasePixel():o.getPixelForValue(g[u]);p.skip=isNaN(v)||isNaN(x),c&&(p.options=l||this.resolveDataElementOptions(h,f.active?"active":n),a&&(p.options.radius=0)),this.updateElement(f,h,p,n)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const a=n.radius;return e!=="active"&&(n.radius=0),n.radius+=F(s&&s._custom,a),n}}L(Si,"id","bubble"),L(Si,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),L(Si,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function cu(i,t,e){let s=1,n=1,a=0,r=0;if(t<Y){const o=i,l=o+t,c=Math.cos(o),d=Math.sin(o),u=Math.cos(l),h=Math.sin(l),f=(b,y,_)=>We(b,o,l,!0)?1:Math.max(y,y*e,_,_*e),g=(b,y,_)=>We(b,o,l,!0)?-1:Math.min(y,y*e,_,_*e),p=f(0,c,u),v=f(Z,d,h),x=g(X,c,u),m=g(X+Z,d,h);s=(p-x)/2,n=(v-m)/2,a=-(p+x)/2,r=-(v+m)/2}return{ratioX:s,ratioY:n,offsetX:a,offsetY:r}}class ee extends xt{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let a=l=>+s[l];if(R(s[t])){const{key:l="value"}=this._parsing;a=c=>+Ht(s[c],l)}let r,o;for(r=t,o=t+e;r<o;++r)n._parsed[r]=a(r)}}_getRotation(){return vt(this.options.rotation-90)}_getCircumference(){return vt(this.options.circumference)}_getRotationExtents(){let t=Y,e=-Y;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,a=n._getRotation(),r=n._getCircumference();t=Math.min(t,a),e=Math.max(e,a+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,n=this._cachedMeta,a=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,o=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min(Sc(this.options.cutout,o),1),c=this._getRingWeight(this.index),{circumference:d,rotation:u}=this._getRotationExtents(),{ratioX:h,ratioY:f,offsetX:g,offsetY:p}=cu(u,d,l),v=(s.width-r)/h,x=(s.height-r)/f,m=Math.max(Math.min(v,x)/2,0),b=Ga(this.options.radius,m),y=Math.max(b*l,0),_=(b-y)/this._getVisibleDatasetWeightTotal();this.offsetX=g*b,this.offsetY=p*b,n.total=this.calculateTotal(),this.outerRadius=b-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*c,0),this.updateElements(a,0,a.length,t)}_circumference(t,e){const s=this.options,n=this._cachedMeta,a=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*a/Y)}updateElements(t,e,s,n){const a=n==="reset",r=this.chart,o=r.chartArea,c=r.options.animation,d=(o.left+o.right)/2,u=(o.top+o.bottom)/2,h=a&&c.animateScale,f=h?0:this.innerRadius,g=h?0:this.outerRadius,{sharedOptions:p,includeOptions:v}=this._getSharedOptions(e,n);let x=this._getRotation(),m;for(m=0;m<e;++m)x+=this._circumference(m,a);for(m=e;m<e+s;++m){const b=this._circumference(m,a),y=t[m],_={x:d+this.offsetX,y:u+this.offsetY,startAngle:x,endAngle:x+b,circumference:b,outerRadius:g,innerRadius:f};v&&(_.options=p||this.resolveDataElementOptions(m,y.active?"active":n)),x+=b,this.updateElement(y,m,_,n)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,n;for(n=0;n<e.length;n++){const a=t._parsed[n];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(n)&&!e[n].hidden&&(s+=Math.abs(a))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Y*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ze(e._parsed[t],s.options.locale);return{label:n[t]||"",value:a}}getMaxBorderWidth(t){let e=0;const s=this.chart;let n,a,r,o,l;if(!t){for(n=0,a=s.data.datasets.length;n<a;++n)if(s.isDatasetVisible(n)){r=s.getDatasetMeta(n),t=r.data,o=r.controller;break}}if(!t)return 0;for(n=0,a=t.length;n<a;++n)l=o.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,n=t.length;s<n;++s){const a=this.resolveDataElementOptions(s);e=Math.max(e,a.offset||0,a.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(F(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}L(ee,"id","doughnut"),L(ee,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),L(ee,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),L(ee,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return e.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Mi extends xt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:n=[],_dataset:a}=e,r=this.chart._animationsDisabled;let{start:o,count:l}=tr(e,n,r);this._drawStart=o,this._drawCount=l,er(e)&&(o=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!a._decimated,s.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:c},t),this.updateElements(n,o,l,t)}updateElements(t,e,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,n),h=r.axis,f=o.axis,{spanGaps:g,segment:p}=this.options,v=fe(g)?g:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||a||n==="none",m=e+s,b=t.length;let y=e>0&&this.getParsed(e-1);for(let _=0;_<b;++_){const w=t[_],E=x?w:{};if(_<e||_>=m){E.skip=!0;continue}const M=this.getParsed(_),k=z(M[f]),S=E[h]=r.getPixelForValue(M[h],_),T=E[f]=a||k?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,M,l):M[f],_);E.skip=isNaN(S)||isNaN(T)||k,E.stop=_>0&&Math.abs(M[h]-y[h])>v,p&&(E.parsed=M,E.raw=c.data[_]),u&&(E.options=d||this.resolveDataElementOptions(_,w.active?"active":n)),x||this.updateElement(w,_,E,n),y=M}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const a=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,a,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}L(Mi,"id","line"),L(Mi,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),L(Mi,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ze extends xt{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ze(e._parsed[t].r,s.options.locale);return{label:n[t]||"",value:a}}parseObjectData(t,e,s,n){return cr.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const a=this.getParsed(n).r;!isNaN(a)&&this.chart.getDataVisibility(n)&&(a<e.min&&(e.min=a),a>e.max&&(e.max=a))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),a=Math.max(n/2,0),r=Math.max(s.cutoutPercentage?a/100*s.cutoutPercentage:1,0),o=(a-r)/t.getVisibleDatasetCount();this.outerRadius=a-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,s,n){const a=n==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,u=c.yCenter,h=c.getIndexAngle(0)-.5*X;let f=h,g;const p=360/this.countVisibleElements();for(g=0;g<e;++g)f+=this._computeAngle(g,n,p);for(g=e;g<e+s;g++){const v=t[g];let x=f,m=f+this._computeAngle(g,n,p),b=r.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;f=m,a&&(l.animateScale&&(b=0),l.animateRotate&&(x=m=h));const y={x:d,y:u,innerRadius:0,outerRadius:b,startAngle:x,endAngle:m,options:this.resolveDataElementOptions(g,v.active?"active":n)};this.updateElement(v,g,y,n)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?vt(this.resolveDataElementOptions(t,e).angle||s):0}}L(ze,"id","polarArea"),L(ze,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),L(ze,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return e.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class vs extends ee{}L(vs,"id","pie"),L(vs,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Ti extends xt{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,n){return cr.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta,s=e.dataset,n=e.data||[],a=e.iScale.getLabels();if(s.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const o={_loop:!0,_fullLoop:a.length===n.length,options:r};this.updateElement(s,void 0,o,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,s,n){const a=this._cachedMeta.rScale,r=n==="reset";for(let o=e;o<e+s;o++){const l=t[o],c=this.resolveDataElementOptions(o,l.active?"active":n),d=a.getPointPositionForValue(o,this.getParsed(o).r),u=r?a.xCenter:d.x,h=r?a.yCenter:d.y,f={x:u,y:h,angle:d.angle,skip:isNaN(u)||isNaN(h),options:c};this.updateElement(l,o,f,n)}}}L(Ti,"id","radar"),L(Ti,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),L(Ti,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class ki extends xt{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=e,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y);return{label:s[t]||"",value:"("+o+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,n=this.chart._animationsDisabled;let{start:a,count:r}=tr(e,s,n);if(this._drawStart=a,this._drawCount=r,er(e)&&(a=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:o,_dataset:l}=e;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=s;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(o,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,a,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(e,n),u=this.getSharedOptions(d),h=this.includeOptions(n,u),f=r.axis,g=o.axis,{spanGaps:p,segment:v}=this.options,x=fe(p)?p:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||a||n==="none";let b=e>0&&this.getParsed(e-1);for(let y=e;y<e+s;++y){const _=t[y],w=this.getParsed(y),E=m?_:{},M=z(w[g]),k=E[f]=r.getPixelForValue(w[f],y),S=E[g]=a||M?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,w,l):w[g],y);E.skip=isNaN(k)||isNaN(S)||M,E.stop=y>0&&Math.abs(w[f]-b[f])>x,v&&(E.parsed=w,E.raw=c.data[y]),h&&(E.options=u||this.resolveDataElementOptions(y,_.active?"active":n)),m||this.updateElement(_,y,E,n),b=w}this.updateSharedOptions(u,n,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let o=0;for(let l=e.length-1;l>=0;--l)o=Math.max(o,e[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!e.length)return n;const a=e[0].size(this.resolveDataElementOptions(0)),r=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,a,r)/2}}L(ki,"id","scatter"),L(ki,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),L(ki,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var du=Object.freeze({__proto__:null,BarController:wi,BubbleController:Si,DoughnutController:ee,LineController:Mi,PieController:vs,PolarAreaController:ze,RadarController:Ti,ScatterController:ki});function Ut(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Us{constructor(t){L(this,"options");this.options=t||{}}static override(t){Object.assign(Us.prototype,t)}init(){}formats(){return Ut()}parse(){return Ut()}format(){return Ut()}add(){return Ut()}diff(){return Ut()}startOf(){return Ut()}endOf(){return Ut()}}var uu={_date:Us};function hu(i,t,e,s){const{controller:n,data:a,_sorted:r}=i,o=n._cachedMeta.iScale;if(o&&t===o.axis&&t!=="r"&&r&&a.length){const l=o._reversePixels?Fc:Ot;if(s){if(n._sharedOptions){const c=a[0],d=typeof c.getRange=="function"&&c.getRange(t);if(d){const u=l(a,t,e-d),h=l(a,t,e+d);return{lo:u.lo,hi:h.hi}}}}else return l(a,t,e)}return{lo:0,hi:a.length-1}}function Je(i,t,e,s,n){const a=i.getSortedVisibleDatasetMetas(),r=e[t];for(let o=0,l=a.length;o<l;++o){const{index:c,data:d}=a[o],{lo:u,hi:h}=hu(a[o],t,r,n);for(let f=u;f<=h;++f){const g=d[f];g.skip||s(g,c,f)}}}function fu(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(s,n){const a=t?Math.abs(s.x-n.x):0,r=e?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function ss(i,t,e,s,n){const a=[];return!n&&!i.isPointInArea(t)||Je(i,e,t,function(o,l,c){!n&&!Dt(o,i.chartArea,0)||o.inRange(t.x,t.y,s)&&a.push({element:o,datasetIndex:l,index:c})},!0),a}function pu(i,t,e,s){let n=[];function a(r,o,l){const{startAngle:c,endAngle:d}=r.getProps(["startAngle","endAngle"],s),{angle:u}=Ua(r,{x:t.x,y:t.y});We(u,c,d)&&n.push({element:r,datasetIndex:o,index:l})}return Je(i,e,t,a),n}function gu(i,t,e,s,n,a){let r=[];const o=fu(e);let l=Number.POSITIVE_INFINITY;function c(d,u,h){const f=d.inRange(t.x,t.y,n);if(s&&!f)return;const g=d.getCenterPoint(n);if(!(!!a||i.isPointInArea(g))&&!f)return;const v=o(t,g);v<l?(r=[{element:d,datasetIndex:u,index:h}],l=v):v===l&&r.push({element:d,datasetIndex:u,index:h})}return Je(i,e,t,c),r}function ns(i,t,e,s,n,a){return!a&&!i.isPointInArea(t)?[]:e==="r"&&!s?pu(i,t,e,n):gu(i,t,e,s,n,a)}function $n(i,t,e,s,n){const a=[],r=e==="x"?"inXRange":"inYRange";let o=!1;return Je(i,e,t,(l,c,d)=>{l[r](t[e],n)&&(a.push({element:l,datasetIndex:c,index:d}),o=o||l.inRange(t.x,t.y,n))}),s&&!o?[]:a}var mu={evaluateInteractionItems:Je,modes:{index(i,t,e,s){const n=Zt(t,i),a=e.axis||"x",r=e.includeInvisible||!1,o=e.intersect?ss(i,n,a,s,r):ns(i,n,a,!1,s,r),l=[];return o.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const d=o[0].index,u=c.data[d];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:d})}),l):[]},dataset(i,t,e,s){const n=Zt(t,i),a=e.axis||"xy",r=e.includeInvisible||!1;let o=e.intersect?ss(i,n,a,s,r):ns(i,n,a,!1,s,r);if(o.length>0){const l=o[0].datasetIndex,c=i.getDatasetMeta(l).data;o=[];for(let d=0;d<c.length;++d)o.push({element:c[d],datasetIndex:l,index:d})}return o},point(i,t,e,s){const n=Zt(t,i),a=e.axis||"xy",r=e.includeInvisible||!1;return ss(i,n,a,s,r)},nearest(i,t,e,s){const n=Zt(t,i),a=e.axis||"xy",r=e.includeInvisible||!1;return ns(i,n,a,e.intersect,s,r)},x(i,t,e,s){const n=Zt(t,i);return $n(i,n,"x",e.intersect,s)},y(i,t,e,s){const n=Zt(t,i);return $n(i,n,"y",e.intersect,s)}}};const xr=["left","top","right","bottom"];function ye(i,t){return i.filter(e=>e.pos===t)}function Hn(i,t){return i.filter(e=>xr.indexOf(e.pos)===-1&&e.box.axis===t)}function _e(i,t){return i.sort((e,s)=>{const n=t?s:e,a=t?e:s;return n.weight===a.weight?n.index-a.index:n.weight-a.weight})}function bu(i){const t=[];let e,s,n,a,r,o;for(e=0,s=(i||[]).length;e<s;++e)n=i[e],{position:a,options:{stack:r,stackWeight:o=1}}=n,t.push({index:e,box:n,pos:a,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&a+r,stackWeight:o});return t}function vu(i){const t={};for(const e of i){const{stack:s,pos:n,stackWeight:a}=e;if(!s||!xr.includes(n))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=a}return t}function xu(i,t){const e=vu(i),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let a,r,o;for(a=0,r=i.length;a<r;++a){o=i[a];const{fullSize:l}=o.box,c=e[o.stack],d=c&&o.stackWeight/c.weight;o.horizontal?(o.width=d?d*s:l&&t.availableWidth,o.height=n):(o.width=s,o.height=d?d*n:l&&t.availableHeight)}return e}function yu(i){const t=bu(i),e=_e(t.filter(c=>c.box.fullSize),!0),s=_e(ye(t,"left"),!0),n=_e(ye(t,"right")),a=_e(ye(t,"top"),!0),r=_e(ye(t,"bottom")),o=Hn(t,"x"),l=Hn(t,"y");return{fullSize:e,leftAndTop:s.concat(a),rightAndBottom:n.concat(l).concat(r).concat(o),chartArea:ye(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:a.concat(r).concat(o)}}function jn(i,t,e,s){return Math.max(i[e],t[e])+Math.max(i[s],t[s])}function yr(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function _u(i,t,e,s){const{pos:n,box:a}=e,r=i.maxPadding;if(!R(n)){e.size&&(i[n]-=e.size);const u=s[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?a.height:a.width),e.size=u.size/u.count,i[n]+=e.size}a.getPadding&&yr(r,a.getPadding());const o=Math.max(0,t.outerWidth-jn(r,i,"left","right")),l=Math.max(0,t.outerHeight-jn(r,i,"top","bottom")),c=o!==i.w,d=l!==i.h;return i.w=o,i.h=l,e.horizontal?{same:c,other:d}:{same:d,other:c}}function wu(i){const t=i.maxPadding;function e(s){const n=Math.max(t[s]-i[s],0);return i[s]+=n,n}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function Su(i,t){const e=t.maxPadding;function s(n){const a={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{a[r]=Math.max(t[r],e[r])}),a}return s(i?["left","right"]:["top","bottom"])}function Le(i,t,e,s){const n=[];let a,r,o,l,c,d;for(a=0,r=i.length,c=0;a<r;++a){o=i[a],l=o.box,l.update(o.width||t.w,o.height||t.h,Su(o.horizontal,t));const{same:u,other:h}=_u(t,e,o,s);c|=u&&n.length,d=d||h,l.fullSize||n.push(o)}return c&&Le(n,t,e,s)||d}function oi(i,t,e,s,n){i.top=e,i.left=t,i.right=t+s,i.bottom=e+n,i.width=s,i.height=n}function qn(i,t,e,s){const n=e.padding;let{x:a,y:r}=t;for(const o of i){const l=o.box,c=s[o.stack]||{count:1,placed:0,weight:1},d=o.stackWeight/c.weight||1;if(o.horizontal){const u=t.w*d,h=c.size||l.height;qe(c.start)&&(r=c.start),l.fullSize?oi(l,n.left,r,e.outerWidth-n.right-n.left,h):oi(l,t.left+c.placed,r,u,h),c.start=r,c.placed+=u,r=l.bottom}else{const u=t.h*d,h=c.size||l.width;qe(c.start)&&(a=c.start),l.fullSize?oi(l,a,n.top,h,e.outerHeight-n.bottom-n.top):oi(l,a,t.top+c.placed,h,u),c.start=a,c.placed+=u,a=l.right}}t.x=a,t.y=r}var st={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,s){if(!i)return;const n=tt(i.options.layout.padding),a=Math.max(t-n.width,0),r=Math.max(e-n.height,0),o=yu(i.boxes),l=o.vertical,c=o.horizontal;$(i.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const d=l.reduce((p,v)=>v.box.options&&v.box.options.display===!1?p:p+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:n,availableWidth:a,availableHeight:r,vBoxMaxWidth:a/2/d,hBoxMaxHeight:r/2}),h=Object.assign({},n);yr(h,tt(s));const f=Object.assign({maxPadding:h,w:a,h:r,x:n.left,y:n.top},n),g=xu(l.concat(c),u);Le(o.fullSize,f,u,g),Le(l,f,u,g),Le(c,f,u,g)&&Le(l,f,u,g),wu(f),qn(o.leftAndTop,f,u,g),f.x+=f.w,f.y+=f.h,qn(o.rightAndBottom,f,u,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},$(o.chartArea,p=>{const v=p.box;Object.assign(v,i.chartArea),v.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class _r{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,n){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):s)}}isAttached(t){return!0}updateConfig(t){}}class Mu extends _r{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ci="$chartjs",Tu={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Wn=i=>i===null||i==="";function ku(i,t){const e=i.style,s=i.getAttribute("height"),n=i.getAttribute("width");if(i[Ci]={initial:{height:s,width:n,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Wn(n)){const a=Cn(i,"width");a!==void 0&&(i.width=a)}if(Wn(s))if(i.style.height==="")i.height=i.width/(t||2);else{const a=Cn(i,"height");a!==void 0&&(i.height=a)}return i}const wr=Ed?{passive:!0}:!1;function Cu(i,t,e){i.addEventListener(t,e,wr)}function Eu(i,t,e){i.canvas.removeEventListener(t,e,wr)}function Lu(i,t){const e=Tu[i.type]||i.type,{x:s,y:n}=Zt(i,t);return{type:e,chart:t,native:i,x:s!==void 0?s:null,y:n!==void 0?n:null}}function Ri(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function Pu(i,t,e){const s=i.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||Ri(o.addedNodes,s),r=r&&!Ri(o.removedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}function Au(i,t,e){const s=i.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||Ri(o.removedNodes,s),r=r&&!Ri(o.addedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}const Ye=new Map;let Gn=0;function Sr(){const i=window.devicePixelRatio;i!==Gn&&(Gn=i,Ye.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function Ou(i,t){Ye.size||window.addEventListener("resize",Sr),Ye.set(i,t)}function Du(i){Ye.delete(i),Ye.size||window.removeEventListener("resize",Sr)}function Iu(i,t,e){const s=i.canvas,n=s&&Xs(s);if(!n)return;const a=Qa((o,l)=>{const c=n.clientWidth;e(o,l),c<n.clientWidth&&e()},window),r=new ResizeObserver(o=>{const l=o[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return r.observe(n),Ou(i,a),r}function as(i,t,e){e&&e.disconnect(),t==="resize"&&Du(i)}function Fu(i,t,e){const s=i.canvas,n=Qa(a=>{i.ctx!==null&&e(Lu(a,i))},i);return Cu(s,t,n),n}class zu extends _r{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(ku(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Ci])return!1;const s=e[Ci].initial;["height","width"].forEach(a=>{const r=s[a];z(r)?e.removeAttribute(a):e.setAttribute(a,r)});const n=s.style||{};return Object.keys(n).forEach(a=>{e.style[a]=n[a]}),e.width=e.width,delete e[Ci],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),r={attach:Pu,detach:Au,resize:Iu}[e]||Fu;n[e]=r(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),n=s[e];if(!n)return;({attach:as,detach:as,resize:as}[e]||Eu)(t,e,n),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,n){return Cd(t,e,s,n)}isAttached(t){const e=Xs(t);return!!(e&&e.isConnected)}}function Ru(i){return!Ys()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Mu:zu}var yi;let Ft=(yi=class{constructor(){L(this,"x");L(this,"y");L(this,"active",!1);L(this,"options");L(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return fe(this.x)&&fe(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const n={};return t.forEach(a=>{n[a]=s[a]&&s[a].active()?s[a]._to:this[a]}),n}},L(yi,"defaults",{}),L(yi,"defaultRoutes"),yi);function Vu(i,t){const e=i.options.ticks,s=Bu(i),n=Math.min(e.maxTicksLimit||s,s),a=e.major.enabled?$u(t):[],r=a.length,o=a[0],l=a[r-1],c=[];if(r>n)return Hu(t,c,a,r/n),c;const d=Nu(a,t,n);if(r>0){let u,h;const f=r>1?Math.round((l-o)/(r-1)):null;for(li(t,c,d,z(f)?0:o-f,o),u=0,h=r-1;u<h;u++)li(t,c,d,a[u],a[u+1]);return li(t,c,d,l,z(f)?t.length:l+f),c}return li(t,c,d),c}function Bu(i){const t=i.options.offset,e=i._tickSize(),s=i._length/e+(t?0:1),n=i._maxLength/e;return Math.floor(Math.min(s,n))}function Nu(i,t,e){const s=ju(i),n=t.length/e;if(!s)return Math.max(n,1);const a=Ac(s);for(let r=0,o=a.length-1;r<o;r++){const l=a[r];if(l>n)return l}return Math.max(n,1)}function $u(i){const t=[];let e,s;for(e=0,s=i.length;e<s;e++)i[e].major&&t.push(e);return t}function Hu(i,t,e,s){let n=0,a=e[0],r;for(s=Math.ceil(s),r=0;r<i.length;r++)r===a&&(t.push(i[r]),n++,a=e[n*s])}function li(i,t,e,s,n){const a=F(s,0),r=Math.min(F(n,i.length),i.length);let o=0,l,c,d;for(e=Math.ceil(e),n&&(l=n-s,e=l/Math.floor(l/e)),d=a;d<0;)o++,d=Math.round(a+o*e);for(c=Math.max(a,0);c<r;c++)c===d&&(t.push(i[c]),o++,d=Math.round(a+o*e))}function ju(i){const t=i.length;let e,s;if(t<2)return!1;for(s=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==s)return!1;return s}const qu=i=>i==="left"?"right":i==="right"?"left":i,Yn=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,Xn=(i,t)=>Math.min(t||i,i);function Un(i,t){const e=[],s=i.length/t,n=i.length;let a=0;for(;a<n;a+=s)e.push(i[Math.floor(a)]);return e}function Wu(i,t,e){const s=i.ticks.length,n=Math.min(t,s-1),a=i._startPixel,r=i._endPixel,o=1e-6;let l=i.getPixelForTick(n),c;if(!(e&&(s===1?c=Math.max(l-a,r-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<a-o||l>r+o)))return l}function Gu(i,t){$(i,e=>{const s=e.gc,n=s.length/2;let a;if(n>t){for(a=0;a<n;++a)delete e.data[s[a]];s.splice(0,n)}})}function we(i){return i.drawTicks?i.tickLength:0}function Kn(i,t){if(!i.display)return 0;const e=J(i.font,t),s=tt(i.padding);return(G(i.text)?i.text.length:1)*e.lineHeight+s.height}function Yu(i,t){return qt(i,{scale:t,type:"scale"})}function Xu(i,t,e){return qt(i,{tick:e,index:t,type:"tick"})}function Uu(i,t,e){let s=$s(i);return(e&&t!=="right"||!e&&t==="right")&&(s=qu(s)),s}function Ku(i,t,e,s){const{top:n,left:a,bottom:r,right:o,chart:l}=i,{chartArea:c,scales:d}=l;let u=0,h,f,g;const p=r-n,v=o-a;if(i.isHorizontal()){if(f=it(s,a,o),R(e)){const x=Object.keys(e)[0],m=e[x];g=d[x].getPixelForValue(m)+p-t}else e==="center"?g=(c.bottom+c.top)/2+p-t:g=Yn(i,e,t);h=o-a}else{if(R(e)){const x=Object.keys(e)[0],m=e[x];f=d[x].getPixelForValue(m)-v+t}else e==="center"?f=(c.left+c.right)/2-v+t:f=Yn(i,e,t);g=it(s,r,n),u=e==="left"?-Z:Z}return{titleX:f,titleY:g,maxWidth:h,rotation:u}}class re extends Ft{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:n}=this;return t=lt(t,Number.POSITIVE_INFINITY),e=lt(e,Number.NEGATIVE_INFINITY),s=lt(s,Number.POSITIVE_INFINITY),n=lt(n,Number.NEGATIVE_INFINITY),{min:lt(t,s),max:lt(e,n),minDefined:K(t),maxDefined:K(e)}}getMinMax(t){let{min:e,max:s,minDefined:n,maxDefined:a}=this.getUserBounds(),r;if(n&&a)return{min:e,max:s};const o=this.getMatchingVisibleMetas();for(let l=0,c=o.length;l<c;++l)r=o[l].controller.getMinMax(this,t),n||(e=Math.min(e,r.min)),a||(s=Math.max(s,r.max));return e=a&&e>s?s:e,s=n&&e>s?e:s,{min:lt(e,lt(s,e)),max:lt(s,lt(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){H(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:n,grace:a,ticks:r}=this.options,o=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=ad(this,a,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?Un(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=Vu(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){H(this.options.afterUpdate,[this])}beforeSetDimensions(){H(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){H(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),H(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){H(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,n,a;for(s=0,n=t.length;s<n;s++)a=t[s],a.label=H(e.callback,[a.value,s,t],this)}afterTickToLabelConversion(){H(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){H(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=Xn(this.ticks.length,t.ticks.maxTicksLimit),n=e.minRotation||0,a=e.maxRotation;let r=n,o,l,c;if(!this._isVisible()||!e.display||n>=a||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const d=this._getLabelSizes(),u=d.widest.width,h=d.highest.height,f=Q(this.chart.width-u,0,this.maxWidth);o=t.offset?this.maxWidth/s:f/(s-1),u+6>o&&(o=f/(s-(t.offset?.5:1)),l=this.maxHeight-we(t.grid)-e.padding-Kn(t.title,this.chart.options.font),c=Math.sqrt(u*u+h*h),r=Bs(Math.min(Math.asin(Q((d.highest.height+6)/o,-1,1)),Math.asin(Q(l/c,-1,1))-Math.asin(Q(h/c,-1,1)))),r=Math.max(n,Math.min(a,r))),this.labelRotation=r}afterCalculateLabelRotation(){H(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){H(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:n,grid:a}}=this,r=this._isVisible(),o=this.isHorizontal();if(r){const l=Kn(n,e.options.font);if(o?(t.width=this.maxWidth,t.height=we(a)+l):(t.height=this.maxHeight,t.width=we(a)+l),s.display&&this.ticks.length){const{first:c,last:d,widest:u,highest:h}=this._getLabelSizes(),f=s.padding*2,g=vt(this.labelRotation),p=Math.cos(g),v=Math.sin(g);if(o){const x=s.mirror?0:v*u.width+p*h.height;t.height=Math.min(this.maxHeight,t.height+x+f)}else{const x=s.mirror?0:p*u.width+v*h.height;t.width=Math.min(this.maxWidth,t.width+x+f)}this._calculatePadding(c,d,v,p)}}this._handleMargins(),o?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,n){const{ticks:{align:a,padding:r},position:o}=this.options,l=this.labelRotation!==0,c=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,f=0;l?c?(h=n*t.width,f=s*e.height):(h=s*t.height,f=n*e.width):a==="start"?f=e.width:a==="end"?h=t.width:a!=="inner"&&(h=t.width/2,f=e.width/2),this.paddingLeft=Math.max((h-d+r)*this.width/(this.width-d),0),this.paddingRight=Math.max((f-u+r)*this.width/(this.width-u),0)}else{let d=e.height/2,u=t.height/2;a==="start"?(d=0,u=t.height):a==="end"&&(d=e.height,u=0),this.paddingTop=d+r,this.paddingBottom=u+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){H(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)z(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=Un(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:n,_longestTextCache:a}=this,r=[],o=[],l=Math.floor(e/Xn(e,s));let c=0,d=0,u,h,f,g,p,v,x,m,b,y,_;for(u=0;u<e;u+=l){if(g=t[u].label,p=this._resolveTickFontOptions(u),n.font=v=p.string,x=a[v]=a[v]||{data:{},gc:[]},m=p.lineHeight,b=y=0,!z(g)&&!G(g))b=Fi(n,x.data,x.gc,b,g),y=m;else if(G(g))for(h=0,f=g.length;h<f;++h)_=g[h],!z(_)&&!G(_)&&(b=Fi(n,x.data,x.gc,b,_),y+=m);r.push(b),o.push(y),c=Math.max(b,c),d=Math.max(y,d)}Gu(a,e);const w=r.indexOf(c),E=o.indexOf(d),M=k=>({width:r[k]||0,height:o[k]||0});return{first:M(0),last:M(e-1),widest:M(w),highest:M(E),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Ic(this._alignToPixels?Xt(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=Xu(this.getContext(),t,s))}return this.$context||(this.$context=Yu(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=vt(this.labelRotation),s=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,l=a?a.highest.height+r:0;return this.isHorizontal()?l*s>o*n?o/s:l/n:l*n<o*s?l/s:o/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,n=this.options,{grid:a,position:r,border:o}=n,l=a.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),h=we(a),f=[],g=o.setContext(this.getContext()),p=g.display?g.width:0,v=p/2,x=function(I){return Xt(s,I,p)};let m,b,y,_,w,E,M,k,S,T,P,C;if(r==="top")m=x(this.bottom),E=this.bottom-h,k=m-v,T=x(t.top)+v,C=t.bottom;else if(r==="bottom")m=x(this.top),T=t.top,C=x(t.bottom)-v,E=m+v,k=this.top+h;else if(r==="left")m=x(this.right),w=this.right-h,M=m-v,S=x(t.left)+v,P=t.right;else if(r==="right")m=x(this.left),S=t.left,P=x(t.right)-v,w=m+v,M=this.left+h;else if(e==="x"){if(r==="center")m=x((t.top+t.bottom)/2+.5);else if(R(r)){const I=Object.keys(r)[0],j=r[I];m=x(this.chart.scales[I].getPixelForValue(j))}T=t.top,C=t.bottom,E=m+v,k=E+h}else if(e==="y"){if(r==="center")m=x((t.left+t.right)/2);else if(R(r)){const I=Object.keys(r)[0],j=r[I];m=x(this.chart.scales[I].getPixelForValue(j))}w=m-v,M=w-h,S=t.left,P=t.right}const A=F(n.ticks.maxTicksLimit,u),O=Math.max(1,Math.ceil(u/A));for(b=0;b<u;b+=O){const I=this.getContext(b),j=a.setContext(I),D=o.setContext(I),B=j.lineWidth,q=j.color,ft=D.dash||[],mt=D.dashOffset,me=j.tickWidth,Wt=j.tickColor,be=j.tickBorderDash||[],Gt=j.tickBorderDashOffset;y=Wu(this,b,l),y!==void 0&&(_=Xt(s,y,B),c?w=M=S=P=_:E=k=T=C=_,f.push({tx1:w,ty1:E,tx2:M,ty2:k,x1:S,y1:T,x2:P,y2:C,width:B,color:q,borderDash:ft,borderDashOffset:mt,tickWidth:me,tickColor:Wt,tickBorderDash:be,tickBorderDashOffset:Gt}))}return this._ticksLength=u,this._borderValue=m,f}_computeLabelItems(t){const e=this.axis,s=this.options,{position:n,ticks:a}=s,r=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:c,padding:d,mirror:u}=a,h=we(s.grid),f=h+d,g=u?-d:f,p=-vt(this.labelRotation),v=[];let x,m,b,y,_,w,E,M,k,S,T,P,C="middle";if(n==="top")w=this.bottom-g,E=this._getXAxisLabelAlignment();else if(n==="bottom")w=this.top+g,E=this._getXAxisLabelAlignment();else if(n==="left"){const O=this._getYAxisLabelAlignment(h);E=O.textAlign,_=O.x}else if(n==="right"){const O=this._getYAxisLabelAlignment(h);E=O.textAlign,_=O.x}else if(e==="x"){if(n==="center")w=(t.top+t.bottom)/2+f;else if(R(n)){const O=Object.keys(n)[0],I=n[O];w=this.chart.scales[O].getPixelForValue(I)+f}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(n==="center")_=(t.left+t.right)/2-f;else if(R(n)){const O=Object.keys(n)[0],I=n[O];_=this.chart.scales[O].getPixelForValue(I)}E=this._getYAxisLabelAlignment(h).textAlign}e==="y"&&(l==="start"?C="top":l==="end"&&(C="bottom"));const A=this._getLabelSizes();for(x=0,m=o.length;x<m;++x){b=o[x],y=b.label;const O=a.setContext(this.getContext(x));M=this.getPixelForTick(x)+a.labelOffset,k=this._resolveTickFontOptions(x),S=k.lineHeight,T=G(y)?y.length:1;const I=T/2,j=O.color,D=O.textStrokeColor,B=O.textStrokeWidth;let q=E;r?(_=M,E==="inner"&&(x===m-1?q=this.options.reverse?"left":"right":x===0?q=this.options.reverse?"right":"left":q="center"),n==="top"?c==="near"||p!==0?P=-T*S+S/2:c==="center"?P=-A.highest.height/2-I*S+S:P=-A.highest.height+S/2:c==="near"||p!==0?P=S/2:c==="center"?P=A.highest.height/2-I*S:P=A.highest.height-T*S,u&&(P*=-1),p!==0&&!O.showLabelBackdrop&&(_+=S/2*Math.sin(p))):(w=M,P=(1-T)*S/2);let ft;if(O.showLabelBackdrop){const mt=tt(O.backdropPadding),me=A.heights[x],Wt=A.widths[x];let be=P-mt.top,Gt=0-mt.left;switch(C){case"middle":be-=me/2;break;case"bottom":be-=me;break}switch(E){case"center":Gt-=Wt/2;break;case"right":Gt-=Wt;break;case"inner":x===m-1?Gt-=Wt:x>0&&(Gt-=Wt/2);break}ft={left:Gt,top:be,width:Wt+mt.width,height:me+mt.height,color:O.backdropColor}}v.push({label:y,font:k,textOffset:P,options:{rotation:p,color:j,strokeColor:D,strokeWidth:B,textAlign:q,textBaseline:C,translation:[_,w],backdrop:ft}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-vt(this.labelRotation))return t==="top"?"left":"right";let n="center";return e.align==="start"?n="left":e.align==="end"?n="right":e.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:n,padding:a}}=this.options,r=this._getLabelSizes(),o=t+a,l=r.widest.width;let c,d;return e==="left"?n?(d=this.right+a,s==="near"?c="left":s==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-o,s==="near"?c="right":s==="center"?(c="center",d-=l/2):(c="left",d=this.left)):e==="right"?n?(d=this.left+a,s==="near"?c="right":s==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+o,s==="near"?c="left":s==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:n,width:a,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,n,a,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex(a=>a.value===t);return n>=0?e.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,r;const o=(l,c,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(e.display)for(a=0,r=n.length;a<r;++a){const l=n[a];e.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:n}}=this,a=s.setContext(this.getContext()),r=s.display?a.width:0;if(!r)return;const o=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,u,h;this.isHorizontal()?(c=Xt(t,this.left,r)-r/2,d=Xt(t,this.right,o)+o/2,u=h=l):(u=Xt(t,this.top,r)-r/2,h=Xt(t,this.bottom,o)+o/2,c=d=l),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(c,u),e.lineTo(d,h),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,n=this._computeLabelArea();n&&$i(s,n);const a=this.getLabelItems(t);for(const r of a){const o=r.options,l=r.font,c=r.label,d=r.textOffset;ae(s,c,0,d,l,o)}n&&Hi(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:n}}=this;if(!s.display)return;const a=J(s.font),r=tt(s.padding),o=s.align;let l=a.lineHeight/2;e==="bottom"||e==="center"||R(e)?(l+=r.bottom,G(s.text)&&(l+=a.lineHeight*(s.text.length-1))):l+=r.top;const{titleX:c,titleY:d,maxWidth:u,rotation:h}=Ku(this,l,e,o);ae(t,s.text,0,0,a,{color:s.color,maxWidth:u,rotation:h,textAlign:Uu(o,e,n),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=F(t.grid&&t.grid.z,-1),n=F(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==re.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:s,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let a,r;for(a=0,r=e.length;a<r;++a){const o=e[a];o[s]===this.id&&(!t||o.type===t)&&n.push(o)}return n}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return J(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class ci{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;Qu(e)&&(s=this.register(e));const n=this.items,a=t.id,r=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in n||(n[a]=t,Zu(t,r,s),this.override&&U.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,n=this.scope;s in e&&delete e[s],n&&s in U[n]&&(delete U[n][s],this.override&&delete ne[s])}}function Zu(i,t,e){const s=Mt(Object.create(null),[e?U.get(e):{},U.get(t),i.defaults]);U.set(t,s),i.defaultRoutes&&Ju(t,i.defaultRoutes),i.descriptors&&U.describe(t,i.descriptors)}function Ju(i,t){Object.keys(t).forEach(e=>{const s=e.split("."),n=s.pop(),a=[i].concat(s).join("."),r=t[e].split("."),o=r.pop(),l=r.join(".");U.route(a,n,l,o)})}function Qu(i){return"id"in i&&"defaults"in i}class th{constructor(){this.controllers=new ci(xt,"datasets",!0),this.elements=new ci(Ft,"elements"),this.plugins=new ci(Object,"plugins"),this.scales=new ci(re,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(n=>{const a=s||this._getRegistryForType(n);s||a.isForType(n)||a===this.plugins&&n.id?this._exec(t,a,n):$(n,r=>{const o=s||this._getRegistryForType(r);this._exec(t,o,r)})})}_exec(t,e,s){const n=Vs(t);H(s["before"+n],[],s),e[t](s),H(s["after"+n],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const n=e.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var wt=new th;class eh{constructor(){this._init=[]}notify(t,e,s,n){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const a=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(a,t,e,s);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall")),r}_notify(t,e,s,n){n=n||{};for(const a of t){const r=a.plugin,o=r[s],l=[e,n,a.options];if(H(o,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){z(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,n=F(s.options&&s.options.plugins,{}),a=ih(s);return n===!1&&!e?[]:nh(t,a,n,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,n=(a,r)=>a.filter(o=>!r.some(l=>o.plugin.id===l.plugin.id));this._notify(n(e,s),t,"stop"),this._notify(n(s,e),t,"start")}}function ih(i){const t={},e=[],s=Object.keys(wt.plugins.items);for(let a=0;a<s.length;a++)e.push(wt.getPlugin(s[a]));const n=i.plugins||[];for(let a=0;a<n.length;a++){const r=n[a];e.indexOf(r)===-1&&(e.push(r),t[r.id]=!0)}return{plugins:e,localIds:t}}function sh(i,t){return!t&&i===!1?null:i===!0?{}:i}function nh(i,{plugins:t,localIds:e},s,n){const a=[],r=i.getContext();for(const o of t){const l=o.id,c=sh(s[l],n);c!==null&&a.push({plugin:o,options:ah(i.config,{plugin:o,local:e[l]},c,r)})}return a}function ah(i,{plugin:t,local:e},s,n){const a=i.pluginScopeKeys(t),r=i.getOptionScopes(s,a);return e&&t.defaults&&r.push(t.defaults),i.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function xs(i,t){const e=U.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function rh(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function oh(i,t){return i===t?"_index_":"_value_"}function Zn(i){if(i==="x"||i==="y"||i==="r")return i}function lh(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function ys(i,...t){if(Zn(i))return i;for(const e of t){const s=e.axis||lh(e.position)||i.length>1&&Zn(i[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Jn(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function ch(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===i||s.yAxisID===i);if(e.length)return Jn(i,"x",e[0])||Jn(i,"y",e[0])}return{}}function dh(i,t){const e=ne[i.type]||{scales:{}},s=t.scales||{},n=xs(i.type,t),a=Object.create(null);return Object.keys(s).forEach(r=>{const o=s[r];if(!R(o))return console.error(`Invalid scale configuration for scale: ${r}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=ys(r,o,ch(r,i),U.scales[o.type]),c=oh(l,n),d=e.scales||{};a[r]=Oe(Object.create(null),[{axis:l},o,d[l],d[c]])}),i.data.datasets.forEach(r=>{const o=r.type||i.type,l=r.indexAxis||xs(o,t),d=(ne[o]||{}).scales||{};Object.keys(d).forEach(u=>{const h=rh(u,l),f=r[h+"AxisID"]||h;a[f]=a[f]||Object.create(null),Oe(a[f],[{axis:h},s[f],d[u]])})}),Object.keys(a).forEach(r=>{const o=a[r];Oe(o,[U.scales[o.type],U.scale])}),a}function Mr(i){const t=i.options||(i.options={});t.plugins=F(t.plugins,{}),t.scales=dh(i,t)}function Tr(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function uh(i){return i=i||{},i.data=Tr(i.data),Mr(i),i}const Qn=new Map,kr=new Set;function di(i,t){let e=Qn.get(i);return e||(e=t(),Qn.set(i,e),kr.add(e)),e}const Se=(i,t,e)=>{const s=Ht(t,e);s!==void 0&&i.add(s)};class hh{constructor(t){this._config=uh(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Tr(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Mr(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return di(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return di(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return di(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return di(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let n=s.get(t);return(!n||e)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,e,s){const{options:n,type:a}=this,r=this._cachedScopes(t,s),o=r.get(e);if(o)return o;const l=new Set;e.forEach(d=>{t&&(l.add(t),d.forEach(u=>Se(l,t,u))),d.forEach(u=>Se(l,n,u)),d.forEach(u=>Se(l,ne[a]||{},u)),d.forEach(u=>Se(l,U,u)),d.forEach(u=>Se(l,ms,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),kr.has(e)&&r.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,ne[e]||{},U.datasets[e]||{},{type:e},U,ms]}resolveNamedOptions(t,e,s,n=[""]){const a={$shared:!0},{resolver:r,subPrefixes:o}=ta(this._resolverCache,t,n);let l=r;if(ph(r,e)){a.$shared=!1,s=jt(s)?s():s;const c=this.createResolver(t,s,o);l=pe(r,s,c)}for(const c of e)a[c]=l[c];return a}createResolver(t,e,s=[""],n){const{resolver:a}=ta(this._resolverCache,t,s);return R(e)?pe(a,e,void 0,n):a}}function ta(i,t,e){let s=i.get(t);s||(s=new Map,i.set(t,s));const n=e.join();let a=s.get(n);return a||(a={resolver:qs(t,e),subPrefixes:e.filter(o=>!o.toLowerCase().includes("hover"))},s.set(n,a)),a}const fh=i=>R(i)&&Object.getOwnPropertyNames(i).some(t=>jt(i[t]));function ph(i,t){const{isScriptable:e,isIndexable:s}=ar(i);for(const n of t){const a=e(n),r=s(n),o=(r||a)&&i[n];if(a&&(jt(o)||fh(o))||r&&G(o))return!0}return!1}var gh="4.4.1";const mh=["top","bottom","left","right","chartArea"];function ea(i,t){return i==="top"||i==="bottom"||mh.indexOf(i)===-1&&t==="x"}function ia(i,t){return function(e,s){return e[i]===s[i]?e[t]-s[t]:e[i]-s[i]}}function sa(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),H(e&&e.onComplete,[i],t)}function bh(i){const t=i.chart,e=t.options.animation;H(e&&e.onProgress,[i],t)}function Cr(i){return Ys()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Ei={},na=i=>{const t=Cr(i);return Object.values(Ei).filter(e=>e.canvas===t).pop()};function vh(i,t,e){const s=Object.keys(i);for(const n of s){const a=+n;if(a>=t){const r=i[n];delete i[n],(e>0||a>t)&&(i[a+e]=r)}}}function xh(i,t,e,s){return!e||i.type==="mouseout"?null:s?t:i}function ui(i,t,e){return i.options.clip?i[e]:t[e]}function yh(i,t){const{xScale:e,yScale:s}=i;return e&&s?{left:ui(e,t,"left"),right:ui(e,t,"right"),top:ui(s,t,"top"),bottom:ui(s,t,"bottom")}:t}class ht{static register(...t){wt.add(...t),aa()}static unregister(...t){wt.remove(...t),aa()}constructor(t,e){const s=this.config=new hh(e),n=Cr(t),a=na(n);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||Ru(n)),this.platform.updateConfig(s);const o=this.platform.acquireContext(n,r.aspectRatio),l=o&&o.canvas,c=l&&l.height,d=l&&l.width;if(this.id=wc(),this.ctx=o,this.canvas=l,this.width=d,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new eh,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Vc(u=>this.update(u),r.resizeDelay||0),this._dataChanges=[],Ei[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ct.listen(this,"complete",sa),Ct.listen(this,"progress",bh),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:n,_aspectRatio:a}=this;return z(t)?e&&a?a:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return wt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():kn(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Sn(this.canvas,this.ctx),this}stop(){return Ct.stop(this),this}resize(t,e){Ct.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,n=this.canvas,a=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,e,a),o=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,kn(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),H(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};$(e,(s,n)=>{s.id=n})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,n=Object.keys(s).reduce((r,o)=>(r[o]=!1,r),{});let a=[];e&&(a=a.concat(Object.keys(e).map(r=>{const o=e[r],l=ys(r,o),c=l==="r",d=l==="x";return{options:o,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),$(a,r=>{const o=r.options,l=o.id,c=ys(l,o),d=F(o.type,r.dtype);(o.position===void 0||ea(o.position,c)!==ea(r.dposition))&&(o.position=r.dposition),n[l]=!0;let u=null;if(l in s&&s[l].type===d)u=s[l];else{const h=wt.getScale(d);u=new h({id:l,type:d,ctx:this.ctx,chart:this}),s[u.id]=u}u.init(o,t)}),$(n,(r,o)=>{r||delete s[o]}),$(s,r=>{st.configure(this,r,r.options),st.addBox(this,r)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((n,a)=>n.index-a.index),s>e){for(let n=e;n<s;++n)this._destroyDatasetMeta(n);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(ia("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,n)=>{e.filter(a=>a===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,n;for(this._removeUnreferencedMetasets(),s=0,n=e.length;s<n;s++){const a=e[s];let r=this.getDatasetMeta(s);const o=a.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=o,r.indexAxis=a.indexAxis||xs(o,this.options),r.order=a.order||0,r.index=s,r.label=""+a.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const l=wt.getController(o),{datasetElementType:c,dataElementType:d}=U.datasets[o];Object.assign(l,{dataElementType:wt.getElement(d),datasetElementType:c&&wt.getElement(c)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){$(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:u}=this.getDatasetMeta(c),h=!n&&a.indexOf(u)===-1;u.buildOrUpdateElements(h),r=Math.max(+u.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),n||$(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(ia("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){$(this.scales,t=>{st.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!pn(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:n,count:a}of e){const r=s==="_removeElements"?-a:a;vh(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=a=>new Set(t.filter(r=>r[0]===a).map((r,o)=>o+","+r.splice(1).join(","))),n=s(0);for(let a=1;a<e;a++)if(!pn(n,s(a)))return;return Array.from(n).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;st.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],$(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,a)=>{n._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,jt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),n={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ct.has(this)?this.attached&&!Ct.running(this)&&Ct.start(this):(this.draw(),sa({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:n}=this._resizeBeforeDraw;this._resize(s,n),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let n,a;for(n=0,a=e.length;n<a;++n){const r=e[n];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s=t._clip,n=!s.disabled,a=yh(t,this.chartArea),r={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(n&&$i(e,{left:s.left===!1?0:a.left-s.left,right:s.right===!1?this.width:a.right+s.right,top:s.top===!1?0:a.top-s.top,bottom:s.bottom===!1?this.height:a.bottom+s.bottom}),t.controller.draw(),n&&Hi(e),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return Dt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,n){const a=mu.modes[e];return typeof a=="function"?a(this,t,s,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let n=s.filter(a=>a&&a._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=qt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const n=s?"show":"hide",a=this.getDatasetMeta(t),r=a.controller._resolveAnimations(void 0,n);qe(e)?(a.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(a,{visible:s}),this.update(o=>o.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Ct.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Sn(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ei[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(a,r)=>{e.addEventListener(this,a,r),t[a]=r},n=(a,r,o)=>{a.offsetX=r,a.offsetY=o,this._eventHandler(a)};$(this.options.events,a=>s(a,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},n=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},a=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const o=()=>{n("attach",o),this.attached=!0,this.resize(),s("resize",a),s("detach",r)};r=()=>{this.attached=!1,n("resize",a),this._stop(),this._resize(0,0),s("attach",o)},e.isAttached(this.canvas)?o():r()}unbindEvents(){$(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},$(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const n=s?"set":"remove";let a,r,o,l;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+n+"DatasetHoverStyle"]()),o=0,l=t.length;o<l;++o){r=t[o];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:a,index:r})=>{const o=this.getDatasetMeta(a);if(!o)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:o.data[r],index:r}});!Oi(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const n=this.options.hover,a=(l,c)=>l.filter(d=>!c.some(u=>d.datasetIndex===u.datasetIndex&&d.index===u.index)),r=a(e,t),o=s?t:a(t,e);r.length&&this.updateHoverStyle(r,n.mode,!1),o.length&&n.mode&&this.updateHoverStyle(o,n.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;const a=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(a||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:n=[],options:a}=this,r=e,o=this._getActiveElements(t,n,s,r),l=Ec(t),c=xh(t,this._lastEvent,s,l);s&&(this._lastEvent=null,H(a.onHover,[t,o,this],this),l&&H(a.onClick,[t,o,this],this));const d=!Oi(o,n);return(d||e)&&(this._active=o,this._updateHoverStyles(o,n,e)),this._lastEvent=c,d}_getActiveElements(t,e,s,n){if(t.type==="mouseout")return[];if(!s)return e;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,n)}}L(ht,"defaults",U),L(ht,"instances",Ei),L(ht,"overrides",ne),L(ht,"registry",wt),L(ht,"version",gh),L(ht,"getChart",na);function aa(){return $(ht.instances,i=>i._plugins.invalidate())}function _h(i,t,e){const{startAngle:s,pixelMargin:n,x:a,y:r,outerRadius:o,innerRadius:l}=t;let c=n/o;i.beginPath(),i.arc(a,r,o,s-c,e+c),l>n?(c=n/l,i.arc(a,r,l,e+c,s-c,!0)):i.arc(a,r,n,e+Z,s-Z),i.closePath(),i.clip()}function wh(i){return js(i,["outerStart","outerEnd","innerStart","innerEnd"])}function Sh(i,t,e,s){const n=wh(i.options.borderRadius),a=(e-t)/2,r=Math.min(a,s*t/2),o=l=>{const c=(e-Math.min(a,l))*s/2;return Q(l,0,Math.min(a,c))};return{outerStart:o(n.outerStart),outerEnd:o(n.outerEnd),innerStart:Q(n.innerStart,0,r),innerEnd:Q(n.innerEnd,0,r)}}function le(i,t,e,s){return{x:e+i*Math.cos(t),y:s+i*Math.sin(t)}}function Vi(i,t,e,s,n,a){const{x:r,y:o,startAngle:l,pixelMargin:c,innerRadius:d}=t,u=Math.max(t.outerRadius+s+e-c,0),h=d>0?d+s+e+c:0;let f=0;const g=n-l;if(s){const O=d>0?d-s:0,I=u>0?u-s:0,j=(O+I)/2,D=j!==0?g*j/(j+s):g;f=(g-D)/2}const p=Math.max(.001,g*u-e/X)/u,v=(g-p)/2,x=l+v+f,m=n-v-f,{outerStart:b,outerEnd:y,innerStart:_,innerEnd:w}=Sh(t,h,u,m-x),E=u-b,M=u-y,k=x+b/E,S=m-y/M,T=h+_,P=h+w,C=x+_/T,A=m-w/P;if(i.beginPath(),a){const O=(k+S)/2;if(i.arc(r,o,u,k,O),i.arc(r,o,u,O,S),y>0){const B=le(M,S,r,o);i.arc(B.x,B.y,y,S,m+Z)}const I=le(P,m,r,o);if(i.lineTo(I.x,I.y),w>0){const B=le(P,A,r,o);i.arc(B.x,B.y,w,m+Z,A+Math.PI)}const j=(m-w/h+(x+_/h))/2;if(i.arc(r,o,h,m-w/h,j,!0),i.arc(r,o,h,j,x+_/h,!0),_>0){const B=le(T,C,r,o);i.arc(B.x,B.y,_,C+Math.PI,x-Z)}const D=le(E,x,r,o);if(i.lineTo(D.x,D.y),b>0){const B=le(E,k,r,o);i.arc(B.x,B.y,b,x-Z,k)}}else{i.moveTo(r,o);const O=Math.cos(k)*u+r,I=Math.sin(k)*u+o;i.lineTo(O,I);const j=Math.cos(S)*u+r,D=Math.sin(S)*u+o;i.lineTo(j,D)}i.closePath()}function Mh(i,t,e,s,n){const{fullCircles:a,startAngle:r,circumference:o}=t;let l=t.endAngle;if(a){Vi(i,t,e,s,l,n);for(let c=0;c<a;++c)i.fill();isNaN(o)||(l=r+(o%Y||Y))}return Vi(i,t,e,s,l,n),i.fill(),l}function Th(i,t,e,s,n){const{fullCircles:a,startAngle:r,circumference:o,options:l}=t,{borderWidth:c,borderJoinStyle:d,borderDash:u,borderDashOffset:h}=l,f=l.borderAlign==="inner";if(!c)return;i.setLineDash(u||[]),i.lineDashOffset=h,f?(i.lineWidth=c*2,i.lineJoin=d||"round"):(i.lineWidth=c,i.lineJoin=d||"bevel");let g=t.endAngle;if(a){Vi(i,t,e,s,g,n);for(let p=0;p<a;++p)i.stroke();isNaN(o)||(g=r+(o%Y||Y))}f&&_h(i,t,g),a||(Vi(i,t,e,s,g,n),i.stroke())}class ue extends Ft{constructor(e){super();L(this,"circumference");L(this,"endAngle");L(this,"fullCircles");L(this,"innerRadius");L(this,"outerRadius");L(this,"pixelMargin");L(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,n){const a=this.getProps(["x","y"],n),{angle:r,distance:o}=Ua(a,{x:e,y:s}),{startAngle:l,endAngle:c,innerRadius:d,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,p=F(h,c-l)>=Y||We(r,l,c),v=At(o,d+f,u+f);return p&&v}getCenterPoint(e){const{x:s,y:n,startAngle:a,endAngle:r,innerRadius:o,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:d}=this.options,u=(a+r)/2,h=(o+l+d+c)/2;return{x:s+Math.cos(u)*h,y:n+Math.sin(u)*h}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:n}=this,a=(s.offset||0)/4,r=(s.spacing||0)/2,o=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>Y?Math.floor(n/Y):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*a,Math.sin(l)*a);const c=1-Math.sin(Math.min(X,n||0)),d=a*c;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,Mh(e,this,d,r,o),Th(e,this,d,r,o),e.restore()}}L(ue,"id","arc"),L(ue,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),L(ue,"defaultRoutes",{backgroundColor:"backgroundColor"}),L(ue,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Er(i,t,e=t){i.lineCap=F(e.borderCapStyle,t.borderCapStyle),i.setLineDash(F(e.borderDash,t.borderDash)),i.lineDashOffset=F(e.borderDashOffset,t.borderDashOffset),i.lineJoin=F(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=F(e.borderWidth,t.borderWidth),i.strokeStyle=F(e.borderColor,t.borderColor)}function kh(i,t,e){i.lineTo(e.x,e.y)}function Ch(i){return i.stepped?Kc:i.tension||i.cubicInterpolationMode==="monotone"?Zc:kh}function Lr(i,t,e={}){const s=i.length,{start:n=0,end:a=s-1}=e,{start:r,end:o}=t,l=Math.max(n,r),c=Math.min(a,o),d=n<r&&a<r||n>o&&a>o;return{count:s,start:l,loop:t.loop,ilen:c<l&&!d?s+c-l:c-l}}function Eh(i,t,e,s){const{points:n,options:a}=t,{count:r,start:o,loop:l,ilen:c}=Lr(n,e,s),d=Ch(a);let{move:u=!0,reverse:h}=s||{},f,g,p;for(f=0;f<=c;++f)g=n[(o+(h?c-f:f))%r],!g.skip&&(u?(i.moveTo(g.x,g.y),u=!1):d(i,p,g,h,a.stepped),p=g);return l&&(g=n[(o+(h?c:0))%r],d(i,p,g,h,a.stepped)),!!l}function Lh(i,t,e,s){const n=t.points,{count:a,start:r,ilen:o}=Lr(n,e,s),{move:l=!0,reverse:c}=s||{};let d=0,u=0,h,f,g,p,v,x;const m=y=>(r+(c?o-y:y))%a,b=()=>{p!==v&&(i.lineTo(d,v),i.lineTo(d,p),i.lineTo(d,x))};for(l&&(f=n[m(0)],i.moveTo(f.x,f.y)),h=0;h<=o;++h){if(f=n[m(h)],f.skip)continue;const y=f.x,_=f.y,w=y|0;w===g?(_<p?p=_:_>v&&(v=_),d=(u*d+y)/++u):(b(),i.lineTo(y,_),g=w,u=0,p=v=_),x=_}b()}function _s(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Lh:Eh}function Ph(i){return i.stepped?Ld:i.tension||i.cubicInterpolationMode==="monotone"?Pd:Jt}function Ah(i,t,e,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,e,s)&&n.closePath()),Er(i,t.options),i.stroke(n)}function Oh(i,t,e,s){const{segments:n,options:a}=t,r=_s(t);for(const o of n)Er(i,a,o.style),i.beginPath(),r(i,t,o,{start:e,end:e+s-1})&&i.closePath(),i.stroke()}const Dh=typeof Path2D=="function";function Ih(i,t,e,s){Dh&&!t.options.segment?Ah(i,t,e,s):Oh(i,t,e,s)}class Bt extends Ft{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;_d(this._points,s,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=zd(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,n=t[e],a=this.points,r=gr(this,{property:e,start:n,end:n});if(!r.length)return;const o=[],l=Ph(s);let c,d;for(c=0,d=r.length;c<d;++c){const{start:u,end:h}=r[c],f=a[u],g=a[h];if(f===g){o.push(f);continue}const p=Math.abs((n-f[e])/(g[e]-f[e])),v=l(f,g,p,s.stepped);v[e]=t[e],o.push(v)}return o.length===1?o[0]:o}pathSegment(t,e,s){return _s(this)(t,this,e,s)}path(t,e,s){const n=this.segments,a=_s(this);let r=this._loop;e=e||0,s=s||this.points.length-e;for(const o of n)r&=a(t,this,o,{start:e,end:e+s-1});return!!r}draw(t,e,s,n){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Ih(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}L(Bt,"id","line"),L(Bt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),L(Bt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),L(Bt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function ra(i,t,e,s){const n=i.options,{[e]:a}=i.getProps([e],s);return Math.abs(t-a)<n.radius+n.hitRadius}class Re extends Ft{constructor(e){super();L(this,"parsed");L(this,"skip");L(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,n){const a=this.options,{x:r,y:o}=this.getProps(["x","y"],n);return Math.pow(e-r,2)+Math.pow(s-o,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,s){return ra(this,e,"x",s)}inYRange(e,s){return ra(this,e,"y",s)}getCenterPoint(e){const{x:s,y:n}=this.getProps(["x","y"],e);return{x:s,y:n}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const n=s&&e.borderWidth||0;return(s+n)*2}draw(e,s){const n=this.options;this.skip||n.radius<.1||!Dt(this,s,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,bs(e,n,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}L(Re,"id","point"),L(Re,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),L(Re,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Pr(i,t){const{x:e,y:s,base:n,width:a,height:r}=i.getProps(["x","y","base","width","height"],t);let o,l,c,d,u;return i.horizontal?(u=r/2,o=Math.min(e,n),l=Math.max(e,n),c=s-u,d=s+u):(u=a/2,o=e-u,l=e+u,c=Math.min(s,n),d=Math.max(s,n)),{left:o,top:c,right:l,bottom:d}}function Nt(i,t,e,s){return i?0:Q(t,e,s)}function Fh(i,t,e){const s=i.options.borderWidth,n=i.borderSkipped,a=nr(s);return{t:Nt(n.top,a.top,0,e),r:Nt(n.right,a.right,0,t),b:Nt(n.bottom,a.bottom,0,e),l:Nt(n.left,a.left,0,t)}}function zh(i,t,e){const{enableBorderRadius:s}=i.getProps(["enableBorderRadius"]),n=i.options.borderRadius,a=ie(n),r=Math.min(t,e),o=i.borderSkipped,l=s||R(n);return{topLeft:Nt(!l||o.top||o.left,a.topLeft,0,r),topRight:Nt(!l||o.top||o.right,a.topRight,0,r),bottomLeft:Nt(!l||o.bottom||o.left,a.bottomLeft,0,r),bottomRight:Nt(!l||o.bottom||o.right,a.bottomRight,0,r)}}function Rh(i){const t=Pr(i),e=t.right-t.left,s=t.bottom-t.top,n=Fh(i,e/2,s/2),a=zh(i,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:a},inner:{x:t.left+n.l,y:t.top+n.t,w:e-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,a.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(n.b,n.r))}}}}function rs(i,t,e,s){const n=t===null,a=e===null,o=i&&!(n&&a)&&Pr(i,s);return o&&(n||At(t,o.left,o.right))&&(a||At(e,o.top,o.bottom))}function Vh(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function Bh(i,t){i.rect(t.x,t.y,t.w,t.h)}function os(i,t,e={}){const s=i.x!==e.x?-t:0,n=i.y!==e.y?-t:0,a=(i.x+i.w!==e.x+e.w?t:0)-s,r=(i.y+i.h!==e.y+e.h?t:0)-n;return{x:i.x+s,y:i.y+n,w:i.w+a,h:i.h+r,radius:i.radius}}class Ve extends Ft{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:n}}=this,{inner:a,outer:r}=Rh(this),o=Vh(r.radius)?Ge:Bh;t.save(),(r.w!==a.w||r.h!==a.h)&&(t.beginPath(),o(t,os(r,e,a)),t.clip(),o(t,os(a,-e,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),o(t,os(a,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,s){return rs(this,t,e,s)}inXRange(t,e){return rs(this,t,null,e)}inYRange(t,e){return rs(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:n,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+n)/2:e,y:a?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}L(Ve,"id","bar"),L(Ve,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),L(Ve,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Nh=Object.freeze({__proto__:null,ArcElement:ue,BarElement:Ve,LineElement:Bt,PointElement:Re});const ws=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],oa=ws.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function Ar(i){return ws[i%ws.length]}function Or(i){return oa[i%oa.length]}function $h(i,t){return i.borderColor=Ar(t),i.backgroundColor=Or(t),++t}function Hh(i,t){return i.backgroundColor=i.data.map(()=>Ar(t++)),t}function jh(i,t){return i.backgroundColor=i.data.map(()=>Or(t++)),t}function qh(i){let t=0;return(e,s)=>{const n=i.getDatasetMeta(s).controller;n instanceof ee?t=Hh(e,t):n instanceof ze?t=jh(e,t):n&&(t=$h(e,t))}}function la(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function Wh(i){return i&&(i.borderColor||i.backgroundColor)}var Gh={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;const{data:{datasets:s},options:n}=i.config,{elements:a}=n;if(!e.forceOverride&&(la(s)||Wh(n)||a&&la(a)))return;const r=qh(i);s.forEach(r)}};function Yh(i,t,e,s,n){const a=n.samples||s;if(a>=e)return i.slice(t,t+e);const r=[],o=(e-2)/(a-2);let l=0;const c=t+e-1;let d=t,u,h,f,g,p;for(r[l++]=i[d],u=0;u<a-2;u++){let v=0,x=0,m;const b=Math.floor((u+1)*o)+1+t,y=Math.min(Math.floor((u+2)*o)+1,e)+t,_=y-b;for(m=b;m<y;m++)v+=i[m].x,x+=i[m].y;v/=_,x/=_;const w=Math.floor(u*o)+1+t,E=Math.min(Math.floor((u+1)*o)+1,e)+t,{x:M,y:k}=i[d];for(f=g=-1,m=w;m<E;m++)g=.5*Math.abs((M-v)*(i[m].y-k)-(M-i[m].x)*(x-k)),g>f&&(f=g,h=i[m],p=m);r[l++]=h,d=p}return r[l++]=i[c],r}function Xh(i,t,e,s){let n=0,a=0,r,o,l,c,d,u,h,f,g,p;const v=[],x=t+e-1,m=i[t].x,y=i[x].x-m;for(r=t;r<t+e;++r){o=i[r],l=(o.x-m)/y*s,c=o.y;const _=l|0;if(_===d)c<g?(g=c,u=r):c>p&&(p=c,h=r),n=(a*n+o.x)/++a;else{const w=r-1;if(!z(u)&&!z(h)){const E=Math.min(u,h),M=Math.max(u,h);E!==f&&E!==w&&v.push({...i[E],x:n}),M!==f&&M!==w&&v.push({...i[M],x:n})}r>0&&w!==f&&v.push(i[w]),v.push(o),d=_,a=0,g=p=c,u=h=f=r}}return v}function Dr(i){if(i._decimated){const t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function ca(i){i.data.datasets.forEach(t=>{Dr(t)})}function Uh(i,t){const e=t.length;let s=0,n;const{iScale:a}=i,{min:r,max:o,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(s=Q(Ot(t,a.axis,r).lo,0,e-1)),c?n=Q(Ot(t,a.axis,o).hi+1,s,e)-s:n=e-s,{start:s,count:n}}var Kh={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){ca(i);return}const s=i.width;i.data.datasets.forEach((n,a)=>{const{_data:r,indexAxis:o}=n,l=i.getDatasetMeta(a),c=r||n.data;if(W([o,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const d=i.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||i.options.parsing)return;let{start:u,count:h}=Uh(l,c);const f=e.threshold||4*s;if(h<=f){Dr(n);return}z(r)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(p){this._data=p}}));let g;switch(e.algorithm){case"lttb":g=Yh(c,u,h,s,e);break;case"min-max":g=Xh(c,u,h,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}n._decimated=g})},destroy(i){ca(i)}};function Zh(i,t,e){const s=i.segments,n=i.points,a=t.points,r=[];for(const o of s){let{start:l,end:c}=o;c=Ks(l,c,n);const d=Ss(e,n[l],n[c],o.loop);if(!t.segments){r.push({source:o,target:d,start:n[l],end:n[c]});continue}const u=gr(t,d);for(const h of u){const f=Ss(e,a[h.start],a[h.end],h.loop),g=pr(o,n,f);for(const p of g)r.push({source:p,target:h,start:{[e]:da(d,f,"start",Math.max)},end:{[e]:da(d,f,"end",Math.min)}})}}return r}function Ss(i,t,e,s){if(s)return;let n=t[i],a=e[i];return i==="angle"&&(n=ut(n),a=ut(a)),{property:i,start:n,end:a}}function Jh(i,t){const{x:e=null,y:s=null}=i||{},n=t.points,a=[];return t.segments.forEach(({start:r,end:o})=>{o=Ks(r,o,n);const l=n[r],c=n[o];s!==null?(a.push({x:l.x,y:s}),a.push({x:c.x,y:s})):e!==null&&(a.push({x:e,y:l.y}),a.push({x:e,y:c.y}))}),a}function Ks(i,t,e){for(;t>i;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function da(i,t,e,s){return i&&t?s(i[e],t[e]):i?i[e]:t?t[e]:0}function Ir(i,t){let e=[],s=!1;return G(i)?(s=!0,e=i):e=Jh(i,t),e.length?new Bt({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function ua(i){return i&&i.fill!==!1}function Qh(i,t,e){let n=i[t].fill;const a=[t];let r;if(!e)return n;for(;n!==!1&&a.indexOf(n)===-1;){if(!K(n))return n;if(r=i[n],!r)return!1;if(r.visible)return n;a.push(n),n=r.fill}return!1}function tf(i,t,e){const s=af(i);if(R(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return K(n)&&Math.floor(n)===n?ef(s[0],t,n,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function ef(i,t,e,s){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function sf(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:R(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function nf(i,t,e){let s;return i==="start"?s=e:i==="end"?s=t.options.reverse?t.min:t.max:R(i)?s=i.value:s=t.getBaseValue(),s}function af(i){const t=i.options,e=t.fill;let s=F(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function rf(i){const{scale:t,index:e,line:s}=i,n=[],a=s.segments,r=s.points,o=of(t,e);o.push(Ir({x:null,y:t.bottom},s));for(let l=0;l<a.length;l++){const c=a[l];for(let d=c.start;d<=c.end;d++)lf(n,r[d],o)}return new Bt({points:n,options:{}})}function of(i,t){const e=[],s=i.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const a=s[n];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function lf(i,t,e){const s=[];for(let n=0;n<e.length;n++){const a=e[n],{first:r,last:o,point:l}=cf(a,t,"x");if(!(!l||r&&o)){if(r)s.unshift(l);else if(i.push(l),!o)break}}i.push(...s)}function cf(i,t,e){const s=i.interpolate(t,e);if(!s)return{};const n=s[e],a=i.segments,r=i.points;let o=!1,l=!1;for(let c=0;c<a.length;c++){const d=a[c],u=r[d.start][e],h=r[d.end][e];if(At(n,u,h)){o=n===u,l=n===h;break}}return{first:o,last:l,point:s}}class Fr{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:n,y:a,radius:r}=this;return e=e||{start:0,end:Y},t.arc(n,a,r,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:n}=this,a=t.angle;return{x:e+Math.cos(a)*n,y:s+Math.sin(a)*n,angle:a}}}function df(i){const{chart:t,fill:e,line:s}=i;if(K(e))return uf(t,e);if(e==="stack")return rf(i);if(e==="shape")return!0;const n=hf(i);return n instanceof Fr?n:Ir(n,s)}function uf(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function hf(i){return(i.scale||{}).getPointPositionForValue?pf(i):ff(i)}function ff(i){const{scale:t={},fill:e}=i,s=sf(e,t);if(K(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function pf(i){const{scale:t,fill:e}=i,s=t.options,n=t.getLabels().length,a=s.reverse?t.max:t.min,r=nf(e,t,a),o=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,a);return new Fr({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)o.push(t.getPointPositionForValue(l,r));return o}function ls(i,t,e){const s=df(t),{line:n,scale:a,axis:r}=t,o=n.options,l=o.fill,c=o.backgroundColor,{above:d=c,below:u=c}=l||{};s&&n.points.length&&($i(i,e),gf(i,{line:n,target:s,above:d,below:u,area:e,scale:a,axis:r}),Hi(i))}function gf(i,t){const{line:e,target:s,above:n,below:a,area:r,scale:o}=t,l=e._loop?"angle":t.axis;i.save(),l==="x"&&a!==n&&(ha(i,s,r.top),fa(i,{line:e,target:s,color:n,scale:o,property:l}),i.restore(),i.save(),ha(i,s,r.bottom)),fa(i,{line:e,target:s,color:a,scale:o,property:l}),i.restore()}function ha(i,t,e){const{segments:s,points:n}=t;let a=!0,r=!1;i.beginPath();for(const o of s){const{start:l,end:c}=o,d=n[l],u=n[Ks(l,c,n)];a?(i.moveTo(d.x,d.y),a=!1):(i.lineTo(d.x,e),i.lineTo(d.x,d.y)),r=!!t.pathSegment(i,o,{move:r}),r?i.closePath():i.lineTo(u.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function fa(i,t){const{line:e,target:s,property:n,color:a,scale:r}=t,o=Zh(e,s,n);for(const{source:l,target:c,start:d,end:u}of o){const{style:{backgroundColor:h=a}={}}=l,f=s!==!0;i.save(),i.fillStyle=h,mf(i,r,f&&Ss(n,d,u)),i.beginPath();const g=!!e.pathSegment(i,l);let p;if(f){g?i.closePath():pa(i,s,u,n);const v=!!s.pathSegment(i,c,{move:g,reverse:!0});p=g&&v,p||pa(i,s,d,n)}i.closePath(),i.fill(p?"evenodd":"nonzero"),i.restore()}}function mf(i,t,e){const{top:s,bottom:n}=t.chart.chartArea,{property:a,start:r,end:o}=e||{};a==="x"&&(i.beginPath(),i.rect(r,s,o-r,n-s),i.clip())}function pa(i,t,e,s){const n=t.interpolate(e,s);n&&i.lineTo(n.x,n.y)}var bf={id:"filler",afterDatasetsUpdate(i,t,e){const s=(i.data.datasets||[]).length,n=[];let a,r,o,l;for(r=0;r<s;++r)a=i.getDatasetMeta(r),o=a.dataset,l=null,o&&o.options&&o instanceof Bt&&(l={visible:i.isDatasetVisible(r),index:r,fill:tf(o,r,s),chart:i,axis:a.controller.options.indexAxis,scale:a.vScale,line:o}),a.$filler=l,n.push(l);for(r=0;r<s;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=Qh(n,r,e.propagate))},beforeDraw(i,t,e){const s=e.drawTime==="beforeDraw",n=i.getSortedVisibleDatasetMetas(),a=i.chartArea;for(let r=n.length-1;r>=0;--r){const o=n[r].$filler;o&&(o.line.updateControlPoints(a,o.axis),s&&o.fill&&ls(i.ctx,o,a))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=i.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const a=s[n].$filler;ua(a)&&ls(i.ctx,a,i.chartArea)}},beforeDatasetDraw(i,t,e){const s=t.meta.$filler;!ua(s)||e.drawTime!=="beforeDatasetDraw"||ls(i.ctx,s,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const ga=(i,t)=>{let{boxHeight:e=t,boxWidth:s=t}=i;return i.usePointStyle&&(e=Math.min(e,t),s=i.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},vf=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class ma extends Ft{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=H(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=J(s.font),a=n.size,r=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=ga(s,a);let c,d;e.font=n.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(r,a,o,l)+10):(d=this.maxHeight,c=this._fitCols(r,n,o,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,n){const{ctx:a,maxWidth:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=n+o;let u=t;a.textAlign="left",a.textBaseline="middle";let h=-1,f=-d;return this.legendItems.forEach((g,p)=>{const v=s+e/2+a.measureText(g.text).width;(p===0||c[c.length-1]+v+2*o>r)&&(u+=d,c[c.length-(p>0?0:1)]=0,f+=d,h++),l[p]={left:0,top:f,row:h,width:v,height:n},c[c.length-1]+=v+o}),u}_fitCols(t,e,s,n){const{ctx:a,maxHeight:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=r-t;let u=o,h=0,f=0,g=0,p=0;return this.legendItems.forEach((v,x)=>{const{itemWidth:m,itemHeight:b}=xf(s,e,a,v,n);x>0&&f+b+2*o>d&&(u+=h+o,c.push({width:h,height:f}),g+=h+o,p++,h=f=0),l[x]={left:g,top:f,col:p,width:m,height:b},h=Math.max(h,m),f+=b+o}),u+=h,c.push({width:h,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:n},rtl:a}}=this,r=he(a,this.left,this.width);if(this.isHorizontal()){let o=0,l=it(s,this.left+n,this.right-this.lineWidths[o]);for(const c of e)o!==c.row&&(o=c.row,l=it(s,this.left+n,this.right-this.lineWidths[o])),c.top+=this.top+t+n,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+n}else{let o=0,l=it(s,this.top+t+n,this.bottom-this.columnSizes[o].height);for(const c of e)c.col!==o&&(o=c.col,l=it(s,this.top+t+n,this.bottom-this.columnSizes[o].height)),c.top=l,c.left+=this.left+n,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;$i(t,this),this._draw(),Hi(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:n}=this,{align:a,labels:r}=t,o=U.color,l=he(t.rtl,this.left,this.width),c=J(r.font),{padding:d}=r,u=c.size,h=u/2;let f;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:g,boxHeight:p,itemHeight:v}=ga(r,u),x=function(w,E,M){if(isNaN(g)||g<=0||isNaN(p)||p<0)return;n.save();const k=F(M.lineWidth,1);if(n.fillStyle=F(M.fillStyle,o),n.lineCap=F(M.lineCap,"butt"),n.lineDashOffset=F(M.lineDashOffset,0),n.lineJoin=F(M.lineJoin,"miter"),n.lineWidth=k,n.strokeStyle=F(M.strokeStyle,o),n.setLineDash(F(M.lineDash,[])),r.usePointStyle){const S={radius:p*Math.SQRT2/2,pointStyle:M.pointStyle,rotation:M.rotation,borderWidth:k},T=l.xPlus(w,g/2),P=E+h;sr(n,S,T,P,r.pointStyleWidth&&g)}else{const S=E+Math.max((u-p)/2,0),T=l.leftForLtr(w,g),P=ie(M.borderRadius);n.beginPath(),Object.values(P).some(C=>C!==0)?Ge(n,{x:T,y:S,w:g,h:p,radius:P}):n.rect(T,S,g,p),n.fill(),k!==0&&n.stroke()}n.restore()},m=function(w,E,M){ae(n,M.text,w,E+v/2,c,{strikethrough:M.hidden,textAlign:l.textAlign(M.textAlign)})},b=this.isHorizontal(),y=this._computeTitleHeight();b?f={x:it(a,this.left+d,this.right-s[0]),y:this.top+d+y,line:0}:f={x:this.left+d,y:it(a,this.top+y+d,this.bottom-e[0].height),line:0},ur(this.ctx,t.textDirection);const _=v+d;this.legendItems.forEach((w,E)=>{n.strokeStyle=w.fontColor,n.fillStyle=w.fontColor;const M=n.measureText(w.text).width,k=l.textAlign(w.textAlign||(w.textAlign=r.textAlign)),S=g+h+M;let T=f.x,P=f.y;l.setWidth(this.width),b?E>0&&T+S+d>this.right&&(P=f.y+=_,f.line++,T=f.x=it(a,this.left+d,this.right-s[f.line])):E>0&&P+_>this.bottom&&(T=f.x=T+e[f.line].width+d,f.line++,P=f.y=it(a,this.top+y+d,this.bottom-e[f.line].height));const C=l.x(T);if(x(C,P,w),T=Bc(k,T+g+h,b?T+S:this.right,t.rtl),m(l.x(T),P,w),b)f.x+=S+d;else if(typeof w.text!="string"){const A=c.lineHeight;f.y+=zr(w,A)+d}else f.y+=_}),hr(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=J(e.font),n=tt(e.padding);if(!e.display)return;const a=he(t.rtl,this.left,this.width),r=this.ctx,o=e.position,l=s.size/2,c=n.top+l;let d,u=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),d=this.top+c,u=it(t.align,u,this.right-h);else{const g=this.columnSizes.reduce((p,v)=>Math.max(p,v.height),0);d=c+it(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=it(o,u,u+h);r.textAlign=a.textAlign($s(o)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=s.string,ae(r,e.text,f,d,s)}_computeTitleHeight(){const t=this.options.title,e=J(t.font),s=tt(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,n,a;if(At(t,this.left,this.right)&&At(e,this.top,this.bottom)){for(a=this.legendHitBoxes,s=0;s<a.length;++s)if(n=a[s],At(t,n.left,n.left+n.width)&&At(e,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!wf(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,a=vf(n,s);n&&!a&&H(e.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!a&&H(e.onHover,[t,s,this],this)}else s&&H(e.onClick,[t,s,this],this)}}function xf(i,t,e,s,n){const a=yf(s,i,t,e),r=_f(n,s,t.lineHeight);return{itemWidth:a,itemHeight:r}}function yf(i,t,e,s){let n=i.text;return n&&typeof n!="string"&&(n=n.reduce((a,r)=>a.length>r.length?a:r)),t+e.size/2+s.measureText(n).width}function _f(i,t,e){let s=i;return typeof t.text!="string"&&(s=zr(t,e)),s}function zr(i,t){const e=i.text?i.text.length:0;return t*e}function wf(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var Sf={id:"legend",_element:ma,start(i,t,e){const s=i.legend=new ma({ctx:i.ctx,options:e,chart:i});st.configure(i,s,e),st.addBox(i,s)},stop(i){st.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const s=i.legend;st.configure(i,s,e),s.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const s=t.datasetIndex,n=e.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:n,color:a,useBorderRadius:r,borderRadius:o}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),d=tt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:s||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:r&&(o||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class Zs extends Ft{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const n=G(s.text)?s.text.length:1;this._padding=tt(s.padding);const a=n*J(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:n,right:a,options:r}=this,o=r.align;let l=0,c,d,u;return this.isHorizontal()?(d=it(o,s,a),u=e+t,c=a-s):(r.position==="left"?(d=s+t,u=it(o,n,e),l=X*-.5):(d=a-t,u=it(o,e,n),l=X*.5),c=n-e),{titleX:d,titleY:u,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=J(e.font),a=s.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:l,rotation:c}=this._drawArgs(a);ae(t,e.text,0,0,s,{color:e.color,maxWidth:l,rotation:c,textAlign:$s(e.align),textBaseline:"middle",translation:[r,o]})}}function Mf(i,t){const e=new Zs({ctx:i.ctx,options:t,chart:i});st.configure(i,e,t),st.addBox(i,e),i.titleBlock=e}var Tf={id:"title",_element:Zs,start(i,t,e){Mf(i,e)},stop(i){const t=i.titleBlock;st.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){const s=i.titleBlock;st.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const hi=new WeakMap;var kf={id:"subtitle",start(i,t,e){const s=new Zs({ctx:i.ctx,options:e,chart:i});st.configure(i,s,e),st.addBox(i,s),hi.set(i,s)},stop(i){st.removeBox(i,hi.get(i)),hi.delete(i)},beforeUpdate(i,t,e){const s=hi.get(i);st.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Pe={average(i){if(!i.length)return!1;let t,e,s=0,n=0,a=0;for(t=0,e=i.length;t<e;++t){const r=i[t].element;if(r&&r.hasValue()){const o=r.tooltipPosition();s+=o.x,n+=o.y,++a}}return{x:s/a,y:n/a}},nearest(i,t){if(!i.length)return!1;let e=t.x,s=t.y,n=Number.POSITIVE_INFINITY,a,r,o;for(a=0,r=i.length;a<r;++a){const l=i[a].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=gs(t,c);d<n&&(n=d,o=l)}}if(o){const l=o.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function _t(i,t){return t&&(G(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function Et(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Cf(i,t){const{element:e,datasetIndex:s,index:n}=t,a=i.getDatasetMeta(s).controller,{label:r,value:o}=a.getLabelAndValue(n);return{chart:i,label:r,parsed:a.getParsed(n),raw:i.data.datasets[s].data[n],formattedValue:o,dataset:a.getDataset(),dataIndex:n,datasetIndex:s,element:e}}function ba(i,t){const e=i.chart.ctx,{body:s,footer:n,title:a}=i,{boxWidth:r,boxHeight:o}=t,l=J(t.bodyFont),c=J(t.titleFont),d=J(t.footerFont),u=a.length,h=n.length,f=s.length,g=tt(t.padding);let p=g.height,v=0,x=s.reduce((y,_)=>y+_.before.length+_.lines.length+_.after.length,0);if(x+=i.beforeBody.length+i.afterBody.length,u&&(p+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),x){const y=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;p+=f*y+(x-f)*l.lineHeight+(x-1)*t.bodySpacing}h&&(p+=t.footerMarginTop+h*d.lineHeight+(h-1)*t.footerSpacing);let m=0;const b=function(y){v=Math.max(v,e.measureText(y).width+m)};return e.save(),e.font=c.string,$(i.title,b),e.font=l.string,$(i.beforeBody.concat(i.afterBody),b),m=t.displayColors?r+2+t.boxPadding:0,$(s,y=>{$(y.before,b),$(y.lines,b),$(y.after,b)}),m=0,e.font=d.string,$(i.footer,b),e.restore(),v+=g.width,{width:v,height:p}}function Ef(i,t){const{y:e,height:s}=t;return e<s/2?"top":e>i.height-s/2?"bottom":"center"}function Lf(i,t,e,s){const{x:n,width:a}=s,r=e.caretSize+e.caretPadding;if(i==="left"&&n+a+r>t.width||i==="right"&&n-a-r<0)return!0}function Pf(i,t,e,s){const{x:n,width:a}=e,{width:r,chartArea:{left:o,right:l}}=i;let c="center";return s==="center"?c=n<=(o+l)/2?"left":"right":n<=a/2?c="left":n>=r-a/2&&(c="right"),Lf(c,i,t,e)&&(c="center"),c}function va(i,t,e){const s=e.yAlign||t.yAlign||Ef(i,e);return{xAlign:e.xAlign||t.xAlign||Pf(i,t,e,s),yAlign:s}}function Af(i,t){let{x:e,width:s}=i;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function Of(i,t,e){let{y:s,height:n}=i;return t==="top"?s+=e:t==="bottom"?s-=n+e:s-=n/2,s}function xa(i,t,e,s){const{caretSize:n,caretPadding:a,cornerRadius:r}=i,{xAlign:o,yAlign:l}=e,c=n+a,{topLeft:d,topRight:u,bottomLeft:h,bottomRight:f}=ie(r);let g=Af(t,o);const p=Of(t,l,c);return l==="center"?o==="left"?g+=c:o==="right"&&(g-=c):o==="left"?g-=Math.max(d,h)+n:o==="right"&&(g+=Math.max(u,f)+n),{x:Q(g,0,s.width-t.width),y:Q(p,0,s.height-t.height)}}function fi(i,t,e){const s=tt(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-s.right:i.x+s.left}function ya(i){return _t([],Et(i))}function Df(i,t,e){return qt(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function _a(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const Rr={beforeTitle:Tt,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Tt,beforeBody:Tt,beforeLabel:Tt,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return z(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Tt,afterBody:Tt,beforeFooter:Tt,footer:Tt,afterFooter:Tt};function nt(i,t,e,s){const n=i[t].call(e,s);return typeof n>"u"?Rr[t].call(e,s):n}class Ms extends Ft{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&e.options.animation&&s.animations,a=new mr(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Df(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,n=nt(s,"beforeTitle",this,t),a=nt(s,"title",this,t),r=nt(s,"afterTitle",this,t);let o=[];return o=_t(o,Et(n)),o=_t(o,Et(a)),o=_t(o,Et(r)),o}getBeforeBody(t,e){return ya(nt(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,n=[];return $(t,a=>{const r={before:[],lines:[],after:[]},o=_a(s,a);_t(r.before,Et(nt(o,"beforeLabel",this,a))),_t(r.lines,nt(o,"label",this,a)),_t(r.after,Et(nt(o,"afterLabel",this,a))),n.push(r)}),n}getAfterBody(t,e){return ya(nt(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,n=nt(s,"beforeFooter",this,t),a=nt(s,"footer",this,t),r=nt(s,"afterFooter",this,t);let o=[];return o=_t(o,Et(n)),o=_t(o,Et(a)),o=_t(o,Et(r)),o}_createItems(t){const e=this._active,s=this.chart.data,n=[],a=[],r=[];let o=[],l,c;for(l=0,c=e.length;l<c;++l)o.push(Cf(this.chart,e[l]));return t.filter&&(o=o.filter((d,u,h)=>t.filter(d,u,h,s))),t.itemSort&&(o=o.sort((d,u)=>t.itemSort(d,u,s))),$(o,d=>{const u=_a(t.callbacks,d);n.push(nt(u,"labelColor",this,d)),a.push(nt(u,"labelPointStyle",this,d)),r.push(nt(u,"labelTextColor",this,d))}),this.labelColors=n,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=o,o}update(t,e){const s=this.options.setContext(this.getContext()),n=this._active;let a,r=[];if(!n.length)this.opacity!==0&&(a={opacity:0});else{const o=Pe[s.position].call(this,n,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const l=this._size=ba(this,s),c=Object.assign({},o,l),d=va(this.chart,s,c),u=xa(s,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,a={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,n){const a=this.getCaretPosition(t,s,n);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,s){const{xAlign:n,yAlign:a}=this,{caretSize:r,cornerRadius:o}=s,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:u}=ie(o),{x:h,y:f}=t,{width:g,height:p}=e;let v,x,m,b,y,_;return a==="center"?(y=f+p/2,n==="left"?(v=h,x=v-r,b=y+r,_=y-r):(v=h+g,x=v+r,b=y-r,_=y+r),m=v):(n==="left"?x=h+Math.max(l,d)+r:n==="right"?x=h+g-Math.max(c,u)-r:x=this.caretX,a==="top"?(b=f,y=b-r,v=x-r,m=x+r):(b=f+p,y=b+r,v=x+r,m=x-r),_=b),{x1:v,x2:x,x3:m,y1:b,y2:y,y3:_}}drawTitle(t,e,s){const n=this.title,a=n.length;let r,o,l;if(a){const c=he(s.rtl,this.x,this.width);for(t.x=fi(this,s.titleAlign,s),e.textAlign=c.textAlign(s.titleAlign),e.textBaseline="middle",r=J(s.titleFont),o=s.titleSpacing,e.fillStyle=s.titleColor,e.font=r.string,l=0;l<a;++l)e.fillText(n[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+o,l+1===a&&(t.y+=s.titleMarginBottom-o)}}_drawColorBox(t,e,s,n,a){const r=this.labelColors[s],o=this.labelPointStyles[s],{boxHeight:l,boxWidth:c}=a,d=J(a.bodyFont),u=fi(this,"left",a),h=n.x(u),f=l<d.lineHeight?(d.lineHeight-l)/2:0,g=e.y+f;if(a.usePointStyle){const p={radius:Math.min(c,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},v=n.leftForLtr(h,c)+c/2,x=g+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,bs(t,p,v,x),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,bs(t,p,v,x)}else{t.lineWidth=R(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const p=n.leftForLtr(h,c),v=n.leftForLtr(n.xPlus(h,1),c-2),x=ie(r.borderRadius);Object.values(x).some(m=>m!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,Ge(t,{x:p,y:g,w:c,h:l,radius:x}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),Ge(t,{x:v,y:g+1,w:c-2,h:l-2,radius:x}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(p,g,c,l),t.strokeRect(p,g,c,l),t.fillStyle=r.backgroundColor,t.fillRect(v,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:n}=this,{bodySpacing:a,bodyAlign:r,displayColors:o,boxHeight:l,boxWidth:c,boxPadding:d}=s,u=J(s.bodyFont);let h=u.lineHeight,f=0;const g=he(s.rtl,this.x,this.width),p=function(M){e.fillText(M,g.x(t.x+f),t.y+h/2),t.y+=h+a},v=g.textAlign(r);let x,m,b,y,_,w,E;for(e.textAlign=r,e.textBaseline="middle",e.font=u.string,t.x=fi(this,v,s),e.fillStyle=s.bodyColor,$(this.beforeBody,p),f=o&&v!=="right"?r==="center"?c/2+d:c+2+d:0,y=0,w=n.length;y<w;++y){for(x=n[y],m=this.labelTextColors[y],e.fillStyle=m,$(x.before,p),b=x.lines,o&&b.length&&(this._drawColorBox(e,t,y,g,s),h=Math.max(u.lineHeight,l)),_=0,E=b.length;_<E;++_)p(b[_]),h=u.lineHeight;$(x.after,p)}f=0,h=u.lineHeight,$(this.afterBody,p),t.y-=a}drawFooter(t,e,s){const n=this.footer,a=n.length;let r,o;if(a){const l=he(s.rtl,this.x,this.width);for(t.x=fi(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",r=J(s.footerFont),e.fillStyle=s.footerColor,e.font=r.string,o=0;o<a;++o)e.fillText(n[o],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,e,s,n){const{xAlign:a,yAlign:r}=this,{x:o,y:l}=t,{width:c,height:d}=s,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:g}=ie(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(o+u,l),r==="top"&&this.drawCaret(t,e,s,n),e.lineTo(o+c-h,l),e.quadraticCurveTo(o+c,l,o+c,l+h),r==="center"&&a==="right"&&this.drawCaret(t,e,s,n),e.lineTo(o+c,l+d-g),e.quadraticCurveTo(o+c,l+d,o+c-g,l+d),r==="bottom"&&this.drawCaret(t,e,s,n),e.lineTo(o+f,l+d),e.quadraticCurveTo(o,l+d,o,l+d-f),r==="center"&&a==="left"&&this.drawCaret(t,e,s,n),e.lineTo(o,l+u),e.quadraticCurveTo(o,l,o+u,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,n=s&&s.x,a=s&&s.y;if(n||a){const r=Pe[t.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=ba(this,t),l=Object.assign({},r,this._size),c=va(e,t,l),d=xa(t,l,c,e);(n._to!==d.x||a._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},a={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=tt(e.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&o&&(t.save(),t.globalAlpha=s,this.drawBackground(a,t,n,e),ur(t,e.textDirection),a.y+=r.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),hr(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,n=t.map(({datasetIndex:o,index:l})=>{const c=this.chart.getDatasetMeta(o);if(!c)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:c.data[l],index:l}}),a=!Oi(s,n),r=this._positionChanged(n,e);(a||r)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,a=this._active||[],r=this._getActiveElements(t,a,e,s),o=this._positionChanged(r,t),l=e||!Oi(r,a)||o;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,n){const a=this.options;if(t.type==="mouseout")return[];if(!n)return e.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,a.mode,a,s);return a.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:s,caretY:n,options:a}=this,r=Pe[a.position].call(this,t,e);return r!==!1&&(s!==r.x||n!==r.y)}}L(Ms,"positioners",Pe);var If={id:"tooltip",_element:Ms,positioners:Pe,afterInit(i,t,e){e&&(i.tooltip=new Ms({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Rr},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Ff=Object.freeze({__proto__:null,Colors:Gh,Decimation:Kh,Filler:bf,Legend:Sf,SubTitle:kf,Title:Tf,Tooltip:If});const zf=(i,t,e,s)=>(typeof t=="string"?(e=i.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Rf(i,t,e,s){const n=i.indexOf(t);if(n===-1)return zf(i,t,e,s);const a=i.lastIndexOf(t);return n!==a?e:n}const Vf=(i,t)=>i===null?null:Q(Math.round(i),0,t);function wa(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class Ts extends re{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:n,label:a}of e)s[n]===a&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(z(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:Rf(s,t,F(e,t),this._addedLabels),Vf(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,n=[];let a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=e;r++)n.push({value:r});return n}getLabelForValue(t){return wa.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}L(Ts,"id","category"),L(Ts,"defaults",{ticks:{callback:wa}});function Bf(i,t){const e=[],{bounds:n,step:a,min:r,max:o,precision:l,count:c,maxTicks:d,maxDigits:u,includeBounds:h}=i,f=a||1,g=d-1,{min:p,max:v}=t,x=!z(r),m=!z(o),b=!z(c),y=(v-p)/(u+1);let _=mn((v-p)/g/f)*f,w,E,M,k;if(_<1e-14&&!x&&!m)return[{value:p},{value:v}];k=Math.ceil(v/_)-Math.floor(p/_),k>g&&(_=mn(k*_/g/f)*f),z(l)||(w=Math.pow(10,l),_=Math.ceil(_*w)/w),n==="ticks"?(E=Math.floor(p/_)*_,M=Math.ceil(v/_)*_):(E=p,M=v),x&&m&&a&&Oc((o-r)/a,_/1e3)?(k=Math.round(Math.min((o-r)/_,d)),_=(o-r)/k,E=r,M=o):b?(E=x?r:E,M=m?o:M,k=c-1,_=(M-E)/k):(k=(M-E)/_,De(k,Math.round(k),_/1e3)?k=Math.round(k):k=Math.ceil(k));const S=Math.max(bn(_),bn(E));w=Math.pow(10,z(l)?S:l),E=Math.round(E*w)/w,M=Math.round(M*w)/w;let T=0;for(x&&(h&&E!==r?(e.push({value:r}),E<r&&T++,De(Math.round((E+T*_)*w)/w,r,Sa(r,y,i))&&T++):E<r&&T++);T<k;++T){const P=Math.round((E+T*_)*w)/w;if(m&&P>o)break;e.push({value:P})}return m&&h&&M!==o?e.length&&De(e[e.length-1].value,o,Sa(o,y,i))?e[e.length-1].value=o:e.push({value:o}):(!m||M===o)&&e.push({value:M}),e}function Sa(i,t,{horizontal:e,minRotation:s}){const n=vt(s),a=(e?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+i).length;return Math.min(t/a,r)}class Bi extends re{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return z(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:n,max:a}=this;const r=l=>n=e?n:l,o=l=>a=s?a:l;if(t){const l=St(n),c=St(a);l<0&&c<0?o(0):l>0&&c>0&&r(0)}if(n===a){let l=a===0?1:Math.abs(a*.05);o(a+l),t||r(n-l)}this.min=n,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e=e||11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,r=Bf(n,a);return t.bounds==="ticks"&&Xa(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-e)/Math.max(t.length-1,1)/2;e-=n,s+=n}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Ze(t,this.chart.options.locale,this.options.ticks.format)}}class ks extends Bi{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=K(t)?t:0,this.max=K(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=vt(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}L(ks,"id","linear"),L(ks,"defaults",{ticks:{callback:Ni.formatters.numeric}});const Xe=i=>Math.floor(Vt(i)),Kt=(i,t)=>Math.pow(10,Xe(i)+t);function Ma(i){return i/Math.pow(10,Xe(i))===1}function Ta(i,t,e){const s=Math.pow(10,e),n=Math.floor(i/s);return Math.ceil(t/s)-n}function Nf(i,t){const e=t-i;let s=Xe(e);for(;Ta(i,t,s)>10;)s++;for(;Ta(i,t,s)<10;)s--;return Math.min(s,Xe(i))}function $f(i,{min:t,max:e}){t=lt(i.min,t);const s=[],n=Xe(t);let a=Nf(t,e),r=a<0?Math.pow(10,Math.abs(a)):1;const o=Math.pow(10,a),l=n>a?Math.pow(10,n):0,c=Math.round((t-l)*r)/r,d=Math.floor((t-l)/o/10)*o*10;let u=Math.floor((c-d)/Math.pow(10,a)),h=lt(i.min,Math.round((l+d+u*Math.pow(10,a))*r)/r);for(;h<e;)s.push({value:h,major:Ma(h),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(a++,u=2,r=a>=0?1:r),h=Math.round((l+d+u*Math.pow(10,a))*r)/r;const f=lt(i.max,h);return s.push({value:f,major:Ma(f),significand:u}),s}class Cs extends re{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=Bi.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return K(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=K(t)?Math.max(0,t):null,this.max=K(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!K(this._userMin)&&(this.min=t===Kt(this.min,0)?Kt(this.min,-1):Kt(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,n=this.max;const a=o=>s=t?s:o,r=o=>n=e?n:o;s===n&&(s<=0?(a(1),r(10)):(a(Kt(s,-1)),r(Kt(n,1)))),s<=0&&a(Kt(n,-1)),n<=0&&r(Kt(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=$f(e,this);return t.bounds==="ticks"&&Xa(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Ze(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Vt(t),this._valueRange=Vt(this.max)-Vt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Vt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}L(Cs,"id","logarithmic"),L(Cs,"defaults",{ticks:{callback:Ni.formatters.logarithmic,major:{enabled:!0}}});function Es(i){const t=i.ticks;if(t.display&&i.display){const e=tt(t.backdropPadding);return F(t.font&&t.font.size,U.font.size)+e.height}return 0}function Hf(i,t,e){return e=G(e)?e:[e],{w:Uc(i,t.string,e),h:e.length*t.lineHeight}}function ka(i,t,e,s,n){return i===s||i===n?{start:t-e/2,end:t+e/2}:i<s||i>n?{start:t-e,end:t}:{start:t,end:t+e}}function jf(i){const t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),s=[],n=[],a=i._pointLabels.length,r=i.options.pointLabels,o=r.centerPointLabels?X/a:0;for(let l=0;l<a;l++){const c=r.setContext(i.getPointLabelContext(l));n[l]=c.padding;const d=i.getPointPosition(l,i.drawingArea+n[l],o),u=J(c.font),h=Hf(i.ctx,u,i._pointLabels[l]);s[l]=h;const f=ut(i.getIndexAngle(l)+o),g=Math.round(Bs(f)),p=ka(g,d.x,h.w,0,180),v=ka(g,d.y,h.h,90,270);qf(e,t,f,p,v)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=Yf(i,s,n)}function qf(i,t,e,s,n){const a=Math.abs(Math.sin(e)),r=Math.abs(Math.cos(e));let o=0,l=0;s.start<t.l?(o=(t.l-s.start)/a,i.l=Math.min(i.l,t.l-o)):s.end>t.r&&(o=(s.end-t.r)/a,i.r=Math.max(i.r,t.r+o)),n.start<t.t?(l=(t.t-n.start)/r,i.t=Math.min(i.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,i.b=Math.max(i.b,t.b+l))}function Wf(i,t,e){const s=i.drawingArea,{extra:n,additionalAngle:a,padding:r,size:o}=e,l=i.getPointPosition(t,s+n+r,a),c=Math.round(Bs(ut(l.angle+Z))),d=Kf(l.y,o.h,c),u=Xf(c),h=Uf(l.x,o.w,u);return{visible:!0,x:l.x,y:d,textAlign:u,left:h,top:d,right:h+o.w,bottom:d+o.h}}function Gf(i,t){if(!t)return!0;const{left:e,top:s,right:n,bottom:a}=i;return!(Dt({x:e,y:s},t)||Dt({x:e,y:a},t)||Dt({x:n,y:s},t)||Dt({x:n,y:a},t))}function Yf(i,t,e){const s=[],n=i._pointLabels.length,a=i.options,{centerPointLabels:r,display:o}=a.pointLabels,l={extra:Es(a)/2,additionalAngle:r?X/n:0};let c;for(let d=0;d<n;d++){l.padding=e[d],l.size=t[d];const u=Wf(i,d,l);s.push(u),o==="auto"&&(u.visible=Gf(u,c),u.visible&&(c=u))}return s}function Xf(i){return i===0||i===180?"center":i<180?"left":"right"}function Uf(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function Kf(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function Zf(i,t,e){const{left:s,top:n,right:a,bottom:r}=e,{backdropColor:o}=t;if(!z(o)){const l=ie(t.borderRadius),c=tt(t.backdropPadding);i.fillStyle=o;const d=s-c.left,u=n-c.top,h=a-s+c.width,f=r-n+c.height;Object.values(l).some(g=>g!==0)?(i.beginPath(),Ge(i,{x:d,y:u,w:h,h:f,radius:l}),i.fill()):i.fillRect(d,u,h,f)}}function Jf(i,t){const{ctx:e,options:{pointLabels:s}}=i;for(let n=t-1;n>=0;n--){const a=i._pointLabelItems[n];if(!a.visible)continue;const r=s.setContext(i.getPointLabelContext(n));Zf(e,r,a);const o=J(r.font),{x:l,y:c,textAlign:d}=a;ae(e,i._pointLabels[n],l,c+o.lineHeight/2,o,{color:r.color,textAlign:d,textBaseline:"middle"})}}function Vr(i,t,e,s){const{ctx:n}=i;if(e)n.arc(i.xCenter,i.yCenter,t,0,Y);else{let a=i.getPointPosition(0,t);n.moveTo(a.x,a.y);for(let r=1;r<s;r++)a=i.getPointPosition(r,t),n.lineTo(a.x,a.y)}}function Qf(i,t,e,s,n){const a=i.ctx,r=t.circular,{color:o,lineWidth:l}=t;!r&&!s||!o||!l||e<0||(a.save(),a.strokeStyle=o,a.lineWidth=l,a.setLineDash(n.dash),a.lineDashOffset=n.dashOffset,a.beginPath(),Vr(i,e,r,s),a.closePath(),a.stroke(),a.restore())}function tp(i,t,e){return qt(i,{label:e,index:t,type:"pointLabel"})}class Ae extends Bi{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=tt(Es(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=K(t)&&!isNaN(t)?t:0,this.max=K(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Es(this.options))}generateTickLabels(t){Bi.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const n=H(this.options.pointLabels.callback,[e,s],this);return n||n===0?n:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?jf(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,n))}getIndexAngle(t){const e=Y/(this._pointLabels.length||1),s=this.options.startAngle||0;return ut(t*e+vt(s))}getDistanceFromCenterForValue(t){if(z(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(z(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return tp(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const n=this.getIndexAngle(t)-Z+s;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:n,bottom:a}=this._pointLabelItems[t];return{left:e,top:s,right:n,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Vr(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:n,border:a}=e,r=this._pointLabels.length;let o,l,c;if(e.pointLabels.display&&Jf(this,r),n.display&&this.ticks.forEach((d,u)=>{if(u!==0){l=this.getDistanceFromCenterForValue(d.value);const h=this.getContext(u),f=n.setContext(h),g=a.setContext(h);Qf(this,f,l,r,g)}}),s.display){for(t.save(),o=r-1;o>=0;o--){const d=s.setContext(this.getPointLabelContext(o)),{color:u,lineWidth:h}=d;!h||!u||(t.lineWidth=h,t.strokeStyle=u,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),c=this.getPointPosition(o,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let a,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&!e.reverse)return;const c=s.setContext(this.getContext(l)),d=J(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,r=t.measureText(o.label).width,t.fillStyle=c.backdropColor;const u=tt(c.backdropPadding);t.fillRect(-r/2-u.left,-a-d.size/2-u.top,r+u.width,d.size+u.height)}ae(t,o.label,0,-a,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}L(Ae,"id","radialLinear"),L(Ae,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ni.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),L(Ae,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),L(Ae,"descriptors",{angleLines:{_fallback:"grid"}});const qi={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},rt=Object.keys(qi);function Ca(i,t){return i-t}function Ea(i,t){if(z(t))return null;const e=i._adapter,{parser:s,round:n,isoWeekday:a}=i._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),K(r)||(r=typeof s=="string"?e.parse(r,s):e.parse(r)),r===null?null:(n&&(r=n==="week"&&(fe(a)||a===!0)?e.startOf(r,"isoWeek",a):e.startOf(r,n)),+r)}function La(i,t,e,s){const n=rt.length;for(let a=rt.indexOf(i);a<n-1;++a){const r=qi[rt[a]],o=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((e-t)/(o*r.size))<=s)return rt[a]}return rt[n-1]}function ep(i,t,e,s,n){for(let a=rt.length-1;a>=rt.indexOf(e);a--){const r=rt[a];if(qi[r].common&&i._adapter.diff(n,s,r)>=t-1)return r}return rt[e?rt.indexOf(e):0]}function ip(i){for(let t=rt.indexOf(i)+1,e=rt.length;t<e;++t)if(qi[rt[t]].common)return rt[t]}function Pa(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:s,hi:n}=Ns(e,t),a=e[s]>=t?e[s]:e[n];i[a]=!0}}function sp(i,t,e,s){const n=i._adapter,a=+n.startOf(t[0].value,s),r=t[t.length-1].value;let o,l;for(o=a;o<=r;o=+n.add(o,1,s))l=e[o],l>=0&&(t[l].major=!0);return t}function Aa(i,t,e){const s=[],n={},a=t.length;let r,o;for(r=0;r<a;++r)o=t[r],n[o]=r,s.push({value:o,major:!1});return a===0||!e?s:sp(i,s,n,e)}class Ue extends re{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),n=this._adapter=new uu._date(t.adapters.date);n.init(e),Oe(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Ea(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:n,max:a,minDefined:r,maxDefined:o}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!o&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!r||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=K(n)&&!isNaN(n)?n:+e.startOf(Date.now(),s),a=K(a)&&!isNaN(a)?a:+e.endOf(Date.now(),s)+1,this.min=Math.min(n,a-1),this.max=Math.max(n+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const a=this.min,r=this.max,o=zc(n,a,r);return this._unit=e.unit||(s.autoSkip?La(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):ep(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:ip(this._unit),this.initOffsets(n),t.reverse&&o.reverse(),Aa(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,n,a;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?e=1-n:e=(this.getDecimalForValue(t[1])-n)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?s=a:s=(a-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;e=Q(e,0,r),s=Q(s,0,r),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,n=this.options,a=n.time,r=a.unit||La(a.minUnit,e,s,this._getLabelCapacity(e)),o=F(n.ticks.stepSize,1),l=r==="week"?a.isoWeekday:!1,c=fe(l)||l===!0,d={};let u=e,h,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":r),t.diff(s,e,r)>1e5*o)throw new Error(e+" and "+s+" are too far apart with stepSize of "+o+" "+r);const g=n.ticks.source==="data"&&this.getDataTimestamps();for(h=u,f=0;h<s;h=+t.add(h,o,r),f++)Pa(d,h,g);return(h===s||n.bounds==="ticks"||f===1)&&Pa(d,h,g),Object.keys(d).sort(Ca).map(p=>+p)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const n=this.options.time.displayFormats,a=this._unit,r=e||n[a];return this._adapter.format(t,r)}_tickFormatFunction(t,e,s,n){const a=this.options,r=a.ticks.callback;if(r)return H(r,[t,e,s],this);const o=a.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&o[l],u=c&&o[c],h=s[e],f=c&&u&&h&&h.major;return this._adapter.format(t,n||(f?u:d))}generateTickLabels(t){let e,s,n;for(e=0,s=t.length;e<s;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,n=vt(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(n),r=Math.sin(n),o=this._resolveTickFontOptions(0).size;return{w:s*a+o*r,h:s*r+o*a}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,n=s[e.unit]||s.millisecond,a=this._tickFormatFunction(t,0,Aa(this,[t],this._majorUnit),n),r=this._getLabelSize(a),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(e=0,s=n.length;e<s;++e)t=t.concat(n[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const n=this.getLabels();for(e=0,s=n.length;e<s;++e)t.push(Ea(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Za(t.sort(Ca))}}L(Ue,"id","time"),L(Ue,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function pi(i,t,e){let s=0,n=i.length-1,a,r,o,l;e?(t>=i[s].pos&&t<=i[n].pos&&({lo:s,hi:n}=Ot(i,"pos",t)),{pos:a,time:o}=i[s],{pos:r,time:l}=i[n]):(t>=i[s].time&&t<=i[n].time&&({lo:s,hi:n}=Ot(i,"time",t)),{time:a,pos:o}=i[s],{time:r,pos:l}=i[n]);const c=r-a;return c?o+(l-o)*(t-a)/c:o}class Ls extends Ue{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=pi(e,this.min),this._tableRange=pi(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,n=[],a=[];let r,o,l,c,d;for(r=0,o=t.length;r<o;++r)c=t[r],c>=e&&c<=s&&n.push(c);if(n.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(r=0,o=n.length;r<o;++r)d=n[r+1],l=n[r-1],c=n[r],Math.round((d+l)/2)!==c&&a.push({time:c,pos:r/(o-1)});return a}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((n,a)=>n-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(pi(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return pi(this._table,s*this._tableRange+this._minPos,!0)}}L(Ls,"id","timeseries"),L(Ls,"defaults",Ue.defaults);var np=Object.freeze({__proto__:null,CategoryScale:Ts,LinearScale:ks,LogarithmicScale:Cs,RadialLinearScale:Ae,TimeScale:Ue,TimeSeriesScale:Ls});const ap=[du,Nh,Ff,np];ht.register(...ap);/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */var Oa=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var i=window.screen;if(i)return(i.deviceXDPI||1)/(i.logicalXDPI||1)}return 1}(),Be={toTextLines:function(i){var t=[],e;for(i=[].concat(i);i.length;)e=i.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?i.push.apply(i,e):z(i)||t.unshift(""+e);return t},textSize:function(i,t,e){var s=[].concat(t),n=s.length,a=i.font,r=0,o;for(i.font=e.string,o=0;o<n;++o)r=Math.max(i.measureText(s[o]).width,r);return i.font=a,{height:n*e.lineHeight,width:r}},bound:function(i,t,e){return Math.max(i,Math.min(t,e))},arrayDiff:function(i,t){var e=i.slice(),s=[],n,a,r,o;for(n=0,r=t.length;n<r;++n)o=t[n],a=e.indexOf(o),a===-1?s.push([o,1]):e.splice(a,1);for(n=0,r=e.length;n<r;++n)s.push([e[n],-1]);return s},rasterize:function(i){return Math.round(i*Oa)/Oa}};function cs(i,t){var e=t.x,s=t.y;if(e===null)return{x:0,y:-1};if(s===null)return{x:1,y:0};var n=i.x-e,a=i.y-s,r=Math.sqrt(n*n+a*a);return{x:r?n/r:0,y:r?a/r:-1}}function rp(i,t,e,s,n){switch(n){case"center":e=s=0;break;case"bottom":e=0,s=1;break;case"right":e=1,s=0;break;case"left":e=-1,s=0;break;case"top":e=0,s=-1;break;case"start":e=-e,s=-s;break;case"end":break;default:n*=Math.PI/180,e=Math.cos(n),s=Math.sin(n);break}return{x:i,y:t,vx:e,vy:s}}var op=0,Br=1,Nr=2,$r=4,Hr=8;function gi(i,t,e){var s=op;return i<e.left?s|=Br:i>e.right&&(s|=Nr),t<e.top?s|=Hr:t>e.bottom&&(s|=$r),s}function lp(i,t){for(var e=i.x0,s=i.y0,n=i.x1,a=i.y1,r=gi(e,s,t),o=gi(n,a,t),l,c,d;!(!(r|o)||r&o);)l=r||o,l&Hr?(c=e+(n-e)*(t.top-s)/(a-s),d=t.top):l&$r?(c=e+(n-e)*(t.bottom-s)/(a-s),d=t.bottom):l&Nr?(d=s+(a-s)*(t.right-e)/(n-e),c=t.right):l&Br&&(d=s+(a-s)*(t.left-e)/(n-e),c=t.left),l===r?(e=c,s=d,r=gi(e,s,t)):(n=c,a=d,o=gi(n,a,t));return{x0:e,x1:n,y0:s,y1:a}}function mi(i,t){var e=t.anchor,s=i,n,a;return t.clamp&&(s=lp(s,t.area)),e==="start"?(n=s.x0,a=s.y0):e==="end"?(n=s.x1,a=s.y1):(n=(s.x0+s.x1)/2,a=(s.y0+s.y1)/2),rp(n,a,i.vx,i.vy,t.align)}var bi={arc:function(i,t){var e=(i.startAngle+i.endAngle)/2,s=Math.cos(e),n=Math.sin(e),a=i.innerRadius,r=i.outerRadius;return mi({x0:i.x+s*a,y0:i.y+n*a,x1:i.x+s*r,y1:i.y+n*r,vx:s,vy:n},t)},point:function(i,t){var e=cs(i,t.origin),s=e.x*i.options.radius,n=e.y*i.options.radius;return mi({x0:i.x-s,y0:i.y-n,x1:i.x+s,y1:i.y+n,vx:e.x,vy:e.y},t)},bar:function(i,t){var e=cs(i,t.origin),s=i.x,n=i.y,a=0,r=0;return i.horizontal?(s=Math.min(i.x,i.base),a=Math.abs(i.base-i.x)):(n=Math.min(i.y,i.base),r=Math.abs(i.base-i.y)),mi({x0:s,y0:n+r,x1:s+a,y1:n,vx:e.x,vy:e.y},t)},fallback:function(i,t){var e=cs(i,t.origin);return mi({x0:i.x,y0:i.y,x1:i.x+(i.width||0),y1:i.y+(i.height||0),vx:e.x,vy:e.y},t)}},It=Be.rasterize;function cp(i){var t=i.borderWidth||0,e=i.padding,s=i.size.height,n=i.size.width,a=-n/2,r=-s/2;return{frame:{x:a-e.left-t,y:r-e.top-t,w:n+e.width+t*2,h:s+e.height+t*2},text:{x:a,y:r,w:n,h:s}}}function dp(i,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var s=e.getBasePixel();return i.horizontal?{x:s,y:null}:{x:null,y:s}}function up(i){return i instanceof ue?bi.arc:i instanceof Re?bi.point:i instanceof Ve?bi.bar:bi.fallback}function hp(i,t,e,s,n,a){var r=Math.PI/2;if(a){var o=Math.min(a,n/2,s/2),l=t+o,c=e+o,d=t+s-o,u=e+n-o;i.moveTo(t,c),l<d&&c<u?(i.arc(l,c,o,-Math.PI,-r),i.arc(d,c,o,-r,0),i.arc(d,u,o,0,r),i.arc(l,u,o,r,Math.PI)):l<d?(i.moveTo(l,e),i.arc(d,c,o,-r,r),i.arc(l,c,o,r,Math.PI+r)):c<u?(i.arc(l,c,o,-Math.PI,0),i.arc(l,u,o,0,Math.PI)):i.arc(l,c,o,-Math.PI,Math.PI),i.closePath(),i.moveTo(t,e)}else i.rect(t,e,s,n)}function fp(i,t,e){var s=e.backgroundColor,n=e.borderColor,a=e.borderWidth;!s&&(!n||!a)||(i.beginPath(),hp(i,It(t.x)+a/2,It(t.y)+a/2,It(t.w)-a,It(t.h)-a,e.borderRadius),i.closePath(),s&&(i.fillStyle=s,i.fill()),n&&a&&(i.strokeStyle=n,i.lineWidth=a,i.lineJoin="miter",i.stroke()))}function pp(i,t,e){var s=e.lineHeight,n=i.w,a=i.x,r=i.y+s/2;return t==="center"?a+=n/2:(t==="end"||t==="right")&&(a+=n),{h:s,w:n,x:a,y:r}}function gp(i,t,e){var s=i.shadowBlur,n=e.stroked,a=It(e.x),r=It(e.y),o=It(e.w);n&&i.strokeText(t,a,r,o),e.filled&&(s&&n&&(i.shadowBlur=0),i.fillText(t,a,r,o),s&&n&&(i.shadowBlur=s))}function mp(i,t,e,s){var n=s.textAlign,a=s.color,r=!!a,o=s.font,l=t.length,c=s.textStrokeColor,d=s.textStrokeWidth,u=c&&d,h;if(!(!l||!r&&!u))for(e=pp(e,n,o),i.font=o.string,i.textAlign=n,i.textBaseline="middle",i.shadowBlur=s.textShadowBlur,i.shadowColor=s.textShadowColor,r&&(i.fillStyle=a),u&&(i.lineJoin="round",i.lineWidth=d,i.strokeStyle=c),h=0,l=t.length;h<l;++h)gp(i,t[h],{stroked:u,filled:r,w:e.w,x:e.x,y:e.y+e.h*h})}var jr=function(i,t,e,s){var n=this;n._config=i,n._index=s,n._model=null,n._rects=null,n._ctx=t,n._el=e};Mt(jr.prototype,{_modelize:function(i,t,e,s){var n=this,a=n._index,r=J(W([e.font,{}],s,a)),o=W([e.color,U.color],s,a);return{align:W([e.align,"center"],s,a),anchor:W([e.anchor,"center"],s,a),area:s.chart.chartArea,backgroundColor:W([e.backgroundColor,null],s,a),borderColor:W([e.borderColor,null],s,a),borderRadius:W([e.borderRadius,0],s,a),borderWidth:W([e.borderWidth,0],s,a),clamp:W([e.clamp,!1],s,a),clip:W([e.clip,!1],s,a),color:o,display:i,font:r,lines:t,offset:W([e.offset,4],s,a),opacity:W([e.opacity,1],s,a),origin:dp(n._el,s),padding:tt(W([e.padding,4],s,a)),positioner:up(n._el),rotation:W([e.rotation,0],s,a)*(Math.PI/180),size:Be.textSize(n._ctx,t,r),textAlign:W([e.textAlign,"start"],s,a),textShadowBlur:W([e.textShadowBlur,0],s,a),textShadowColor:W([e.textShadowColor,o],s,a),textStrokeColor:W([e.textStrokeColor,o],s,a),textStrokeWidth:W([e.textStrokeWidth,0],s,a)}},update:function(i){var t=this,e=null,s=null,n=t._index,a=t._config,r,o,l,c=W([a.display,!0],i,n);c&&(r=i.dataset.data[n],o=F(H(a.formatter,[r,i]),r),l=z(o)?[]:Be.toTextLines(o),l.length&&(e=t._modelize(c,l,a,i),s=cp(e))),t._model=e,t._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(i,t){var e=this,s=i.ctx,n=e._model,a=e._rects,r;this.visible()&&(s.save(),n.clip&&(r=n.area,s.beginPath(),s.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),s.clip()),s.globalAlpha=Be.bound(0,n.opacity,1),s.translate(It(t.x),It(t.y)),s.rotate(n.rotation),fp(s,a.frame,n),mp(s,n.lines,a.text,n),s.restore())}});var bp=Number.MIN_SAFE_INTEGER||-9007199254740991,vp=Number.MAX_SAFE_INTEGER||9007199254740991;function Me(i,t,e){var s=Math.cos(e),n=Math.sin(e),a=t.x,r=t.y;return{x:a+s*(i.x-a)-n*(i.y-r),y:r+n*(i.x-a)+s*(i.y-r)}}function Da(i,t){var e=vp,s=bp,n=t.origin,a,r,o,l,c;for(a=0;a<i.length;++a)r=i[a],o=r.x-n.x,l=r.y-n.y,c=t.vx*o+t.vy*l,e=Math.min(e,c),s=Math.max(s,c);return{min:e,max:s}}function vi(i,t){var e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);return{vx:(t.x-i.x)/n,vy:(t.y-i.y)/n,origin:i,ln:n}}var qr=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};Mt(qr.prototype,{center:function(){var i=this._rect;return{x:i.x+i.w/2,y:i.y+i.h/2}},update:function(i,t,e){this._rotation=e,this._rect={x:t.x+i.x,y:t.y+i.y,w:t.w,h:t.h}},contains:function(i){var t=this,e=1,s=t._rect;return i=Me(i,t.center(),-t._rotation),!(i.x<s.x-e||i.y<s.y-e||i.x>s.x+s.w+e*2||i.y>s.y+s.h+e*2)},intersects:function(i){var t=this._points(),e=i._points(),s=[vi(t[0],t[1]),vi(t[0],t[3])],n,a,r;for(this._rotation!==i._rotation&&s.push(vi(e[0],e[1]),vi(e[0],e[3])),n=0;n<s.length;++n)if(a=Da(t,s[n]),r=Da(e,s[n]),a.max<r.min||r.max<a.min)return!1;return!0},_points:function(){var i=this,t=i._rect,e=i._rotation,s=i.center();return[Me({x:t.x,y:t.y},s,e),Me({x:t.x+t.w,y:t.y},s,e),Me({x:t.x+t.w,y:t.y+t.h},s,e),Me({x:t.x,y:t.y+t.h},s,e)]}});function Wr(i,t,e){var s=t.positioner(i,t),n=s.vx,a=s.vy;if(!n&&!a)return{x:s.x,y:s.y};var r=e.w,o=e.h,l=t.rotation,c=Math.abs(r/2*Math.cos(l))+Math.abs(o/2*Math.sin(l)),d=Math.abs(r/2*Math.sin(l))+Math.abs(o/2*Math.cos(l)),u=1/Math.max(Math.abs(n),Math.abs(a));return c*=n*u,d*=a*u,c+=t.offset*n,d+=t.offset*a,{x:s.x+c,y:s.y+d}}function xp(i,t){var e,s,n,a;for(e=i.length-1;e>=0;--e)for(n=i[e].$layout,s=e-1;s>=0&&n._visible;--s)a=i[s].$layout,a._visible&&n._box.intersects(a._box)&&t(n,a);return i}function yp(i){var t,e,s,n,a,r,o;for(t=0,e=i.length;t<e;++t)s=i[t],n=s.$layout,n._visible&&(o=new Proxy(s._el,{get:(l,c)=>l.getProps([c],!0)[c]}),a=s.geometry(),r=Wr(o,s.model(),a),n._box.update(r,a,s.rotation()));return xp(i,function(l,c){var d=l._hidable,u=c._hidable;d&&u||u?c._visible=!1:d&&(l._visible=!1)})}var Ne={prepare:function(i){var t=[],e,s,n,a,r;for(e=0,n=i.length;e<n;++e)for(s=0,a=i[e].length;s<a;++s)r=i[e][s],t.push(r),r.$layout={_box:new qr,_hidable:!1,_visible:!0,_set:e,_idx:r._index};return t.sort(function(o,l){var c=o.$layout,d=l.$layout;return c._idx===d._idx?d._set-c._set:d._idx-c._idx}),this.update(t),t},update:function(i){var t=!1,e,s,n,a,r;for(e=0,s=i.length;e<s;++e)n=i[e],a=n.model(),r=n.$layout,r._hidable=a&&a.display==="auto",r._visible=n.visible(),t|=r._hidable;t&&yp(i)},lookup:function(i,t){var e,s;for(e=i.length-1;e>=0;--e)if(s=i[e].$layout,s&&s._visible&&s._box.contains(t))return i[e];return null},draw:function(i,t){var e,s,n,a,r,o;for(e=0,s=t.length;e<s;++e)n=t[e],a=n.$layout,a._visible&&(r=n.geometry(),o=Wr(n._el,n.model(),r),a._box.update(o,r,n.rotation()),n.draw(i,o))}},_p=function(i){if(z(i))return null;var t=i,e,s,n;if(R(i))if(!z(i.label))t=i.label;else if(!z(i.r))t=i.r;else for(t="",e=Object.keys(i),n=0,s=e.length;n<s;++n)t+=(n!==0?", ":"")+e[n]+": "+i[e[n]];return""+t},wp={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:_p,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},at="$datalabels",Gr="$default";function Sp(i,t){var e=i.datalabels,s={},n=[],a,r;return e===!1?null:(e===!0&&(e={}),t=Mt({},[t,e]),a=t.labels||{},r=Object.keys(a),delete t.labels,r.length?r.forEach(function(o){a[o]&&n.push(Mt({},[t,a[o],{_key:o}]))}):n.push(t),s=n.reduce(function(o,l){return $(l.listeners||{},function(c,d){o[d]=o[d]||{},o[d][l._key||Gr]=c}),delete l.listeners,o},{}),{labels:n,listeners:s})}function Ps(i,t,e,s){if(t){var n=e.$context,a=e.$groups,r;t[a._set]&&(r=t[a._set][a._key],r&&H(r,[n,s])===!0&&(i[at]._dirty=!0,e.update(n)))}}function Mp(i,t,e,s,n){var a,r;!e&&!s||(e?s?e!==s&&(r=a=!0):r=!0:a=!0,r&&Ps(i,t.leave,e,n),a&&Ps(i,t.enter,s,n))}function Tp(i,t){var e=i[at],s=e._listeners,n,a;if(!(!s.enter&&!s.leave)){if(t.type==="mousemove")a=Ne.lookup(e._labels,t);else if(t.type!=="mouseout")return;n=e._hovered,e._hovered=a,Mp(i,s,n,a,t)}}function kp(i,t){var e=i[at],s=e._listeners.click,n=s&&Ne.lookup(e._labels,t);n&&Ps(i,s,n,t)}var Yr={id:"datalabels",defaults:wp,beforeInit:function(i){i[at]={_actives:[]}},beforeUpdate:function(i){var t=i[at];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(i,t,e){var s=t.index,n=i[at],a=n._datasets[s]=[],r=i.isDatasetVisible(s),o=i.data.datasets[s],l=Sp(o,e),c=t.meta.data||[],d=i.ctx,u,h,f,g,p,v,x,m;for(d.save(),u=0,f=c.length;u<f;++u)if(x=c[u],x[at]=[],r&&x&&i.getDataVisibility(u)&&!x.skip)for(h=0,g=l.labels.length;h<g;++h)p=l.labels[h],v=p._key,m=new jr(p,d,x,u),m.$groups={_set:s,_key:v||Gr},m.$context={active:!1,chart:i,dataIndex:u,dataset:o,datasetIndex:s},m.update(m.$context),x[at].push(m),a.push(m);d.restore(),Mt(n._listeners,l.listeners,{merger:function(b,y,_){y[b]=y[b]||{},y[b][t.index]=_[b],n._listened=!0}})},afterUpdate:function(i){i[at]._labels=Ne.prepare(i[at]._datasets)},afterDatasetsDraw:function(i){Ne.draw(i,i[at]._labels)},beforeEvent:function(i,t){if(i[at]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":Tp(i,e);break;case"click":kp(i,e);break}}},afterEvent:function(i){var t=i[at],e=t._actives,s=t._actives=i.getActiveElements(),n=Be.arrayDiff(e,s),a,r,o,l,c,d,u;for(a=0,r=n.length;a<r;++a)if(c=n[a],c[1])for(u=c[0].element[at]||[],o=0,l=u.length;o<l;++o)d=u[o],d.$context.active=c[1]===1,d.update(d.$context);(t._dirty||n.length)&&(Ne.update(t._labels),i.render()),delete t._dirty}};class Js{constructor(){L(this,"getValues",t=>(t.forEach(e=>this.values.push(getComputedStyle(document.documentElement,null).getPropertyValue(e))),this.values));this.values=[]}}const Cp=new Js,Te=Cp.getValues(["--clr-1a","--clr-1b","--clr-2a","--clr-2b","--clr-2c"]),Ep={id:"labelCenter",beforeDatasetsDraw(i,t,e){const{ctx:s,data:n}=i;s.save();const a=i.getDatasetMeta(0).data[0].x,r=i.getDatasetMeta(0).data[0].y;if(i._active.length>0){const o=i.config.data.datasets[i._active[0].datasetIndex].data[i._active[0].index],l=i.config.data.datasets[i._active[0].datasetIndex].backgroundColor[i._active[0].index];s.font="600 2em Montserrat",s.fillStyle=l,s.textAlign="center",s.textBaseline="middle",s.fillText(`${o}`,a,r)}s.restore()}},Lp={type:"doughnut",plugins:[Yr,Ep],options:{plugins:{tooltip:{enabled:!1},legend:{position:"left"},colors:{enabled:!0},datalabels:{backgroundColor:"#000",borderRadius:3,font:{size:14},formatter:(i,t)=>{const s=t.chart.data.datasets[0].data.reduce((a,r)=>a+r,0);return(i/s*100).toFixed(2)+"%"},color:"#fff"}},maintainAspectRatio:!1,cutout:70,layout:{padding:{top:12,bottom:12}}},data:{labels:["Data-1","Data-2","Data-3","Data-4","Data-5"],datasets:[{label:"Amount",data:[35.91,42.36,28.07,24.39,21.28],backgroundColor:[`hsl(${Te[0]})`,`hsl(${Te[1]})`,`hsl(${Te[2]})`,`hsl(${Te[3]})`,`hsl(${Te[4]})`],hoverOffset:50}]}};document.querySelectorAll(".chart-doughnut").forEach(i=>new ht(i,Lp));const Pp=async i=>{const e=await(await fetch(i)).json();return new Ip(e,Dp).getValues()},Ap=i=>{const t=[];return i.forEach((e,s)=>s<i[s].length&&t.push(i.reduce((n,a)=>[...n,a[s]],[]))),t},Op=new Js,ce=Op.getValues(["--clr-1a","--clr-1b","--clr-2a","--clr-2b","--clr-2c"]),Dp={basic:[`hsl(${ce[0]}, 0.6)`,`hsl(${ce[1]}, 0.6)`,`hsl(${ce[3]}, 0.6)`],hover:[`hsl(${ce[0]}, 1)`,`hsl(${ce[1]}, 1)`,`hsl(${ce[3]}, 1)`]};class Ip{constructor(t,e){L(this,"getLabels",()=>(this.data.forEach(t=>this.labels.push(Object.keys(t))),this.labels));L(this,"getDatasets",()=>(this.data.forEach(t=>this.datasets.push(Ap(Object.values(t)))),this.datasets));L(this,"getColors",()=>{const t=[],e=[];return this.datasets.forEach(s=>{s.forEach((n,a)=>{const r=[],o=[];r.push(this.chartColors.basic[a]??this.chartColors.basic[0]),o.push(this.chartColors.hover[a]??this.chartColors.hover[0]),t.push(r),e.push(o)})}),{basic:t,hover:e}});L(this,"getValues",()=>({labels:this.getLabels(),data:this.getDatasets(),colors:this.getColors()}));this.data=t,this.chartColors=e,this.labels=[],this.datasets=[]}}const Fp=async()=>{const i=await Pp("chart-data.json"),e={type:"bar",plugins:[Yr,{id:"labelsOnTop",afterDatasetsDraw(s,n,a){const{ctx:r,scales:{x:o,y:l}}=s;s.data.datasets[0].data.forEach((c,d)=>{const u=[];s.data.datasets.forEach(f=>u.push(f.data[d]));const h=u.reduce((f,g)=>f+g,0).toFixed(2);r.font="bold 0.85rem sans-serif",r.fillStyle=s.data.datasets[2].borderColor[d],r.textAlign="center",r.fillText(h,o.getPixelForValue(d),s.getDatasetMeta(2).data[d].y-10)})}}],data:{labels:i.labels[0],datasets:[{label:"data-1",data:i.data[0][0],backgroundColor:i.colors.basic[0],hoverBackgroundColor:i.colors.hover[0],borderColor:i.colors.hover[0],borderWidth:2,datalabels:{color:i.colors.hover[1]}},{label:"data-2",data:i.data[0][1],backgroundColor:i.colors.basic[1],hoverBackgroundColor:i.colors.hover[1],borderColor:i.colors.hover[1],borderWidth:2,datalabels:{color:i.colors.hover[2]}},{label:"data-3",data:i.data[0][2],backgroundColor:i.colors.basic[2],hoverBackgroundColor:i.colors.hover[2],borderColor:i.colors.hover[2],borderWidth:2,datalabels:{color:i.colors.hover[0]}}]},options:{plugins:{tooltip:{enabled:!1}},maintainAspectRatio:!1,scales:{x:{stacked:!0},y:{beginAtZero:!0,stacked:!0,grace:10}}}};document.querySelectorAll(".chart-bar").forEach(s=>new ht(s,e))};Fp();const zp=new Ha(()=>{ht.defaults.font.size=8},()=>{ht.defaults.font.size=13});zp.toggleStateOn(576);const Rp=new Js,de=Rp.getValues(["--clr-1a","--clr-1b","--clr-2a","--clr-2b","--clr-2c"]),Vp=["January","February","March","April","May","June","July"],Bp={labels:Vp,datasets:[{label:"Data-1",data:[22.95,28.41,61.34,33.66,36.89,24.16,31.74],borderColor:`hsl(${de[0]}, 1)`,fill:{target:!0,above:`hsl(${de[0]}, 0.1)`},tension:.25,pointStyle:"circle",backgroundColor:`hsl(${de[1]}, 1)`,pointRadius:5,pointHoverRadius:15},{label:"Data-2",data:[17.45,34.91,52.36,31.07,23.39,43.28,25.48],borderColor:`hsl(${de[3]}, 1)`,borderDash:[6,2],fill:{target:!0,above:`hsl(${de[3]}, 0.1)`},tension:.25,pointStyle:"circle",backgroundColor:`hsl(${de[2]}, 1)`,pointRadius:5,pointHoverRadius:15}]},Np={maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}},$p={type:"line",data:Bp,options:Np};document.querySelectorAll(".chart-line").forEach(i=>new ht(i,$p));const Hp=()=>{const i=document.querySelectorAll(".video");for(let t=0;t<i.length;t++)jp(i[t])},jp=i=>{const t=i.querySelector(".video__link"),e=i.querySelector(".video__media"),s=i.querySelector(".video__button"),n=qp(e);i.addEventListener("click",()=>{const a=Wp(n);t.remove(),s.remove(),i.appendChild(a)}),i.classList.add("video--enabled")},qp=i=>{const t=/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;return i.src.match(t)[1]},Wp=i=>{const t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",Gp(i)),t.classList.add("video__media"),t},Gp=i=>{const t="?rel=0&showinfo=0&autoplay=1";return"https://www.youtube.com/embed/"+i+t};Hp();var Yp=Object.defineProperty,Xp=(i,t,e)=>t in i?Yp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,N=(i,t,e)=>(Xp(i,typeof t!="symbol"?t+"":t,e),e);const Up=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Kp=/^-?[0-9]\d*$/,Zp=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,Jp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,Qp=i=>{let t=i;return typeof i=="string"&&(t=i.trim()),!t},tg=i=>Up.test(i),eg=(i,t)=>i.length>t,ig=(i,t)=>i.length<t,sg=i=>typeof i!="string"?!1:!isNaN(+i)&&!isNaN(parseFloat(i)),ng=i=>Kp.test(i),ag=i=>Zp.test(i),rg=i=>Jp.test(i),og=(i,t)=>i>t,lg=(i,t)=>i<t,kt=i=>typeof i!="string"||i==="";var V=(i=>(i.Required="required",i.Email="email",i.MinLength="minLength",i.MaxLength="maxLength",i.Password="password",i.Number="number",i.Integer="integer",i.MaxNumber="maxNumber",i.MinNumber="minNumber",i.StrongPassword="strongPassword",i.CustomRegexp="customRegexp",i.MinFilesCount="minFilesCount",i.MaxFilesCount="maxFilesCount",i.Files="files",i))(V||{}),As=(i=>(i.Required="required",i))(As||{}),Xr=(i=>(i.Label="label",i.LabelArrow="labelArrow",i))(Xr||{});const Ia=[{key:V.Required,dict:{en:"The field is required"}},{key:V.Email,dict:{en:"Email has invalid format"}},{key:V.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:V.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:V.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:V.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:V.Number,dict:{en:"Value should be a number"}},{key:V.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:V.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:V.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:V.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:V.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],cg="Value is incorrect",ke=i=>typeof i=="object"&&i!==null&&"then"in i&&typeof i.then=="function",dg=i=>{let t=i;const e=[];for(;t;)e.unshift(t),t=t.parentNode;return e},ug=(i,t)=>{const e=[...t].reverse();for(let s=0,n=e.length;s<n;++s){const a=e[s];for(const r in i){const o=i[r];if(o.groupElem===a)return[r,o]}}return null},yt=i=>Array.isArray(i)?i.filter(t=>t.length>0):typeof i=="string"&&i.trim()?[...i.split(" ").filter(t=>t.length>0)]:[],Ce=i=>i instanceof Element||i instanceof HTMLDocument,hg=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",xi=5,ds={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class fg{constructor(t,e,s){N(this,"form",null),N(this,"fields",{}),N(this,"groupFields",{}),N(this,"errors",{}),N(this,"isValid",!1),N(this,"isSubmitted",!1),N(this,"globalConfig",ds),N(this,"errorLabels",{}),N(this,"successLabels",{}),N(this,"eventListeners",[]),N(this,"dictLocale",Ia),N(this,"currentLocale","en"),N(this,"customStyleTags",{}),N(this,"onSuccessCallback"),N(this,"onFailCallback"),N(this,"onValidateCallback"),N(this,"tooltips",[]),N(this,"lastScrollPosition"),N(this,"isScrollTick"),N(this,"fieldIds",new Map),N(this,"getKeyByFieldSelector",n=>this.fieldIds.get(n)),N(this,"getFieldSelectorByKey",n=>{for(const[a,r]of this.fieldIds)if(n===r)return a}),N(this,"getCompatibleFields",()=>{const n={};return Object.keys(this.fields).forEach(a=>{let r=a;const o=this.getFieldSelectorByKey(a);typeof o=="string"&&(r=o),n[r]={...this.fields[a]}}),n}),N(this,"setKeyByFieldSelector",n=>{if(this.fieldIds.has(n))return this.fieldIds.get(n);const a=String(this.fieldIds.size+1);return this.fieldIds.set(n,a),a}),N(this,"refreshAllTooltips",()=>{this.tooltips.forEach(n=>{n.refresh()})}),N(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),N(this,"formSubmitHandler",n=>{n.preventDefault(),this.isSubmitted=!0,this.validateHandler(n)}),N(this,"handleFieldChange",n=>{let a;for(const r in this.fields)if(this.fields[r].elem===n){a=r;break}a&&(this.fields[a].touched=!0,this.validateField(a,!0))}),N(this,"handleGroupChange",n=>{let a;for(const r in this.groupFields)if(this.groupFields[r].elems.find(l=>l===n)){a=r;break}a&&(this.groupFields[a].touched=!0,this.validateGroup(a,!0))}),N(this,"handlerChange",n=>{n.target&&(this.handleFieldChange(n.target),this.handleGroupChange(n.target),this.renderErrors())}),this.initialize(t,e,s)}initialize(t,e,s){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=ds,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof t=="string"){const n=document.querySelector(t);if(!n)throw Error(`Form with ${t} selector not found! Please check the form selector`);this.setForm(n)}else if(t instanceof HTMLFormElement)this.setForm(t);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...ds,...e},s&&(this.dictLocale=[...s,...Ia]),this.isTooltip()){const n=document.createElement("style");n.textContent=hg,this.customStyleTags[Xr.Label]=document.head.appendChild(n),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(t,e,s){var n;const a=s??t;let r=(n=this.dictLocale.find(o=>o.key===a))==null?void 0:n.dict[this.currentLocale];if(r||s&&(r=s),r&&e!==void 0)switch(t){case V.MaxLength:case V.MinLength:case V.MaxNumber:case V.MinNumber:case V.MinFilesCount:case V.MaxFilesCount:r=r.replace(":value",String(e))}return r||s||cg}getFieldErrorMessage(t,e){const s=typeof t.errorMessage=="function"?t.errorMessage(this.getElemValue(e),this.fields):t.errorMessage;return this.getLocalisedString(t.rule,t.value,s)}getFieldSuccessMessage(t,e){const s=typeof t=="function"?t(this.getElemValue(e),this.fields):t;return this.getLocalisedString(void 0,void 0,s)}getGroupErrorMessage(t){return this.getLocalisedString(t.rule,void 0,t.errorMessage)}getGroupSuccessMessage(t){if(t.successMessage)return this.getLocalisedString(void 0,void 0,t.successMessage)}setFieldInvalid(t,e){this.fields[t].isValid=!1,this.fields[t].errorMessage=this.getFieldErrorMessage(e,this.fields[t].elem)}setFieldValid(t,e){this.fields[t].isValid=!0,e!==void 0&&(this.fields[t].successMessage=this.getFieldSuccessMessage(e,this.fields[t].elem))}setGroupInvalid(t,e){this.groupFields[t].isValid=!1,this.groupFields[t].errorMessage=this.getGroupErrorMessage(e)}setGroupValid(t,e){this.groupFields[t].isValid=!0,this.groupFields[t].successMessage=this.getGroupSuccessMessage(e)}getElemValue(t){switch(t.type){case"checkbox":return t.checked;case"file":return t.files;default:return t.value}}validateGroupRule(t,e,s){switch(s.rule){case As.Required:e.every(n=>!n.checked)?this.setGroupInvalid(t,s):this.setGroupValid(t,s)}}validateFieldRule(t,e,s,n=!1){const a=s.value,r=this.getElemValue(e);if(s.plugin){s.plugin(r,this.getCompatibleFields())||this.setFieldInvalid(t,s);return}switch(s.rule){case V.Required:{Qp(r)&&this.setFieldInvalid(t,s);break}case V.Email:{if(kt(r))break;tg(r)||this.setFieldInvalid(t,s);break}case V.MaxLength:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;eg(r,a)&&this.setFieldInvalid(t,s);break}case V.MinLength:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;ig(r,a)&&this.setFieldInvalid(t,s);break}case V.Password:{if(kt(r))break;ag(r)||this.setFieldInvalid(t,s);break}case V.StrongPassword:{if(kt(r))break;rg(r)||this.setFieldInvalid(t,s);break}case V.Number:{if(kt(r))break;sg(r)||this.setFieldInvalid(t,s);break}case V.Integer:{if(kt(r))break;ng(r)||this.setFieldInvalid(t,s);break}case V.MaxNumber:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;const o=+r;(Number.isNaN(o)||og(o,a))&&this.setFieldInvalid(t,s);break}case V.MinNumber:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;const o=+r;(Number.isNaN(o)||lg(o,a))&&this.setFieldInvalid(t,s);break}case V.CustomRegexp:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);return}let o;try{o=new RegExp(a)}catch{console.error(`Value for ${s.rule} rule for [${t}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(t,s);break}const l=String(r);l!==""&&!o.test(l)&&this.setFieldInvalid(t,s);break}case V.MinFilesCount:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(Number.isFinite(r==null?void 0:r.length)&&r.length<a){this.setFieldInvalid(t,s);break}break}case V.MaxFilesCount:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(Number.isFinite(r==null?void 0:r.length)&&r.length>a){this.setFieldInvalid(t,s);break}break}case V.Files:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);return}if(typeof a!="object"){console.error(`Value for ${s.rule} rule for [${t}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(t,s);return}const o=a.files;if(typeof o!="object"){console.error(`Value for ${s.rule} rule for [${t}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(t,s);return}const l=(c,d)=>{const u=Number.isFinite(d.minSize)&&c.size<d.minSize,h=Number.isFinite(d.maxSize)&&c.size>d.maxSize,f=Array.isArray(d.names)&&!d.names.includes(c.name),g=Array.isArray(d.extensions)&&!d.extensions.includes(c.name.split(".")[c.name.split(".").length-1]),p=Array.isArray(d.types)&&!d.types.includes(c.type);return u||h||f||g||p};if(typeof r=="object"&&r!==null)for(let c=0,d=r.length;c<d;++c){const u=r.item(c);if(!u){this.setFieldInvalid(t,s);break}if(l(u,o)){this.setFieldInvalid(t,s);break}}break}default:{if(typeof s.validator!="function"){console.error(`Validator for custom rule for [${t}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(t,s);return}const o=s.validator(r,this.getCompatibleFields());if(typeof o!="boolean"&&typeof o!="function"&&console.error(`Validator return value for [${t}] field should be boolean or function. It will be cast to boolean.`),typeof o=="function")if(n)this.fields[t].asyncCheckPending=!0;else{this.fields[t].asyncCheckPending=!1;const l=o();if(!ke(l)){console.error(`Validator function for custom rule for [${t}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(t,s);return}return l.then(c=>{c||this.setFieldInvalid(t,s)}).catch(()=>{this.setFieldInvalid(t,s)})}o||this.setFieldInvalid(t,s)}}}isFormValid(){let t=!0;for(let e=0,s=Object.values(this.fields).length;e<s;++e){const n=Object.values(this.fields)[e];if(n.isValid===void 0){t=void 0;break}if(n.isValid===!1){t=!1;break}}for(let e=0,s=Object.values(this.groupFields).length;e<s;++e){const n=Object.values(this.groupFields)[e];if(n.isValid===void 0){t=void 0;break}if(n.isValid===!1){t=!1;break}}return t}validateField(t,e=!1){var s;const n=this.fields[t];n.isValid=!0;const a=[];return[...n.rules].reverse().forEach(r=>{const o=this.validateFieldRule(t,n.elem,r,e);ke(o)&&a.push(o)}),n.isValid&&this.setFieldValid(t,(s=n.config)==null?void 0:s.successMessage),Promise.allSettled(a).finally(()=>{var r;e&&((r=this.onValidateCallback)==null||r.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(t){if(typeof t!="string"&&!Ce(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);return!e||!this.fields[e]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(s=>{this.validateField(e,!0).finally(()=>{this.clearFieldStyle(e),this.clearFieldLabel(e),this.renderFieldError(e,!0),s(!!this.fields[e].isValid)})})}revalidateGroup(t){if(typeof t!="string"&&!Ce(t))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);return!e||!this.groupFields[e]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(s=>{this.validateGroup(e).finally(()=>{this.clearFieldLabel(e),this.renderGroupError(e,!0),s(!!this.groupFields[e].isValid)})})}validateGroup(t,e=!1){const s=this.groupFields[t],n=[];return[...s.rules].reverse().forEach(a=>{const r=this.validateGroupRule(t,s.elems,a);ke(r)&&n.push(r)}),Promise.allSettled(n).finally(()=>{var a;e&&((a=this.onValidateCallback)==null||a.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const t in this.fields){const e=this.fields[t];if(!e.isValid){setTimeout(()=>e.elem.focus(),0);break}}}afterSubmitValidation(t=!1){this.renderErrors(t),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(t=!1){return new Promise(e=>{const s=[];Object.keys(this.fields).forEach(n=>{const a=this.validateField(n);ke(a)&&s.push(a)}),Object.keys(this.groupFields).forEach(n=>{const a=this.validateGroup(n);ke(a)&&s.push(a)}),Promise.allSettled(s).then(()=>{var n;this.afterSubmitValidation(t),(n=this.onValidateCallback)==null||n.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),e(!!s.length)})})}revalidate(){return new Promise(t=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),t(this.isValid)})})}validateHandler(t,e=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(e).finally(()=>{var s,n,a;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?((s=this.onSuccessCallback)==null||s.call(this,t),this.globalConfig.submitFormAutomatically&&((n=t==null?void 0:t.currentTarget)==null||n.submit())):(a=this.onFailCallback)==null||a.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(t){this.form=t,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(t,e,s){e.addEventListener(t,s),this.eventListeners.push({type:t,elem:e,func:s})}removeListener(t,e,s){e.removeEventListener(t,s),this.eventListeners=this.eventListeners.filter(n=>n.type!==t||n.elem!==e)}addField(t,e,s){if(typeof t!="string"&&!Ce(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let n;if(typeof t=="string"?n=this.form.querySelector(t):n=t,!n)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(e)||!e.length)throw Error("Rules argument should be an array and should contain at least 1 element.");e.forEach(r=>{if(!("rule"in r||"validator"in r||"plugin"in r))throw Error("Rules argument must contain at least one rule or validator property.");if(!r.validator&&!r.plugin&&(!r.rule||!Object.values(V).includes(r.rule)))throw Error(`Rule should be one of these types: ${Object.values(V).join(", ")}. Provided value: ${r.rule}`)});const a=this.setKeyByFieldSelector(t);return this.fields[a]={elem:n,rules:e,isValid:void 0,touched:!1,config:s},this.setListeners(n),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(a),this}removeField(t){if(typeof t!="string"&&!Ce(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);if(!e||!this.fields[e])return console.error("Field not found. Check the field selector."),this;const s=this.getListenerType(this.fields[e].elem.type);return this.removeListener(s,this.fields[e].elem,this.handlerChange),this.clearErrors(),delete this.fields[e],this}removeGroup(t){if(typeof t!="string")throw Error("Group selector is not valid. Please specify a string selector.");const e=this.getKeyByFieldSelector(t);return!e||!this.groupFields[e]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[e].elems.forEach(s=>{const n=this.getListenerType(s.type);this.removeListener(n,s,this.handlerChange)}),this.clearErrors(),delete this.groupFields[e],this)}addRequiredGroup(t,e,s,n){if(typeof t!="string"&&!Ce(t))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let a;if(typeof t=="string"?a=this.form.querySelector(t):a=t,!a)throw Error("Group selector not found! Please check the group selector.");const r=a.querySelectorAll("input"),o=Array.from(r).filter(c=>{const d=ug(this.groupFields,dg(c));return d?d[1].elems.find(u=>u!==c):!0}),l=this.setKeyByFieldSelector(t);return this.groupFields[l]={rules:[{rule:As.Required,errorMessage:e,successMessage:n}],groupElem:a,elems:o,touched:!1,isValid:void 0,config:s},r.forEach(c=>{this.setListeners(c)}),this}getListenerType(t){switch(t){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(t){const e=this.getListenerType(t.type);this.removeListener(e,t,this.handlerChange),this.addListener(e,t,this.handlerChange)}clearFieldLabel(t){var e,s;(e=this.errorLabels[t])==null||e.remove(),(s=this.successLabels[t])==null||s.remove()}clearFieldStyle(t){var e,s,n,a;const r=this.fields[t],o=((e=r.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach(c=>{r.elem.style[c]=""});const l=((s=r.config)==null?void 0:s.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(l).forEach(c=>{r.elem.style[c]=""}),r.elem.classList.remove(...yt(((n=r.config)==null?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...yt(((a=r.config)==null?void 0:a.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var t,e;Object.keys(this.errorLabels).forEach(s=>this.errorLabels[s].remove()),Object.keys(this.successLabels).forEach(s=>this.successLabels[s].remove());for(const s in this.fields)this.clearFieldStyle(s);for(const s in this.groupFields){const n=this.groupFields[s],a=((t=n.config)==null?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(o=>{n.elems.forEach(l=>{var c;l.style[o]="",l.classList.remove(...yt(((c=n.config)==null?void 0:c.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const r=((e=n.config)==null?void 0:e.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(r).forEach(o=>{n.elems.forEach(l=>{var c;l.style[o]="",l.classList.remove(...yt(((c=n.config)==null?void 0:c.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const t=this.form.querySelectorAll("input, textarea, button, select");for(let e=0,s=t.length;e<s;++e)t[e].setAttribute("data-just-validate-fallback-disabled",t[e].disabled?"true":"false"),t[e].setAttribute("disabled","disabled"),t[e].style.pointerEvents="none",t[e].style.webkitFilter="grayscale(100%)",t[e].style.filter="grayscale(100%)"}unlockForm(){const t=this.form.querySelectorAll("input, textarea, button, select");for(let e=0,s=t.length;e<s;++e)t[e].getAttribute("data-just-validate-fallback-disabled")!=="true"&&t[e].removeAttribute("disabled"),t[e].style.pointerEvents="",t[e].style.webkitFilter="",t[e].style.filter=""}renderTooltip(t,e,s){var n;const{top:a,left:r,width:o,height:l}=t.getBoundingClientRect(),c=e.getBoundingClientRect(),d=s||((n=this.globalConfig.tooltip)==null?void 0:n.position);switch(d){case"left":{e.style.top=`${a+l/2-c.height/2}px`,e.style.left=`${r-c.width-xi}px`;break}case"top":{e.style.top=`${a-c.height-xi}px`,e.style.left=`${r+o/2-c.width/2}px`;break}case"right":{e.style.top=`${a+l/2-c.height/2}px`,e.style.left=`${r+o+xi}px`;break}case"bottom":{e.style.top=`${a+l+xi}px`,e.style.left=`${r+o/2-c.width/2}px`;break}}return e.dataset.direction=d,{refresh:()=>{this.renderTooltip(t,e,s)}}}createErrorLabelElem(t,e,s){const n=document.createElement("div");n.innerHTML=e;const a=this.isTooltip()?s==null?void 0:s.errorLabelStyle:(s==null?void 0:s.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(n.style,a),n.classList.add(...yt((s==null?void 0:s.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(n.dataset.tooltip="true"),this.globalConfig.testingMode&&(n.dataset.testId=`error-label-${t}`),this.errorLabels[t]=n,n}createSuccessLabelElem(t,e,s){if(e===void 0)return null;const n=document.createElement("div");n.innerHTML=e;const a=(s==null?void 0:s.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(n.style,a),n.classList.add(...yt((s==null?void 0:s.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(n.dataset.testId=`success-label-${t}`),this.successLabels[t]=n,n}renderErrorsContainer(t,e){const s=e||this.globalConfig.errorsContainer;if(typeof s=="string"){const n=this.form.querySelector(s);if(n)return n.appendChild(t),!0;console.error(`Error container with ${s} selector not found. Errors will be rendered as usual`)}return s instanceof Element?(s.appendChild(t),!0):(s!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(t,e,s,n){!n&&this.renderErrorsContainer(e,s)||t.appendChild(e)}renderFieldLabel(t,e,s,n){var a,r,o,l,c,d,u;if(!(!n&&this.renderErrorsContainer(e,s)))if(t.type==="checkbox"||t.type==="radio"){const h=document.querySelector(`label[for="${t.getAttribute("id")}"]`);((r=(a=t.parentElement)==null?void 0:a.tagName)==null?void 0:r.toLowerCase())==="label"?(l=(o=t.parentElement)==null?void 0:o.parentElement)==null||l.appendChild(e):h?(c=h.parentElement)==null||c.appendChild(e):(d=t.parentElement)==null||d.appendChild(e)}else(u=t.parentElement)==null||u.appendChild(e)}showLabels(t,e){Object.keys(t).forEach((s,n)=>{const a=t[s],r=this.getKeyByFieldSelector(s);if(!r||!this.fields[r]){console.error("Field not found. Check the field selector.");return}const o=this.fields[r];o.isValid=!e,this.clearFieldStyle(r),this.clearFieldLabel(r),this.renderFieldError(r,!1,a),n===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>o.elem.focus(),0)})}showErrors(t){if(typeof t!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(t,!0)}showSuccessLabels(t){if(typeof t!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(t,!1)}renderFieldError(t,e=!1,s){var n,a,r,o,l,c;const d=this.fields[t];if(d.isValid===!1&&(this.isValid=!1),d.isValid===void 0||!e&&!this.isSubmitted&&!d.touched&&s===void 0)return;if(d.isValid){if(!d.asyncCheckPending){const h=this.createSuccessLabelElem(t,s!==void 0?s:d.successMessage,d.config);h&&this.renderFieldLabel(d.elem,h,(n=d.config)==null?void 0:n.errorsContainer,!0),d.elem.classList.add(...yt(((a=d.config)==null?void 0:a.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}d.elem.classList.add(...yt(((r=d.config)==null?void 0:r.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const u=this.createErrorLabelElem(t,s!==void 0?s:d.errorMessage,d.config);this.renderFieldLabel(d.elem,u,(o=d.config)==null?void 0:o.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(d.elem,u,(c=(l=d.config)==null?void 0:l.tooltip)==null?void 0:c.position))}renderGroupError(t,e=!0){var s,n,a,r;const o=this.groupFields[t];if(o.isValid===!1&&(this.isValid=!1),o.isValid===void 0||!e&&!this.isSubmitted&&!o.touched)return;if(o.isValid){o.elems.forEach(d=>{var u,h;Object.assign(d.style,((u=o.config)==null?void 0:u.successFieldStyle)||this.globalConfig.successFieldStyle),d.classList.add(...yt(((h=o.config)==null?void 0:h.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const c=this.createSuccessLabelElem(t,o.successMessage,o.config);c&&this.renderGroupLabel(o.groupElem,c,(s=o.config)==null?void 0:s.errorsContainer,!0);return}this.isValid=!1,o.elems.forEach(c=>{var d,u;Object.assign(c.style,((d=o.config)==null?void 0:d.errorFieldStyle)||this.globalConfig.errorFieldStyle),c.classList.add(...yt(((u=o.config)==null?void 0:u.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const l=this.createErrorLabelElem(t,o.errorMessage,o.config);this.renderGroupLabel(o.groupElem,l,(n=o.config)==null?void 0:n.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.groupElem,l,(r=(a=o.config)==null?void 0:a.tooltip)==null?void 0:r.position))}renderErrors(t=!1){if(!(!this.isSubmitted&&!t&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const e in this.groupFields)this.renderGroupError(e);for(const e in this.fields)this.renderFieldError(e)}}destroy(){this.eventListeners.forEach(t=>{this.removeListener(t.type,t.elem,t.func)}),Object.keys(this.customStyleTags).forEach(t=>{this.customStyleTags[t].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(t=>{const e=this.getFieldSelectorByKey(t);e&&this.addField(e,[...this.fields[t].rules],this.fields[t].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(t){if(typeof t!="string"&&t!==void 0){console.error("Current locale should be a string");return}this.currentLocale=t,this.isSubmitted&&this.validate()}onSuccess(t){return this.onSuccessCallback=t,this}onFail(t){return this.onFailCallback=t,this}onValidate(t){return this.onValidateCallback=t,this}}const Qs={form:document.querySelector("#sign-up-form"),input:document.querySelector("#email"),btn:document.querySelector("#submit-form"),modal:document.querySelector(".form-modal"),userEmail:document.querySelector(".user-email")},us={emptyMessage:"Заполните это поле",errorMessage:"Некорректный email",successMessage:"Подходит"},Qt={fields:{success:"success-field",error:"error-field"},labels:{general:"labels",success:"success-label",error:"error-label"},modifiers:{granted:"unlocked",denied:"locked"}},pg=new fg(Qs.form,{successFieldCssClass:[Qt.fields.success],errorFieldCssClass:[Qt.fields.error],successLabelCssClass:[Qt.labels.general,Qt.labels.success],errorLabelCssClass:[Qt.labels.general,Qt.labels.error],validateBeforeSubmitting:!0});pg.addField(Qs.input,[{rule:"required",errorMessage:us.emptyMessage},{rule:"email",errorMessage:us.errorMessage}],{successMessage:us.successMessage});class gg{constructor(t,e){L(this,"unlockSubmitBtn",()=>{this.btn.classList.replace(this.cssClasses.modifiers.denied,this.cssClasses.modifiers.granted)});L(this,"lockSubmitBtn",()=>{this.btn.classList.replace(this.cssClasses.modifiers.granted,this.cssClasses.modifiers.denied)});L(this,"getState",()=>this.input.classList.contains(this.cssClasses.fields.success));L(this,"handleInputChange",()=>this.getState()?this.unlockSubmitBtn():this.lockSubmitBtn());L(this,"removeSuccessLabel",()=>document.querySelector(`.${this.cssClasses.labels.success}`).remove());L(this,"clearInput",()=>this.input.value="");L(this,"insertUserEmail",()=>this.userEmail.textContent=this.input.value);L(this,"restoreInitialState",()=>{this.clearInput(),this.removeSuccessLabel(),this.lockSubmitBtn()});L(this,"handleFormSubmit",t=>{this.getState()&&(t.preventDefault(),this.insertUserEmail(),this.modal.showModal(),this.restoreInitialState())});L(this,"init",()=>{this.input.addEventListener("input",this.handleInputChange),this.form.addEventListener("submit",this.handleFormSubmit)});this.form=t.form,this.input=t.input,this.btn=t.btn,this.modal=t.modal,this.userEmail=t.userEmail,this.cssClasses=e}}const mg=new gg(Qs,Qt);mg.init();ymaps.ready(bg);function bg(){const i=new ymaps.Map("ymap",{center:[55.823738,37.412635],zoom:11},{searchControlProvider:"yandex#search"}),t=new ymaps.Placemark([55.805918,37.544201],{iconContent:"Головной офис",balloonContentHeader:"Lorem Printum",balloonContentBody:["<address>","Штаб-квартира компании располагается по адресу:","<br/>","125319, Москва, Кочновский проезд, дом 4, корпус 2","<br/>","</address>"].join(""),balloonContentFooter:"Метка на карте указывает прямо на вход в офис!",hintContent:"Кочновский проезд, 4к2"},{preset:"islands#redStretchyIcon"}),e=new ymaps.GeoObject({geometry:{type:"Point",coordinates:[55.835519,37.324639]},properties:{iconContent:"Доп. офис",hintContent:"Первомайская улица, 16"}},{preset:"islands#blueStretchyIcon"});i.geoObjects.add(t).add(e)}Ql(document.querySelector(".demo-table"));const vg=new Jl;vg.initWith("role",{thead:"rowgroup",tbody:"rowgroup",tfoot:"rowgroup",tr:"row",td:"cell",th:"columnheader","th[scope=row]":"rowheader"});const xg=new Zl("w");xg.initWith([["w-master-1","w-slave-1"]]);console.log(`%cCoded by ✨Nazhdaque✨
https://www.frontendmentor.io/profile/Nazhdaque/solutions`,"background: #222; color: chartreuse;");
