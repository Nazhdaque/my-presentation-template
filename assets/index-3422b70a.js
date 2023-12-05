var Yr=Object.defineProperty;var Xr=(i,t,e)=>t in i?Yr(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var L=(i,t,e)=>(Xr(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const Ur=`<li class="swiper-slide __slide-title-slide"
		data-hash="title-slide">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg w-img"></div>
			<div class="slide-bg-overlay trapeze"></div>

			<div class="unit fs-3xl width-x slide-ttl">
				<div class="unit__img -pipe"></div>
				<h1 class="unit__head">Шаблон-конструктор презентаций</h1>
				<div class="unit__body fs-md grid-full-width">
					<p>Альтернатива .pptx</p>
				</div>
			</div>

			<ul class="grid-x __first-slide-list">
				<li class="unit">
					<div class="unit__img img-box icon-bg"
							 style="--img-size: 4rem">
						<svg class="o-fit-contain figures">
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
				</li>

				<li class="unit">
					<div class="unit__img img-box icon-bg"
							 style="--img-size: 4rem">
						<svg class="o-fit-contain figures">
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
				</li>

				<li class="unit">
					<div class="unit__img img-box icon-bg"
							 style="--img-size: 4rem">
						<svg class="o-fit-contain figures">
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
				</li>

				<li class="unit">
					<div class="unit__img img-box icon-bg round sphere-1b"
							 style="--img-size: 4rem">
						<svg class="inner-icon figures">
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
				</li>
			</ul>

			<p class="slide-ribbon fs-rg caps">under development</p>
		</div>
	</div>
</li>`,Kr=`<li class="swiper-slide __slide-advantages"
		data-hash="advantages">
	<div class="layout-center">
		<div class="flex-space-x">
			<div class="slide-bg trapeze w-img"></div>

			<div class="scroll-down">
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<div class="scroll-down__chevron"></div>
				<span class="scroll-down__text">Scroll down</span>
			</div>

			<div class="width-x __left-col clr-2b">
				<div class="unit -rl fs-xl slide-ttl">
					<div class="unit__img -pipe"></div>
					<h2 class="unit__head">Плюсы <br>MS PowerPoint</h2>
					<div class="unit__body fs-md grid-full-width t-align-r">
						<p>Всего два, зато какие!</p>
					</div>
				</div>

				<ul class="plain-list __pro-cons-list">
					<li class="unit">
						<div class="unit__img img-box icon-bg round sphere-1a">
							<i class="material-icons-round mui-icon">child_care</i>
						</div>
						<h3 class="unit__head -pipe caps">Что-то получится даже у ребенка</h3>
						<div class="arrow-right clr-1a"></div>

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
						<div class="unit__img img-box icon-bg round sphere-1a">
							<i class="material-icons-round mui-icon">screenshot_monitor</i>
						</div>
						<h3 class="unit__head -pipe caps">Никаких сюрпризов</h3>
						<div class="arrow-right clr-1a"></div>

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
			</div>

			<div class="width-x clr-1a">
				<div class="unit fs-xl slide-ttl">
					<div class="unit__img -pipe"></div>
					<h2 class="unit__head">Чем такая презентация <br>лучше, чем MS PowerPoint</h2>
					<div class="unit__body fs-md grid-full-width">
						<p>Спойлер: пожалуй, всем! Счет 12:2 не в пользу PP</p>
					</div>
				</div>

				<ul class="plain-list ordered-list __pro-cons-list">
					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Готово к использованию</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Не нужны никакие спец. программы для просмотра — все открывается по ссылке и работает в любом браузере,
								на любом устройстве.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Без лишних телодвижений</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Нет необходимости скачивать и / или пересылать файлы по почте, хранить их где-то. Кроме того, они имеют
								замечательное свойство теряться.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Интуитивно понятно</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Привычные каждому пользователю возможности управления мышкой, клавиатурой, тачпэдом ноутбука, жестами
								на сенсорных дисплеях: листаем слайды стрелками, колесом мыши, драг-н-дропом, перемещаемся между
								интерактивными элементами (ссылки, кнопки, поля формы) по Tab, свайпаем, тапаем, масштабируем и т.д.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Выглядит отлично</h3>
						<div class="arrow-left clr-2b"></div>

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
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Аккуратно</h3>
						<div class="arrow-left clr-2b"></div>

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
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Все поместится</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Добавить контент в слайд — никаких проблем даже в том случае, если что-то не помещается в область
								просмотра. Просто появится возможность вертикальной прокрутки. Как на этой странице, например.</p>
							<p>Провернуть такой трюк с .pptx, очевидно, не удастся. Все знают, как это бывает: либо новый слайд, либо
								вот
								эти пятнашки, когда все куда-то сдвигается, уплотняется, налезает и в итоге выглядит печально.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Легко кастомизировать</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Здесь разница просто колоссальная. В .pptx презентации любые изменения — это утомительный ручной труд в
								каждом слайде, которых у вас может быть несколько десятков. Поменять фон, актуализировать айдентику в
								нескольких презентациях — целая проблема: неудобно, времязатратно.</p>
							<p>В веб-проекте же можно моментально изменить стилизацию любого компонента: шрифты, цвета, размеры,
								положение на странице, изображения. Это делается централизованно, изменения затрагивают все однотипные
								элементы сразу.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Reusability</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Это преимущество прямо следует из предыдущего пункта. PP-презентация — вещь, как правило, одноразовая,
								это статичный формат, тяжело поддающийся радикальной переработке. Веб-проект — совсем другое дело:
								потратив время и усилия на разработку с нуля, вы получаете функциональную базу для всех последующих
								проектов. И с каждой итерацией эта база усовершенствуется, оптимизируется, дополняется новыми
								возможностями.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Адаптивность и responsive</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Возможность комфортного просмотра на любом устройстве, с т.ч. с экрана смартфона. В этом легко
								убедиться: плавно потяните за уголок окна браузера, чтобы уменьшить область просмотра до размеров экрана
								смартфона. Макет страницы на ваших глазах гибко подстроится («резиновая» верстка) под эти изменения,
								сохраняя при этом аккуратный вид и читаемость. А теперь вспомните, что из себя представляет просмотр
								.pdf или .pptx на смартфоне.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Огромный потенциал</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Возможности связки HTML — CSS — JS в плане визуализации контента несоизмеримо шире, чем в PP.
								Экскаватор и лопата, танк и самокат — такие примерно ассоциации должны возникать при сравнении
								инструментов веб-разработки и PP.</p>
						</div>
					</li>

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Сторонние библиотеки</h3>
						<div class="arrow-left clr-2b"></div>

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

					<li class="unit -rl">
						<div class="unit__img img-box icon-bg round sphere-2b"></div>
						<h3 class="unit__head -pipe -rl caps">Полноценный веб-ресурс</h3>
						<div class="arrow-left clr-2b"></div>

						<div class="unit__body grid-full-width">
							<p>Который начинает работать на вас с момента публикации на домене компании. Страница проиндексируется и
								будет попадать в выдачу поисковиков. Если контент годный, его удобно потреблять (помним про
								адаптивность, доступность с мобильных устройств), все сделано технически грамотно, быстро грузится и
								т.д., вы получаете трафик.</p>
							<p>Также помимо собственно текстового контента в вашем распоряжении есть метатеги — один из основных
								инструментов SEO-продвижения. Формы обратной связи, если это вам нужно.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</li>`,Zr=`<li class="swiper-slide __slide-grid-system"
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
				<li class="w-master-2"></li>
				<li></li>
				<li></li>
				<li class="w-slave-2"></li>
				<li class="w-slave-2"></li>
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
</li>`,Jr=`<li class="swiper-slide __slide-typography"
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

			<ul class="plain-list flex-space-x __typo-list">
				<li class="unit -rl width-x">
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
				</li>

				<li class="unit width-x clr-1a">
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
				</li>
			</ul>
		</div>
	</div>
</li>`,Qr=`<li class="swiper-slide __slide-cards"
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
					<p>Адаптивные текстовые блоки с инфографикой: картинки, иконки, графики и т.д.<br><small
									 class="fs-xs">библиотека Material Icons установлена по умолчанию, но иконки могут быть абсолютно
							любые</small></p>
				</div>
			</div>

			<ul class="grid-x cards col-3">
				<li class="card">
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
				</li>

				<li class="card x-axis xs-a-flow-row">
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
				</li>

				<li class="card">
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
				</li>

				<li class="card">
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
				</li>

				<li class="card">
					<picture class="card__img img-box img-card figure filters">
						<img class="o-fit-contain"
								 src="./images/rubik-0.svg"
								 alt="">
					</picture>
				</li>

				<li class="card x-axis xs-a-flow-row gap-0">
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
				</li>

				<li class="card gap-0">
					<div class="card__head">
						<picture class="card__img img-box">
							<img class="o-fit-cover"
									 loading="lazy"
									 decoding="async"
									 src="./images/demo-2-sm.webp"
									 alt="">
						</picture>

						<div class="__icons-box">
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
				</li>

				<li class="card">
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
				</li>

				<li class="card">
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
				</li>

				<li class="card x-axis xs-a-flow-row">
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
				</li>

				<li class="card">
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
				</li>

				<li class="card x-axis xs-a-flow-row">
					<div class="card__head">
						<div class="card__img img-box icon-bg round sphere-2c">
							<svg class="inner-icon figures">
								<use href="./images/icons/sprites/figures.svg#figure-9"></use>
							</svg>
							<i class="material-icons-round mui-icon">question_mark</i>
						</div>
					</div>

					<div class="unit">
						<div class="unit__img img-box icon-bg round sphere-1b"></div>
						<h3 class="unit__head caps">Lorem ipsum dolor</h3>
						<div class="unit__body grid-full-width">
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae exercitationem suscipit unde
								laudantium perspiciatis eius ex repellendus odio cum nemo accusamus nam eos non dolor doloribus ratione
								quo facilis facere labore, quas et excepturi rem corrupti! Nam consectetur sint fugit?</p>
						</div>
					</div>
				</li>

				<li class="card gap-0">
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
				</li>

				<li class="card x-axis gap-0 card_triple md-a-flow-row c-span-x md-c-span-0">
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
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quidem quae animi possimus eos in
								qui odio dicta labore quos aperiam, repellendus eaque beatae nam temporibus consequatur a alias
								recusandae quod repellat tempore, autem reprehenderit dolor natus! Atque sint reiciendis harum.
								Veritatis maiores praesentium dolorem culpa repellat minima labore tempora.</p>
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
				</li>
			</ul>

			<ul class="cards">
				<li class="card gap-0">

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
						<div class="unit__body grid-full-width txt-col-x col-3">
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
				</li>
			</ul>

			<div class="cards">
				<div class="unit">
					<div class="unit__body grid-full-width txt-col-x col-4">

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
				</div>
			</div>
		</div>
	</div>
</li>`,to=`<li class="swiper-slide __slide-video"
		data-hash="demo-video-and-scroll-snap">
	<div class="layout-center">
		<div class="slide-content width-x -md-width-1-3-center">
			<div class="slide-bg circle w-img"></div>
			<div class="slide-bg circle w-img"></div>
			<div class="slide-bg heptagon clr-1b"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img -pipe"></div>
				<h2 class="unit__head">Подгрузка видео по клику, scroll-snap, слайдер</h2>
			</div>

			<ul class="grid-x cards">
				<li class="card gap-0">
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
							<figcaption class="side-ribbon fs-xs caps">Just a video sample</figcaption>
						</figure>
					</div>

					<div class="unit -bg">
						<div class="unit__body grid-full-width">
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Commodi officia illum facere expedita
								aspernatur nisi non alias enim ducimus repellendus accusamus eum iure voluptates!</p>
						</div>
					</div>
				</li>

				<li class="card">
					<div class="card__head">
						<h3 class="card__ttl -bg caps ellipsis">Scroll-snap</h3>
						<div class="card__img img-box">
							<div class="scroll-snap-block">
								<figure class="img-box pattern-bg-2 clr-1a">
									<figcaption class="side-ribbon fs-xs caps">Это интерактивный график</figcaption>
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
				</li>

				<li class="card gap-0">
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

									<figure class="swiper-slide img-box pattern-bg-1 clr-2b">
										<figcaption class="side-ribbon fs-xs caps">Chart.js</figcaption>
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
											<figcaption class="side-ribbon fs-xs caps">Just a video sample</figcaption>
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
				</li>
			</ul>
		</div>
	</div>
</li>`,eo=`<li class="swiper-slide __slide-table"
		data-hash="demo-table">
	<div class="layout-center">
		<div class="slide-content width-x -md-width-1-3-center">
			<div class="slide-bg rounded clr-1b"></div>

			<table>
				<caption>
					<div class="unit slide-ttl width-x">
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
						<th></th>
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
</li>`,io=`<li class="swiper-slide __slide-charts"
		data-hash="demo-charts">
	<div class="layout-center">
		<div class="slide-content width-x -lg-width-1-3-center">
			<div class="slide-bg spike clr-1b"></div>
			<div class="slide-bg spike w-img xs-d-none"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-1b">
					<i class="material-icons-round mui-icon">area_chart</i>
				</div>
				<h2 class="unit__head">Сhart.js</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Интерактивные <a class="tag clr-1a"
							 href="https://www.chartjs.org/"
							 target="_blank"
							 rel="noopener noreferrer">графики</a> для визуализации любых типов данных</p>
				</div>
			</div>

			<div class="grid-x width-x slide-body">
				<div class="grid-center">
					<canvas class="chart-bar"></canvas>
				</div>
				<div class="grid-center">
					<canvas class="chart-doughnut"></canvas>
				</div>
				<div class="grid-center">
					<canvas class="chart-line"></canvas>
				</div>
			</div>
		</div>
	</div>
</li>`,so=`<li class="swiper-slide __slide-doughnut"
		data-hash="demo-doughnut-chart">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg circle w-img"></div>

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


				<div class="card">
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
				</div>
			</div>
		</div>
	</div>
</li>`,no=`<li class="swiper-slide __slide-form"
		data-hash="demo-form">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg spike w-img"></div>
			<div class="slide-bg spike w-img xs-d-none"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-1b">
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
</li>`,ao=`<li class="swiper-slide __slide-snake-list"
		data-hash="snake-list">
	<div class="layout-center">
		<div class="slide-content width-x -xl-width-1-3-center">
			<div class="slide-bg diag w-img"></div>
			<div class="slide-bg-overlay diag"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-2b">
					<i class="material-icons-round mui-icon">javascript</i>
				</div>
				<h2 class="unit__head caps">Test area</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>js heightSetter test page <br><small class="fs-xs">and fun with flex / grid layout</small></p>
				</div>
			</div>

			<div class="flex-space-x">
				<div class="width-x">
					<ul class="plain-list clr-2b __snake-list">
						<li class="unit -rl h-master-1">

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

						<li class="unit h-slave-2">
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

						<li class="unit h-slave-3">
							<div class="unit__img img-box icon-bg round sphere-2b">
								<i class="material-icons-round mui-icon">location_on</i>
							</div>

							<div class="arrow-right"></div>

							<div class="unit__img img-box icon-bg round sphere sphere-2b d-none xl-d-grid">
								<i class="material-icons-round mui-icon">location_on</i>
							</div>

							<div class="arrow-right xl-d-none"></div>

							<div class="unit__body grid-full-width -xl-shift-l">
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, sunt ad. Aliquam provident iste
									reiciendis harum quibusdam itaque laborum, voluptates nobis rerum? Aspernatur suscipit molestiae a
									numquam, recusandae impedit veniam!</p>
							</div>

							<div class="arrow-down d-none xl-d-grid"></div>
						</li>
					</ul>
				</div>

				<div class="width-x">
					<ul class="plain-list clr-2a __snake-list -head">
						<li class="unit h-master-3 order-up xl-order-0">

							<div class="unit__img img-box icon-bg round sphere-2a">
								<i class="material-icons-round mui-icon">directions_bike</i>
							</div>

							<div class="arrow-right xl-d-none"></div>

							<div class="arrow-left d-none xl-d-grid"></div>

							<div class="unit__img img-box icon-bg round sphere-2a">
								<i class="material-icons-round mui-icon">location_on</i>
							</div>

							<div class="unit__body -xl-shift-r grid-full-width ">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum voluptates quo sed deleniti
									nulla
									magnam iusto suscipit assumenda. Laboriosam dolorem, maiores quos ex animi debitis at
									necessitatibus?
									Aliquid, exercitationem animi? Ducimus cumque molestiae laboriosam reprehenderit eum quidem libero
									molestias ea iure quos hic iusto temporibus nisi tenetur maxime exercitationem, nemo quasi possimus?
									Iure architecto quia ullam amet dicta magni?</p>
							</div>

							<div class="arrow-down d-none xl-d-grid"></div>
						</li>

						<li class="unit h-master-2">
							<div class="unit__img img-box icon-bg round sphere-2a">
								<i class="material-icons-round mui-icon">location_on</i>
							</div>

							<div class="arrow-left xl-d-none"></div>
							<div class="arrow-right d-none xl-d-grid"></div>

							<div class="unit__img img-box icon-bg round sphere-2a">
								<i class="material-icons-round mui-icon">location_on</i>
							</div>

							<div class="unit__body -shift-l -xl-shift-l">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa dolor excepturi corrupti
									illo
									commodi tempora temporibus nulla voluptas quaerat. Optio, facere possimus eius odit magnam iure
									maxime
									neque a quia deleniti atque facilis non, dolores excepturi rerum est doloribus accusantium? Esse,
									ipsa
									magnam. A, adipisci eum laborum est possimus soluta omnis quas dolor repellendus odit consequatur
									deleniti vero magni!</p>
							</div>

							<div class="arrow-up xl-d-none"></div>
							<div class="arrow-down d-none xl-d-grid"></div>
						</li>

						<li class="unit h-slave-1 order-down xl-order-0">
							<div class="arrow-left d-none xl-d-grid"></div>

							<h3 class="unit__head -pipe caps">Finish!</h3>

							<div class="unit__img img-box icon-bg round sphere-2a">
								<i class="material-icons-round mui-icon">flag_circle</i>
							</div>

							<div class="unit__body -shift-r xl-grid-full-width">
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, consequatur amet. Quasi
									aliquam
									totam voluptatem quibusdam nam et rem qui.</p>
							</div>

							<div class="arrow-up xl-d-none"></div>
							<div class="arrow-right xl-d-none"></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</li>`,ro=`<li class="swiper-slide __slide-trapeze-bg"
		data-hash="trapeze-bg">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg trapeze"></div>
			<div class="slide-bg trapeze w-img xs-d-none"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-1b">
					<i class="material-icons-round mui-icon">question_mark</i>
				</div>
				<h2 class="unit__head">Lorem ipsum dolor sit amet</h2>
				<div class="unit__body fs-md grid-full-width">
					<p>Consectetur adipisicing elit. Maxime,
						repellendus!</p>
				</div>
			</div>

		</div>
	</div>
</li>`,oo=`<li class="swiper-slide __slide-blobs-bg"
		data-hash="blobs-bg">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg w-img"></div>
			<div class="slide-bg"></div>
			<div class="slide-bg clr-1b"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-2b">
					<i class="material-icons-round mui-icon">hardware</i>
				</div>
				<h2 class="unit__head caps">Test area</h2>
			</div>

		</div>
	</div>
</li>`,lo=`<li class="swiper-slide __slide-skewed-overlay"
		data-hash="skewed-overlay">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg w-img"></div>
			<div class="slide-bg-overlay skew"></div>

			<div class="unit fs-xl slide-ttl width-x">
				<div class="unit__img img-box icon-bg round sphere-2c">
					<i class="material-icons-round mui-icon">hardware</i>
				</div>
				<h2 class="unit__head caps">Test area</h2>
			</div>

		</div>
	</div>
</li>`,co=`<div class="form-modal__content width-x">
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
</div>`,uo=`<li class="sidebar-item">
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

			<div class="img-box icon-bg">
				<svg class="o-fit-contain inner-icon figures">
					<use href="./images/icons/sprites/figures.svg#figure-2"></use>
				</svg>
			</div>

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

			<div class="img-box icon-bg">
				<i class="material-icons-round mui-icon clr-0a">diamond</i>
			</div>

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
</li> -->`;document.querySelector(".sidebar").insertAdjacentHTML("beforeend",uo);const ot=document.querySelector(".swiper-wrapper");ot.insertAdjacentHTML("beforeend",Ur);ot.insertAdjacentHTML("beforeend",Kr);ot.insertAdjacentHTML("beforeend",Zr);ot.insertAdjacentHTML("beforeend",Jr);ot.insertAdjacentHTML("beforeend",Qr);ot.insertAdjacentHTML("beforeend",to);ot.insertAdjacentHTML("beforeend",eo);ot.insertAdjacentHTML("beforeend",io);ot.insertAdjacentHTML("beforeend",so);ot.insertAdjacentHTML("beforeend",no);ot.insertAdjacentHTML("beforeend",ro);ot.insertAdjacentHTML("beforeend",ao);ot.insertAdjacentHTML("beforeend",oo);ot.insertAdjacentHTML("beforeend",lo);document.querySelector(".form-modal").insertAdjacentHTML("beforeend",co);function Js(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Ps(i,t){i===void 0&&(i={}),t===void 0&&(t={}),Object.keys(t).forEach(e=>{typeof i[e]>"u"?i[e]=t[e]:Js(t[e])&&Js(i[e])&&Object.keys(t[e]).length>0&&Ps(i[e],t[e])})}const Da={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ht(){const i=typeof document<"u"?document:{};return Ps(i,Da),i}const ho={document:Da,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function et(){const i=typeof window<"u"?window:{};return Ps(i,ho),i}function fo(i){const t=i;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function $e(i,t){return t===void 0&&(t=0),setTimeout(i,t)}function Pt(){return Date.now()}function po(i){const t=et();let e;return t.getComputedStyle&&(e=t.getComputedStyle(i,null)),!e&&i.currentStyle&&(e=i.currentStyle),e||(e=i.style),e}function go(i,t){t===void 0&&(t="x");const e=et();let s,n,a;const r=po(i);return e.WebKitCSSMatrix?(n=r.transform||r.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(o=>o.replace(",",".")).join(", ")),a=new e.WebKitCSSMatrix(n==="none"?"":n)):(a=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=a.toString().split(",")),t==="x"&&(e.WebKitCSSMatrix?n=a.m41:s.length===16?n=parseFloat(s[12]):n=parseFloat(s[4])),t==="y"&&(e.WebKitCSSMatrix?n=a.m42:s.length===16?n=parseFloat(s[13]):n=parseFloat(s[5])),n||0}function Je(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function mo(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function dt(){const i=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let e=1;e<arguments.length;e+=1){const s=e<0||arguments.length<=e?void 0:arguments[e];if(s!=null&&!mo(s)){const n=Object.keys(Object(s)).filter(a=>t.indexOf(a)<0);for(let a=0,r=n.length;a<r;a+=1){const o=n[a],l=Object.getOwnPropertyDescriptor(s,o);l!==void 0&&l.enumerable&&(Je(i[o])&&Je(s[o])?s[o].__swiper__?i[o]=s[o]:dt(i[o],s[o]):!Je(i[o])&&Je(s[o])?(i[o]={},s[o].__swiper__?i[o]=s[o]:dt(i[o],s[o])):i[o]=s[o])}}}return i}function Qe(i,t,e){i.style.setProperty(t,e)}function Ia(i){let{swiper:t,targetPosition:e,side:s}=i;const n=et(),a=-t.translate;let r=null,o;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(t.cssModeFrameID);const c=e>a?"next":"prev",d=(h,f)=>c==="next"&&h>=f||c==="prev"&&h<=f,u=()=>{o=new Date().getTime(),r===null&&(r=o);const h=Math.max(Math.min((o-r)/l,1),0),f=.5-Math.cos(h*Math.PI)/2;let m=a+f*(e-a);if(d(m,e)&&(m=e),t.wrapperEl.scrollTo({[s]:m}),d(m,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[s]:m})}),n.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=n.requestAnimationFrame(u)};u()}function As(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function mt(i,t){return t===void 0&&(t=""),[...i.children].filter(e=>e.matches(t))}function Os(i,t){t===void 0&&(t=[]);const e=document.createElement(i);return e.classList.add(...Array.isArray(t)?t:[t]),e}function bo(i){const t=et(),e=ht(),s=i.getBoundingClientRect(),n=e.body,a=i.clientTop||n.clientTop||0,r=i.clientLeft||n.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-a,left:s.left+l-r}}function vo(i,t){const e=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function xo(i,t){const e=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function Rt(i,t){return et().getComputedStyle(i,null).getPropertyValue(t)}function Ei(i){let t=i,e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function Li(i,t){const e=[];let s=i.parentElement;for(;s;)t?s.matches(t)&&e.push(s):e.push(s),s=s.parentElement;return e}function yo(i,t){function e(s){s.target===i&&(t.call(i,s),i.removeEventListener("transitionend",e))}t&&i.addEventListener("transitionend",e)}function ds(i,t,e){const s=et();return e?i[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let ji;function _o(){const i=et(),t=ht();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&t instanceof i.DocumentTouch)}}function Fa(){return ji||(ji=_o()),ji}let qi;function wo(i){let{userAgent:t}=i===void 0?{}:i;const e=Fa(),s=et(),n=s.navigator.platform,a=t||s.navigator.userAgent,r={ios:!1,android:!1},o=s.screen.width,l=s.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/);let d=a.match(/(iPad).*OS\s([\d_]+)/);const u=a.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=n==="Win32";let m=n==="MacIntel";const p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&m&&e.touch&&p.indexOf(`${o}x${l}`)>=0&&(d=a.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),m=!1),c&&!f&&(r.os="android",r.android=!0),(d||h||u)&&(r.os="ios",r.ios=!0),r}function So(i){return i===void 0&&(i={}),qi||(qi=wo(i)),qi}let Wi;function Mo(){const i=et();let t=!1;function e(){const s=i.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(e()){const s=String(i.navigator.userAgent);if(s.includes("Version/")){const[n,a]=s.split("Version/")[1].split(" ")[0].split(".").map(r=>Number(r));t=n<16||n===16&&a<2}}return{isSafari:t||e(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function To(){return Wi||(Wi=Mo()),Wi}function ko(i){let{swiper:t,on:e,emit:s}=i;const n=et();let a=null,r=null;const o=()=>{!t||t.destroyed||!t.initialized||(s("beforeResize"),s("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(u=>{r=n.requestAnimationFrame(()=>{const{width:h,height:f}=t;let m=h,p=f;u.forEach(v=>{let{contentBoxSize:x,contentRect:g,target:b}=v;b&&b!==t.el||(m=g?g.width:(x[0]||x).inlineSize,p=g?g.height:(x[0]||x).blockSize)}),(m!==h||p!==f)&&o()})}),a.observe(t.el))},c=()=>{r&&n.cancelAnimationFrame(r),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},d=()=>{!t||t.destroyed||!t.initialized||s("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof n.ResizeObserver<"u"){l();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",d)}),e("destroy",()=>{c(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",d)})}function Co(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a=[],r=et(),o=function(d,u){u===void 0&&(u={});const h=r.MutationObserver||r.WebkitMutationObserver,f=new h(m=>{if(t.__preventObserver__)return;if(m.length===1){n("observerUpdate",m[0]);return}const p=function(){n("observerUpdate",m[0])};r.requestAnimationFrame?r.requestAnimationFrame(p):r.setTimeout(p,0)});f.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),a.push(f)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=Li(t.hostEl);for(let u=0;u<d.length;u+=1)o(d[u])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},c=()=>{a.forEach(d=>{d.disconnect()}),a.splice(0,a.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",l),s("destroy",c)}var Eo={on(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const n=e?"unshift":"push";return i.split(" ").forEach(a=>{s.eventsListeners[a]||(s.eventsListeners[a]=[]),s.eventsListeners[a][n](t)}),s},once(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function n(){s.off(i,n),n.__emitterProxy&&delete n.__emitterProxy;for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];t.apply(s,r)}return n.__emitterProxy=t,s.on(i,n,e)},onAny(i,t){const e=this;if(!e.eventsListeners||e.destroyed||typeof i!="function")return e;const s=t?"unshift":"push";return e.eventsAnyListeners.indexOf(i)<0&&e.eventsAnyListeners[s](i),e},offAny(i){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const e=t.eventsAnyListeners.indexOf(i);return e>=0&&t.eventsAnyListeners.splice(e,1),t},off(i,t){const e=this;return!e.eventsListeners||e.destroyed||!e.eventsListeners||i.split(" ").forEach(s=>{typeof t>"u"?e.eventsListeners[s]=[]:e.eventsListeners[s]&&e.eventsListeners[s].forEach((n,a)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&e.eventsListeners[s].splice(a,1)})}),e},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let t,e,s;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],e=a.slice(1,a.length),s=i):(t=a[0].events,e=a[0].data,s=a[0].context||i),e.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(c=>{c.apply(s,[l,...e])}),i.eventsListeners&&i.eventsListeners[l]&&i.eventsListeners[l].forEach(c=>{c.apply(s,e)})}),i}};function Lo(){const i=this;let t,e;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?t=i.params.width:t=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?e=i.params.height:e=s.clientHeight,!(t===0&&i.isHorizontal()||e===0&&i.isVertical())&&(t=t-parseInt(Rt(s,"padding-left")||0,10)-parseInt(Rt(s,"padding-right")||0,10),e=e-parseInt(Rt(s,"padding-top")||0,10)-parseInt(Rt(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(e)&&(e=0),Object.assign(i,{width:t,height:e,size:i.isHorizontal()?t:e}))}function Po(){const i=this;function t(T){return i.isHorizontal()?T:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[T]}function e(T,E){return parseFloat(T.getPropertyValue(t(E))||0)}const s=i.params,{wrapperEl:n,slidesEl:a,size:r,rtlTranslate:o,wrongRTL:l}=i,c=i.virtual&&s.virtual.enabled,d=c?i.virtual.slides.length:i.slides.length,u=mt(a,`.${i.params.slideClass}, swiper-slide`),h=c?i.virtual.slides.length:u.length;let f=[];const m=[],p=[];let v=s.slidesOffsetBefore;typeof v=="function"&&(v=s.slidesOffsetBefore.call(i));let x=s.slidesOffsetAfter;typeof x=="function"&&(x=s.slidesOffsetAfter.call(i));const g=i.snapGrid.length,b=i.slidesGrid.length;let y=s.spaceBetween,_=-v,S=0,w=0;if(typeof r>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*r:typeof y=="string"&&(y=parseFloat(y)),i.virtualSize=-y,u.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(Qe(n,"--swiper-centered-offset-before",""),Qe(n,"--swiper-centered-offset-after",""));const k=s.grid&&s.grid.rows>1&&i.grid;k&&i.grid.initSlides(h);let M;const P=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(T=>typeof s.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<h;T+=1){M=0;let E;if(u[T]&&(E=u[T]),k&&i.grid.updateSlide(T,E,h,t),!(u[T]&&Rt(E,"display")==="none")){if(s.slidesPerView==="auto"){P&&(u[T].style[t("width")]="");const C=getComputedStyle(E),A=E.style.transform,O=E.style.webkitTransform;if(A&&(E.style.transform="none"),O&&(E.style.webkitTransform="none"),s.roundLengths)M=i.isHorizontal()?ds(E,"width",!0):ds(E,"height",!0);else{const F=e(C,"width"),D=e(C,"padding-left"),j=e(C,"padding-right"),V=e(C,"margin-left"),J=e(C,"margin-right"),xt=C.getPropertyValue("box-sizing");if(xt&&xt==="border-box")M=F+V+J;else{const{clientWidth:zt,offsetWidth:Gt}=E;M=F+D+j+V+J+(Gt-zt)}}A&&(E.style.transform=A),O&&(E.style.webkitTransform=O),s.roundLengths&&(M=Math.floor(M))}else M=(r-(s.slidesPerView-1)*y)/s.slidesPerView,s.roundLengths&&(M=Math.floor(M)),u[T]&&(u[T].style[t("width")]=`${M}px`);u[T]&&(u[T].swiperSlideSize=M),p.push(M),s.centeredSlides?(_=_+M/2+S/2+y,S===0&&T!==0&&(_=_-r/2-y),T===0&&(_=_-r/2-y),Math.abs(_)<1/1e3&&(_=0),s.roundLengths&&(_=Math.floor(_)),w%s.slidesPerGroup===0&&f.push(_),m.push(_)):(s.roundLengths&&(_=Math.floor(_)),(w-Math.min(i.params.slidesPerGroupSkip,w))%i.params.slidesPerGroup===0&&f.push(_),m.push(_),_=_+M+y),i.virtualSize+=M+y,S=M,w+=1}}if(i.virtualSize=Math.max(i.virtualSize,r)+x,o&&l&&(s.effect==="slide"||s.effect==="coverflow")&&(n.style.width=`${i.virtualSize+y}px`),s.setWrapperSize&&(n.style[t("width")]=`${i.virtualSize+y}px`),k&&i.grid.updateWrapperSize(M,f,t),!s.centeredSlides){const T=[];for(let E=0;E<f.length;E+=1){let C=f[E];s.roundLengths&&(C=Math.floor(C)),f[E]<=i.virtualSize-r&&T.push(C)}f=T,Math.floor(i.virtualSize-r)-Math.floor(f[f.length-1])>1&&f.push(i.virtualSize-r)}if(c&&s.loop){const T=p[0]+y;if(s.slidesPerGroup>1){const E=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/s.slidesPerGroup),C=T*s.slidesPerGroup;for(let A=0;A<E;A+=1)f.push(f[f.length-1]+C)}for(let E=0;E<i.virtual.slidesBefore+i.virtual.slidesAfter;E+=1)s.slidesPerGroup===1&&f.push(f[f.length-1]+T),m.push(m[m.length-1]+T),i.virtualSize+=T}if(f.length===0&&(f=[0]),y!==0){const T=i.isHorizontal()&&o?"marginLeft":t("marginRight");u.filter((E,C)=>!s.cssMode||s.loop?!0:C!==u.length-1).forEach(E=>{E.style[T]=`${y}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let T=0;p.forEach(C=>{T+=C+(y||0)}),T-=y;const E=T-r;f=f.map(C=>C<=0?-v:C>E?E+x:C)}if(s.centerInsufficientSlides){let T=0;if(p.forEach(E=>{T+=E+(y||0)}),T-=y,T<r){const E=(r-T)/2;f.forEach((C,A)=>{f[A]=C-E}),m.forEach((C,A)=>{m[A]=C+E})}}if(Object.assign(i,{slides:u,snapGrid:f,slidesGrid:m,slidesSizesGrid:p}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){Qe(n,"--swiper-centered-offset-before",`${-f[0]}px`),Qe(n,"--swiper-centered-offset-after",`${i.size/2-p[p.length-1]/2}px`);const T=-i.snapGrid[0],E=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(C=>C+T),i.slidesGrid=i.slidesGrid.map(C=>C+E)}if(h!==d&&i.emit("slidesLengthChange"),f.length!==g&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),m.length!==b&&i.emit("slidesGridLengthChange"),s.watchSlidesProgress&&i.updateSlidesOffset(),!c&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const T=`${s.containerModifierClass}backface-hidden`,E=i.el.classList.contains(T);h<=s.maxBackfaceHiddenSlides?E||i.el.classList.add(T):E&&i.el.classList.remove(T)}}function Ao(i){const t=this,e=[],s=t.virtual&&t.params.virtual.enabled;let n=0,a;typeof i=="number"?t.setTransition(i):i===!0&&t.setTransition(t.params.speed);const r=o=>s?t.slides[t.getSlideIndexByData(o)]:t.slides[o];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(o=>{e.push(o)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const o=t.activeIndex+a;if(o>t.slides.length&&!s)break;e.push(r(o))}else e.push(r(t.activeIndex));for(a=0;a<e.length;a+=1)if(typeof e[a]<"u"){const o=e[a].offsetHeight;n=o>n?o:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function Oo(){const i=this,t=i.slides,e=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(i.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-e-i.cssOverflowAdjustment()}function Do(i){i===void 0&&(i=this&&this.translate||0);const t=this,e=t.params,{slides:s,rtlTranslate:n,snapGrid:a}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let r=-i;n&&(r=i),s.forEach(l=>{l.classList.remove(e.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=e.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<s.length;l+=1){const c=s[l];let d=c.swiperSlideOffset;e.cssMode&&e.centeredSlides&&(d-=s[0].swiperSlideOffset);const u=(r+(e.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+o),h=(r-a[0]+(e.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+o),f=-(r-d),m=f+t.slidesSizesGrid[l];(f>=0&&f<t.size-1||m>1&&m<=t.size||f<=0&&m>=t.size)&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l),s[l].classList.add(e.slideVisibleClass)),c.progress=n?-u:u,c.originalProgress=n?-h:h}}function Io(i){const t=this;if(typeof i>"u"){const d=t.rtlTranslate?-1:1;i=t&&t.translate&&t.translate*d||0}const e=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:a,isEnd:r,progressLoop:o}=t;const l=a,c=r;if(s===0)n=0,a=!0,r=!0;else{n=(i-t.minTranslate())/s;const d=Math.abs(i-t.minTranslate())<1,u=Math.abs(i-t.maxTranslate())<1;a=d||n<=0,r=u||n>=1,d&&(n=0),u&&(n=1)}if(e.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[d],f=t.slidesGrid[u],m=t.slidesGrid[t.slidesGrid.length-1],p=Math.abs(i);p>=h?o=(p-h)/m:o=(p+m-f)/m,o>1&&(o-=1)}Object.assign(t,{progress:n,progressLoop:o,isBeginning:a,isEnd:r}),(e.watchSlidesProgress||e.centeredSlides&&e.autoHeight)&&t.updateSlidesProgress(i),a&&!l&&t.emit("reachBeginning toEdge"),r&&!c&&t.emit("reachEnd toEdge"),(l&&!a||c&&!r)&&t.emit("fromEdge"),t.emit("progress",n)}function Fo(){const i=this,{slides:t,params:e,slidesEl:s,activeIndex:n}=i,a=i.virtual&&e.virtual.enabled,r=l=>mt(s,`.${e.slideClass}${l}, swiper-slide${l}`)[0];t.forEach(l=>{l.classList.remove(e.slideActiveClass,e.slideNextClass,e.slidePrevClass)});let o;if(a)if(e.loop){let l=n-i.virtual.slidesBefore;l<0&&(l=i.virtual.slides.length+l),l>=i.virtual.slides.length&&(l-=i.virtual.slides.length),o=r(`[data-swiper-slide-index="${l}"]`)}else o=r(`[data-swiper-slide-index="${n}"]`);else o=t[n];if(o){o.classList.add(e.slideActiveClass);let l=xo(o,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!l&&(l=t[0]),l&&l.classList.add(e.slideNextClass);let c=vo(o,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!c===0&&(c=t[t.length-1]),c&&c.classList.add(e.slidePrevClass)}i.emitSlidesClasses()}const yi=(i,t)=>{if(!i||i.destroyed||!i.params)return;const e=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=t.closest(e());if(s){let n=s.querySelector(`.${i.params.lazyPreloaderClass}`);!n&&i.isElement&&(s.shadowRoot?n=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(n=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},Gi=(i,t)=>{if(!i.slides[t])return;const e=i.slides[t].querySelector('[loading="lazy"]');e&&e.removeAttribute("loading")},us=i=>{if(!i||i.destroyed||!i.params)return;let t=i.params.lazyPreloadPrevNext;const e=i.slides.length;if(!e||!t||t<0)return;t=Math.min(t,e);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),n=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const r=n,o=[r-t];o.push(...Array.from({length:t}).map((l,c)=>r+s+c)),i.slides.forEach((l,c)=>{o.includes(l.column)&&Gi(i,c)});return}const a=n+s-1;if(i.params.rewind||i.params.loop)for(let r=n-t;r<=a+t;r+=1){const o=(r%e+e)%e;(o<n||o>a)&&Gi(i,o)}else for(let r=Math.max(n-t,0);r<=Math.min(a+t,e-1);r+=1)r!==n&&(r>a||r<n)&&Gi(i,r)};function zo(i){const{slidesGrid:t,params:e}=i,s=i.rtlTranslate?i.translate:-i.translate;let n;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?s>=t[a]&&s<t[a+1]-(t[a+1]-t[a])/2?n=a:s>=t[a]&&s<t[a+1]&&(n=a+1):s>=t[a]&&(n=a);return e.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Ro(i){const t=this,e=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:n,activeIndex:a,realIndex:r,snapIndex:o}=t;let l=i,c;const d=h=>{let f=h-t.virtual.slidesBefore;return f<0&&(f=t.virtual.slides.length+f),f>=t.virtual.slides.length&&(f-=t.virtual.slides.length),f};if(typeof l>"u"&&(l=zo(t)),s.indexOf(e)>=0)c=s.indexOf(e);else{const h=Math.min(n.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/n.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===a){c!==o&&(t.snapIndex=c,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=d(l));return}let u;t.virtual&&n.virtual.enabled&&n.loop?u=d(l):t.slides[l]?u=parseInt(t.slides[l].getAttribute("data-swiper-slide-index")||l,10):u=l,Object.assign(t,{previousSnapIndex:o,snapIndex:c,previousRealIndex:r,realIndex:u,previousIndex:a,activeIndex:l}),t.initialized&&us(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(r!==u&&t.emit("realIndexChange"),t.emit("slideChange"))}function Vo(i,t){const e=this,s=e.params;let n=i.closest(`.${s.slideClass}, swiper-slide`);!n&&e.isElement&&t&&t.length>1&&t.includes(i)&&[...t.slice(t.indexOf(i)+1,t.length)].forEach(o=>{!n&&o.matches&&o.matches(`.${s.slideClass}, swiper-slide`)&&(n=o)});let a=!1,r;if(n){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===n){a=!0,r=o;break}}if(n&&a)e.clickedSlide=n,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=r;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}s.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var Bo={updateSize:Lo,updateSlides:Po,updateAutoHeight:Ao,updateSlidesOffset:Oo,updateSlidesProgress:Do,updateProgress:Io,updateSlidesClasses:Fo,updateActiveIndex:Ro,updateClickedSlide:Vo};function No(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const t=this,{params:e,rtlTranslate:s,translate:n,wrapperEl:a}=t;if(e.virtualTranslate)return s?-n:n;if(e.cssMode)return n;let r=go(a,i);return r+=t.cssOverflowAdjustment(),s&&(r=-r),r||0}function $o(i,t){const e=this,{rtlTranslate:s,params:n,wrapperEl:a,progress:r}=e;let o=0,l=0;const c=0;e.isHorizontal()?o=s?-i:i:l=i,n.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),e.previousTranslate=e.translate,e.translate=e.isHorizontal()?o:l,n.cssMode?a[e.isHorizontal()?"scrollLeft":"scrollTop"]=e.isHorizontal()?-o:-l:n.virtualTranslate||(e.isHorizontal()?o-=e.cssOverflowAdjustment():l-=e.cssOverflowAdjustment(),a.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let d;const u=e.maxTranslate()-e.minTranslate();u===0?d=0:d=(i-e.minTranslate())/u,d!==r&&e.updateProgress(i),e.emit("setTranslate",e.translate,t)}function Ho(){return-this.snapGrid[0]}function jo(){return-this.snapGrid[this.snapGrid.length-1]}function qo(i,t,e,s,n){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),s===void 0&&(s=!0);const a=this,{params:r,wrapperEl:o}=a;if(a.animating&&r.preventInteractionOnTransition)return!1;const l=a.minTranslate(),c=a.maxTranslate();let d;if(s&&i>l?d=l:s&&i<c?d=c:d=i,a.updateProgress(d),r.cssMode){const u=a.isHorizontal();if(t===0)o[u?"scrollLeft":"scrollTop"]=-d;else{if(!a.support.smoothScroll)return Ia({swiper:a,targetPosition:-d,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(d),e&&(a.emit("beforeTransitionStart",t,n),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(d),e&&(a.emit("beforeTransitionStart",t,n),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(h){!a||a.destroyed||h.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,e&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var Wo={getTranslate:No,setTranslate:$o,minTranslate:Ho,maxTranslate:jo,translateTo:qo};function Go(i,t){const e=this;e.params.cssMode||(e.wrapperEl.style.transitionDuration=`${i}ms`,e.wrapperEl.style.transitionDelay=i===0?"0ms":""),e.emit("setTransition",i,t)}function za(i){let{swiper:t,runCallbacks:e,direction:s,step:n}=i;const{activeIndex:a,previousIndex:r}=t;let o=s;if(o||(a>r?o="next":a<r?o="prev":o="reset"),t.emit(`transition${n}`),e&&a!==r){if(o==="reset"){t.emit(`slideResetTransition${n}`);return}t.emit(`slideChangeTransition${n}`),o==="next"?t.emit(`slideNextTransition${n}`):t.emit(`slidePrevTransition${n}`)}}function Yo(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;s.cssMode||(s.autoHeight&&e.updateAutoHeight(),za({swiper:e,runCallbacks:i,direction:t,step:"Start"}))}function Xo(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;e.animating=!1,!s.cssMode&&(e.setTransition(0),za({swiper:e,runCallbacks:i,direction:t,step:"End"}))}var Uo={setTransition:Go,transitionStart:Yo,transitionEnd:Xo};function Ko(i,t,e,s,n){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const a=this;let r=i;r<0&&(r=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:h,wrapperEl:f,enabled:m}=a;if(a.animating&&o.preventInteractionOnTransition||!m&&!s&&!n)return!1;const p=Math.min(a.params.slidesPerGroupSkip,r);let v=p+Math.floor((r-p)/a.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const x=-l[v];if(o.normalizeSlideIndex)for(let b=0;b<c.length;b+=1){const y=-Math.floor(x*100),_=Math.floor(c[b]*100),S=Math.floor(c[b+1]*100);typeof c[b+1]<"u"?y>=_&&y<S-(S-_)/2?r=b:y>=_&&y<S&&(r=b+1):y>=_&&(r=b)}if(a.initialized&&r!==u&&(!a.allowSlideNext&&(h?x>a.translate&&x>a.minTranslate():x<a.translate&&x<a.minTranslate())||!a.allowSlidePrev&&x>a.translate&&x>a.maxTranslate()&&(u||0)!==r))return!1;r!==(d||0)&&e&&a.emit("beforeSlideChangeStart"),a.updateProgress(x);let g;if(r>u?g="next":r<u?g="prev":g="reset",h&&-x===a.translate||!h&&x===a.translate)return a.updateActiveIndex(r),o.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),o.effect!=="slide"&&a.setTranslate(x),g!=="reset"&&(a.transitionStart(e,g),a.transitionEnd(e,g)),!1;if(o.cssMode){const b=a.isHorizontal(),y=h?x:-x;if(t===0){const _=a.virtual&&a.params.virtual.enabled;_&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),_&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[b?"scrollLeft":"scrollTop"]=y})):f[b?"scrollLeft":"scrollTop"]=y,_&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1})}else{if(!a.support.smoothScroll)return Ia({swiper:a,targetPosition:y,side:b?"left":"top"}),!0;f.scrollTo({[b?"left":"top"]:y,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(x),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(e,g),t===0?a.transitionEnd(e,g):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(y){!a||a.destroyed||y.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(e,g))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function Zo(i,t,e,s){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this;let a=i;return n.params.loop&&(n.virtual&&n.params.virtual.enabled?a=a+n.virtual.slidesBefore:a=n.getSlideIndexByData(a)),n.slideTo(a,t,e,s)}function Jo(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{enabled:n,params:a,animating:r}=s;if(!n)return s;let o=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(o=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<a.slidesPerGroupSkip?1:o,c=s.virtual&&a.virtual.enabled;if(a.loop){if(r&&!c&&a.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,i,t,e)}),!0}return a.rewind&&s.isEnd?s.slideTo(0,i,t,e):s.slideTo(s.activeIndex+l,i,t,e)}function Qo(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{params:n,snapGrid:a,slidesGrid:r,rtlTranslate:o,enabled:l,animating:c}=s;if(!l)return s;const d=s.virtual&&n.virtual.enabled;if(n.loop){if(c&&!d&&n.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const u=o?s.translate:-s.translate;function h(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const f=h(u),m=a.map(x=>h(x));let p=a[m.indexOf(f)-1];if(typeof p>"u"&&n.cssMode){let x;a.forEach((g,b)=>{f>=g&&(x=b)}),typeof x<"u"&&(p=a[x>0?x-1:x])}let v=0;if(typeof p<"u"&&(v=r.indexOf(p),v<0&&(v=s.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(v=v-s.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),n.rewind&&s.isBeginning){const x=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(x,i,t,e)}else if(n.loop&&s.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(v,i,t,e)}),!0;return s.slideTo(v,i,t,e)}function tl(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this;return s.slideTo(s.activeIndex,i,t,e)}function el(i,t,e,s){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=.5);const n=this;let a=n.activeIndex;const r=Math.min(n.params.slidesPerGroupSkip,a),o=r+Math.floor((a-r)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[o]){const c=n.snapGrid[o],d=n.snapGrid[o+1];l-c>(d-c)*s&&(a+=n.params.slidesPerGroup)}else{const c=n.snapGrid[o-1],d=n.snapGrid[o];l-c<=(d-c)*s&&(a-=n.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,n.slidesGrid.length-1),n.slideTo(a,i,t,e)}function il(){const i=this,{params:t,slidesEl:e}=i,s=t.slidesPerView==="auto"?i.slidesPerViewDynamic():t.slidesPerView;let n=i.clickedIndex,a;const r=i.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(i.animating)return;a=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?n<i.loopedSlides-s/2||n>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),n=i.getSlideIndex(mt(e,`${r}[data-swiper-slide-index="${a}"]`)[0]),$e(()=>{i.slideTo(n)})):i.slideTo(n):n>i.slides.length-s?(i.loopFix(),n=i.getSlideIndex(mt(e,`${r}[data-swiper-slide-index="${a}"]`)[0]),$e(()=>{i.slideTo(n)})):i.slideTo(n)}else i.slideTo(n)}var sl={slideTo:Ko,slideToLoop:Zo,slideNext:Jo,slidePrev:Qo,slideReset:tl,slideToClosest:el,slideToClickedSlide:il};function nl(i){const t=this,{params:e,slidesEl:s}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;mt(s,`.${e.slideClass}, swiper-slide`).forEach((a,r)=>{a.setAttribute("data-swiper-slide-index",r)}),t.loopFix({slideRealIndex:i,direction:e.centeredSlides?void 0:"next"})}function al(i){let{slideRealIndex:t,slideTo:e=!0,direction:s,setTranslate:n,activeSlideIndex:a,byController:r,byMousewheel:o}=i===void 0?{}:i;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:h,params:f}=l;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){e&&(!f.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):f.centeredSlides&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}const m=f.slidesPerView==="auto"?l.slidesPerViewDynamic():Math.ceil(parseFloat(f.slidesPerView,10));let p=f.loopedSlides||m;p%f.slidesPerGroup!==0&&(p+=f.slidesPerGroup-p%f.slidesPerGroup),l.loopedSlides=p;const v=[],x=[];let g=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(l.slides.filter(w=>w.classList.contains(f.slideActiveClass))[0]):g=a;const b=s==="next"||!s,y=s==="prev"||!s;let _=0,S=0;if(a<p){_=Math.max(p-a,f.slidesPerGroup);for(let w=0;w<p-a;w+=1){const k=w-Math.floor(w/c.length)*c.length;v.push(c.length-k-1)}}else if(a>l.slides.length-p*2){S=Math.max(a-(l.slides.length-p*2),f.slidesPerGroup);for(let w=0;w<S;w+=1){const k=w-Math.floor(w/c.length)*c.length;x.push(k)}}if(y&&v.forEach(w=>{l.slides[w].swiperLoopMoveDOM=!0,h.prepend(l.slides[w]),l.slides[w].swiperLoopMoveDOM=!1}),b&&x.forEach(w=>{l.slides[w].swiperLoopMoveDOM=!0,h.append(l.slides[w]),l.slides[w].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"&&l.updateSlides(),f.watchSlidesProgress&&l.updateSlidesOffset(),e){if(v.length>0&&y)if(typeof t>"u"){const w=l.slidesGrid[g],M=l.slidesGrid[g+_]-w;o?l.setTranslate(l.translate-M):(l.slideTo(g+_,0,!1,!0),n&&(l.touches[l.isHorizontal()?"startX":"startY"]+=M,l.touchEventsData.currentTranslate=l.translate))}else n&&(l.slideToLoop(t,0,!1,!0),l.touchEventsData.currentTranslate=l.translate);else if(x.length>0&&b)if(typeof t>"u"){const w=l.slidesGrid[g],M=l.slidesGrid[g-S]-w;o?l.setTranslate(l.translate-M):(l.slideTo(g-S,0,!1,!0),n&&(l.touches[l.isHorizontal()?"startX":"startY"]+=M,l.touchEventsData.currentTranslate=l.translate))}else l.slideToLoop(t,0,!1,!0)}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!r){const w={slideRealIndex:t,direction:s,setTranslate:n,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(k=>{!k.destroyed&&k.params.loop&&k.loopFix({...w,slideTo:k.params.slidesPerView===f.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...w,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?e:!1})}l.emit("loopFix")}function rl(){const i=this,{params:t,slidesEl:e}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(n=>{const a=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;s[a]=n}),i.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),s.forEach(n=>{e.append(n)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var ol={loopCreate:nl,loopFix:al,loopDestroy:rl};function ll(i){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const e=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),e.style.cursor="move",e.style.cursor=i?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function cl(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var dl={setGrabCursor:ll,unsetGrabCursor:cl};function ul(i,t){t===void 0&&(t=this);function e(s){if(!s||s===ht()||s===et())return null;s.assignedSlot&&(s=s.assignedSlot);const n=s.closest(i);return!n&&!s.getRootNode?null:n||e(s.getRootNode().host)}return e(t)}function hl(i){const t=this,e=ht(),s=et(),n=t.touchEventsData;n.evCache.push(i);const{params:a,touches:r,enabled:o}=t;if(!o||!a.simulateTouch&&i.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=i;l.originalEvent&&(l=l.originalEvent);let c=l.target;if(a.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(c)||"which"in l&&l.which===3||"button"in l&&l.button>0||n.isTouched&&n.isMoved)return;const d=!!a.noSwipingClass&&a.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;d&&l.target&&l.target.shadowRoot&&u&&(c=u[0]);const h=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(l.target&&l.target.shadowRoot);if(a.noSwiping&&(f?ul(h,c):c.closest(h))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;r.currentX=l.pageX,r.currentY=l.pageY;const m=r.currentX,p=r.currentY,v=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,x=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(v&&(m<=x||m>=s.innerWidth-x))if(v==="prevent")i.preventDefault();else return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=m,r.startY=p,n.touchStartTime=Pt(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(n.allowThresholdMove=!1);let g=!0;c.matches(n.focusableElements)&&(g=!1,c.nodeName==="SELECT"&&(n.isTouched=!1)),e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==c&&e.activeElement.blur();const b=g&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||b)&&!c.isContentEditable&&l.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function fl(i){const t=ht(),e=this,s=e.touchEventsData,{params:n,touches:a,rtlTranslate:r,enabled:o}=e;if(!o||!n.simulateTouch&&i.pointerType==="mouse")return;let l=i;if(l.originalEvent&&(l=l.originalEvent),!s.isTouched){s.startMoving&&s.isScrolling&&e.emit("touchMoveOpposite",l);return}const c=s.evCache.findIndex(w=>w.pointerId===l.pointerId);c>=0&&(s.evCache[c]=l);const d=s.evCache.length>1?s.evCache[0]:l,u=d.pageX,h=d.pageY;if(l.preventedByNestedSwiper){a.startX=u,a.startY=h;return}if(!e.allowTouchMove){l.target.matches(s.focusableElements)||(e.allowClick=!1),s.isTouched&&(Object.assign(a,{startX:u,startY:h,prevX:e.touches.currentX,prevY:e.touches.currentY,currentX:u,currentY:h}),s.touchStartTime=Pt());return}if(n.touchReleaseOnEdges&&!n.loop){if(e.isVertical()){if(h<a.startY&&e.translate<=e.maxTranslate()||h>a.startY&&e.translate>=e.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(u<a.startX&&e.translate<=e.maxTranslate()||u>a.startX&&e.translate>=e.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,e.allowClick=!1;return}if(s.allowTouchCallbacks&&e.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;a.currentX=u,a.currentY=h;const f=a.currentX-a.startX,m=a.currentY-a.startY;if(e.params.threshold&&Math.sqrt(f**2+m**2)<e.params.threshold)return;if(typeof s.isScrolling>"u"){let w;e.isHorizontal()&&a.currentY===a.startY||e.isVertical()&&a.currentX===a.startX?s.isScrolling=!1:f*f+m*m>=25&&(w=Math.atan2(Math.abs(m),Math.abs(f))*180/Math.PI,s.isScrolling=e.isHorizontal()?w>n.touchAngle:90-w>n.touchAngle)}if(s.isScrolling&&e.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(s.startMoving=!0),s.isScrolling||e.zoom&&e.params.zoom&&e.params.zoom.enabled&&s.evCache.length>1){s.isTouched=!1;return}if(!s.startMoving)return;e.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let p=e.isHorizontal()?f:m,v=e.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;n.oneWayMovement&&(p=Math.abs(p)*(r?1:-1),v=Math.abs(v)*(r?1:-1)),a.diff=p,p*=n.touchRatio,r&&(p=-p,v=-v);const x=e.touchesDirection;e.swipeDirection=p>0?"prev":"next",e.touchesDirection=v>0?"prev":"next";const g=e.params.loop&&!n.cssMode,b=e.swipeDirection==="next"&&e.allowSlideNext||e.swipeDirection==="prev"&&e.allowSlidePrev;if(!s.isMoved){if(g&&b&&e.loopFix({direction:e.swipeDirection}),s.startTranslate=e.getTranslate(),e.setTransition(0),e.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(w)}s.allowMomentumBounce=!1,n.grabCursor&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!0),e.emit("sliderFirstMove",l)}let y;s.isMoved&&x!==e.touchesDirection&&g&&b&&Math.abs(p)>=1&&(e.loopFix({direction:e.swipeDirection,setTranslate:!0}),y=!0),e.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=p+s.startTranslate;let _=!0,S=n.resistanceRatio;if(n.touchReleaseOnEdges&&(S=0),p>0?(g&&b&&!y&&s.currentTranslate>(n.centeredSlides?e.minTranslate()-e.size/2:e.minTranslate())&&e.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>e.minTranslate()&&(_=!1,n.resistance&&(s.currentTranslate=e.minTranslate()-1+(-e.minTranslate()+s.startTranslate+p)**S))):p<0&&(g&&b&&!y&&s.currentTranslate<(n.centeredSlides?e.maxTranslate()+e.size/2:e.maxTranslate())&&e.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:e.slides.length-(n.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<e.maxTranslate()&&(_=!1,n.resistance&&(s.currentTranslate=e.maxTranslate()+1-(e.maxTranslate()-s.startTranslate-p)**S))),_&&(l.preventedByNestedSwiper=!0),!e.allowSlideNext&&e.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&e.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&!e.allowSlideNext&&(s.currentTranslate=s.startTranslate),n.threshold>0)if(Math.abs(p)>n.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,s.currentTranslate=s.startTranslate,a.diff=e.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{s.currentTranslate=s.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&e.freeMode||n.watchSlidesProgress)&&(e.updateActiveIndex(),e.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.freeMode.onTouchMove(),e.updateProgress(s.currentTranslate),e.setTranslate(s.currentTranslate))}function pl(i){const t=this,e=t.touchEventsData,s=e.evCache.findIndex(b=>b.pointerId===i.pointerId);if(s>=0&&e.evCache.splice(s,1),["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:n,touches:a,rtlTranslate:r,slidesGrid:o,enabled:l}=t;if(!l||!n.simulateTouch&&i.pointerType==="mouse")return;let c=i;if(c.originalEvent&&(c=c.originalEvent),e.allowTouchCallbacks&&t.emit("touchEnd",c),e.allowTouchCallbacks=!1,!e.isTouched){e.isMoved&&n.grabCursor&&t.setGrabCursor(!1),e.isMoved=!1,e.startMoving=!1;return}n.grabCursor&&e.isMoved&&e.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Pt(),u=d-e.touchStartTime;if(t.allowClick){const b=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(b&&b[0]||c.target,b),t.emit("tap click",c),u<300&&d-e.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(e.lastClickTime=Pt(),$e(()=>{t.destroyed||(t.allowClick=!0)}),!e.isTouched||!e.isMoved||!t.swipeDirection||a.diff===0||e.currentTranslate===e.startTranslate){e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;return}e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;let h;if(n.followFinger?h=r?t.translate:-t.translate:h=-e.currentTranslate,n.cssMode)return;if(n.freeMode&&n.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:h});return}let f=0,m=t.slidesSizesGrid[0];for(let b=0;b<o.length;b+=b<n.slidesPerGroupSkip?1:n.slidesPerGroup){const y=b<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;typeof o[b+y]<"u"?h>=o[b]&&h<o[b+y]&&(f=b,m=o[b+y]-o[b]):h>=o[b]&&(f=b,m=o[o.length-1]-o[o.length-2])}let p=null,v=null;n.rewind&&(t.isBeginning?v=n.virtual&&n.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const x=(h-o[f])/m,g=f<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;if(u>n.longSwipesMs){if(!n.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=n.longSwipesRatio?t.slideTo(n.rewind&&t.isEnd?p:f+g):t.slideTo(f)),t.swipeDirection==="prev"&&(x>1-n.longSwipesRatio?t.slideTo(f+g):v!==null&&x<0&&Math.abs(x)>n.longSwipesRatio?t.slideTo(v):t.slideTo(f))}else{if(!n.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(f+g):t.slideTo(f):(t.swipeDirection==="next"&&t.slideTo(p!==null?p:f+g),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:f))}}function Qs(){const i=this,{params:t,el:e}=i;if(e&&e.offsetWidth===0)return;t.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:n,snapGrid:a}=i,r=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const o=r&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!o?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!r?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=n,i.allowSlideNext=s,i.params.watchOverflow&&a!==i.snapGrid&&i.checkOverflow()}function gl(i){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&i.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function ml(){const i=this,{wrapperEl:t,rtlTranslate:e,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-t.scrollLeft:i.translate=-t.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let n;const a=i.maxTranslate()-i.minTranslate();a===0?n=0:n=(i.translate-i.minTranslate())/a,n!==i.progress&&i.updateProgress(e?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function bl(i){const t=this;yi(t,i.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let tn=!1;function vl(){}const Ra=(i,t)=>{const e=ht(),{params:s,el:n,wrapperEl:a,device:r}=i,o=!!s.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;n[l]("pointerdown",i.onTouchStart,{passive:!1}),e[l]("pointermove",i.onTouchMove,{passive:!1,capture:o}),e[l]("pointerup",i.onTouchEnd,{passive:!0}),e[l]("pointercancel",i.onTouchEnd,{passive:!0}),e[l]("pointerout",i.onTouchEnd,{passive:!0}),e[l]("pointerleave",i.onTouchEnd,{passive:!0}),e[l]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&n[l]("click",i.onClick,!0),s.cssMode&&a[l]("scroll",i.onScroll),s.updateOnWindowResize?i[c](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",Qs,!0):i[c]("observerUpdate",Qs,!0),n[l]("load",i.onLoad,{capture:!0})};function xl(){const i=this,t=ht(),{params:e}=i;i.onTouchStart=hl.bind(i),i.onTouchMove=fl.bind(i),i.onTouchEnd=pl.bind(i),e.cssMode&&(i.onScroll=ml.bind(i)),i.onClick=gl.bind(i),i.onLoad=bl.bind(i),tn||(t.addEventListener("touchstart",vl),tn=!0),Ra(i,"on")}function yl(){Ra(this,"off")}var _l={attachEvents:xl,detachEvents:yl};const en=(i,t)=>i.grid&&t.grid&&t.grid.rows>1;function wl(){const i=this,{realIndex:t,initialized:e,params:s,el:n}=i,a=s.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const r=i.getBreakpoint(a,i.params.breakpointsBase,i.el);if(!r||i.currentBreakpoint===r)return;const l=(r in a?a[r]:void 0)||i.originalParams,c=en(i,s),d=en(i,l),u=s.enabled;c&&!d?(n.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!c&&d&&(n.classList.add(`${s.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&s.grid.fill==="column")&&n.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(x=>{if(typeof l[x]>"u")return;const g=s[x]&&s[x].enabled,b=l[x]&&l[x].enabled;g&&!b&&i[x].disable(),!g&&b&&i[x].enable()});const h=l.direction&&l.direction!==s.direction,f=s.loop&&(l.slidesPerView!==s.slidesPerView||h),m=s.loop;h&&e&&i.changeDirection(),dt(i.params,l);const p=i.params.enabled,v=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),u&&!p?i.disable():!u&&p&&i.enable(),i.currentBreakpoint=r,i.emit("_beforeBreakpoint",l),e&&(f?(i.loopDestroy(),i.loopCreate(t),i.updateSlides()):!m&&v?(i.loopCreate(t),i.updateSlides()):m&&!v&&i.loopDestroy()),i.emit("breakpoint",l)}function Sl(i,t,e){if(t===void 0&&(t="window"),!i||t==="container"&&!e)return;let s=!1;const n=et(),a=t==="window"?n.innerHeight:e.clientHeight,r=Object.keys(i).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:a*l,point:o}}return{value:o,point:o}});r.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<r.length;o+=1){const{point:l,value:c}=r[o];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=e.clientWidth&&(s=l)}return s||"max"}var Ml={setBreakpoint:wl,getBreakpoint:Sl};function Tl(i,t){const e=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(n=>{s[n]&&e.push(t+n)}):typeof s=="string"&&e.push(t+s)}),e}function kl(){const i=this,{classNames:t,params:e,rtl:s,el:n,device:a}=i,r=Tl(["initialized",e.direction,{"free-mode":i.params.freeMode&&e.freeMode.enabled},{autoheight:e.autoHeight},{rtl:s},{grid:e.grid&&e.grid.rows>1},{"grid-column":e.grid&&e.grid.rows>1&&e.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":e.cssMode},{centered:e.cssMode&&e.centeredSlides},{"watch-progress":e.watchSlidesProgress}],e.containerModifierClass);t.push(...r),n.classList.add(...t),i.emitContainerClasses()}function Cl(){const i=this,{el:t,classNames:e}=i;t.classList.remove(...e),i.emitContainerClasses()}var El={addClasses:kl,removeClasses:Cl};function Ll(){const i=this,{isLocked:t,params:e}=i,{slidesOffsetBefore:s}=e;if(s){const n=i.slides.length-1,a=i.slidesGrid[n]+i.slidesSizesGrid[n]+s*2;i.isLocked=i.size>a}else i.isLocked=i.snapGrid.length===1;e.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),e.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),t&&t!==i.isLocked&&(i.isEnd=!1),t!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Pl={checkOverflow:Ll},sn={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Al(i,t){return function(s){s===void 0&&(s={});const n=Object.keys(s)[0],a=s[n];if(typeof a!="object"||a===null){dt(t,s);return}if(i[n]===!0&&(i[n]={enabled:!0}),n==="navigation"&&i[n]&&i[n].enabled&&!i[n].prevEl&&!i[n].nextEl&&(i[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&i[n]&&i[n].enabled&&!i[n].el&&(i[n].auto=!0),!(n in i&&"enabled"in a)){dt(t,s);return}typeof i[n]=="object"&&!("enabled"in i[n])&&(i[n].enabled=!0),i[n]||(i[n]={enabled:!1}),dt(t,s)}}const Yi={eventsEmitter:Eo,update:Bo,translate:Wo,transition:Uo,slide:sl,loop:ol,grabCursor:dl,events:_l,breakpoints:Ml,checkOverflow:Pl,classes:El},Xi={};class ct{constructor(){let t,e;for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?e=n[0]:[t,e]=n,e||(e={}),e=dt({},e),t&&!e.el&&(e.el=t);const r=ht();if(e.el&&typeof e.el=="string"&&r.querySelectorAll(e.el).length>1){const d=[];return r.querySelectorAll(e.el).forEach(u=>{const h=dt({},e,{el:u});d.push(new ct(h))}),d}const o=this;o.__swiper__=!0,o.support=Fa(),o.device=So({userAgent:e.userAgent}),o.browser=To(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],e.modules&&Array.isArray(e.modules)&&o.modules.push(...e.modules);const l={};o.modules.forEach(d=>{d({params:e,swiper:o,extendParams:Al(e,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=dt({},sn,l);return o.params=dt({},c,Xi,e),o.originalParams=dt({},o.params),o.passedParams=dt({},e),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getSlideIndex(t){const{slidesEl:e,params:s}=this,n=mt(e,`.${s.slideClass}, swiper-slide`),a=Ei(n[0]);return Ei(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(e=>e.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:e,params:s}=t;t.slides=mt(e,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,e){const s=this;t=Math.min(Math.max(t,0),1);const n=s.minTranslate(),r=(s.maxTranslate()-n)*t+n;s.translateTo(r,typeof e>"u"?0:e),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",e.join(" "))}getSlideClasses(t){const e=this;return e.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(e.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=[];t.slides.forEach(s=>{const n=t.getSlideClasses(s);e.push({slideEl:s,classNames:n}),t.emit("_slideClass",s,n)}),t.emit("_slideClasses",e)}slidesPerViewDynamic(t,e){t===void 0&&(t="current"),e===void 0&&(e=!1);const s=this,{params:n,slides:a,slidesGrid:r,slidesSizesGrid:o,size:l,activeIndex:c}=s;let d=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let u=a[c]?a[c].swiperSlideSize:0,h;for(let f=c+1;f<a.length;f+=1)a[f]&&!h&&(u+=a[f].swiperSlideSize,d+=1,u>l&&(h=!0));for(let f=c-1;f>=0;f-=1)a[f]&&!h&&(u+=a[f].swiperSlideSize,d+=1,u>l&&(h=!0))}else if(t==="current")for(let u=c+1;u<a.length;u+=1)(e?r[u]+o[u]-r[c]<l:r[u]-r[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)r[c]-r[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:e,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete&&yi(t,r)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const r=t.rtlTranslate?t.translate*-1:t.translate,o=Math.min(Math.max(r,t.maxTranslate()),t.minTranslate());t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)n(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const r=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(r.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||n()}s.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,e){e===void 0&&(e=!0);const s=this,n=s.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),s.emit("changeDirection"),e&&s.update()),s}changeLanguageDirection(t){const e=this;e.rtl&&t==="rtl"||!e.rtl&&t==="ltr"||(e.rtl=t==="rtl",e.rtlTranslate=e.params.direction==="horizontal"&&e.rtl,e.rtl?(e.el.classList.add(`${e.params.containerModifierClass}rtl`),e.el.dir="rtl"):(e.el.classList.remove(`${e.params.containerModifierClass}rtl`),e.el.dir="ltr"),e.update())}mount(t){const e=this;if(e.mounted)return!0;let s=t||e.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=e,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(e.isElement=!0);const n=()=>`.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(n()):mt(s,n())[0])();return!r&&e.params.createElements&&(r=Os("div",e.params.wrapperClass),s.append(r),mt(s,`.${e.params.slideClass}`).forEach(o=>{r.append(o)})),Object.assign(e,{el:s,wrapperEl:r,slidesEl:e.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:r,hostEl:e.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||Rt(s,"direction")==="rtl",rtlTranslate:e.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||Rt(s,"direction")==="rtl"),wrongRTL:Rt(r,"display")==="-webkit-box"}),!0}init(t){const e=this;if(e.initialized||e.mount(t)===!1)return e;e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.enabled&&e.setGrabCursor(),e.params.loop&&e.virtual&&e.params.virtual.enabled?e.slideTo(e.params.initialSlide+e.virtual.slidesBefore,0,e.params.runCallbacksOnInit,!1,!0):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit,!1,!0),e.params.loop&&e.loopCreate(),e.attachEvents();const n=[...e.el.querySelectorAll('[loading="lazy"]')];return e.isElement&&n.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(a=>{a.complete?yi(e,a):a.addEventListener("load",r=>{yi(e,r.target)})}),us(e),e.initialized=!0,us(e),e.emit("init"),e.emit("afterInit"),e}destroy(t,e){t===void 0&&(t=!0),e===void 0&&(e=!0);const s=this,{params:n,el:a,wrapperEl:r,slides:o}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),n.loop&&s.loopDestroy(),e&&(s.removeClasses(),a.removeAttribute("style"),r.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),t!==!1&&(s.el.swiper=null,fo(s)),s.destroyed=!0),null}static extendDefaults(t){dt(Xi,t)}static get extendedDefaults(){return Xi}static get defaults(){return sn}static installModule(t){ct.prototype.__modules__||(ct.prototype.__modules__=[]);const e=ct.prototype.__modules__;typeof t=="function"&&e.indexOf(t)<0&&e.push(t)}static use(t){return Array.isArray(t)?(t.forEach(e=>ct.installModule(e)),ct):(ct.installModule(t),ct)}}Object.keys(Yi).forEach(i=>{Object.keys(Yi[i]).forEach(t=>{ct.prototype[t]=Yi[i][t]})});ct.use([ko,Co]);function Va(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a=ht(),r=et();t.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(d){if(!t.enabled)return;const{rtlTranslate:u}=t;let h=d;h.originalEvent&&(h=h.originalEvent);const f=h.keyCode||h.charCode,m=t.params.keyboard.pageUpDown,p=m&&f===33,v=m&&f===34,x=f===37,g=f===39,b=f===38,y=f===40;if(!t.allowSlideNext&&(t.isHorizontal()&&g||t.isVertical()&&y||v)||!t.allowSlidePrev&&(t.isHorizontal()&&x||t.isVertical()&&b||p))return!1;if(!(h.shiftKey||h.altKey||h.ctrlKey||h.metaKey)&&!(a.activeElement&&a.activeElement.nodeName&&(a.activeElement.nodeName.toLowerCase()==="input"||a.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(p||v||x||g||b||y)){let _=!1;if(Li(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&Li(t.el,`.${t.params.slideActiveClass}`).length===0)return;const S=t.el,w=S.clientWidth,k=S.clientHeight,M=r.innerWidth,P=r.innerHeight,T=bo(S);u&&(T.left-=S.scrollLeft);const E=[[T.left,T.top],[T.left+w,T.top],[T.left,T.top+k],[T.left+w,T.top+k]];for(let C=0;C<E.length;C+=1){const A=E[C];if(A[0]>=0&&A[0]<=M&&A[1]>=0&&A[1]<=P){if(A[0]===0&&A[1]===0)continue;_=!0}}if(!_)return}t.isHorizontal()?((p||v||x||g)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),((v||g)&&!u||(p||x)&&u)&&t.slideNext(),((p||x)&&!u||(v||g)&&u)&&t.slidePrev()):((p||v||b||y)&&(h.preventDefault?h.preventDefault():h.returnValue=!1),(v||y)&&t.slideNext(),(p||b)&&t.slidePrev()),n("keyPress",f)}}function l(){t.keyboard.enabled||(a.addEventListener("keydown",o),t.keyboard.enabled=!0)}function c(){t.keyboard.enabled&&(a.removeEventListener("keydown",o),t.keyboard.enabled=!1)}s("init",()=>{t.params.keyboard.enabled&&l()}),s("destroy",()=>{t.keyboard.enabled&&c()}),Object.assign(t.keyboard,{enable:l,disable:c})}function Ol(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a=et();e({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let r,o=Pt(),l;const c=[];function d(b){let w=0,k=0,M=0,P=0;return"detail"in b&&(k=b.detail),"wheelDelta"in b&&(k=-b.wheelDelta/120),"wheelDeltaY"in b&&(k=-b.wheelDeltaY/120),"wheelDeltaX"in b&&(w=-b.wheelDeltaX/120),"axis"in b&&b.axis===b.HORIZONTAL_AXIS&&(w=k,k=0),M=w*10,P=k*10,"deltaY"in b&&(P=b.deltaY),"deltaX"in b&&(M=b.deltaX),b.shiftKey&&!M&&(M=P,P=0),(M||P)&&b.deltaMode&&(b.deltaMode===1?(M*=40,P*=40):(M*=800,P*=800)),M&&!w&&(w=M<1?-1:1),P&&!k&&(k=P<1?-1:1),{spinX:w,spinY:k,pixelX:M,pixelY:P}}function u(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(b){return t.params.mousewheel.thresholdDelta&&b.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&Pt()-o<t.params.mousewheel.thresholdTime?!1:b.delta>=6&&Pt()-o<60?!0:(b.direction<0?(!t.isEnd||t.params.loop)&&!t.animating&&(t.slideNext(),n("scroll",b.raw)):(!t.isBeginning||t.params.loop)&&!t.animating&&(t.slidePrev(),n("scroll",b.raw)),o=new a.Date().getTime(),!1)}function m(b){const y=t.params.mousewheel;if(b.direction<0){if(t.isEnd&&!t.params.loop&&y.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&y.releaseOnEdges)return!0;return!1}function p(b){let y=b,_=!0;if(!t.enabled||b.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const S=t.params.mousewheel;t.params.cssMode&&y.preventDefault();let w=t.el;t.params.mousewheel.eventsTarget!=="container"&&(w=document.querySelector(t.params.mousewheel.eventsTarget));const k=w&&w.contains(y.target);if(!t.mouseEntered&&!k&&!S.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let M=0;const P=t.rtlTranslate?-1:1,T=d(y);if(S.forceToAxis)if(t.isHorizontal())if(Math.abs(T.pixelX)>Math.abs(T.pixelY))M=-T.pixelX*P;else return!0;else if(Math.abs(T.pixelY)>Math.abs(T.pixelX))M=-T.pixelY;else return!0;else M=Math.abs(T.pixelX)>Math.abs(T.pixelY)?-T.pixelX*P:-T.pixelY;if(M===0)return!0;S.invert&&(M=-M);let E=t.getTranslate()+M*S.sensitivity;if(E>=t.minTranslate()&&(E=t.minTranslate()),E<=t.maxTranslate()&&(E=t.maxTranslate()),_=t.params.loop?!0:!(E===t.minTranslate()||E===t.maxTranslate()),_&&t.params.nested&&y.stopPropagation(),!t.params.freeMode||!t.params.freeMode.enabled){const C={time:Pt(),delta:Math.abs(M),direction:Math.sign(M),raw:b};c.length>=2&&c.shift();const A=c.length?c[c.length-1]:void 0;if(c.push(C),A?(C.direction!==A.direction||C.delta>A.delta||C.time>A.time+150)&&f(C):f(C),m(C))return!0}else{const C={time:Pt(),delta:Math.abs(M),direction:Math.sign(M)},A=l&&C.time<l.time+500&&C.delta<=l.delta&&C.direction===l.direction;if(!A){l=void 0;let O=t.getTranslate()+M*S.sensitivity;const F=t.isBeginning,D=t.isEnd;if(O>=t.minTranslate()&&(O=t.minTranslate()),O<=t.maxTranslate()&&(O=t.maxTranslate()),t.setTransition(0),t.setTranslate(O),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!F&&t.isBeginning||!D&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:C.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(r),r=void 0,c.length>=15&&c.shift();const j=c.length?c[c.length-1]:void 0,V=c[0];if(c.push(C),j&&(C.delta>j.delta||C.direction!==j.direction))c.splice(0);else if(c.length>=15&&C.time-V.time<500&&V.delta-C.delta>=1&&C.delta<=6){const J=M>0?.8:.2;l=C,c.splice(0),r=$e(()=>{t.slideToClosest(t.params.speed,!0,void 0,J)},0)}r||(r=$e(()=>{l=C,c.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)},500))}if(A||n("scroll",y),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),S.releaseOnEdges&&(O===t.minTranslate()||O===t.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function v(b){let y=t.el;t.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(t.params.mousewheel.eventsTarget)),y[b]("mouseenter",u),y[b]("mouseleave",h),y[b]("wheel",p)}function x(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",p),!0):t.mousewheel.enabled?!1:(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function g(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,p),!0):t.mousewheel.enabled?(v("removeEventListener"),t.mousewheel.enabled=!1,!0):!1}s("init",()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&g(),t.params.mousewheel.enabled&&x()}),s("destroy",()=>{t.params.cssMode&&x(),t.mousewheel.enabled&&g()}),Object.assign(t.mousewheel,{enable:x,disable:g})}function Ba(i,t,e,s){return i.params.createElements&&Object.keys(s).forEach(n=>{if(!e[n]&&e.auto===!0){let a=mt(i.el,`.${s[n]}`)[0];a||(a=Os("div",s[n]),a.className=s[n],i.el.append(a)),e[n]=a,t[n]=a}}),e}function Dl(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const a=p=>(Array.isArray(p)?p:[p]).filter(v=>!!v);function r(p){let v;return p&&typeof p=="string"&&t.isElement&&(v=t.el.querySelector(p),v)?v:(p&&(typeof p=="string"&&(v=[...document.querySelectorAll(p)]),t.params.uniqueNavElements&&typeof p=="string"&&v.length>1&&t.el.querySelectorAll(p).length===1&&(v=t.el.querySelector(p))),p&&!v?p:v)}function o(p,v){const x=t.params.navigation;p=a(p),p.forEach(g=>{g&&(g.classList[v?"add":"remove"](...x.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=v),t.params.watchOverflow&&t.enabled&&g.classList[t.isLocked?"add":"remove"](x.lockClass))})}function l(){const{nextEl:p,prevEl:v}=t.navigation;if(t.params.loop){o(v,!1),o(p,!1);return}o(v,t.isBeginning&&!t.params.rewind),o(p,t.isEnd&&!t.params.rewind)}function c(p){p.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),n("navigationPrev"))}function d(p){p.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),n("navigationNext"))}function u(){const p=t.params.navigation;if(t.params.navigation=Ba(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let v=r(p.nextEl),x=r(p.prevEl);Object.assign(t.navigation,{nextEl:v,prevEl:x}),v=a(v),x=a(x);const g=(b,y)=>{b&&b.addEventListener("click",y==="next"?d:c),!t.enabled&&b&&b.classList.add(...p.lockClass.split(" "))};v.forEach(b=>g(b,"next")),x.forEach(b=>g(b,"prev"))}function h(){let{nextEl:p,prevEl:v}=t.navigation;p=a(p),v=a(v);const x=(g,b)=>{g.removeEventListener("click",b==="next"?d:c),g.classList.remove(...t.params.navigation.disabledClass.split(" "))};p.forEach(g=>x(g,"next")),v.forEach(g=>x(g,"prev"))}s("init",()=>{t.params.navigation.enabled===!1?m():(u(),l())}),s("toEdge fromEdge lock unlock",()=>{l()}),s("destroy",()=>{h()}),s("enable disable",()=>{let{nextEl:p,prevEl:v}=t.navigation;if(p=a(p),v=a(v),t.enabled){l();return}[...p,...v].filter(x=>!!x).forEach(x=>x.classList.add(t.params.navigation.lockClass))}),s("click",(p,v)=>{let{nextEl:x,prevEl:g}=t.navigation;x=a(x),g=a(g);const b=v.target;if(t.params.navigation.hideOnClick&&!g.includes(b)&&!x.includes(b)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===b||t.pagination.el.contains(b)))return;let y;x.length?y=x[0].classList.contains(t.params.navigation.hiddenClass):g.length&&(y=g[0].classList.contains(t.params.navigation.hiddenClass)),n(y===!0?"navigationShow":"navigationHide"),[...x,...g].filter(_=>!!_).forEach(_=>_.classList.toggle(t.params.navigation.hiddenClass))}});const f=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),l()},m=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:f,disable:m,update:l,init:u,destroy:h})}function ve(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Il(i){let{swiper:t,extendParams:e,on:s,emit:n}=i;const a="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let r,o=0;const l=g=>(Array.isArray(g)?g:[g]).filter(b=>!!b);function c(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(g,b){const{bulletActiveClass:y}=t.params.pagination;g&&(g=g[`${b==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${y}-${b}`),g=g[`${b==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${y}-${b}-${b}`)))}function u(g){const b=g.target.closest(ve(t.params.pagination.bulletClass));if(!b)return;g.preventDefault();const y=Ei(b)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===y)return;const _=t.realIndex,S=t.getSlideIndexByData(y),w=t.getSlideIndexByData(t.realIndex),k=M=>{const P=t.activeIndex;t.loopFix({direction:M,activeSlideIndex:S,slideTo:!1});const T=t.activeIndex;P===T&&t.slideToLoop(_,0,!1,!0)};if(S>t.slides.length-t.loopedSlides)k(S>w?"next":"prev");else if(t.params.centeredSlides){const M=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(t.params.slidesPerView,10));S<Math.floor(M/2)&&k("prev")}t.slideToLoop(y)}else t.slideTo(y)}function h(){const g=t.rtl,b=t.params.pagination;if(c())return;let y=t.pagination.el;y=l(y);let _,S;const w=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,k=t.params.loop?Math.ceil(w/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(S=t.previousRealIndex||0,_=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(_=t.snapIndex,S=t.previousSnapIndex):(S=t.previousIndex||0,_=t.activeIndex||0),b.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const M=t.pagination.bullets;let P,T,E;if(b.dynamicBullets&&(r=ds(M[0],t.isHorizontal()?"width":"height",!0),y.forEach(C=>{C.style[t.isHorizontal()?"width":"height"]=`${r*(b.dynamicMainBullets+4)}px`}),b.dynamicMainBullets>1&&S!==void 0&&(o+=_-(S||0),o>b.dynamicMainBullets-1?o=b.dynamicMainBullets-1:o<0&&(o=0)),P=Math.max(_-o,0),T=P+(Math.min(M.length,b.dynamicMainBullets)-1),E=(T+P)/2),M.forEach(C=>{const A=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(O=>`${b.bulletActiveClass}${O}`)].map(O=>typeof O=="string"&&O.includes(" ")?O.split(" "):O).flat();C.classList.remove(...A)}),y.length>1)M.forEach(C=>{const A=Ei(C);A===_?C.classList.add(...b.bulletActiveClass.split(" ")):t.isElement&&C.setAttribute("part","bullet"),b.dynamicBullets&&(A>=P&&A<=T&&C.classList.add(...`${b.bulletActiveClass}-main`.split(" ")),A===P&&d(C,"prev"),A===T&&d(C,"next"))});else{const C=M[_];if(C&&C.classList.add(...b.bulletActiveClass.split(" ")),t.isElement&&M.forEach((A,O)=>{A.setAttribute("part",O===_?"bullet-active":"bullet")}),b.dynamicBullets){const A=M[P],O=M[T];for(let F=P;F<=T;F+=1)M[F]&&M[F].classList.add(...`${b.bulletActiveClass}-main`.split(" "));d(A,"prev"),d(O,"next")}}if(b.dynamicBullets){const C=Math.min(M.length,b.dynamicMainBullets+4),A=(r*C-r)/2-E*r,O=g?"right":"left";M.forEach(F=>{F.style[t.isHorizontal()?O:"top"]=`${A}px`})}}y.forEach((M,P)=>{if(b.type==="fraction"&&(M.querySelectorAll(ve(b.currentClass)).forEach(T=>{T.textContent=b.formatFractionCurrent(_+1)}),M.querySelectorAll(ve(b.totalClass)).forEach(T=>{T.textContent=b.formatFractionTotal(k)})),b.type==="progressbar"){let T;b.progressbarOpposite?T=t.isHorizontal()?"vertical":"horizontal":T=t.isHorizontal()?"horizontal":"vertical";const E=(_+1)/k;let C=1,A=1;T==="horizontal"?C=E:A=E,M.querySelectorAll(ve(b.progressbarFillClass)).forEach(O=>{O.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${A})`,O.style.transitionDuration=`${t.params.speed}ms`})}b.type==="custom"&&b.renderCustom?(M.innerHTML=b.renderCustom(t,_+1,k),P===0&&n("paginationRender",M)):(P===0&&n("paginationRender",M),n("paginationUpdate",M)),t.params.watchOverflow&&t.enabled&&M.classList[t.isLocked?"add":"remove"](b.lockClass)})}function f(){const g=t.params.pagination;if(c())return;const b=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let y=t.pagination.el;y=l(y);let _="";if(g.type==="bullets"){let S=t.params.loop?Math.ceil(b/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&S>b&&(S=b);for(let w=0;w<S;w+=1)g.renderBullet?_+=g.renderBullet.call(t,w,g.bulletClass):_+=`<${g.bulletElement} ${t.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?_=g.renderFraction.call(t,g.currentClass,g.totalClass):_=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?_=g.renderProgressbar.call(t,g.progressbarFillClass):_=`<span class="${g.progressbarFillClass}"></span>`),t.pagination.bullets=[],y.forEach(S=>{g.type!=="custom"&&(S.innerHTML=_||""),g.type==="bullets"&&t.pagination.bullets.push(...S.querySelectorAll(ve(g.bulletClass)))}),g.type!=="custom"&&n("paginationRender",y[0])}function m(){t.params.pagination=Ba(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const g=t.params.pagination;if(!g.el)return;let b;typeof g.el=="string"&&t.isElement&&(b=t.el.querySelector(g.el)),!b&&typeof g.el=="string"&&(b=[...document.querySelectorAll(g.el)]),b||(b=g.el),!(!b||b.length===0)&&(t.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(b)&&b.length>1&&(b=[...t.el.querySelectorAll(g.el)],b.length>1&&(b=b.filter(y=>Li(y,".swiper")[0]===t.el)[0])),Array.isArray(b)&&b.length===1&&(b=b[0]),Object.assign(t.pagination,{el:b}),b=l(b),b.forEach(y=>{g.type==="bullets"&&g.clickable&&y.classList.add(...(g.clickableClass||"").split(" ")),y.classList.add(g.modifierClass+g.type),y.classList.add(t.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(y.classList.add(`${g.modifierClass}${g.type}-dynamic`),o=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&y.classList.add(g.progressbarOppositeClass),g.clickable&&y.addEventListener("click",u),t.enabled||y.classList.add(g.lockClass)}))}function p(){const g=t.params.pagination;if(c())return;let b=t.pagination.el;b&&(b=l(b),b.forEach(y=>{y.classList.remove(g.hiddenClass),y.classList.remove(g.modifierClass+g.type),y.classList.remove(t.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(y.classList.remove(...(g.clickableClass||"").split(" ")),y.removeEventListener("click",u))})),t.pagination.bullets&&t.pagination.bullets.forEach(y=>y.classList.remove(...g.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const g=t.params.pagination;let{el:b}=t.pagination;b=l(b),b.forEach(y=>{y.classList.remove(g.horizontalClass,g.verticalClass),y.classList.add(t.isHorizontal()?g.horizontalClass:g.verticalClass)})}),s("init",()=>{t.params.pagination.enabled===!1?x():(m(),f(),h())}),s("activeIndexChange",()=>{typeof t.snapIndex>"u"&&h()}),s("snapIndexChange",()=>{h()}),s("snapGridLengthChange",()=>{f(),h()}),s("destroy",()=>{p()}),s("enable disable",()=>{let{el:g}=t.pagination;g&&(g=l(g),g.forEach(b=>b.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),s("lock unlock",()=>{h()}),s("click",(g,b)=>{const y=b.target,_=l(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&_&&_.length>0&&!y.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&y===t.navigation.nextEl||t.navigation.prevEl&&y===t.navigation.prevEl))return;const S=_[0].classList.contains(t.params.pagination.hiddenClass);n(S===!0?"paginationShow":"paginationHide"),_.forEach(w=>w.classList.toggle(t.params.pagination.hiddenClass))}});const v=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:g}=t.pagination;g&&(g=l(g),g.forEach(b=>b.classList.remove(t.params.pagination.paginationDisabledClass))),m(),f(),h()},x=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:g}=t.pagination;g&&(g=l(g),g.forEach(b=>b.classList.add(t.params.pagination.paginationDisabledClass))),p()};Object.assign(t.pagination,{enable:v,disable:x,render:f,update:h,init:m,destroy:p})}function Fl(i){let{swiper:t,extendParams:e,emit:s,on:n}=i,a=!1;const r=ht(),o=et();e({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(h,f){if(t.virtual&&t.params.virtual.enabled){const m=t.slides.filter(v=>v.getAttribute("data-hash")===f)[0];return m?parseInt(m.getAttribute("data-swiper-slide-index"),10):0}return t.getSlideIndex(mt(t.slidesEl,`.${t.params.slideClass}[data-hash="${f}"], swiper-slide[data-hash="${f}"]`)[0])}}});const l=()=>{s("hashChange");const h=r.location.hash.replace("#",""),f=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],m=f?f.getAttribute("data-hash"):"";if(h!==m){const p=t.params.hashNavigation.getSlideIndex(t,h);if(typeof p>"u"||Number.isNaN(p))return;t.slideTo(p)}},c=()=>{if(!a||!t.params.hashNavigation.enabled)return;const h=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],f=h?h.getAttribute("data-hash")||h.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&o.history&&o.history.replaceState?(o.history.replaceState(null,null,`#${f}`||""),s("hashSet")):(r.location.hash=f||"",s("hashSet"))},d=()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;a=!0;const h=r.location.hash.replace("#","");if(h){const m=t.params.hashNavigation.getSlideIndex(t,h);t.slideTo(m||0,0,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&o.addEventListener("hashchange",l)},u=()=>{t.params.hashNavigation.watchState&&o.removeEventListener("hashchange",l)};n("init",()=>{t.params.hashNavigation.enabled&&d()}),n("destroy",()=>{t.params.hashNavigation.enabled&&u()}),n("transitionEnd _freeModeNoMomentumRelease",()=>{a&&c()}),n("slideChange",()=>{a&&t.params.cssMode&&c()})}function zl(i){let{swiper:t,extendParams:e,on:s,emit:n,params:a}=i;t.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,l=a&&a.autoplay?a.autoplay.delay:3e3,c=a&&a.autoplay?a.autoplay.delay:3e3,d,u=new Date().getTime,h,f,m,p,v,x;function g(D){!t||t.destroyed||!t.wrapperEl||D.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",g),M())}const b=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?h=!0:h&&(c=d,h=!1);const D=t.autoplay.paused?d:u+c-new Date().getTime();t.autoplay.timeLeft=D,n("autoplayTimeLeft",D,D/l),o=requestAnimationFrame(()=>{b()})},y=()=>{let D;return t.virtual&&t.params.virtual.enabled?D=t.slides.filter(V=>V.classList.contains("swiper-slide-active"))[0]:D=t.slides[t.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},_=D=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),b();let j=typeof D>"u"?t.params.autoplay.delay:D;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const V=y();!Number.isNaN(V)&&V>0&&typeof D>"u"&&(j=V,l=V,c=V),d=j;const J=t.params.speed,xt=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(J,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,J,!0,!0),n("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(J,!0,!0),n("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,J,!0,!0),n("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{_()})))};return j>0?(clearTimeout(r),r=setTimeout(()=>{xt()},j)):requestAnimationFrame(()=>{xt()}),j},S=()=>{t.autoplay.running=!0,_(),n("autoplayStart")},w=()=>{t.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),n("autoplayStop")},k=(D,j)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(r),D||(x=!0);const V=()=>{n("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",g):M()};if(t.autoplay.paused=!0,j){v&&(d=t.params.autoplay.delay),v=!1,V();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),V())},M=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),x?(x=!1,_(d)):_(),t.autoplay.paused=!1,n("autoplayResume"))},P=()=>{if(t.destroyed||!t.autoplay.running)return;const D=ht();D.visibilityState==="hidden"&&(x=!0,k(!0)),D.visibilityState==="visible"&&M()},T=D=>{D.pointerType==="mouse"&&(x=!0,!(t.animating||t.autoplay.paused)&&k(!0))},E=D=>{D.pointerType==="mouse"&&t.autoplay.paused&&M()},C=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",T),t.el.addEventListener("pointerleave",E))},A=()=>{t.el.removeEventListener("pointerenter",T),t.el.removeEventListener("pointerleave",E)},O=()=>{ht().addEventListener("visibilitychange",P)},F=()=>{ht().removeEventListener("visibilitychange",P)};s("init",()=>{t.params.autoplay.enabled&&(C(),O(),u=new Date().getTime(),S())}),s("destroy",()=>{A(),F(),t.autoplay.running&&w()}),s("beforeTransitionStart",(D,j,V)=>{t.destroyed||!t.autoplay.running||(V||!t.params.autoplay.disableOnInteraction?k(!0,!0):w())}),s("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){w();return}f=!0,m=!1,x=!1,p=setTimeout(()=>{x=!0,m=!0,k(!0)},200)}}),s("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!f)){if(clearTimeout(p),clearTimeout(r),t.params.autoplay.disableOnInteraction){m=!1,f=!1;return}m&&t.params.cssMode&&M(),m=!1,f=!1}}),s("slideChange",()=>{t.destroyed||!t.autoplay.running||(v=!0)}),Object.assign(t.autoplay,{start:S,stop:w,pause:k,resume:M})}function Rl(i){const{effect:t,swiper:e,on:s,setTranslate:n,setTransition:a,overwriteParams:r,perspective:o,recreateShadows:l,getEffectParams:c}=i;s("beforeInit",()=>{if(e.params.effect!==t)return;e.classNames.push(`${e.params.containerModifierClass}${t}`),o&&o()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const u=r?r():{};Object.assign(e.params,u),Object.assign(e.originalParams,u)}),s("setTranslate",()=>{e.params.effect===t&&n()}),s("setTransition",(u,h)=>{e.params.effect===t&&a(h)}),s("transitionEnd",()=>{if(e.params.effect===t&&l){if(!c||!c().slideShadows)return;e.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),l()}});let d;s("virtualUpdate",()=>{e.params.effect===t&&(e.slides.length||(d=!0),requestAnimationFrame(()=>{d&&e.slides&&e.slides.length&&(n(),d=!1)}))})}function Vl(i,t){const e=As(t);return e!==t&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}function Bl(i){let{swiper:t,duration:e,transformElements:s,allSlides:n}=i;const{activeIndex:a}=t,r=o=>o.parentElement?o.parentElement:t.slides.filter(c=>c.shadowRoot&&c.shadowRoot===o.parentNode)[0];if(t.params.virtualTranslate&&e!==0){let o=!1,l;n?l=s:l=s.filter(c=>{const d=c.classList.contains("swiper-slide-transform")?r(c):c;return t.getSlideIndex(d)===a}),l.forEach(c=>{yo(c,()=>{if(o||!t||t.destroyed)return;o=!0,t.animating=!1;const d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(d)})})}}function Nl(i,t,e){const s=`swiper-slide-shadow${e?`-${e}`:""}${i?` swiper-slide-shadow-${i}`:""}`,n=As(t);let a=n.querySelector(`.${s.split(" ").join(".")}`);return a||(a=Os("div",s.split(" ")),n.append(a)),a}function $l(i){let{swiper:t,extendParams:e,on:s}=i;e({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const n=o=>typeof o=="string"?o:`${o}px`;Rl({effect:"creative",swiper:t,on:s,setTranslate:()=>{const{slides:o,wrapperEl:l,slidesSizesGrid:c}=t,d=t.params.creativeEffect,{progressMultiplier:u}=d,h=t.params.centeredSlides;if(h){const f=c[0]/2-t.params.slidesOffsetBefore||0;l.style.transform=`translateX(calc(50% - ${f}px))`}for(let f=0;f<o.length;f+=1){const m=o[f],p=m.progress,v=Math.min(Math.max(m.progress,-d.limitProgress),d.limitProgress);let x=v;h||(x=Math.min(Math.max(m.originalProgress,-d.limitProgress),d.limitProgress));const g=m.swiperSlideOffset,b=[t.params.cssMode?-g-t.translate:-g,0,0],y=[0,0,0];let _=!1;t.isHorizontal()||(b[1]=b[0],b[0]=0);let S={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};v<0?(S=d.next,_=!0):v>0&&(S=d.prev,_=!0),b.forEach((C,A)=>{b[A]=`calc(${C}px + (${n(S.translate[A])} * ${Math.abs(v*u)}))`}),y.forEach((C,A)=>{y[A]=S.rotate[A]*Math.abs(v*u)}),m.style.zIndex=-Math.abs(Math.round(p))+o.length;const w=b.join(", "),k=`rotateX(${y[0]}deg) rotateY(${y[1]}deg) rotateZ(${y[2]}deg)`,M=x<0?`scale(${1+(1-S.scale)*x*u})`:`scale(${1-(1-S.scale)*x*u})`,P=x<0?1+(1-S.opacity)*x*u:1-(1-S.opacity)*x*u,T=`translate3d(${w}) ${k} ${M}`;if(_&&S.shadow||!_){let C=m.querySelector(".swiper-slide-shadow");if(!C&&S.shadow&&(C=Nl("creative",m)),C){const A=d.shadowPerProgress?v*(1/d.limitProgress):v;C.style.opacity=Math.min(Math.max(Math.abs(A),0),1)}}const E=Vl(d,m);E.style.transform=T,E.style.opacity=P,S.origin&&(E.style.transformOrigin=S.origin)}},setTransition:o=>{const l=t.slides.map(c=>As(c));l.forEach(c=>{c.style.transitionDuration=`${o}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(d=>{d.style.transitionDuration=`${o}ms`})}),Bl({swiper:t,duration:o,transformElements:l,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}const Hl=new ct(".main-slider",{modules:[Dl,Il,Va,Fl],initialSlide:0,slidesPerView:1,speed:0,spaceBetween:32,direction:"horizontal",hashNavigation:!0,virtual:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},simulateTouch:!0,breakpoints:{576:{pagination:{dynamicBullets:!1},simulateTouch:!1}}}),jl=i=>Hl.slideTo(i);document.querySelectorAll(".slide-to").forEach((i,t)=>i.addEventListener("click",()=>jl(t)));new ct(".swiper-basic",{modules:[zl,Va,Ol,$l],loop:!0,speed:1e3,autoplay:{delay:5e3},spaceBetween:16,direction:"horizontal",mousewheel:{sensitivity:2,invert:!0},grabCursor:!0,slidesPerView:1,initialSlide:0,effect:"creative",creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}}});class Na{constructor(t){L(this,"observer",t=>new ResizeObserver(e=>e.forEach(s=>{const n=s.borderBoxSize[0].inlineSize,a=s.borderBoxSize[0].blockSize;switch(this.prop){case"w":t.forEach(r=>r.style.maxWidth=`${n}px`);break;case"h":t.forEach(r=>r.style.minHeight=`${a}px`);break}})));L(this,"initWith",t=>{t.forEach(([e,s],n)=>{const a=document.querySelector(`.${e}`),r=document.querySelectorAll(`.${s}`),o=n+1;a&&r?this.observer(r).observe(a):console.error(`SizeSetter: there is no master-${o} or slave-${o}`)})});this.prop=t}}class ql{constructor(){L(this,"initWith",(t,e)=>{for(const s in e)document.querySelectorAll(`${s}`).forEach(n=>n.setAttribute(`${t}`,`${e[s]}`))})}}const Wl=i=>{i.forEach(t=>{const e=t.querySelectorAll("thead th:not(:first-child)"),s=t.querySelectorAll("tbody th");t.querySelectorAll("tbody tr").forEach((a,r)=>{a.querySelectorAll("td").forEach((l,c)=>{const d=()=>{e[c].classList.add("clr-accent"),s[r].classList.add("clr-accent")},u=()=>{e[c].classList.remove("clr-accent"),s[r].classList.remove("clr-accent")},h=()=>l.classList.toggle("clr-accent"),f=g=>{switch(g){case!0:l.addEventListener("mouseover",d),l.addEventListener("mouseout",u),l.addEventListener("click",h);break;case!1:l.removeEventListener("mouseover",d),l.removeEventListener("mouseout",u),l.removeEventListener("click",h);break}},m=g=>window.innerWidth>=g&&f(!0),p=g=>f(!!g),v=g=>{window.matchMedia(`(min-width: ${g}px)`).addEventListener("change",y=>p(y.matches))};(g=>{m(g),v(g)})(992)})})})};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Ue(i){return i+.5|0}const Vt=(i,t,e)=>Math.max(Math.min(i,e),t);function Ee(i){return Vt(Ue(i*2.55),0,255)}function Ht(i){return Vt(Ue(i*255),0,255)}function Lt(i){return Vt(Ue(i/2.55)/100,0,1)}function nn(i){return Vt(Ue(i*100),0,100)}const ft={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},hs=[..."0123456789ABCDEF"],Gl=i=>hs[i&15],Yl=i=>hs[(i&240)>>4]+hs[i&15],ti=i=>(i&240)>>4===(i&15),Xl=i=>ti(i.r)&&ti(i.g)&&ti(i.b)&&ti(i.a);function Ul(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&ft[i[1]]*17,g:255&ft[i[2]]*17,b:255&ft[i[3]]*17,a:t===5?ft[i[4]]*17:255}:(t===7||t===9)&&(e={r:ft[i[1]]<<4|ft[i[2]],g:ft[i[3]]<<4|ft[i[4]],b:ft[i[5]]<<4|ft[i[6]],a:t===9?ft[i[7]]<<4|ft[i[8]]:255})),e}const Kl=(i,t)=>i<255?t(i):"";function Zl(i){var t=Xl(i)?Gl:Yl;return i?"#"+t(i.r)+t(i.g)+t(i.b)+Kl(i.a,t):void 0}const Jl=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function $a(i,t,e){const s=t*Math.min(e,1-e),n=(a,r=(a+i/30)%12)=>e-s*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function Ql(i,t,e){const s=(n,a=(n+i/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[s(5),s(3),s(1)]}function tc(i,t,e){const s=$a(i,1,.5);let n;for(t+e>1&&(n=1/(t+e),t*=n,e*=n),n=0;n<3;n++)s[n]*=1-t-e,s[n]+=t;return s}function ec(i,t,e,s,n){return i===n?(t-e)/s+(t<e?6:0):t===n?(e-i)/s+2:(i-t)/s+4}function Ds(i){const e=i.r/255,s=i.g/255,n=i.b/255,a=Math.max(e,s,n),r=Math.min(e,s,n),o=(a+r)/2;let l,c,d;return a!==r&&(d=a-r,c=o>.5?d/(2-a-r):d/(a+r),l=ec(e,s,n,d,a),l=l*60+.5),[l|0,c||0,o]}function Is(i,t,e,s){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,s)).map(Ht)}function Fs(i,t,e){return Is($a,i,t,e)}function ic(i,t,e){return Is(tc,i,t,e)}function sc(i,t,e){return Is(Ql,i,t,e)}function Ha(i){return(i%360+360)%360}function nc(i){const t=Jl.exec(i);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Ee(+t[5]):Ht(+t[5]));const n=Ha(+t[2]),a=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=ic(n,a,r):t[1]==="hsv"?s=sc(n,a,r):s=Fs(n,a,r),{r:s[0],g:s[1],b:s[2],a:e}}function ac(i,t){var e=Ds(i);e[0]=Ha(e[0]+t),e=Fs(e),i.r=e[0],i.g=e[1],i.b=e[2]}function rc(i){if(!i)return;const t=Ds(i),e=t[0],s=nn(t[1]),n=nn(t[2]);return i.a<255?`hsla(${e}, ${s}%, ${n}%, ${Lt(i.a)})`:`hsl(${e}, ${s}%, ${n}%)`}const an={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},rn={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function oc(){const i={},t=Object.keys(rn),e=Object.keys(an);let s,n,a,r,o;for(s=0;s<t.length;s++){for(r=o=t[s],n=0;n<e.length;n++)a=e[n],o=o.replace(a,an[a]);a=parseInt(rn[r],16),i[o]=[a>>16&255,a>>8&255,a&255]}return i}let ei;function lc(i){ei||(ei=oc(),ei.transparent=[0,0,0,0]);const t=ei[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const cc=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function dc(i){const t=cc.exec(i);let e=255,s,n,a;if(t){if(t[7]!==s){const r=+t[7];e=t[8]?Ee(r):Vt(r*255,0,255)}return s=+t[1],n=+t[3],a=+t[5],s=255&(t[2]?Ee(s):Vt(s,0,255)),n=255&(t[4]?Ee(n):Vt(n,0,255)),a=255&(t[6]?Ee(a):Vt(a,0,255)),{r:s,g:n,b:a,a:e}}}function uc(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Lt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Ui=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,oe=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function hc(i,t,e){const s=oe(Lt(i.r)),n=oe(Lt(i.g)),a=oe(Lt(i.b));return{r:Ht(Ui(s+e*(oe(Lt(t.r))-s))),g:Ht(Ui(n+e*(oe(Lt(t.g))-n))),b:Ht(Ui(a+e*(oe(Lt(t.b))-a))),a:i.a+e*(t.a-i.a)}}function ii(i,t,e){if(i){let s=Ds(i);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Fs(s),i.r=s[0],i.g=s[1],i.b=s[2]}}function ja(i,t){return i&&Object.assign(t||{},i)}function on(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=Ht(i[3]))):(t=ja(i,{r:0,g:0,b:0,a:1}),t.a=Ht(t.a)),t}function fc(i){return i.charAt(0)==="r"?dc(i):nc(i)}class He{constructor(t){if(t instanceof He)return t;const e=typeof t;let s;e==="object"?s=on(t):e==="string"&&(s=Ul(t)||lc(t)||fc(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=ja(this._rgb);return t&&(t.a=Lt(t.a)),t}set rgb(t){this._rgb=on(t)}rgbString(){return this._valid?uc(this._rgb):void 0}hexString(){return this._valid?Zl(this._rgb):void 0}hslString(){return this._valid?rc(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,n=t.rgb;let a;const r=e===a?.5:e,o=2*r-1,l=s.a-n.a,c=((o*l===-1?o:(o+l)/(1+o*l))+1)/2;a=1-c,s.r=255&c*s.r+a*n.r+.5,s.g=255&c*s.g+a*n.g+.5,s.b=255&c*s.b+a*n.b+.5,s.a=r*s.a+(1-r)*n.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=hc(this._rgb,t._rgb,e)),this}clone(){return new He(this.rgb)}alpha(t){return this._rgb.a=Ht(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Ue(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return ii(this._rgb,2,t),this}darken(t){return ii(this._rgb,2,-t),this}saturate(t){return ii(this._rgb,1,t),this}desaturate(t){return ii(this._rgb,1,-t),this}rotate(t){return ac(this._rgb,t),this}}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function Tt(){}const pc=(()=>{let i=0;return()=>i++})();function z(i){return i===null||typeof i>"u"}function W(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function R(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function U(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function lt(i,t){return U(i)?i:t}function I(i,t){return typeof i>"u"?t:i}const gc=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,qa=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function H(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function $(i,t,e,s){let n,a,r;if(W(i))if(a=i.length,s)for(n=a-1;n>=0;n--)t.call(e,i[n],n);else for(n=0;n<a;n++)t.call(e,i[n],n);else if(R(i))for(r=Object.keys(i),a=r.length,n=0;n<a;n++)t.call(e,i[r[n]],r[n])}function Pi(i,t){let e,s,n,a;if(!i||!t||i.length!==t.length)return!1;for(e=0,s=i.length;e<s;++e)if(n=i[e],a=t[e],n.datasetIndex!==a.datasetIndex||n.index!==a.index)return!1;return!0}function Ai(i){if(W(i))return i.map(Ai);if(R(i)){const t=Object.create(null),e=Object.keys(i),s=e.length;let n=0;for(;n<s;++n)t[e[n]]=Ai(i[e[n]]);return t}return i}function Wa(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function mc(i,t,e,s){if(!Wa(i))return;const n=t[i],a=e[i];R(n)&&R(a)?Mt(n,a,s):t[i]=Ai(a)}function Mt(i,t,e){const s=W(t)?t:[t],n=s.length;if(!R(i))return i;e=e||{};const a=e.merger||mc;let r;for(let o=0;o<n;++o){if(r=s[o],!R(r))continue;const l=Object.keys(r);for(let c=0,d=l.length;c<d;++c)a(l[c],i,r,e)}return i}function Oe(i,t){return Mt(i,t,{merger:bc})}function bc(i,t,e){if(!Wa(i))return;const s=t[i],n=e[i];R(s)&&R(n)?Oe(s,n):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Ai(n))}const ln={"":i=>i,x:i=>i.x,y:i=>i.y};function vc(i){const t=i.split("."),e=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function xc(i){const t=vc(i);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function jt(i,t){return(ln[t]||(ln[t]=xc(t)))(i)}function zs(i){return i.charAt(0).toUpperCase()+i.slice(1)}const je=i=>typeof i<"u",qt=i=>typeof i=="function",cn=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function yc(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const Y=Math.PI,G=2*Y,_c=G+Y,Oi=Number.POSITIVE_INFINITY,wc=Y/180,K=Y/2,Yt=Y/4,dn=Y*2/3,Bt=Math.log10,St=Math.sign;function De(i,t,e){return Math.abs(i-t)<e}function un(i){const t=Math.round(i);i=De(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(Bt(i))),s=i/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function Sc(i){const t=[],e=Math.sqrt(i);let s;for(s=1;s<e;s++)i%s===0&&(t.push(s),t.push(i/s));return e===(e|0)&&t.push(e),t.sort((n,a)=>n-a).pop(),t}function he(i){return!isNaN(parseFloat(i))&&isFinite(i)}function Mc(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function Ga(i,t,e){let s,n,a;for(s=0,n=i.length;s<n;s++)a=i[s][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function bt(i){return i*(Y/180)}function Rs(i){return i*(180/Y)}function hn(i){if(!U(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function Ya(i,t){const e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);let a=Math.atan2(s,e);return a<-.5*Y&&(a+=G),{angle:a,distance:n}}function fs(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function Tc(i,t){return(i-t+_c)%G-Y}function ut(i){return(i%G+G)%G}function qe(i,t,e,s){const n=ut(i),a=ut(t),r=ut(e),o=ut(a-n),l=ut(r-n),c=ut(n-a),d=ut(n-r);return n===a||n===r||s&&a===r||o>l&&c<d}function Q(i,t,e){return Math.max(t,Math.min(e,i))}function kc(i){return Q(i,-32768,32767)}function At(i,t,e,s=1e-6){return i>=Math.min(t,e)-s&&i<=Math.max(t,e)+s}function Vs(i,t,e){e=e||(r=>i[r]<t);let s=i.length-1,n=0,a;for(;s-n>1;)a=n+s>>1,e(a)?n=a:s=a;return{lo:n,hi:s}}const Ot=(i,t,e,s)=>Vs(i,e,s?n=>{const a=i[n][t];return a<e||a===e&&i[n+1][t]===e}:n=>i[n][t]<e),Cc=(i,t,e)=>Vs(i,e,s=>i[s][t]>=e);function Ec(i,t,e){let s=0,n=i.length;for(;s<n&&i[s]<t;)s++;for(;n>s&&i[n-1]>e;)n--;return s>0||n<i.length?i.slice(s,n):i}const Xa=["push","pop","shift","splice","unshift"];function Lc(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Xa.forEach(e=>{const s="_onData"+zs(e),n=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...a){const r=n.apply(this,a);return i._chartjs.listeners.forEach(o=>{typeof o[s]=="function"&&o[s](...a)}),r}})})}function fn(i,t){const e=i._chartjs;if(!e)return;const s=e.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(Xa.forEach(a=>{delete i[a]}),delete i._chartjs)}function Ua(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const Ka=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function Za(i,t){let e=[],s=!1;return function(...n){e=n,s||(s=!0,Ka.call(window,()=>{s=!1,i.apply(t,e)}))}}function Pc(i,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(i,t,s)):i.apply(this,s),t}}const Bs=i=>i==="start"?"left":i==="end"?"right":"center",it=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,Ac=(i,t,e,s)=>i===(s?"left":"right")?e:i==="center"?(t+e)/2:t;function Ja(i,t,e){const s=t.length;let n=0,a=s;if(i._sorted){const{iScale:r,_parsed:o}=i,l=r.axis,{min:c,max:d,minDefined:u,maxDefined:h}=r.getUserBounds();u&&(n=Q(Math.min(Ot(o,l,c).lo,e?s:Ot(t,l,r.getPixelForValue(c)).lo),0,s-1)),h?a=Q(Math.max(Ot(o,r.axis,d,!0).hi+1,e?0:Ot(t,l,r.getPixelForValue(d),!0).hi+1),n,s)-n:a=s-n}return{start:n,count:a}}function Qa(i){const{xScale:t,yScale:e,_scaleRanges:s}=i,n={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return i._scaleRanges=n,!0;const a=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,n),a}const si=i=>i===0||i===1,pn=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*G/e)),gn=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*G/e)+1,Ie={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*K)+1,easeOutSine:i=>Math.sin(i*K),easeInOutSine:i=>-.5*(Math.cos(Y*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>si(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>si(i)?i:pn(i,.075,.3),easeOutElastic:i=>si(i)?i:gn(i,.075,.3),easeInOutElastic(i){return si(i)?i:i<.5?.5*pn(i*2,.1125,.45):.5+.5*gn(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-Ie.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Ie.easeInBounce(i*2)*.5:Ie.easeOutBounce(i*2-1)*.5+.5};function Ns(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function mn(i){return Ns(i)?i:new He(i)}function Ki(i){return Ns(i)?i:new He(i).saturate(.5).darken(.1).hexString()}const Oc=["x","y","borderWidth","radius","tension"],Dc=["color","borderColor","backgroundColor"];function Ic(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:Dc},numbers:{type:"number",properties:Oc}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Fc(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const bn=new Map;function zc(i,t){t=t||{};const e=i+JSON.stringify(t);let s=bn.get(e);return s||(s=new Intl.NumberFormat(i,t),bn.set(e,s)),s}function Ke(i,t,e){return zc(t,e).format(i)}const tr={values(i){return W(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const s=this.chart.options.locale;let n,a=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),a=Rc(i,e)}const r=Bt(Math.abs(a)),o=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),Ke(i,s,l)},logarithmic(i,t,e){if(i===0)return"0";const s=e[t].significand||i/Math.pow(10,Math.floor(Bt(i)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?tr.numeric.call(this,i,t,e):""}};function Rc(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var Vi={formatters:tr};function Vc(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Vi.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ne=Object.create(null),ps=Object.create(null);function Fe(i,t){if(!t)return i;const e=t.split(".");for(let s=0,n=e.length;s<n;++s){const a=e[s];i=i[a]||(i[a]=Object.create(null))}return i}function Zi(i,t,e){return typeof t=="string"?Mt(Fe(i,t),e):Mt(Fe(i,""),t)}class Bc{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>Ki(n.backgroundColor),this.hoverBorderColor=(s,n)=>Ki(n.borderColor),this.hoverColor=(s,n)=>Ki(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Zi(this,t,e)}get(t){return Fe(this,t)}describe(t,e){return Zi(ps,t,e)}override(t,e){return Zi(ne,t,e)}route(t,e,s,n){const a=Fe(this,t),r=Fe(this,s),o="_"+e;Object.defineProperties(a,{[o]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[o],c=r[n];return R(l)?Object.assign({},c,l):I(l,c)},set(l){this[o]=l}}})}apply(t){t.forEach(e=>e(this))}}var X=new Bc({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Ic,Fc,Vc]);function Nc(i){return!i||z(i.size)||z(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Di(i,t,e,s,n){let a=t[n];return a||(a=t[n]=i.measureText(n).width,e.push(n)),a>s&&(s=a),s}function $c(i,t,e,s){s=s||{};let n=s.data=s.data||{},a=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},a=s.garbageCollect=[],s.font=t),i.save(),i.font=t;let r=0;const o=e.length;let l,c,d,u,h;for(l=0;l<o;l++)if(u=e[l],u!=null&&!W(u))r=Di(i,n,a,r,u);else if(W(u))for(c=0,d=u.length;c<d;c++)h=u[c],h!=null&&!W(h)&&(r=Di(i,n,a,r,h));i.restore();const f=a.length/2;if(f>e.length){for(l=0;l<f;l++)delete n[a[l]];a.splice(0,f)}return r}function Xt(i,t,e){const s=i.currentDevicePixelRatio,n=e!==0?Math.max(e/2,.5):0;return Math.round((t-n)*s)/s+n}function vn(i,t){t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore()}function gs(i,t,e,s){er(i,t,e,s,null)}function er(i,t,e,s,n){let a,r,o,l,c,d,u,h;const f=t.pointStyle,m=t.rotation,p=t.radius;let v=(m||0)*wc;if(f&&typeof f=="object"&&(a=f.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){i.save(),i.translate(e,s),i.rotate(v),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(p)||p<=0)){switch(i.beginPath(),f){default:n?i.ellipse(e,s,n/2,p,0,0,G):i.arc(e,s,p,0,G),i.closePath();break;case"triangle":d=n?n/2:p,i.moveTo(e+Math.sin(v)*d,s-Math.cos(v)*p),v+=dn,i.lineTo(e+Math.sin(v)*d,s-Math.cos(v)*p),v+=dn,i.lineTo(e+Math.sin(v)*d,s-Math.cos(v)*p),i.closePath();break;case"rectRounded":c=p*.516,l=p-c,r=Math.cos(v+Yt)*l,u=Math.cos(v+Yt)*(n?n/2-c:l),o=Math.sin(v+Yt)*l,h=Math.sin(v+Yt)*(n?n/2-c:l),i.arc(e-u,s-o,c,v-Y,v-K),i.arc(e+h,s-r,c,v-K,v),i.arc(e+u,s+o,c,v,v+K),i.arc(e-h,s+r,c,v+K,v+Y),i.closePath();break;case"rect":if(!m){l=Math.SQRT1_2*p,d=n?n/2:l,i.rect(e-d,s-l,2*d,2*l);break}v+=Yt;case"rectRot":u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+h,s-r),i.lineTo(e+u,s+o),i.lineTo(e-h,s+r),i.closePath();break;case"crossRot":v+=Yt;case"cross":u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+u,s+o),i.moveTo(e+h,s-r),i.lineTo(e-h,s+r);break;case"star":u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+u,s+o),i.moveTo(e+h,s-r),i.lineTo(e-h,s+r),v+=Yt,u=Math.cos(v)*(n?n/2:p),r=Math.cos(v)*p,o=Math.sin(v)*p,h=Math.sin(v)*(n?n/2:p),i.moveTo(e-u,s-o),i.lineTo(e+u,s+o),i.moveTo(e+h,s-r),i.lineTo(e-h,s+r);break;case"line":r=n?n/2:Math.cos(v)*p,o=Math.sin(v)*p,i.moveTo(e-r,s-o),i.lineTo(e+r,s+o);break;case"dash":i.moveTo(e,s),i.lineTo(e+Math.cos(v)*(n?n/2:p),s+Math.sin(v)*p);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function Dt(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function Bi(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function Ni(i){i.restore()}function Hc(i,t,e,s,n){if(!t)return i.lineTo(e.x,e.y);if(n==="middle"){const a=(t.x+e.x)/2;i.lineTo(a,t.y),i.lineTo(a,e.y)}else n==="after"!=!!s?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function jc(i,t,e,s){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function qc(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),z(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function Wc(i,t,e,s,n){if(n.strikethrough||n.underline){const a=i.measureText(s),r=t-a.actualBoundingBoxLeft,o=t+a.actualBoundingBoxRight,l=e-a.actualBoundingBoxAscent,c=e+a.actualBoundingBoxDescent,d=n.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=n.decorationWidth||2,i.moveTo(r,d),i.lineTo(o,d),i.stroke()}}function Gc(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function ae(i,t,e,s,n,a={}){const r=W(t)?t:[t],o=a.strokeWidth>0&&a.strokeColor!=="";let l,c;for(i.save(),i.font=n.string,qc(i,a),l=0;l<r.length;++l)c=r[l],a.backdrop&&Gc(i,a.backdrop),o&&(a.strokeColor&&(i.strokeStyle=a.strokeColor),z(a.strokeWidth)||(i.lineWidth=a.strokeWidth),i.strokeText(c,e,s,a.maxWidth)),i.fillText(c,e,s,a.maxWidth),Wc(i,e,s,c,a),s+=Number(n.lineHeight);i.restore()}function We(i,t){const{x:e,y:s,w:n,h:a,radius:r}=t;i.arc(e+r.topLeft,s+r.topLeft,r.topLeft,1.5*Y,Y,!0),i.lineTo(e,s+a-r.bottomLeft),i.arc(e+r.bottomLeft,s+a-r.bottomLeft,r.bottomLeft,Y,K,!0),i.lineTo(e+n-r.bottomRight,s+a),i.arc(e+n-r.bottomRight,s+a-r.bottomRight,r.bottomRight,K,0,!0),i.lineTo(e+n,s+r.topRight),i.arc(e+n-r.topRight,s+r.topRight,r.topRight,0,-K,!0),i.lineTo(e+r.topLeft,s)}const Yc=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Xc=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Uc(i,t){const e=(""+i).match(Yc);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const Kc=i=>+i||0;function $s(i,t){const e={},s=R(t),n=s?Object.keys(t):t,a=R(i)?s?r=>I(i[r],i[t[r]]):r=>i[r]:()=>i;for(const r of n)e[r]=Kc(a(r));return e}function ir(i){return $s(i,{top:"y",right:"x",bottom:"y",left:"x"})}function ie(i){return $s(i,["topLeft","topRight","bottomLeft","bottomRight"])}function tt(i){const t=ir(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Z(i,t){i=i||{},t=t||X.font;let e=I(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=I(i.style,t.style);s&&!(""+s).match(Xc)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:I(i.family,t.family),lineHeight:Uc(I(i.lineHeight,t.lineHeight),e),size:e,style:s,weight:I(i.weight,t.weight),string:""};return n.string=Nc(n),n}function q(i,t,e,s){let n=!0,a,r,o;for(a=0,r=i.length;a<r;++a)if(o=i[a],o!==void 0&&(t!==void 0&&typeof o=="function"&&(o=o(t),n=!1),e!==void 0&&W(o)&&(o=o[e%o.length],n=!1),o!==void 0))return s&&!n&&(s.cacheable=!1),o}function Zc(i,t,e){const{min:s,max:n}=i,a=qa(t,(n-s)/2),r=(o,l)=>e&&o===0?0:o+l;return{min:r(s,-Math.abs(a)),max:r(n,a)}}function Wt(i,t){return Object.assign(Object.create(i),t)}function Hs(i,t=[""],e,s,n=()=>i[0]){const a=e||i;typeof s>"u"&&(s=rr("_fallback",i));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:a,_fallback:s,_getTarget:n,override:o=>Hs([o,...i],t,a,s)};return new Proxy(r,{deleteProperty(o,l){return delete o[l],delete o._keys,delete i[0][l],!0},get(o,l){return nr(o,l,()=>ad(l,t,i,o))},getOwnPropertyDescriptor(o,l){return Reflect.getOwnPropertyDescriptor(o._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(o,l){return yn(o).includes(l)},ownKeys(o){return yn(o)},set(o,l,c){const d=o._storage||(o._storage=n());return o[l]=d[l]=c,delete o._keys,!0}})}function fe(i,t,e,s){const n={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:sr(i,s),setContext:a=>fe(i,a,e,s),override:a=>fe(i.override(a),t,e,s)};return new Proxy(n,{deleteProperty(a,r){return delete a[r],delete i[r],!0},get(a,r,o){return nr(a,r,()=>Qc(a,r,o))},getOwnPropertyDescriptor(a,r){return a._descriptors.allKeys?Reflect.has(i,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,r)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(a,r){return Reflect.has(i,r)},ownKeys(){return Reflect.ownKeys(i)},set(a,r,o){return i[r]=o,delete a[r],!0}})}function sr(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=i;return{allKeys:n,scriptable:e,indexable:s,isScriptable:qt(e)?e:()=>e,isIndexable:qt(s)?s:()=>s}}const Jc=(i,t)=>i?i+zs(t):t,js=(i,t)=>R(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function nr(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t))return i[t];const s=e();return i[t]=s,s}function Qc(i,t,e){const{_proxy:s,_context:n,_subProxy:a,_descriptors:r}=i;let o=s[t];return qt(o)&&r.isScriptable(t)&&(o=td(t,o,i,e)),W(o)&&o.length&&(o=ed(t,o,i,r.isIndexable)),js(t,o)&&(o=fe(o,n,a&&a[t],r)),o}function td(i,t,e,s){const{_proxy:n,_context:a,_subProxy:r,_stack:o}=e;if(o.has(i))throw new Error("Recursion detected: "+Array.from(o).join("->")+"->"+i);o.add(i);let l=t(a,r||s);return o.delete(i),js(i,l)&&(l=qs(n._scopes,n,i,l)),l}function ed(i,t,e,s){const{_proxy:n,_context:a,_subProxy:r,_descriptors:o}=e;if(typeof a.index<"u"&&s(i))return t[a.index%t.length];if(R(t[0])){const l=t,c=n._scopes.filter(d=>d!==l);t=[];for(const d of l){const u=qs(c,n,i,d);t.push(fe(u,a,r&&r[i],o))}}return t}function ar(i,t,e){return qt(i)?i(t,e):i}const id=(i,t)=>i===!0?t:typeof i=="string"?jt(t,i):void 0;function sd(i,t,e,s,n){for(const a of t){const r=id(e,a);if(r){i.add(r);const o=ar(r._fallback,e,n);if(typeof o<"u"&&o!==e&&o!==s)return o}else if(r===!1&&typeof s<"u"&&e!==s)return null}return!1}function qs(i,t,e,s){const n=t._rootScopes,a=ar(t._fallback,e,s),r=[...i,...n],o=new Set;o.add(s);let l=xn(o,r,e,a||e,s);return l===null||typeof a<"u"&&a!==e&&(l=xn(o,r,a,l,s),l===null)?!1:Hs(Array.from(o),[""],n,a,()=>nd(t,e,s))}function xn(i,t,e,s,n){for(;e;)e=sd(i,t,e,s,n);return e}function nd(i,t,e){const s=i._getTarget();t in s||(s[t]={});const n=s[t];return W(n)&&R(e)?e:n||{}}function ad(i,t,e,s){let n;for(const a of t)if(n=rr(Jc(a,i),e),typeof n<"u")return js(i,n)?qs(e,s,i,n):n}function rr(i,t){for(const e of t){if(!e)continue;const s=e[i];if(typeof s<"u")return s}}function yn(i){let t=i._keys;return t||(t=i._keys=rd(i._scopes)),t}function rd(i){const t=new Set;for(const e of i)for(const s of Object.keys(e).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function or(i,t,e,s){const{iScale:n}=i,{key:a="r"}=this._parsing,r=new Array(s);let o,l,c,d;for(o=0,l=s;o<l;++o)c=o+e,d=t[c],r[o]={r:n.parse(jt(d,a),c)};return r}const od=Number.EPSILON||1e-14,pe=(i,t)=>t<i.length&&!i[t].skip&&i[t],lr=i=>i==="x"?"y":"x";function ld(i,t,e,s){const n=i.skip?t:i,a=t,r=e.skip?t:e,o=fs(a,n),l=fs(r,a);let c=o/(o+l),d=l/(o+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const u=s*c,h=s*d;return{previous:{x:a.x-u*(r.x-n.x),y:a.y-u*(r.y-n.y)},next:{x:a.x+h*(r.x-n.x),y:a.y+h*(r.y-n.y)}}}function cd(i,t,e){const s=i.length;let n,a,r,o,l,c=pe(i,0);for(let d=0;d<s-1;++d)if(l=c,c=pe(i,d+1),!(!l||!c)){if(De(t[d],0,od)){e[d]=e[d+1]=0;continue}n=e[d]/t[d],a=e[d+1]/t[d],o=Math.pow(n,2)+Math.pow(a,2),!(o<=9)&&(r=3/Math.sqrt(o),e[d]=n*r*t[d],e[d+1]=a*r*t[d])}}function dd(i,t,e="x"){const s=lr(e),n=i.length;let a,r,o,l=pe(i,0);for(let c=0;c<n;++c){if(r=o,o=l,l=pe(i,c+1),!o)continue;const d=o[e],u=o[s];r&&(a=(d-r[e])/3,o[`cp1${e}`]=d-a,o[`cp1${s}`]=u-a*t[c]),l&&(a=(l[e]-d)/3,o[`cp2${e}`]=d+a,o[`cp2${s}`]=u+a*t[c])}}function ud(i,t="x"){const e=lr(t),s=i.length,n=Array(s).fill(0),a=Array(s);let r,o,l,c=pe(i,0);for(r=0;r<s;++r)if(o=l,l=c,c=pe(i,r+1),!!l){if(c){const d=c[t]-l[t];n[r]=d!==0?(c[e]-l[e])/d:0}a[r]=o?c?St(n[r-1])!==St(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}cd(i,n,a),dd(i,a,t)}function ni(i,t,e){return Math.max(Math.min(i,e),t)}function hd(i,t){let e,s,n,a,r,o=Dt(i[0],t);for(e=0,s=i.length;e<s;++e)r=a,a=o,o=e<s-1&&Dt(i[e+1],t),a&&(n=i[e],r&&(n.cp1x=ni(n.cp1x,t.left,t.right),n.cp1y=ni(n.cp1y,t.top,t.bottom)),o&&(n.cp2x=ni(n.cp2x,t.left,t.right),n.cp2y=ni(n.cp2y,t.top,t.bottom)))}function fd(i,t,e,s,n){let a,r,o,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")ud(i,n);else{let c=s?i[i.length-1]:i[0];for(a=0,r=i.length;a<r;++a)o=i[a],l=ld(c,o,i[Math.min(a+1,r-(s?0:1))%r],t.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,c=o}t.capBezierPoints&&hd(i,e)}function cr(){return typeof window<"u"&&typeof document<"u"}function Ws(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ii(i,t,e){let s;return typeof i=="string"?(s=parseInt(i,10),i.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=i,s}const $i=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function pd(i,t){return $i(i).getPropertyValue(t)}const gd=["top","right","bottom","left"];function se(i,t,e){const s={};e=e?"-"+e:"";for(let n=0;n<4;n++){const a=gd[n];s[a]=parseFloat(i[t+"-"+a+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const md=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function bd(i,t){const e=i.touches,s=e&&e.length?e[0]:i,{offsetX:n,offsetY:a}=s;let r=!1,o,l;if(md(n,a,i.target))o=n,l=a;else{const c=t.getBoundingClientRect();o=s.clientX-c.left,l=s.clientY-c.top,r=!0}return{x:o,y:l,box:r}}function Zt(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:s}=t,n=$i(e),a=n.boxSizing==="border-box",r=se(n,"padding"),o=se(n,"border","width"),{x:l,y:c,box:d}=bd(i,e),u=r.left+(d&&o.left),h=r.top+(d&&o.top);let{width:f,height:m}=t;return a&&(f-=r.width+o.width,m-=r.height+o.height),{x:Math.round((l-u)/f*e.width/s),y:Math.round((c-h)/m*e.height/s)}}function vd(i,t,e){let s,n;if(t===void 0||e===void 0){const a=Ws(i);if(!a)t=i.clientWidth,e=i.clientHeight;else{const r=a.getBoundingClientRect(),o=$i(a),l=se(o,"border","width"),c=se(o,"padding");t=r.width-c.width-l.width,e=r.height-c.height-l.height,s=Ii(o.maxWidth,a,"clientWidth"),n=Ii(o.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:s||Oi,maxHeight:n||Oi}}const ai=i=>Math.round(i*10)/10;function xd(i,t,e,s){const n=$i(i),a=se(n,"margin"),r=Ii(n.maxWidth,i,"clientWidth")||Oi,o=Ii(n.maxHeight,i,"clientHeight")||Oi,l=vd(i,t,e);let{width:c,height:d}=l;if(n.boxSizing==="content-box"){const h=se(n,"border","width"),f=se(n,"padding");c-=f.width+h.width,d-=f.height+h.height}return c=Math.max(0,c-a.width),d=Math.max(0,s?c/s:d-a.height),c=ai(Math.min(c,r,l.maxWidth)),d=ai(Math.min(d,o,l.maxHeight)),c&&!d&&(d=ai(c/2)),(t!==void 0||e!==void 0)&&s&&l.height&&d>l.height&&(d=l.height,c=ai(Math.floor(d*s))),{width:c,height:d}}function _n(i,t,e){const s=t||1,n=Math.floor(i.height*s),a=Math.floor(i.width*s);i.height=Math.floor(i.height),i.width=Math.floor(i.width);const r=i.canvas;return r.style&&(e||!r.style.height&&!r.style.width)&&(r.style.height=`${i.height}px`,r.style.width=`${i.width}px`),i.currentDevicePixelRatio!==s||r.height!==n||r.width!==a?(i.currentDevicePixelRatio=s,r.height=n,r.width=a,i.ctx.setTransform(s,0,0,s,0,0),!0):!1}const yd=function(){let i=!1;try{const t={get passive(){return i=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return i}();function wn(i,t){const e=pd(i,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Jt(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function _d(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:s==="middle"?e<.5?i.y:t.y:s==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function wd(i,t,e,s){const n={x:i.cp2x,y:i.cp2y},a={x:t.cp1x,y:t.cp1y},r=Jt(i,n,e),o=Jt(n,a,e),l=Jt(a,t,e),c=Jt(r,o,e),d=Jt(o,l,e);return Jt(c,d,e)}const Sd=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Md=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function ue(i,t,e){return i?Sd(t,e):Md()}function dr(i,t){let e,s;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=s)}function ur(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function hr(i){return i==="angle"?{between:qe,compare:Tc,normalize:ut}:{between:At,compare:(t,e)=>t-e,normalize:t=>t}}function Sn({start:i,end:t,count:e,loop:s,style:n}){return{start:i%e,end:t%e,loop:s&&(t-i+1)%e===0,style:n}}function Td(i,t,e){const{property:s,start:n,end:a}=e,{between:r,normalize:o}=hr(s),l=t.length;let{start:c,end:d,loop:u}=i,h,f;if(u){for(c+=l,d+=l,h=0,f=l;h<f&&r(o(t[c%l][s]),n,a);++h)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:u,style:i.style}}function fr(i,t,e){if(!e)return[i];const{property:s,start:n,end:a}=e,r=t.length,{compare:o,between:l,normalize:c}=hr(s),{start:d,end:u,loop:h,style:f}=Td(i,t,e),m=[];let p=!1,v=null,x,g,b;const y=()=>l(n,b,x)&&o(n,b)!==0,_=()=>o(a,x)===0||l(a,b,x),S=()=>p||y(),w=()=>!p||_();for(let k=d,M=d;k<=u;++k)g=t[k%r],!g.skip&&(x=c(g[s]),x!==b&&(p=l(x,n,a),v===null&&S()&&(v=o(x,n)===0?k:M),v!==null&&w()&&(m.push(Sn({start:v,end:k,loop:h,count:r,style:f})),v=null),M=k,b=x));return v!==null&&m.push(Sn({start:v,end:u,loop:h,count:r,style:f})),m}function pr(i,t){const e=[],s=i.segments;for(let n=0;n<s.length;n++){const a=fr(s[n],i.points,t);a.length&&e.push(...a)}return e}function kd(i,t,e,s){let n=0,a=t-1;if(e&&!s)for(;n<t&&!i[n].skip;)n++;for(;n<t&&i[n].skip;)n++;for(n%=t,e&&(a+=n);a>n&&i[a%t].skip;)a--;return a%=t,{start:n,end:a}}function Cd(i,t,e,s){const n=i.length,a=[];let r=t,o=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%n];c.skip||c.stop?o.skip||(s=!1,a.push({start:t%n,end:(l-1)%n,loop:s}),t=r=c.stop?l:null):(r=l,o.skip&&(t=l)),o=c}return r!==null&&a.push({start:t%n,end:r%n,loop:s}),a}function Ed(i,t){const e=i.points,s=i.options.spanGaps,n=e.length;if(!n)return[];const a=!!i._loop,{start:r,end:o}=kd(e,n,a,s);if(s===!0)return Mn(i,[{start:r,end:o,loop:a}],e,t);const l=o<r?o+n:o,c=!!i._fullLoop&&r===0&&o===n-1;return Mn(i,Cd(e,r,l,c),e,t)}function Mn(i,t,e,s){return!s||!s.setContext||!e?t:Ld(i,t,e,s)}function Ld(i,t,e,s){const n=i._chart.getContext(),a=Tn(i.options),{_datasetIndex:r,options:{spanGaps:o}}=i,l=e.length,c=[];let d=a,u=t[0].start,h=u;function f(m,p,v,x){const g=o?-1:1;if(m!==p){for(m+=l;e[m%l].skip;)m-=g;for(;e[p%l].skip;)p+=g;m%l!==p%l&&(c.push({start:m%l,end:p%l,loop:v,style:x}),d=x,u=p%l)}}for(const m of t){u=o?u:m.start;let p=e[u%l],v;for(h=u+1;h<=m.end;h++){const x=e[h%l];v=Tn(s.setContext(Wt(n,{type:"segment",p0:p,p1:x,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:r}))),Pd(v,d)&&f(u,h-1,m.loop,d),p=x,d=v}u<h-1&&f(u,h-1,m.loop,d)}return c}function Tn(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function Pd(i,t){if(!t)return!1;const e=[],s=function(n,a){return Ns(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(i,s)!==JSON.stringify(t,s)}/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class Ad{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,n){const a=e.listeners[n],r=e.duration;a.forEach(o=>o({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(s-e.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=Ka.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const a=s.items;let r=a.length-1,o=!1,l;for(;r>=0;--r)l=a[r],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),o=!0):(a[r]=a[a.length-1],a.pop());o&&(n.draw(),this._notify(n,s,t,"progress")),a.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ct=new Ad;const kn="transparent",Od={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const s=mn(i||kn),n=s.valid&&mn(t||kn);return n&&n.valid?n.mix(s,e).hexString():t},number(i,t,e){return i+(t-i)*e}};class Dd{constructor(t,e,s,n){const a=e[s];n=q([t.to,n,a,t.from]);const r=q([t.from,a,n]);this._active=!0,this._fn=t.fn||Od[t.type||typeof r],this._easing=Ie[t.easing]||Ie.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const n=this._target[this._prop],a=s-this._start,r=this._duration-a;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=q([t.to,e,n,t.from]),this._from=q([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,n=this._prop,a=this._from,r=this._loop,o=this._to;let l;if(this._active=a!==o&&(r||e<s),!this._active){this._target[n]=o,this._notify(!0);return}if(e<0){this._target[n]=a;return}l=e/s%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(a,o,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][e]()}}class gr{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!R(t))return;const e=Object.keys(X.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const a=t[n];if(!R(a))return;const r={};for(const o of e)r[o]=a[o];(W(a.properties)&&a.properties||[n]).forEach(o=>{(o===n||!s.has(o))&&s.set(o,r)})})}_animateOptions(t,e){const s=e.options,n=Fd(t,s);if(!n)return[];const a=this._createAnimations(n,s);return s.$shared&&Id(t.options.$animations,s).then(()=>{t.options=s},()=>{}),a}_createAnimations(t,e){const s=this._properties,n=[],a=t.$animations||(t.$animations={}),r=Object.keys(e),o=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,e));continue}const d=e[c];let u=a[c];const h=s.get(c);if(u)if(h&&u.active()){u.update(h,d,o);continue}else u.cancel();if(!h||!h.duration){t[c]=d;continue}a[c]=u=new Dd(h,t,c,d),n.push(u)}return n}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Ct.add(this._chart,s),!0}}function Id(i,t){const e=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const a=i[s[n]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function Fd(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Cn(i,t){const e=i&&i.options||{},s=e.reverse,n=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:s?a:n,end:s?n:a}}function zd(i,t,e){if(e===!1)return!1;const s=Cn(i,e),n=Cn(t,e);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function Rd(i){let t,e,s,n;return R(i)?(t=i.top,e=i.right,s=i.bottom,n=i.left):t=e=s=n=i,{top:t,right:e,bottom:s,left:n,disabled:i===!1}}function mr(i,t){const e=[],s=i._getSortedDatasetMetas(t);let n,a;for(n=0,a=s.length;n<a;++n)e.push(s[n].index);return e}function En(i,t,e,s={}){const n=i.keys,a=s.mode==="single";let r,o,l,c;if(t!==null){for(r=0,o=n.length;r<o;++r){if(l=+n[r],l===e){if(s.all)continue;break}c=i.values[l],U(c)&&(a||t===0||St(t)===St(c))&&(t+=c)}return t}}function Vd(i){const t=Object.keys(i),e=new Array(t.length);let s,n,a;for(s=0,n=t.length;s<n;++s)a=t[s],e[s]={x:a,y:i[a]};return e}function Ln(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function Bd(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function Nd(i){const{min:t,max:e,minDefined:s,maxDefined:n}=i.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?e:Number.POSITIVE_INFINITY}}function $d(i,t,e){const s=i[t]||(i[t]={});return s[e]||(s[e]={})}function Pn(i,t,e,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const a=i[n.index];if(e&&a>0||!e&&a<0)return n.index}return null}function An(i,t){const{chart:e,_cachedMeta:s}=i,n=e._stacks||(e._stacks={}),{iScale:a,vScale:r,index:o}=s,l=a.axis,c=r.axis,d=Bd(a,r,s),u=t.length;let h;for(let f=0;f<u;++f){const m=t[f],{[l]:p,[c]:v}=m,x=m._stacks||(m._stacks={});h=x[c]=$d(n,d,p),h[o]=v,h._top=Pn(h,r,!0,s.type),h._bottom=Pn(h,r,!1,s.type);const g=h._visualValues||(h._visualValues={});g[o]=v}}function Ji(i,t){const e=i.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function Hd(i,t){return Wt(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function jd(i,t,e){return Wt(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function xe(i,t){const e=i.controller.index,s=i.vScale&&i.vScale.axis;if(s){t=t||i._parsed;for(const n of t){const a=n._stacks;if(!a||a[s]===void 0||a[s][e]===void 0)return;delete a[s][e],a[s]._visualValues!==void 0&&a[s]._visualValues[e]!==void 0&&delete a[s]._visualValues[e]}}}const Qi=i=>i==="reset"||i==="none",On=(i,t)=>t?i:Object.assign({},i),qd=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:mr(e,!0),values:null};class vt{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ln(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&xe(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),n=(u,h,f,m)=>u==="x"?h:u==="r"?m:f,a=e.xAxisID=I(s.xAxisID,Ji(t,"x")),r=e.yAxisID=I(s.yAxisID,Ji(t,"y")),o=e.rAxisID=I(s.rAxisID,Ji(t,"r")),l=e.indexAxis,c=e.iAxisID=n(l,a,r,o),d=e.vAxisID=n(l,r,a,o);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(o),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(d)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&fn(this._data,this),t._stacked&&xe(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(R(e))this._data=Vd(e);else if(s!==e){if(s){fn(s,this);const n=this._cachedMeta;xe(n),n._parsed=[]}e&&Object.isExtensible(e)&&Lc(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const a=e._stacked;e._stacked=Ln(e.vScale,e),e.stack!==s.stack&&(n=!0,xe(e),e.stack=s.stack),this._resyncElements(t),(n||a!==e._stacked)&&An(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:n}=this,{iScale:a,_stacked:r}=s,o=a.axis;let l=t===0&&e===n.length?!0:s._sorted,c=t>0&&s._parsed[t-1],d,u,h;if(this._parsing===!1)s._parsed=n,s._sorted=!0,h=n;else{W(n[t])?h=this.parseArrayData(s,n,t,e):R(n[t])?h=this.parseObjectData(s,n,t,e):h=this.parsePrimitiveData(s,n,t,e);const f=()=>u[o]===null||c&&u[o]<c[o];for(d=0;d<e;++d)s._parsed[d+t]=u=h[d],l&&(f()&&(l=!1),c=u);s._sorted=l}r&&An(this,h)}parsePrimitiveData(t,e,s,n){const{iScale:a,vScale:r}=t,o=a.axis,l=r.axis,c=a.getLabels(),d=a===r,u=new Array(n);let h,f,m;for(h=0,f=n;h<f;++h)m=h+s,u[h]={[o]:d||a.parse(c[m],m),[l]:r.parse(e[m],m)};return u}parseArrayData(t,e,s,n){const{xScale:a,yScale:r}=t,o=new Array(n);let l,c,d,u;for(l=0,c=n;l<c;++l)d=l+s,u=e[d],o[l]={x:a.parse(u[0],d),y:r.parse(u[1],d)};return o}parseObjectData(t,e,s,n){const{xScale:a,yScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=new Array(n);let d,u,h,f;for(d=0,u=n;d<u;++d)h=d+s,f=e[h],c[d]={x:a.parse(jt(f,o),h),y:r.parse(jt(f,l),h)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const n=this.chart,a=this._cachedMeta,r=e[t.axis],o={keys:mr(n,!0),values:e._stacks[t.axis]._visualValues};return En(o,r,a.index,{mode:s})}updateRangeFromParsed(t,e,s,n){const a=s[e.axis];let r=a===null?NaN:a;const o=n&&s._stacks[e.axis];n&&o&&(n.values=o,r=En(n,a,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const s=this._cachedMeta,n=s._parsed,a=s._sorted&&t===s.iScale,r=n.length,o=this._getOtherScale(t),l=qd(e,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:u}=Nd(o);let h,f;function m(){f=n[h];const p=f[o.axis];return!U(f[t.axis])||d>p||u<p}for(h=0;h<r&&!(!m()&&(this.updateRangeFromParsed(c,t,f,l),a));++h);if(a){for(h=r-1;h>=0;--h)if(!m()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let n,a,r;for(n=0,a=e.length;n<a;++n)r=e[n][t.axis],U(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,n=e.vScale,a=this.getParsed(t);return{label:s?""+s.getLabelForValue(a[s.axis]):"",value:n?""+n.getLabelForValue(a[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Rd(I(this.options.clip,zd(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,n=s.data||[],a=e.chartArea,r=[],o=this._drawStart||0,l=this._drawCount||n.length-o,c=this.options.drawActiveElementsOnTop;let d;for(s.dataset&&s.dataset.draw(t,a,o,l),d=o;d<o+l;++d){const u=n[d];u.hidden||(u.active&&c?r.push(u):u.draw(t,a))}for(d=0;d<r.length;++d)r[d].draw(t,a)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const n=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];a=r.$context||(r.$context=jd(this.getContext(),t,r)),a.parsed=this.getParsed(t),a.raw=n.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Hd(this.chart.getContext(),this.index)),a.dataset=n,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=s,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const n=e==="active",a=this._cachedDataOpts,r=t+"-"+e,o=a[r],l=this.enableOptionSharing&&je(s);if(o)return On(o,l);const c=this.chart.config,d=c.datasetElementScopeKeys(this._type,t),u=n?[`${t}Hover`,"hover",t,""]:[t,""],h=c.getOptionScopes(this.getDataset(),d),f=Object.keys(X.elements[t]),m=()=>this.getContext(s,n,e),p=c.resolveNamedOptions(h,f,m,u);return p.$shared&&(p.$shared=l,a[r]=Object.freeze(On(p,l))),p}_resolveAnimations(t,e,s){const n=this.chart,a=this._cachedDataOpts,r=`animation-${e}`,o=a[r];if(o)return o;let l;if(n.options.animation!==!1){const d=this.chart.config,u=d.datasetAnimationScopeKeys(this._type,e),h=d.getOptionScopes(this.getDataset(),u);l=d.createResolver(h,this.getContext(t,s,e))}const c=new gr(n,l&&l.animations);return l&&l._cacheable&&(a[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Qi(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),n=this._sharedOptions,a=this.getSharedOptions(s),r=this.includeOptions(e,a)||a!==n;return this.updateSharedOptions(a,e,s),{sharedOptions:a,includeOptions:r}}updateElement(t,e,s,n){Qi(n)?Object.assign(t,s):this._resolveAnimations(e,n).update(t,s)}updateSharedOptions(t,e,s){t&&!Qi(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,n){t.active=n;const a=this.getStyle(e,n);this._resolveAnimations(e,s,n).update(t,{options:!n&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[o,l,c]of this._syncList)this[o](l,c);this._syncList=[];const n=s.length,a=e.length,r=Math.min(a,n);r&&this.parse(0,r),a>n?this._insertElements(n,a-n,t):a<n&&this._removeElements(a,n-a)}_insertElements(t,e,s=!0){const n=this._cachedMeta,a=n.data,r=t+e;let o;const l=c=>{for(c.length+=e,o=c.length-1;o>=r;o--)c[o]=c[o-e]};for(l(a),o=t;o<r;++o)a[o]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,e),s&&this.updateElements(a,t,e,"reset")}updateElements(t,e,s,n){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,e);s._stacked&&xe(s,n)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,n]=t;this[e](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}L(vt,"defaults",{}),L(vt,"datasetElementType",null),L(vt,"dataElementType",null);function Wd(i,t){if(!i._cache.$bar){const e=i.getMatchingVisibleMetas(t);let s=[];for(let n=0,a=e.length;n<a;n++)s=s.concat(e[n].controller.getAllParsedValues(i));i._cache.$bar=Ua(s.sort((n,a)=>n-a))}return i._cache.$bar}function Gd(i){const t=i.iScale,e=Wd(t,i.type);let s=t._length,n,a,r,o;const l=()=>{r===32767||r===-32768||(je(o)&&(s=Math.min(s,Math.abs(r-o)||s)),o=r)};for(n=0,a=e.length;n<a;++n)r=t.getPixelForValue(e[n]),l();for(o=void 0,n=0,a=t.ticks.length;n<a;++n)r=t.getPixelForTick(n),l();return s}function Yd(i,t,e,s){const n=e.barThickness;let a,r;return z(n)?(a=t.min*e.categoryPercentage,r=e.barPercentage):(a=n*s,r=1),{chunk:a/s,ratio:r,start:t.pixels[i]-a/2}}function Xd(i,t,e,s){const n=t.pixels,a=n[i];let r=i>0?n[i-1]:null,o=i<n.length-1?n[i+1]:null;const l=e.categoryPercentage;r===null&&(r=a-(o===null?t.end-t.start:o-a)),o===null&&(o=a+a-r);const c=a-(a-Math.min(r,o))/2*l;return{chunk:Math.abs(o-r)/2*l/s,ratio:e.barPercentage,start:c}}function Ud(i,t,e,s){const n=e.parse(i[0],s),a=e.parse(i[1],s),r=Math.min(n,a),o=Math.max(n,a);let l=r,c=o;Math.abs(r)>Math.abs(o)&&(l=o,c=r),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:a,min:r,max:o}}function br(i,t,e,s){return W(i)?Ud(i,t,e,s):t[e.axis]=e.parse(i,s),t}function Dn(i,t,e,s){const n=i.iScale,a=i.vScale,r=n.getLabels(),o=n===a,l=[];let c,d,u,h;for(c=e,d=e+s;c<d;++c)h=t[c],u={},u[n.axis]=o||n.parse(r[c],c),l.push(br(h,u,a,c));return l}function ts(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function Kd(i,t,e){return i!==0?St(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Zd(i){let t,e,s,n,a;return i.horizontal?(t=i.base>i.x,e="left",s="right"):(t=i.base<i.y,e="bottom",s="top"),t?(n="end",a="start"):(n="start",a="end"),{start:e,end:s,reverse:t,top:n,bottom:a}}function Jd(i,t,e,s){let n=t.borderSkipped;const a={};if(!n){i.borderSkipped=a;return}if(n===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:o,reverse:l,top:c,bottom:d}=Zd(i);n==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===s?n=c:(e._bottom||0)===s?n=d:(a[In(d,r,o,l)]=!0,n=c)),a[In(n,r,o,l)]=!0,i.borderSkipped=a}function In(i,t,e,s){return s?(i=Qd(i,t,e),i=Fn(i,e,t)):i=Fn(i,t,e),i}function Qd(i,t,e){return i===t?e:i===e?t:i}function Fn(i,t,e){return i==="start"?t:i==="end"?e:i}function tu(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}class _i extends vt{parsePrimitiveData(t,e,s,n){return Dn(t,e,s,n)}parseArrayData(t,e,s,n){return Dn(t,e,s,n)}parseObjectData(t,e,s,n){const{iScale:a,vScale:r}=t,{xAxisKey:o="x",yAxisKey:l="y"}=this._parsing,c=a.axis==="x"?o:l,d=r.axis==="x"?o:l,u=[];let h,f,m,p;for(h=s,f=s+n;h<f;++h)p=e[h],m={},m[a.axis]=a.parse(jt(p,c),h),u.push(br(jt(p,d),m,r,h));return u}updateRangeFromParsed(t,e,s,n){super.updateRangeFromParsed(t,e,s,n);const a=s._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:n}=e,a=this.getParsed(t),r=a._custom,o=ts(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(a[n.axis]);return{label:""+s.getLabelForValue(a[s.axis]),value:o}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,n){const a=n==="reset",{index:r,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),c=o.isHorizontal(),d=this._getRuler(),{sharedOptions:u,includeOptions:h}=this._getSharedOptions(e,n);for(let f=e;f<e+s;f++){const m=this.getParsed(f),p=a||z(m[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),v=this._calculateBarIndexPixels(f,d),x=(m._stacks||{})[o.axis],g={horizontal:c,base:p.base,enableBorderRadius:!x||ts(m._custom)||r===x._top||r===x._bottom,x:c?p.head:v.center,y:c?v.center:p.head,height:c?v.size:Math.abs(p.size),width:c?Math.abs(p.size):v.size};h&&(g.options=u||this.resolveDataElementOptions(f,t[f].active?"active":n));const b=g.options||t[f].options;Jd(g,b,x,r),tu(g,b,d.ratio),this.updateElement(t[f],f,g,n)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),a=s.options.stacked,r=[],o=l=>{const c=l.controller.getParsed(e),d=c&&c[l.vScale.axis];if(z(d)||isNaN(d))return!0};for(const l of n)if(!(e!==void 0&&o(l))&&((a===!1||r.indexOf(l.stack)===-1||a===void 0&&l.stack===void 0)&&r.push(l.stack),l.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,s){const n=this._getStacks(t,s),a=e!==void 0?n.indexOf(e):-1;return a===-1?n.length-1:a}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,n=[];let a,r;for(a=0,r=e.data.length;a<r;++a)n.push(s.getPixelForValue(this.getParsed(a)[s.axis],a));const o=t.barThickness;return{min:o||Gd(e),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:o?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:n},options:{base:a,minBarLength:r}}=this,o=a||0,l=this.getParsed(t),c=l._custom,d=ts(c);let u=l[e.axis],h=0,f=s?this.applyStack(e,l,s):u,m,p;f!==u&&(h=f-u,f=u),d&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&St(u)!==St(c.barEnd)&&(h=0),h+=u);const v=!z(a)&&!d?a:h;let x=e.getPixelForValue(v);if(this.chart.getDataVisibility(t)?m=e.getPixelForValue(h+f):m=x,p=m-x,Math.abs(p)<r){p=Kd(p,e,o)*r,u===o&&(x-=p/2);const g=e.getPixelForDecimal(0),b=e.getPixelForDecimal(1),y=Math.min(g,b),_=Math.max(g,b);x=Math.max(Math.min(x,_),y),m=x+p,s&&!d&&(l._stacks[e.axis]._visualValues[n]=e.getValueForPixel(m)-e.getValueForPixel(x))}if(x===e.getPixelForValue(o)){const g=St(p)*e.getLineWidthForValue(o)/2;x+=g,p-=g}return{size:p,base:x,head:m,center:m+p/2}}_calculateBarIndexPixels(t,e){const s=e.scale,n=this.options,a=n.skipNull,r=I(n.maxBarThickness,1/0);let o,l;if(e.grouped){const c=a?this._getStackCount(t):e.stackCount,d=n.barThickness==="flex"?Xd(t,e,n,c):Yd(t,e,n,c),u=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0);o=d.start+d.chunk*u+d.chunk/2,l=Math.min(r,d.chunk*d.ratio)}else o=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,e.min*e.ratio);return{base:o-l/2,head:o+l/2,center:o,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,n=s.length;let a=0;for(;a<n;++a)this.getParsed(a)[e.axis]!==null&&s[a].draw(this._ctx)}}L(_i,"id","bar"),L(_i,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),L(_i,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class wi extends vt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,n){const a=super.parsePrimitiveData(t,e,s,n);for(let r=0;r<a.length;r++)a[r]._custom=this.resolveDataElementOptions(r+s).radius;return a}parseArrayData(t,e,s,n){const a=super.parseArrayData(t,e,s,n);for(let r=0;r<a.length;r++){const o=e[s+r];a[r]._custom=I(o[2],this.resolveDataElementOptions(r+s).radius)}return a}parseObjectData(t,e,s,n){const a=super.parseObjectData(t,e,s,n);for(let r=0;r<a.length;r++){const o=e[s+r];a[r]._custom=I(o&&o.r&&+o.r,this.resolveDataElementOptions(r+s).radius)}return a}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=e,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y),c=r._custom;return{label:s[t]||"",value:"("+o+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,n){const a=n==="reset",{iScale:r,vScale:o}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,n),d=r.axis,u=o.axis;for(let h=e;h<e+s;h++){const f=t[h],m=!a&&this.getParsed(h),p={},v=p[d]=a?r.getPixelForDecimal(.5):r.getPixelForValue(m[d]),x=p[u]=a?o.getBasePixel():o.getPixelForValue(m[u]);p.skip=isNaN(v)||isNaN(x),c&&(p.options=l||this.resolveDataElementOptions(h,f.active?"active":n),a&&(p.options.radius=0)),this.updateElement(f,h,p,n)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const a=n.radius;return e!=="active"&&(n.radius=0),n.radius+=I(s&&s._custom,a),n}}L(wi,"id","bubble"),L(wi,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),L(wi,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function eu(i,t,e){let s=1,n=1,a=0,r=0;if(t<G){const o=i,l=o+t,c=Math.cos(o),d=Math.sin(o),u=Math.cos(l),h=Math.sin(l),f=(b,y,_)=>qe(b,o,l,!0)?1:Math.max(y,y*e,_,_*e),m=(b,y,_)=>qe(b,o,l,!0)?-1:Math.min(y,y*e,_,_*e),p=f(0,c,u),v=f(K,d,h),x=m(Y,c,u),g=m(Y+K,d,h);s=(p-x)/2,n=(v-g)/2,a=-(p+x)/2,r=-(v+g)/2}return{ratioX:s,ratioY:n,offsetX:a,offsetY:r}}class te extends vt{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let a=l=>+s[l];if(R(s[t])){const{key:l="value"}=this._parsing;a=c=>+jt(s[c],l)}let r,o;for(r=t,o=t+e;r<o;++r)n._parsed[r]=a(r)}}_getRotation(){return bt(this.options.rotation-90)}_getCircumference(){return bt(this.options.circumference)}_getRotationExtents(){let t=G,e=-G;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,a=n._getRotation(),r=n._getCircumference();t=Math.min(t,a),e=Math.max(e,a+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,n=this._cachedMeta,a=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,o=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min(gc(this.options.cutout,o),1),c=this._getRingWeight(this.index),{circumference:d,rotation:u}=this._getRotationExtents(),{ratioX:h,ratioY:f,offsetX:m,offsetY:p}=eu(u,d,l),v=(s.width-r)/h,x=(s.height-r)/f,g=Math.max(Math.min(v,x)/2,0),b=qa(this.options.radius,g),y=Math.max(b*l,0),_=(b-y)/this._getVisibleDatasetWeightTotal();this.offsetX=m*b,this.offsetY=p*b,n.total=this.calculateTotal(),this.outerRadius=b-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*c,0),this.updateElements(a,0,a.length,t)}_circumference(t,e){const s=this.options,n=this._cachedMeta,a=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*a/G)}updateElements(t,e,s,n){const a=n==="reset",r=this.chart,o=r.chartArea,c=r.options.animation,d=(o.left+o.right)/2,u=(o.top+o.bottom)/2,h=a&&c.animateScale,f=h?0:this.innerRadius,m=h?0:this.outerRadius,{sharedOptions:p,includeOptions:v}=this._getSharedOptions(e,n);let x=this._getRotation(),g;for(g=0;g<e;++g)x+=this._circumference(g,a);for(g=e;g<e+s;++g){const b=this._circumference(g,a),y=t[g],_={x:d+this.offsetX,y:u+this.offsetY,startAngle:x,endAngle:x+b,circumference:b,outerRadius:m,innerRadius:f};v&&(_.options=p||this.resolveDataElementOptions(g,y.active?"active":n)),x+=b,this.updateElement(y,g,_,n)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,n;for(n=0;n<e.length;n++){const a=t._parsed[n];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(n)&&!e[n].hidden&&(s+=Math.abs(a))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?G*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ke(e._parsed[t],s.options.locale);return{label:n[t]||"",value:a}}getMaxBorderWidth(t){let e=0;const s=this.chart;let n,a,r,o,l;if(!t){for(n=0,a=s.data.datasets.length;n<a;++n)if(s.isDatasetVisible(n)){r=s.getDatasetMeta(n),t=r.data,o=r.controller;break}}if(!t)return 0;for(n=0,a=t.length;n<a;++n)l=o.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,n=t.length;s<n;++s){const a=this.resolveDataElementOptions(s);e=Math.max(e,a.offset||0,a.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(I(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}L(te,"id","doughnut"),L(te,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),L(te,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),L(te,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return e.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Si extends vt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:n=[],_dataset:a}=e,r=this.chart._animationsDisabled;let{start:o,count:l}=Ja(e,n,r);this._drawStart=o,this._drawCount=l,Qa(e)&&(o=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!a._decimated,s.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:c},t),this.updateElements(n,o,l,t)}updateElements(t,e,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,n),h=r.axis,f=o.axis,{spanGaps:m,segment:p}=this.options,v=he(m)?m:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||a||n==="none",g=e+s,b=t.length;let y=e>0&&this.getParsed(e-1);for(let _=0;_<b;++_){const S=t[_],w=x?S:{};if(_<e||_>=g){w.skip=!0;continue}const k=this.getParsed(_),M=z(k[f]),P=w[h]=r.getPixelForValue(k[h],_),T=w[f]=a||M?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,k,l):k[f],_);w.skip=isNaN(P)||isNaN(T)||M,w.stop=_>0&&Math.abs(k[h]-y[h])>v,p&&(w.parsed=k,w.raw=c.data[_]),u&&(w.options=d||this.resolveDataElementOptions(_,S.active?"active":n)),x||this.updateElement(S,_,w,n),y=k}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const a=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,a,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}L(Si,"id","line"),L(Si,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),L(Si,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ze extends vt{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],a=Ke(e._parsed[t].r,s.options.locale);return{label:n[t]||"",value:a}}parseObjectData(t,e,s,n){return or.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const a=this.getParsed(n).r;!isNaN(a)&&this.chart.getDataVisibility(n)&&(a<e.min&&(e.min=a),a>e.max&&(e.max=a))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),a=Math.max(n/2,0),r=Math.max(s.cutoutPercentage?a/100*s.cutoutPercentage:1,0),o=(a-r)/t.getVisibleDatasetCount();this.outerRadius=a-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,s,n){const a=n==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,d=c.xCenter,u=c.yCenter,h=c.getIndexAngle(0)-.5*Y;let f=h,m;const p=360/this.countVisibleElements();for(m=0;m<e;++m)f+=this._computeAngle(m,n,p);for(m=e;m<e+s;m++){const v=t[m];let x=f,g=f+this._computeAngle(m,n,p),b=r.getDataVisibility(m)?c.getDistanceFromCenterForValue(this.getParsed(m).r):0;f=g,a&&(l.animateScale&&(b=0),l.animateRotate&&(x=g=h));const y={x:d,y:u,innerRadius:0,outerRadius:b,startAngle:x,endAngle:g,options:this.resolveDataElementOptions(m,v.active?"active":n)};this.updateElement(v,m,y,n)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?bt(this.resolveDataElementOptions(t,e).angle||s):0}}L(ze,"id","polarArea"),L(ze,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),L(ze,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return e.labels.map((a,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:a,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class ms extends te{}L(ms,"id","pie"),L(ms,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Mi extends vt{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,n){return or.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta,s=e.dataset,n=e.data||[],a=e.iScale.getLabels();if(s.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const o={_loop:!0,_fullLoop:a.length===n.length,options:r};this.updateElement(s,void 0,o,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,s,n){const a=this._cachedMeta.rScale,r=n==="reset";for(let o=e;o<e+s;o++){const l=t[o],c=this.resolveDataElementOptions(o,l.active?"active":n),d=a.getPointPositionForValue(o,this.getParsed(o).r),u=r?a.xCenter:d.x,h=r?a.yCenter:d.y,f={x:u,y:h,angle:d.angle,skip:isNaN(u)||isNaN(h),options:c};this.updateElement(l,o,f,n)}}}L(Mi,"id","radar"),L(Mi,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),L(Mi,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ti extends vt{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:a}=e,r=this.getParsed(t),o=n.getLabelForValue(r.x),l=a.getLabelForValue(r.y);return{label:s[t]||"",value:"("+o+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,n=this.chart._animationsDisabled;let{start:a,count:r}=Ja(e,s,n);if(this._drawStart=a,this._drawCount=r,Qa(e)&&(a=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:o,_dataset:l}=e;o._chart=this.chart,o._datasetIndex=this.index,o._decimated=!!l._decimated,o.points=s;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(o,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,a,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,n){const a=n==="reset",{iScale:r,vScale:o,_stacked:l,_dataset:c}=this._cachedMeta,d=this.resolveDataElementOptions(e,n),u=this.getSharedOptions(d),h=this.includeOptions(n,u),f=r.axis,m=o.axis,{spanGaps:p,segment:v}=this.options,x=he(p)?p:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||a||n==="none";let b=e>0&&this.getParsed(e-1);for(let y=e;y<e+s;++y){const _=t[y],S=this.getParsed(y),w=g?_:{},k=z(S[m]),M=w[f]=r.getPixelForValue(S[f],y),P=w[m]=a||k?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,S,l):S[m],y);w.skip=isNaN(M)||isNaN(P)||k,w.stop=y>0&&Math.abs(S[f]-b[f])>x,v&&(w.parsed=S,w.raw=c.data[y]),h&&(w.options=u||this.resolveDataElementOptions(y,_.active?"active":n)),g||this.updateElement(_,y,w,n),b=S}this.updateSharedOptions(u,n,d)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let o=0;for(let l=e.length-1;l>=0;--l)o=Math.max(o,e[l].size(this.resolveDataElementOptions(l))/2);return o>0&&o}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!e.length)return n;const a=e[0].size(this.resolveDataElementOptions(0)),r=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,a,r)/2}}L(Ti,"id","scatter"),L(Ti,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),L(Ti,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var iu=Object.freeze({__proto__:null,BarController:_i,BubbleController:wi,DoughnutController:te,LineController:Si,PieController:ms,PolarAreaController:ze,RadarController:Mi,ScatterController:Ti});function Ut(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Gs{constructor(t){L(this,"options");this.options=t||{}}static override(t){Object.assign(Gs.prototype,t)}init(){}formats(){return Ut()}parse(){return Ut()}format(){return Ut()}add(){return Ut()}diff(){return Ut()}startOf(){return Ut()}endOf(){return Ut()}}var su={_date:Gs};function nu(i,t,e,s){const{controller:n,data:a,_sorted:r}=i,o=n._cachedMeta.iScale;if(o&&t===o.axis&&t!=="r"&&r&&a.length){const l=o._reversePixels?Cc:Ot;if(s){if(n._sharedOptions){const c=a[0],d=typeof c.getRange=="function"&&c.getRange(t);if(d){const u=l(a,t,e-d),h=l(a,t,e+d);return{lo:u.lo,hi:h.hi}}}}else return l(a,t,e)}return{lo:0,hi:a.length-1}}function Ze(i,t,e,s,n){const a=i.getSortedVisibleDatasetMetas(),r=e[t];for(let o=0,l=a.length;o<l;++o){const{index:c,data:d}=a[o],{lo:u,hi:h}=nu(a[o],t,r,n);for(let f=u;f<=h;++f){const m=d[f];m.skip||s(m,c,f)}}}function au(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(s,n){const a=t?Math.abs(s.x-n.x):0,r=e?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function es(i,t,e,s,n){const a=[];return!n&&!i.isPointInArea(t)||Ze(i,e,t,function(o,l,c){!n&&!Dt(o,i.chartArea,0)||o.inRange(t.x,t.y,s)&&a.push({element:o,datasetIndex:l,index:c})},!0),a}function ru(i,t,e,s){let n=[];function a(r,o,l){const{startAngle:c,endAngle:d}=r.getProps(["startAngle","endAngle"],s),{angle:u}=Ya(r,{x:t.x,y:t.y});qe(u,c,d)&&n.push({element:r,datasetIndex:o,index:l})}return Ze(i,e,t,a),n}function ou(i,t,e,s,n,a){let r=[];const o=au(e);let l=Number.POSITIVE_INFINITY;function c(d,u,h){const f=d.inRange(t.x,t.y,n);if(s&&!f)return;const m=d.getCenterPoint(n);if(!(!!a||i.isPointInArea(m))&&!f)return;const v=o(t,m);v<l?(r=[{element:d,datasetIndex:u,index:h}],l=v):v===l&&r.push({element:d,datasetIndex:u,index:h})}return Ze(i,e,t,c),r}function is(i,t,e,s,n,a){return!a&&!i.isPointInArea(t)?[]:e==="r"&&!s?ru(i,t,e,n):ou(i,t,e,s,n,a)}function zn(i,t,e,s,n){const a=[],r=e==="x"?"inXRange":"inYRange";let o=!1;return Ze(i,e,t,(l,c,d)=>{l[r](t[e],n)&&(a.push({element:l,datasetIndex:c,index:d}),o=o||l.inRange(t.x,t.y,n))}),s&&!o?[]:a}var lu={evaluateInteractionItems:Ze,modes:{index(i,t,e,s){const n=Zt(t,i),a=e.axis||"x",r=e.includeInvisible||!1,o=e.intersect?es(i,n,a,s,r):is(i,n,a,!1,s,r),l=[];return o.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const d=o[0].index,u=c.data[d];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:d})}),l):[]},dataset(i,t,e,s){const n=Zt(t,i),a=e.axis||"xy",r=e.includeInvisible||!1;let o=e.intersect?es(i,n,a,s,r):is(i,n,a,!1,s,r);if(o.length>0){const l=o[0].datasetIndex,c=i.getDatasetMeta(l).data;o=[];for(let d=0;d<c.length;++d)o.push({element:c[d],datasetIndex:l,index:d})}return o},point(i,t,e,s){const n=Zt(t,i),a=e.axis||"xy",r=e.includeInvisible||!1;return es(i,n,a,s,r)},nearest(i,t,e,s){const n=Zt(t,i),a=e.axis||"xy",r=e.includeInvisible||!1;return is(i,n,a,e.intersect,s,r)},x(i,t,e,s){const n=Zt(t,i);return zn(i,n,"x",e.intersect,s)},y(i,t,e,s){const n=Zt(t,i);return zn(i,n,"y",e.intersect,s)}}};const vr=["left","top","right","bottom"];function ye(i,t){return i.filter(e=>e.pos===t)}function Rn(i,t){return i.filter(e=>vr.indexOf(e.pos)===-1&&e.box.axis===t)}function _e(i,t){return i.sort((e,s)=>{const n=t?s:e,a=t?e:s;return n.weight===a.weight?n.index-a.index:n.weight-a.weight})}function cu(i){const t=[];let e,s,n,a,r,o;for(e=0,s=(i||[]).length;e<s;++e)n=i[e],{position:a,options:{stack:r,stackWeight:o=1}}=n,t.push({index:e,box:n,pos:a,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&a+r,stackWeight:o});return t}function du(i){const t={};for(const e of i){const{stack:s,pos:n,stackWeight:a}=e;if(!s||!vr.includes(n))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=a}return t}function uu(i,t){const e=du(i),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let a,r,o;for(a=0,r=i.length;a<r;++a){o=i[a];const{fullSize:l}=o.box,c=e[o.stack],d=c&&o.stackWeight/c.weight;o.horizontal?(o.width=d?d*s:l&&t.availableWidth,o.height=n):(o.width=s,o.height=d?d*n:l&&t.availableHeight)}return e}function hu(i){const t=cu(i),e=_e(t.filter(c=>c.box.fullSize),!0),s=_e(ye(t,"left"),!0),n=_e(ye(t,"right")),a=_e(ye(t,"top"),!0),r=_e(ye(t,"bottom")),o=Rn(t,"x"),l=Rn(t,"y");return{fullSize:e,leftAndTop:s.concat(a),rightAndBottom:n.concat(l).concat(r).concat(o),chartArea:ye(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:a.concat(r).concat(o)}}function Vn(i,t,e,s){return Math.max(i[e],t[e])+Math.max(i[s],t[s])}function xr(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function fu(i,t,e,s){const{pos:n,box:a}=e,r=i.maxPadding;if(!R(n)){e.size&&(i[n]-=e.size);const u=s[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?a.height:a.width),e.size=u.size/u.count,i[n]+=e.size}a.getPadding&&xr(r,a.getPadding());const o=Math.max(0,t.outerWidth-Vn(r,i,"left","right")),l=Math.max(0,t.outerHeight-Vn(r,i,"top","bottom")),c=o!==i.w,d=l!==i.h;return i.w=o,i.h=l,e.horizontal?{same:c,other:d}:{same:d,other:c}}function pu(i){const t=i.maxPadding;function e(s){const n=Math.max(t[s]-i[s],0);return i[s]+=n,n}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function gu(i,t){const e=t.maxPadding;function s(n){const a={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{a[r]=Math.max(t[r],e[r])}),a}return s(i?["left","right"]:["top","bottom"])}function Le(i,t,e,s){const n=[];let a,r,o,l,c,d;for(a=0,r=i.length,c=0;a<r;++a){o=i[a],l=o.box,l.update(o.width||t.w,o.height||t.h,gu(o.horizontal,t));const{same:u,other:h}=fu(t,e,o,s);c|=u&&n.length,d=d||h,l.fullSize||n.push(o)}return c&&Le(n,t,e,s)||d}function ri(i,t,e,s,n){i.top=e,i.left=t,i.right=t+s,i.bottom=e+n,i.width=s,i.height=n}function Bn(i,t,e,s){const n=e.padding;let{x:a,y:r}=t;for(const o of i){const l=o.box,c=s[o.stack]||{count:1,placed:0,weight:1},d=o.stackWeight/c.weight||1;if(o.horizontal){const u=t.w*d,h=c.size||l.height;je(c.start)&&(r=c.start),l.fullSize?ri(l,n.left,r,e.outerWidth-n.right-n.left,h):ri(l,t.left+c.placed,r,u,h),c.start=r,c.placed+=u,r=l.bottom}else{const u=t.h*d,h=c.size||l.width;je(c.start)&&(a=c.start),l.fullSize?ri(l,a,n.top,h,e.outerHeight-n.bottom-n.top):ri(l,a,t.top+c.placed,h,u),c.start=a,c.placed+=u,a=l.right}}t.x=a,t.y=r}var st={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,s){if(!i)return;const n=tt(i.options.layout.padding),a=Math.max(t-n.width,0),r=Math.max(e-n.height,0),o=hu(i.boxes),l=o.vertical,c=o.horizontal;$(i.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const d=l.reduce((p,v)=>v.box.options&&v.box.options.display===!1?p:p+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:n,availableWidth:a,availableHeight:r,vBoxMaxWidth:a/2/d,hBoxMaxHeight:r/2}),h=Object.assign({},n);xr(h,tt(s));const f=Object.assign({maxPadding:h,w:a,h:r,x:n.left,y:n.top},n),m=uu(l.concat(c),u);Le(o.fullSize,f,u,m),Le(l,f,u,m),Le(c,f,u,m)&&Le(l,f,u,m),pu(f),Bn(o.leftAndTop,f,u,m),f.x+=f.w,f.y+=f.h,Bn(o.rightAndBottom,f,u,m),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},$(o.chartArea,p=>{const v=p.box;Object.assign(v,i.chartArea),v.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class yr{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,n){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):s)}}isAttached(t){return!0}updateConfig(t){}}class mu extends yr{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ki="$chartjs",bu={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Nn=i=>i===null||i==="";function vu(i,t){const e=i.style,s=i.getAttribute("height"),n=i.getAttribute("width");if(i[ki]={initial:{height:s,width:n,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Nn(n)){const a=wn(i,"width");a!==void 0&&(i.width=a)}if(Nn(s))if(i.style.height==="")i.height=i.width/(t||2);else{const a=wn(i,"height");a!==void 0&&(i.height=a)}return i}const _r=yd?{passive:!0}:!1;function xu(i,t,e){i.addEventListener(t,e,_r)}function yu(i,t,e){i.canvas.removeEventListener(t,e,_r)}function _u(i,t){const e=bu[i.type]||i.type,{x:s,y:n}=Zt(i,t);return{type:e,chart:t,native:i,x:s!==void 0?s:null,y:n!==void 0?n:null}}function Fi(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function wu(i,t,e){const s=i.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||Fi(o.addedNodes,s),r=r&&!Fi(o.removedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}function Su(i,t,e){const s=i.canvas,n=new MutationObserver(a=>{let r=!1;for(const o of a)r=r||Fi(o.removedNodes,s),r=r&&!Fi(o.addedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}const Ge=new Map;let $n=0;function wr(){const i=window.devicePixelRatio;i!==$n&&($n=i,Ge.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function Mu(i,t){Ge.size||window.addEventListener("resize",wr),Ge.set(i,t)}function Tu(i){Ge.delete(i),Ge.size||window.removeEventListener("resize",wr)}function ku(i,t,e){const s=i.canvas,n=s&&Ws(s);if(!n)return;const a=Za((o,l)=>{const c=n.clientWidth;e(o,l),c<n.clientWidth&&e()},window),r=new ResizeObserver(o=>{const l=o[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return r.observe(n),Mu(i,a),r}function ss(i,t,e){e&&e.disconnect(),t==="resize"&&Tu(i)}function Cu(i,t,e){const s=i.canvas,n=Za(a=>{i.ctx!==null&&e(_u(a,i))},i);return xu(s,t,n),n}class Eu extends yr{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(vu(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[ki])return!1;const s=e[ki].initial;["height","width"].forEach(a=>{const r=s[a];z(r)?e.removeAttribute(a):e.setAttribute(a,r)});const n=s.style||{};return Object.keys(n).forEach(a=>{e.style[a]=n[a]}),e.width=e.width,delete e[ki],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),r={attach:wu,detach:Su,resize:ku}[e]||Cu;n[e]=r(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),n=s[e];if(!n)return;({attach:ss,detach:ss,resize:ss}[e]||yu)(t,e,n),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,n){return xd(t,e,s,n)}isAttached(t){const e=Ws(t);return!!(e&&e.isConnected)}}function Lu(i){return!cr()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?mu:Eu}var xi;let Ft=(xi=class{constructor(){L(this,"x");L(this,"y");L(this,"active",!1);L(this,"options");L(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return he(this.x)&&he(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const n={};return t.forEach(a=>{n[a]=s[a]&&s[a].active()?s[a]._to:this[a]}),n}},L(xi,"defaults",{}),L(xi,"defaultRoutes"),xi);function Pu(i,t){const e=i.options.ticks,s=Au(i),n=Math.min(e.maxTicksLimit||s,s),a=e.major.enabled?Du(t):[],r=a.length,o=a[0],l=a[r-1],c=[];if(r>n)return Iu(t,c,a,r/n),c;const d=Ou(a,t,n);if(r>0){let u,h;const f=r>1?Math.round((l-o)/(r-1)):null;for(oi(t,c,d,z(f)?0:o-f,o),u=0,h=r-1;u<h;u++)oi(t,c,d,a[u],a[u+1]);return oi(t,c,d,l,z(f)?t.length:l+f),c}return oi(t,c,d),c}function Au(i){const t=i.options.offset,e=i._tickSize(),s=i._length/e+(t?0:1),n=i._maxLength/e;return Math.floor(Math.min(s,n))}function Ou(i,t,e){const s=Fu(i),n=t.length/e;if(!s)return Math.max(n,1);const a=Sc(s);for(let r=0,o=a.length-1;r<o;r++){const l=a[r];if(l>n)return l}return Math.max(n,1)}function Du(i){const t=[];let e,s;for(e=0,s=i.length;e<s;e++)i[e].major&&t.push(e);return t}function Iu(i,t,e,s){let n=0,a=e[0],r;for(s=Math.ceil(s),r=0;r<i.length;r++)r===a&&(t.push(i[r]),n++,a=e[n*s])}function oi(i,t,e,s,n){const a=I(s,0),r=Math.min(I(n,i.length),i.length);let o=0,l,c,d;for(e=Math.ceil(e),n&&(l=n-s,e=l/Math.floor(l/e)),d=a;d<0;)o++,d=Math.round(a+o*e);for(c=Math.max(a,0);c<r;c++)c===d&&(t.push(i[c]),o++,d=Math.round(a+o*e))}function Fu(i){const t=i.length;let e,s;if(t<2)return!1;for(s=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==s)return!1;return s}const zu=i=>i==="left"?"right":i==="right"?"left":i,Hn=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,jn=(i,t)=>Math.min(t||i,i);function qn(i,t){const e=[],s=i.length/t,n=i.length;let a=0;for(;a<n;a+=s)e.push(i[Math.floor(a)]);return e}function Ru(i,t,e){const s=i.ticks.length,n=Math.min(t,s-1),a=i._startPixel,r=i._endPixel,o=1e-6;let l=i.getPixelForTick(n),c;if(!(e&&(s===1?c=Math.max(l-a,r-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<a-o||l>r+o)))return l}function Vu(i,t){$(i,e=>{const s=e.gc,n=s.length/2;let a;if(n>t){for(a=0;a<n;++a)delete e.data[s[a]];s.splice(0,n)}})}function we(i){return i.drawTicks?i.tickLength:0}function Wn(i,t){if(!i.display)return 0;const e=Z(i.font,t),s=tt(i.padding);return(W(i.text)?i.text.length:1)*e.lineHeight+s.height}function Bu(i,t){return Wt(i,{scale:t,type:"scale"})}function Nu(i,t,e){return Wt(i,{tick:e,index:t,type:"tick"})}function $u(i,t,e){let s=Bs(i);return(e&&t!=="right"||!e&&t==="right")&&(s=zu(s)),s}function Hu(i,t,e,s){const{top:n,left:a,bottom:r,right:o,chart:l}=i,{chartArea:c,scales:d}=l;let u=0,h,f,m;const p=r-n,v=o-a;if(i.isHorizontal()){if(f=it(s,a,o),R(e)){const x=Object.keys(e)[0],g=e[x];m=d[x].getPixelForValue(g)+p-t}else e==="center"?m=(c.bottom+c.top)/2+p-t:m=Hn(i,e,t);h=o-a}else{if(R(e)){const x=Object.keys(e)[0],g=e[x];f=d[x].getPixelForValue(g)-v+t}else e==="center"?f=(c.left+c.right)/2-v+t:f=Hn(i,e,t);m=it(s,r,n),u=e==="left"?-K:K}return{titleX:f,titleY:m,maxWidth:h,rotation:u}}class re extends Ft{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:n}=this;return t=lt(t,Number.POSITIVE_INFINITY),e=lt(e,Number.NEGATIVE_INFINITY),s=lt(s,Number.POSITIVE_INFINITY),n=lt(n,Number.NEGATIVE_INFINITY),{min:lt(t,s),max:lt(e,n),minDefined:U(t),maxDefined:U(e)}}getMinMax(t){let{min:e,max:s,minDefined:n,maxDefined:a}=this.getUserBounds(),r;if(n&&a)return{min:e,max:s};const o=this.getMatchingVisibleMetas();for(let l=0,c=o.length;l<c;++l)r=o[l].controller.getMinMax(this,t),n||(e=Math.min(e,r.min)),a||(s=Math.max(s,r.max));return e=a&&e>s?s:e,s=n&&e>s?e:s,{min:lt(e,lt(s,e)),max:lt(s,lt(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){H(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:n,grace:a,ticks:r}=this.options,o=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Zc(this,a,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=o<this.ticks.length;this._convertTicksToLabels(l?qn(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=Pu(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){H(this.options.afterUpdate,[this])}beforeSetDimensions(){H(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){H(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),H(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){H(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,n,a;for(s=0,n=t.length;s<n;s++)a=t[s],a.label=H(e.callback,[a.value,s,t],this)}afterTickToLabelConversion(){H(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){H(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=jn(this.ticks.length,t.ticks.maxTicksLimit),n=e.minRotation||0,a=e.maxRotation;let r=n,o,l,c;if(!this._isVisible()||!e.display||n>=a||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const d=this._getLabelSizes(),u=d.widest.width,h=d.highest.height,f=Q(this.chart.width-u,0,this.maxWidth);o=t.offset?this.maxWidth/s:f/(s-1),u+6>o&&(o=f/(s-(t.offset?.5:1)),l=this.maxHeight-we(t.grid)-e.padding-Wn(t.title,this.chart.options.font),c=Math.sqrt(u*u+h*h),r=Rs(Math.min(Math.asin(Q((d.highest.height+6)/o,-1,1)),Math.asin(Q(l/c,-1,1))-Math.asin(Q(h/c,-1,1)))),r=Math.max(n,Math.min(a,r))),this.labelRotation=r}afterCalculateLabelRotation(){H(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){H(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:n,grid:a}}=this,r=this._isVisible(),o=this.isHorizontal();if(r){const l=Wn(n,e.options.font);if(o?(t.width=this.maxWidth,t.height=we(a)+l):(t.height=this.maxHeight,t.width=we(a)+l),s.display&&this.ticks.length){const{first:c,last:d,widest:u,highest:h}=this._getLabelSizes(),f=s.padding*2,m=bt(this.labelRotation),p=Math.cos(m),v=Math.sin(m);if(o){const x=s.mirror?0:v*u.width+p*h.height;t.height=Math.min(this.maxHeight,t.height+x+f)}else{const x=s.mirror?0:p*u.width+v*h.height;t.width=Math.min(this.maxWidth,t.width+x+f)}this._calculatePadding(c,d,v,p)}}this._handleMargins(),o?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,n){const{ticks:{align:a,padding:r},position:o}=this.options,l=this.labelRotation!==0,c=o!=="top"&&this.axis==="x";if(this.isHorizontal()){const d=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,f=0;l?c?(h=n*t.width,f=s*e.height):(h=s*t.height,f=n*e.width):a==="start"?f=e.width:a==="end"?h=t.width:a!=="inner"&&(h=t.width/2,f=e.width/2),this.paddingLeft=Math.max((h-d+r)*this.width/(this.width-d),0),this.paddingRight=Math.max((f-u+r)*this.width/(this.width-u),0)}else{let d=e.height/2,u=t.height/2;a==="start"?(d=0,u=t.height):a==="end"&&(d=e.height,u=0),this.paddingTop=d+r,this.paddingBottom=u+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){H(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)z(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=qn(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:n,_longestTextCache:a}=this,r=[],o=[],l=Math.floor(e/jn(e,s));let c=0,d=0,u,h,f,m,p,v,x,g,b,y,_;for(u=0;u<e;u+=l){if(m=t[u].label,p=this._resolveTickFontOptions(u),n.font=v=p.string,x=a[v]=a[v]||{data:{},gc:[]},g=p.lineHeight,b=y=0,!z(m)&&!W(m))b=Di(n,x.data,x.gc,b,m),y=g;else if(W(m))for(h=0,f=m.length;h<f;++h)_=m[h],!z(_)&&!W(_)&&(b=Di(n,x.data,x.gc,b,_),y+=g);r.push(b),o.push(y),c=Math.max(b,c),d=Math.max(y,d)}Vu(a,e);const S=r.indexOf(c),w=o.indexOf(d),k=M=>({width:r[M]||0,height:o[M]||0});return{first:k(0),last:k(e-1),widest:k(S),highest:k(w),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return kc(this._alignToPixels?Xt(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=Nu(this.getContext(),t,s))}return this.$context||(this.$context=Bu(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=bt(this.labelRotation),s=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,l=a?a.highest.height+r:0;return this.isHorizontal()?l*s>o*n?o/s:l/n:l*n<o*s?l/s:o/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,n=this.options,{grid:a,position:r,border:o}=n,l=a.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),h=we(a),f=[],m=o.setContext(this.getContext()),p=m.display?m.width:0,v=p/2,x=function(F){return Xt(s,F,p)};let g,b,y,_,S,w,k,M,P,T,E,C;if(r==="top")g=x(this.bottom),w=this.bottom-h,M=g-v,T=x(t.top)+v,C=t.bottom;else if(r==="bottom")g=x(this.top),T=t.top,C=x(t.bottom)-v,w=g+v,M=this.top+h;else if(r==="left")g=x(this.right),S=this.right-h,k=g-v,P=x(t.left)+v,E=t.right;else if(r==="right")g=x(this.left),P=t.left,E=x(t.right)-v,S=g+v,k=this.left+h;else if(e==="x"){if(r==="center")g=x((t.top+t.bottom)/2+.5);else if(R(r)){const F=Object.keys(r)[0],D=r[F];g=x(this.chart.scales[F].getPixelForValue(D))}T=t.top,C=t.bottom,w=g+v,M=w+h}else if(e==="y"){if(r==="center")g=x((t.left+t.right)/2);else if(R(r)){const F=Object.keys(r)[0],D=r[F];g=x(this.chart.scales[F].getPixelForValue(D))}S=g-v,k=S-h,P=t.left,E=t.right}const A=I(n.ticks.maxTicksLimit,u),O=Math.max(1,Math.ceil(u/A));for(b=0;b<u;b+=O){const F=this.getContext(b),D=a.setContext(F),j=o.setContext(F),V=D.lineWidth,J=D.color,xt=j.dash||[],zt=j.dashOffset,Gt=D.tickWidth,ge=D.tickColor,me=D.tickBorderDash||[],be=D.tickBorderDashOffset;y=Ru(this,b,l),y!==void 0&&(_=Xt(s,y,V),c?S=k=P=E=_:w=M=T=C=_,f.push({tx1:S,ty1:w,tx2:k,ty2:M,x1:P,y1:T,x2:E,y2:C,width:V,color:J,borderDash:xt,borderDashOffset:zt,tickWidth:Gt,tickColor:ge,tickBorderDash:me,tickBorderDashOffset:be}))}return this._ticksLength=u,this._borderValue=g,f}_computeLabelItems(t){const e=this.axis,s=this.options,{position:n,ticks:a}=s,r=this.isHorizontal(),o=this.ticks,{align:l,crossAlign:c,padding:d,mirror:u}=a,h=we(s.grid),f=h+d,m=u?-d:f,p=-bt(this.labelRotation),v=[];let x,g,b,y,_,S,w,k,M,P,T,E,C="middle";if(n==="top")S=this.bottom-m,w=this._getXAxisLabelAlignment();else if(n==="bottom")S=this.top+m,w=this._getXAxisLabelAlignment();else if(n==="left"){const O=this._getYAxisLabelAlignment(h);w=O.textAlign,_=O.x}else if(n==="right"){const O=this._getYAxisLabelAlignment(h);w=O.textAlign,_=O.x}else if(e==="x"){if(n==="center")S=(t.top+t.bottom)/2+f;else if(R(n)){const O=Object.keys(n)[0],F=n[O];S=this.chart.scales[O].getPixelForValue(F)+f}w=this._getXAxisLabelAlignment()}else if(e==="y"){if(n==="center")_=(t.left+t.right)/2-f;else if(R(n)){const O=Object.keys(n)[0],F=n[O];_=this.chart.scales[O].getPixelForValue(F)}w=this._getYAxisLabelAlignment(h).textAlign}e==="y"&&(l==="start"?C="top":l==="end"&&(C="bottom"));const A=this._getLabelSizes();for(x=0,g=o.length;x<g;++x){b=o[x],y=b.label;const O=a.setContext(this.getContext(x));k=this.getPixelForTick(x)+a.labelOffset,M=this._resolveTickFontOptions(x),P=M.lineHeight,T=W(y)?y.length:1;const F=T/2,D=O.color,j=O.textStrokeColor,V=O.textStrokeWidth;let J=w;r?(_=k,w==="inner"&&(x===g-1?J=this.options.reverse?"left":"right":x===0?J=this.options.reverse?"right":"left":J="center"),n==="top"?c==="near"||p!==0?E=-T*P+P/2:c==="center"?E=-A.highest.height/2-F*P+P:E=-A.highest.height+P/2:c==="near"||p!==0?E=P/2:c==="center"?E=A.highest.height/2-F*P:E=A.highest.height-T*P,u&&(E*=-1),p!==0&&!O.showLabelBackdrop&&(_+=P/2*Math.sin(p))):(S=k,E=(1-T)*P/2);let xt;if(O.showLabelBackdrop){const zt=tt(O.backdropPadding),Gt=A.heights[x],ge=A.widths[x];let me=E-zt.top,be=0-zt.left;switch(C){case"middle":me-=Gt/2;break;case"bottom":me-=Gt;break}switch(w){case"center":be-=ge/2;break;case"right":be-=ge;break}xt={left:be,top:me,width:ge+zt.width,height:Gt+zt.height,color:O.backdropColor}}v.push({label:y,font:M,textOffset:E,options:{rotation:p,color:D,strokeColor:j,strokeWidth:V,textAlign:J,textBaseline:C,translation:[_,S],backdrop:xt}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-bt(this.labelRotation))return t==="top"?"left":"right";let n="center";return e.align==="start"?n="left":e.align==="end"?n="right":e.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:n,padding:a}}=this.options,r=this._getLabelSizes(),o=t+a,l=r.widest.width;let c,d;return e==="left"?n?(d=this.right+a,s==="near"?c="left":s==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-o,s==="near"?c="right":s==="center"?(c="center",d-=l/2):(c="left",d=this.left)):e==="right"?n?(d=this.left+a,s==="near"?c="right":s==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+o,s==="near"?c="left":s==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:n,width:a,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,n,a,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex(a=>a.value===t);return n>=0?e.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,r;const o=(l,c,d)=>{!d.width||!d.color||(s.save(),s.lineWidth=d.width,s.strokeStyle=d.color,s.setLineDash(d.borderDash||[]),s.lineDashOffset=d.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(e.display)for(a=0,r=n.length;a<r;++a){const l=n[a];e.drawOnChartArea&&o({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&o({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:n}}=this,a=s.setContext(this.getContext()),r=s.display?a.width:0;if(!r)return;const o=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,d,u,h;this.isHorizontal()?(c=Xt(t,this.left,r)-r/2,d=Xt(t,this.right,o)+o/2,u=h=l):(u=Xt(t,this.top,r)-r/2,h=Xt(t,this.bottom,o)+o/2,c=d=l),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(c,u),e.lineTo(d,h),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,n=this._computeLabelArea();n&&Bi(s,n);const a=this.getLabelItems(t);for(const r of a){const o=r.options,l=r.font,c=r.label,d=r.textOffset;ae(s,c,0,d,l,o)}n&&Ni(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:n}}=this;if(!s.display)return;const a=Z(s.font),r=tt(s.padding),o=s.align;let l=a.lineHeight/2;e==="bottom"||e==="center"||R(e)?(l+=r.bottom,W(s.text)&&(l+=a.lineHeight*(s.text.length-1))):l+=r.top;const{titleX:c,titleY:d,maxWidth:u,rotation:h}=Hu(this,l,e,o);ae(t,s.text,0,0,a,{color:s.color,maxWidth:u,rotation:h,textAlign:$u(o,e,n),textBaseline:"middle",translation:[c,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=I(t.grid&&t.grid.z,-1),n=I(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==re.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:s,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let a,r;for(a=0,r=e.length;a<r;++a){const o=e[a];o[s]===this.id&&(!t||o.type===t)&&n.push(o)}return n}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Z(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class li{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;Wu(e)&&(s=this.register(e));const n=this.items,a=t.id,r=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in n||(n[a]=t,ju(t,r,s),this.override&&X.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,n=this.scope;s in e&&delete e[s],n&&s in X[n]&&(delete X[n][s],this.override&&delete ne[s])}}function ju(i,t,e){const s=Mt(Object.create(null),[e?X.get(e):{},X.get(t),i.defaults]);X.set(t,s),i.defaultRoutes&&qu(t,i.defaultRoutes),i.descriptors&&X.describe(t,i.descriptors)}function qu(i,t){Object.keys(t).forEach(e=>{const s=e.split("."),n=s.pop(),a=[i].concat(s).join("."),r=t[e].split("."),o=r.pop(),l=r.join(".");X.route(a,n,l,o)})}function Wu(i){return"id"in i&&"defaults"in i}class Gu{constructor(){this.controllers=new li(vt,"datasets",!0),this.elements=new li(Ft,"elements"),this.plugins=new li(Object,"plugins"),this.scales=new li(re,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(n=>{const a=s||this._getRegistryForType(n);s||a.isForType(n)||a===this.plugins&&n.id?this._exec(t,a,n):$(n,r=>{const o=s||this._getRegistryForType(r);this._exec(t,o,r)})})}_exec(t,e,s){const n=zs(t);H(s["before"+n],[],s),e[t](s),H(s["after"+n],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const n=e.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var wt=new Gu;class Yu{constructor(){this._init=[]}notify(t,e,s,n){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const a=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(a,t,e,s);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall")),r}_notify(t,e,s,n){n=n||{};for(const a of t){const r=a.plugin,o=r[s],l=[e,n,a.options];if(H(o,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){z(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,n=I(s.options&&s.options.plugins,{}),a=Xu(s);return n===!1&&!e?[]:Ku(t,a,n,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,n=(a,r)=>a.filter(o=>!r.some(l=>o.plugin.id===l.plugin.id));this._notify(n(e,s),t,"stop"),this._notify(n(s,e),t,"start")}}function Xu(i){const t={},e=[],s=Object.keys(wt.plugins.items);for(let a=0;a<s.length;a++)e.push(wt.getPlugin(s[a]));const n=i.plugins||[];for(let a=0;a<n.length;a++){const r=n[a];e.indexOf(r)===-1&&(e.push(r),t[r.id]=!0)}return{plugins:e,localIds:t}}function Uu(i,t){return!t&&i===!1?null:i===!0?{}:i}function Ku(i,{plugins:t,localIds:e},s,n){const a=[],r=i.getContext();for(const o of t){const l=o.id,c=Uu(s[l],n);c!==null&&a.push({plugin:o,options:Zu(i.config,{plugin:o,local:e[l]},c,r)})}return a}function Zu(i,{plugin:t,local:e},s,n){const a=i.pluginScopeKeys(t),r=i.getOptionScopes(s,a);return e&&t.defaults&&r.push(t.defaults),i.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function bs(i,t){const e=X.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Ju(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function Qu(i,t){return i===t?"_index_":"_value_"}function Gn(i){if(i==="x"||i==="y"||i==="r")return i}function th(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function vs(i,...t){if(Gn(i))return i;for(const e of t){const s=e.axis||th(e.position)||i.length>1&&Gn(i[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Yn(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function eh(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===i||s.yAxisID===i);if(e.length)return Yn(i,"x",e[0])||Yn(i,"y",e[0])}return{}}function ih(i,t){const e=ne[i.type]||{scales:{}},s=t.scales||{},n=bs(i.type,t),a=Object.create(null);return Object.keys(s).forEach(r=>{const o=s[r];if(!R(o))return console.error(`Invalid scale configuration for scale: ${r}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=vs(r,o,eh(r,i),X.scales[o.type]),c=Qu(l,n),d=e.scales||{};a[r]=Oe(Object.create(null),[{axis:l},o,d[l],d[c]])}),i.data.datasets.forEach(r=>{const o=r.type||i.type,l=r.indexAxis||bs(o,t),d=(ne[o]||{}).scales||{};Object.keys(d).forEach(u=>{const h=Ju(u,l),f=r[h+"AxisID"]||h;a[f]=a[f]||Object.create(null),Oe(a[f],[{axis:h},s[f],d[u]])})}),Object.keys(a).forEach(r=>{const o=a[r];Oe(o,[X.scales[o.type],X.scale])}),a}function Sr(i){const t=i.options||(i.options={});t.plugins=I(t.plugins,{}),t.scales=ih(i,t)}function Mr(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function sh(i){return i=i||{},i.data=Mr(i.data),Sr(i),i}const Xn=new Map,Tr=new Set;function ci(i,t){let e=Xn.get(i);return e||(e=t(),Xn.set(i,e),Tr.add(e)),e}const Se=(i,t,e)=>{const s=jt(t,e);s!==void 0&&i.add(s)};class nh{constructor(t){this._config=sh(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Mr(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Sr(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ci(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ci(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ci(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return ci(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let n=s.get(t);return(!n||e)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,e,s){const{options:n,type:a}=this,r=this._cachedScopes(t,s),o=r.get(e);if(o)return o;const l=new Set;e.forEach(d=>{t&&(l.add(t),d.forEach(u=>Se(l,t,u))),d.forEach(u=>Se(l,n,u)),d.forEach(u=>Se(l,ne[a]||{},u)),d.forEach(u=>Se(l,X,u)),d.forEach(u=>Se(l,ps,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Tr.has(e)&&r.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,ne[e]||{},X.datasets[e]||{},{type:e},X,ps]}resolveNamedOptions(t,e,s,n=[""]){const a={$shared:!0},{resolver:r,subPrefixes:o}=Un(this._resolverCache,t,n);let l=r;if(rh(r,e)){a.$shared=!1,s=qt(s)?s():s;const c=this.createResolver(t,s,o);l=fe(r,s,c)}for(const c of e)a[c]=l[c];return a}createResolver(t,e,s=[""],n){const{resolver:a}=Un(this._resolverCache,t,s);return R(e)?fe(a,e,void 0,n):a}}function Un(i,t,e){let s=i.get(t);s||(s=new Map,i.set(t,s));const n=e.join();let a=s.get(n);return a||(a={resolver:Hs(t,e),subPrefixes:e.filter(o=>!o.toLowerCase().includes("hover"))},s.set(n,a)),a}const ah=i=>R(i)&&Object.getOwnPropertyNames(i).reduce((t,e)=>t||qt(i[e]),!1);function rh(i,t){const{isScriptable:e,isIndexable:s}=sr(i);for(const n of t){const a=e(n),r=s(n),o=(r||a)&&i[n];if(a&&(qt(o)||ah(o))||r&&W(o))return!0}return!1}var oh="4.4.0";const lh=["top","bottom","left","right","chartArea"];function Kn(i,t){return i==="top"||i==="bottom"||lh.indexOf(i)===-1&&t==="x"}function Zn(i,t){return function(e,s){return e[i]===s[i]?e[t]-s[t]:e[i]-s[i]}}function Jn(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),H(e&&e.onComplete,[i],t)}function ch(i){const t=i.chart,e=t.options.animation;H(e&&e.onProgress,[i],t)}function kr(i){return cr()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Ci={},Qn=i=>{const t=kr(i);return Object.values(Ci).filter(e=>e.canvas===t).pop()};function dh(i,t,e){const s=Object.keys(i);for(const n of s){const a=+n;if(a>=t){const r=i[n];delete i[n],(e>0||a>t)&&(i[a+e]=r)}}}function uh(i,t,e,s){return!e||i.type==="mouseout"?null:s?t:i}function di(i,t,e){return i.options.clip?i[e]:t[e]}function hh(i,t){const{xScale:e,yScale:s}=i;return e&&s?{left:di(e,t,"left"),right:di(e,t,"right"),top:di(s,t,"top"),bottom:di(s,t,"bottom")}:t}class gt{static register(...t){wt.add(...t),ta()}static unregister(...t){wt.remove(...t),ta()}constructor(t,e){const s=this.config=new nh(e),n=kr(t),a=Qn(n);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||Lu(n)),this.platform.updateConfig(s);const o=this.platform.acquireContext(n,r.aspectRatio),l=o&&o.canvas,c=l&&l.height,d=l&&l.width;if(this.id=pc(),this.ctx=o,this.canvas=l,this.width=d,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Yu,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Pc(u=>this.update(u),r.resizeDelay||0),this._dataChanges=[],Ci[this.id]=this,!o||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Ct.listen(this,"complete",Jn),Ct.listen(this,"progress",ch),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:n,_aspectRatio:a}=this;return z(t)?e&&a?a:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return wt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():_n(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return vn(this.canvas,this.ctx),this}stop(){return Ct.stop(this),this}resize(t,e){Ct.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,n=this.canvas,a=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,e,a),o=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,_n(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),H(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};$(e,(s,n)=>{s.id=n})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,n=Object.keys(s).reduce((r,o)=>(r[o]=!1,r),{});let a=[];e&&(a=a.concat(Object.keys(e).map(r=>{const o=e[r],l=vs(r,o),c=l==="r",d=l==="x";return{options:o,dposition:c?"chartArea":d?"bottom":"left",dtype:c?"radialLinear":d?"category":"linear"}}))),$(a,r=>{const o=r.options,l=o.id,c=vs(l,o),d=I(o.type,r.dtype);(o.position===void 0||Kn(o.position,c)!==Kn(r.dposition))&&(o.position=r.dposition),n[l]=!0;let u=null;if(l in s&&s[l].type===d)u=s[l];else{const h=wt.getScale(d);u=new h({id:l,type:d,ctx:this.ctx,chart:this}),s[u.id]=u}u.init(o,t)}),$(n,(r,o)=>{r||delete s[o]}),$(s,r=>{st.configure(this,r,r.options),st.addBox(this,r)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((n,a)=>n.index-a.index),s>e){for(let n=e;n<s;++n)this._destroyDatasetMeta(n);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Zn("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,n)=>{e.filter(a=>a===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,n;for(this._removeUnreferencedMetasets(),s=0,n=e.length;s<n;s++){const a=e[s];let r=this.getDatasetMeta(s);const o=a.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=o,r.indexAxis=a.indexAxis||bs(o,this.options),r.order=a.order||0,r.index=s,r.label=""+a.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const l=wt.getController(o),{datasetElementType:c,dataElementType:d}=X.datasets[o];Object.assign(l,{dataElementType:wt.getElement(d),datasetElementType:c&&wt.getElement(c)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){$(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,d=this.data.datasets.length;c<d;c++){const{controller:u}=this.getDatasetMeta(c),h=!n&&a.indexOf(u)===-1;u.buildOrUpdateElements(h),r=Math.max(+u.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),n||$(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Zn("z","_idx"));const{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){$(this.scales,t=>{st.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!cn(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:n,count:a}of e){const r=s==="_removeElements"?-a:a;dh(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=a=>new Set(t.filter(r=>r[0]===a).map((r,o)=>o+","+r.splice(1).join(","))),n=s(0);for(let a=1;a<e;a++)if(!cn(n,s(a)))return;return Array.from(n).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;st.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],$(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,a)=>{n._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,qt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),n={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ct.has(this)?this.attached&&!Ct.running(this)&&Ct.start(this):(this.draw(),Jn({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:n}=this._resizeBeforeDraw;this._resize(s,n),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let n,a;for(n=0,a=e.length;n<a;++n){const r=e[n];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s=t._clip,n=!s.disabled,a=hh(t,this.chartArea),r={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(n&&Bi(e,{left:s.left===!1?0:a.left-s.left,right:s.right===!1?this.width:a.right+s.right,top:s.top===!1?0:a.top-s.top,bottom:s.bottom===!1?this.height:a.bottom+s.bottom}),t.controller.draw(),n&&Ni(e),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return Dt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,n){const a=lu.modes[e];return typeof a=="function"?a(this,t,s,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let n=s.filter(a=>a&&a._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=Wt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const n=s?"show":"hide",a=this.getDatasetMeta(t),r=a.controller._resolveAnimations(void 0,n);je(e)?(a.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(a,{visible:s}),this.update(o=>o.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Ct.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),vn(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Ci[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(a,r)=>{e.addEventListener(this,a,r),t[a]=r},n=(a,r,o)=>{a.offsetX=r,a.offsetY=o,this._eventHandler(a)};$(this.options.events,a=>s(a,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},n=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},a=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const o=()=>{n("attach",o),this.attached=!0,this.resize(),s("resize",a),s("detach",r)};r=()=>{this.attached=!1,n("resize",a),this._stop(),this._resize(0,0),s("attach",o)},e.isAttached(this.canvas)?o():r()}unbindEvents(){$(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},$(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const n=s?"set":"remove";let a,r,o,l;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+n+"DatasetHoverStyle"]()),o=0,l=t.length;o<l;++o){r=t[o];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:a,index:r})=>{const o=this.getDatasetMeta(a);if(!o)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:o.data[r],index:r}});!Pi(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const n=this.options.hover,a=(l,c)=>l.filter(d=>!c.some(u=>d.datasetIndex===u.datasetIndex&&d.index===u.index)),r=a(e,t),o=s?t:a(t,e);r.length&&this.updateHoverStyle(r,n.mode,!1),o.length&&n.mode&&this.updateHoverStyle(o,n.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;const a=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(a||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:n=[],options:a}=this,r=e,o=this._getActiveElements(t,n,s,r),l=yc(t),c=uh(t,this._lastEvent,s,l);s&&(this._lastEvent=null,H(a.onHover,[t,o,this],this),l&&H(a.onClick,[t,o,this],this));const d=!Pi(o,n);return(d||e)&&(this._active=o,this._updateHoverStyles(o,n,e)),this._lastEvent=c,d}_getActiveElements(t,e,s,n){if(t.type==="mouseout")return[];if(!s)return e;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,n)}}L(gt,"defaults",X),L(gt,"instances",Ci),L(gt,"overrides",ne),L(gt,"registry",wt),L(gt,"version",oh),L(gt,"getChart",Qn);function ta(){return $(gt.instances,i=>i._plugins.invalidate())}function fh(i,t,e){const{startAngle:s,pixelMargin:n,x:a,y:r,outerRadius:o,innerRadius:l}=t;let c=n/o;i.beginPath(),i.arc(a,r,o,s-c,e+c),l>n?(c=n/l,i.arc(a,r,l,e+c,s-c,!0)):i.arc(a,r,n,e+K,s-K),i.closePath(),i.clip()}function ph(i){return $s(i,["outerStart","outerEnd","innerStart","innerEnd"])}function gh(i,t,e,s){const n=ph(i.options.borderRadius),a=(e-t)/2,r=Math.min(a,s*t/2),o=l=>{const c=(e-Math.min(a,l))*s/2;return Q(l,0,Math.min(a,c))};return{outerStart:o(n.outerStart),outerEnd:o(n.outerEnd),innerStart:Q(n.innerStart,0,r),innerEnd:Q(n.innerEnd,0,r)}}function le(i,t,e,s){return{x:e+i*Math.cos(t),y:s+i*Math.sin(t)}}function zi(i,t,e,s,n,a){const{x:r,y:o,startAngle:l,pixelMargin:c,innerRadius:d}=t,u=Math.max(t.outerRadius+s+e-c,0),h=d>0?d+s+e+c:0;let f=0;const m=n-l;if(s){const O=d>0?d-s:0,F=u>0?u-s:0,D=(O+F)/2,j=D!==0?m*D/(D+s):m;f=(m-j)/2}const p=Math.max(.001,m*u-e/Y)/u,v=(m-p)/2,x=l+v+f,g=n-v-f,{outerStart:b,outerEnd:y,innerStart:_,innerEnd:S}=gh(t,h,u,g-x),w=u-b,k=u-y,M=x+b/w,P=g-y/k,T=h+_,E=h+S,C=x+_/T,A=g-S/E;if(i.beginPath(),a){const O=(M+P)/2;if(i.arc(r,o,u,M,O),i.arc(r,o,u,O,P),y>0){const V=le(k,P,r,o);i.arc(V.x,V.y,y,P,g+K)}const F=le(E,g,r,o);if(i.lineTo(F.x,F.y),S>0){const V=le(E,A,r,o);i.arc(V.x,V.y,S,g+K,A+Math.PI)}const D=(g-S/h+(x+_/h))/2;if(i.arc(r,o,h,g-S/h,D,!0),i.arc(r,o,h,D,x+_/h,!0),_>0){const V=le(T,C,r,o);i.arc(V.x,V.y,_,C+Math.PI,x-K)}const j=le(w,x,r,o);if(i.lineTo(j.x,j.y),b>0){const V=le(w,M,r,o);i.arc(V.x,V.y,b,x-K,M)}}else{i.moveTo(r,o);const O=Math.cos(M)*u+r,F=Math.sin(M)*u+o;i.lineTo(O,F);const D=Math.cos(P)*u+r,j=Math.sin(P)*u+o;i.lineTo(D,j)}i.closePath()}function mh(i,t,e,s,n){const{fullCircles:a,startAngle:r,circumference:o}=t;let l=t.endAngle;if(a){zi(i,t,e,s,l,n);for(let c=0;c<a;++c)i.fill();isNaN(o)||(l=r+(o%G||G))}return zi(i,t,e,s,l,n),i.fill(),l}function bh(i,t,e,s,n){const{fullCircles:a,startAngle:r,circumference:o,options:l}=t,{borderWidth:c,borderJoinStyle:d,borderDash:u,borderDashOffset:h}=l,f=l.borderAlign==="inner";if(!c)return;i.setLineDash(u||[]),i.lineDashOffset=h,f?(i.lineWidth=c*2,i.lineJoin=d||"round"):(i.lineWidth=c,i.lineJoin=d||"bevel");let m=t.endAngle;if(a){zi(i,t,e,s,m,n);for(let p=0;p<a;++p)i.stroke();isNaN(o)||(m=r+(o%G||G))}f&&fh(i,t,m),a||(zi(i,t,e,s,m,n),i.stroke())}class de extends Ft{constructor(e){super();L(this,"circumference");L(this,"endAngle");L(this,"fullCircles");L(this,"innerRadius");L(this,"outerRadius");L(this,"pixelMargin");L(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,n){const a=this.getProps(["x","y"],n),{angle:r,distance:o}=Ya(a,{x:e,y:s}),{startAngle:l,endAngle:c,innerRadius:d,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,p=I(h,c-l)>=G||qe(r,l,c),v=At(o,d+f,u+f);return p&&v}getCenterPoint(e){const{x:s,y:n,startAngle:a,endAngle:r,innerRadius:o,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:d}=this.options,u=(a+r)/2,h=(o+l+d+c)/2;return{x:s+Math.cos(u)*h,y:n+Math.sin(u)*h}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:n}=this,a=(s.offset||0)/4,r=(s.spacing||0)/2,o=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>G?Math.floor(n/G):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*a,Math.sin(l)*a);const c=1-Math.sin(Math.min(Y,n||0)),d=a*c;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,mh(e,this,d,r,o),bh(e,this,d,r,o),e.restore()}}L(de,"id","arc"),L(de,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),L(de,"defaultRoutes",{backgroundColor:"backgroundColor"}),L(de,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Cr(i,t,e=t){i.lineCap=I(e.borderCapStyle,t.borderCapStyle),i.setLineDash(I(e.borderDash,t.borderDash)),i.lineDashOffset=I(e.borderDashOffset,t.borderDashOffset),i.lineJoin=I(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=I(e.borderWidth,t.borderWidth),i.strokeStyle=I(e.borderColor,t.borderColor)}function vh(i,t,e){i.lineTo(e.x,e.y)}function xh(i){return i.stepped?Hc:i.tension||i.cubicInterpolationMode==="monotone"?jc:vh}function Er(i,t,e={}){const s=i.length,{start:n=0,end:a=s-1}=e,{start:r,end:o}=t,l=Math.max(n,r),c=Math.min(a,o),d=n<r&&a<r||n>o&&a>o;return{count:s,start:l,loop:t.loop,ilen:c<l&&!d?s+c-l:c-l}}function yh(i,t,e,s){const{points:n,options:a}=t,{count:r,start:o,loop:l,ilen:c}=Er(n,e,s),d=xh(a);let{move:u=!0,reverse:h}=s||{},f,m,p;for(f=0;f<=c;++f)m=n[(o+(h?c-f:f))%r],!m.skip&&(u?(i.moveTo(m.x,m.y),u=!1):d(i,p,m,h,a.stepped),p=m);return l&&(m=n[(o+(h?c:0))%r],d(i,p,m,h,a.stepped)),!!l}function _h(i,t,e,s){const n=t.points,{count:a,start:r,ilen:o}=Er(n,e,s),{move:l=!0,reverse:c}=s||{};let d=0,u=0,h,f,m,p,v,x;const g=y=>(r+(c?o-y:y))%a,b=()=>{p!==v&&(i.lineTo(d,v),i.lineTo(d,p),i.lineTo(d,x))};for(l&&(f=n[g(0)],i.moveTo(f.x,f.y)),h=0;h<=o;++h){if(f=n[g(h)],f.skip)continue;const y=f.x,_=f.y,S=y|0;S===m?(_<p?p=_:_>v&&(v=_),d=(u*d+y)/++u):(b(),i.lineTo(y,_),m=S,u=0,p=v=_),x=_}b()}function xs(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?_h:yh}function wh(i){return i.stepped?_d:i.tension||i.cubicInterpolationMode==="monotone"?wd:Jt}function Sh(i,t,e,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,e,s)&&n.closePath()),Cr(i,t.options),i.stroke(n)}function Mh(i,t,e,s){const{segments:n,options:a}=t,r=xs(t);for(const o of n)Cr(i,a,o.style),i.beginPath(),r(i,t,o,{start:e,end:e+s-1})&&i.closePath(),i.stroke()}const Th=typeof Path2D=="function";function kh(i,t,e,s){Th&&!t.options.segment?Sh(i,t,e,s):Mh(i,t,e,s)}class Nt extends Ft{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;fd(this._points,s,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Ed(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,n=t[e],a=this.points,r=pr(this,{property:e,start:n,end:n});if(!r.length)return;const o=[],l=wh(s);let c,d;for(c=0,d=r.length;c<d;++c){const{start:u,end:h}=r[c],f=a[u],m=a[h];if(f===m){o.push(f);continue}const p=Math.abs((n-f[e])/(m[e]-f[e])),v=l(f,m,p,s.stepped);v[e]=t[e],o.push(v)}return o.length===1?o[0]:o}pathSegment(t,e,s){return xs(this)(t,this,e,s)}path(t,e,s){const n=this.segments,a=xs(this);let r=this._loop;e=e||0,s=s||this.points.length-e;for(const o of n)r&=a(t,this,o,{start:e,end:e+s-1});return!!r}draw(t,e,s,n){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),kh(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}L(Nt,"id","line"),L(Nt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),L(Nt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),L(Nt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function ea(i,t,e,s){const n=i.options,{[e]:a}=i.getProps([e],s);return Math.abs(t-a)<n.radius+n.hitRadius}class Re extends Ft{constructor(e){super();L(this,"parsed");L(this,"skip");L(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,n){const a=this.options,{x:r,y:o}=this.getProps(["x","y"],n);return Math.pow(e-r,2)+Math.pow(s-o,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,s){return ea(this,e,"x",s)}inYRange(e,s){return ea(this,e,"y",s)}getCenterPoint(e){const{x:s,y:n}=this.getProps(["x","y"],e);return{x:s,y:n}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const n=s&&e.borderWidth||0;return(s+n)*2}draw(e,s){const n=this.options;this.skip||n.radius<.1||!Dt(this,s,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,gs(e,n,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}L(Re,"id","point"),L(Re,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),L(Re,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Lr(i,t){const{x:e,y:s,base:n,width:a,height:r}=i.getProps(["x","y","base","width","height"],t);let o,l,c,d,u;return i.horizontal?(u=r/2,o=Math.min(e,n),l=Math.max(e,n),c=s-u,d=s+u):(u=a/2,o=e-u,l=e+u,c=Math.min(s,n),d=Math.max(s,n)),{left:o,top:c,right:l,bottom:d}}function $t(i,t,e,s){return i?0:Q(t,e,s)}function Ch(i,t,e){const s=i.options.borderWidth,n=i.borderSkipped,a=ir(s);return{t:$t(n.top,a.top,0,e),r:$t(n.right,a.right,0,t),b:$t(n.bottom,a.bottom,0,e),l:$t(n.left,a.left,0,t)}}function Eh(i,t,e){const{enableBorderRadius:s}=i.getProps(["enableBorderRadius"]),n=i.options.borderRadius,a=ie(n),r=Math.min(t,e),o=i.borderSkipped,l=s||R(n);return{topLeft:$t(!l||o.top||o.left,a.topLeft,0,r),topRight:$t(!l||o.top||o.right,a.topRight,0,r),bottomLeft:$t(!l||o.bottom||o.left,a.bottomLeft,0,r),bottomRight:$t(!l||o.bottom||o.right,a.bottomRight,0,r)}}function Lh(i){const t=Lr(i),e=t.right-t.left,s=t.bottom-t.top,n=Ch(i,e/2,s/2),a=Eh(i,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:a},inner:{x:t.left+n.l,y:t.top+n.t,w:e-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,a.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(n.b,n.r))}}}}function ns(i,t,e,s){const n=t===null,a=e===null,o=i&&!(n&&a)&&Lr(i,s);return o&&(n||At(t,o.left,o.right))&&(a||At(e,o.top,o.bottom))}function Ph(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function Ah(i,t){i.rect(t.x,t.y,t.w,t.h)}function as(i,t,e={}){const s=i.x!==e.x?-t:0,n=i.y!==e.y?-t:0,a=(i.x+i.w!==e.x+e.w?t:0)-s,r=(i.y+i.h!==e.y+e.h?t:0)-n;return{x:i.x+s,y:i.y+n,w:i.w+a,h:i.h+r,radius:i.radius}}class Ve extends Ft{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:n}}=this,{inner:a,outer:r}=Lh(this),o=Ph(r.radius)?We:Ah;t.save(),(r.w!==a.w||r.h!==a.h)&&(t.beginPath(),o(t,as(r,e,a)),t.clip(),o(t,as(a,-e,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),o(t,as(a,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,s){return ns(this,t,e,s)}inXRange(t,e){return ns(this,t,null,e)}inYRange(t,e){return ns(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:n,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+n)/2:e,y:a?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}L(Ve,"id","bar"),L(Ve,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),L(Ve,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Oh=Object.freeze({__proto__:null,ArcElement:de,BarElement:Ve,LineElement:Nt,PointElement:Re});const ys=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],ia=ys.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function Pr(i){return ys[i%ys.length]}function Ar(i){return ia[i%ia.length]}function Dh(i,t){return i.borderColor=Pr(t),i.backgroundColor=Ar(t),++t}function Ih(i,t){return i.backgroundColor=i.data.map(()=>Pr(t++)),t}function Fh(i,t){return i.backgroundColor=i.data.map(()=>Ar(t++)),t}function zh(i){let t=0;return(e,s)=>{const n=i.getDatasetMeta(s).controller;n instanceof te?t=Ih(e,t):n instanceof ze?t=Fh(e,t):n&&(t=Dh(e,t))}}function sa(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function Rh(i){return i&&(i.borderColor||i.backgroundColor)}var Vh={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;const{data:{datasets:s},options:n}=i.config,{elements:a}=n;if(!e.forceOverride&&(sa(s)||Rh(n)||a&&sa(a)))return;const r=zh(i);s.forEach(r)}};function Bh(i,t,e,s,n){const a=n.samples||s;if(a>=e)return i.slice(t,t+e);const r=[],o=(e-2)/(a-2);let l=0;const c=t+e-1;let d=t,u,h,f,m,p;for(r[l++]=i[d],u=0;u<a-2;u++){let v=0,x=0,g;const b=Math.floor((u+1)*o)+1+t,y=Math.min(Math.floor((u+2)*o)+1,e)+t,_=y-b;for(g=b;g<y;g++)v+=i[g].x,x+=i[g].y;v/=_,x/=_;const S=Math.floor(u*o)+1+t,w=Math.min(Math.floor((u+1)*o)+1,e)+t,{x:k,y:M}=i[d];for(f=m=-1,g=S;g<w;g++)m=.5*Math.abs((k-v)*(i[g].y-M)-(k-i[g].x)*(x-M)),m>f&&(f=m,h=i[g],p=g);r[l++]=h,d=p}return r[l++]=i[c],r}function Nh(i,t,e,s){let n=0,a=0,r,o,l,c,d,u,h,f,m,p;const v=[],x=t+e-1,g=i[t].x,y=i[x].x-g;for(r=t;r<t+e;++r){o=i[r],l=(o.x-g)/y*s,c=o.y;const _=l|0;if(_===d)c<m?(m=c,u=r):c>p&&(p=c,h=r),n=(a*n+o.x)/++a;else{const S=r-1;if(!z(u)&&!z(h)){const w=Math.min(u,h),k=Math.max(u,h);w!==f&&w!==S&&v.push({...i[w],x:n}),k!==f&&k!==S&&v.push({...i[k],x:n})}r>0&&S!==f&&v.push(i[S]),v.push(o),d=_,a=0,m=p=c,u=h=f=r}}return v}function Or(i){if(i._decimated){const t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function na(i){i.data.datasets.forEach(t=>{Or(t)})}function $h(i,t){const e=t.length;let s=0,n;const{iScale:a}=i,{min:r,max:o,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(s=Q(Ot(t,a.axis,r).lo,0,e-1)),c?n=Q(Ot(t,a.axis,o).hi+1,s,e)-s:n=e-s,{start:s,count:n}}var Hh={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){na(i);return}const s=i.width;i.data.datasets.forEach((n,a)=>{const{_data:r,indexAxis:o}=n,l=i.getDatasetMeta(a),c=r||n.data;if(q([o,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const d=i.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||i.options.parsing)return;let{start:u,count:h}=$h(l,c);const f=e.threshold||4*s;if(h<=f){Or(n);return}z(r)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(p){this._data=p}}));let m;switch(e.algorithm){case"lttb":m=Bh(c,u,h,s,e);break;case"min-max":m=Nh(c,u,h,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}n._decimated=m})},destroy(i){na(i)}};function jh(i,t,e){const s=i.segments,n=i.points,a=t.points,r=[];for(const o of s){let{start:l,end:c}=o;c=Ys(l,c,n);const d=_s(e,n[l],n[c],o.loop);if(!t.segments){r.push({source:o,target:d,start:n[l],end:n[c]});continue}const u=pr(t,d);for(const h of u){const f=_s(e,a[h.start],a[h.end],h.loop),m=fr(o,n,f);for(const p of m)r.push({source:p,target:h,start:{[e]:aa(d,f,"start",Math.max)},end:{[e]:aa(d,f,"end",Math.min)}})}}return r}function _s(i,t,e,s){if(s)return;let n=t[i],a=e[i];return i==="angle"&&(n=ut(n),a=ut(a)),{property:i,start:n,end:a}}function qh(i,t){const{x:e=null,y:s=null}=i||{},n=t.points,a=[];return t.segments.forEach(({start:r,end:o})=>{o=Ys(r,o,n);const l=n[r],c=n[o];s!==null?(a.push({x:l.x,y:s}),a.push({x:c.x,y:s})):e!==null&&(a.push({x:e,y:l.y}),a.push({x:e,y:c.y}))}),a}function Ys(i,t,e){for(;t>i;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function aa(i,t,e,s){return i&&t?s(i[e],t[e]):i?i[e]:t?t[e]:0}function Dr(i,t){let e=[],s=!1;return W(i)?(s=!0,e=i):e=qh(i,t),e.length?new Nt({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function ra(i){return i&&i.fill!==!1}function Wh(i,t,e){let n=i[t].fill;const a=[t];let r;if(!e)return n;for(;n!==!1&&a.indexOf(n)===-1;){if(!U(n))return n;if(r=i[n],!r)return!1;if(r.visible)return n;a.push(n),n=r.fill}return!1}function Gh(i,t,e){const s=Kh(i);if(R(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return U(n)&&Math.floor(n)===n?Yh(s[0],t,n,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function Yh(i,t,e,s){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function Xh(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:R(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Uh(i,t,e){let s;return i==="start"?s=e:i==="end"?s=t.options.reverse?t.min:t.max:R(i)?s=i.value:s=t.getBaseValue(),s}function Kh(i){const t=i.options,e=t.fill;let s=I(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function Zh(i){const{scale:t,index:e,line:s}=i,n=[],a=s.segments,r=s.points,o=Jh(t,e);o.push(Dr({x:null,y:t.bottom},s));for(let l=0;l<a.length;l++){const c=a[l];for(let d=c.start;d<=c.end;d++)Qh(n,r[d],o)}return new Nt({points:n,options:{}})}function Jh(i,t){const e=[],s=i.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const a=s[n];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function Qh(i,t,e){const s=[];for(let n=0;n<e.length;n++){const a=e[n],{first:r,last:o,point:l}=tf(a,t,"x");if(!(!l||r&&o)){if(r)s.unshift(l);else if(i.push(l),!o)break}}i.push(...s)}function tf(i,t,e){const s=i.interpolate(t,e);if(!s)return{};const n=s[e],a=i.segments,r=i.points;let o=!1,l=!1;for(let c=0;c<a.length;c++){const d=a[c],u=r[d.start][e],h=r[d.end][e];if(At(n,u,h)){o=n===u,l=n===h;break}}return{first:o,last:l,point:s}}class Ir{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:n,y:a,radius:r}=this;return e=e||{start:0,end:G},t.arc(n,a,r,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:n}=this,a=t.angle;return{x:e+Math.cos(a)*n,y:s+Math.sin(a)*n,angle:a}}}function ef(i){const{chart:t,fill:e,line:s}=i;if(U(e))return sf(t,e);if(e==="stack")return Zh(i);if(e==="shape")return!0;const n=nf(i);return n instanceof Ir?n:Dr(n,s)}function sf(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function nf(i){return(i.scale||{}).getPointPositionForValue?rf(i):af(i)}function af(i){const{scale:t={},fill:e}=i,s=Xh(e,t);if(U(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function rf(i){const{scale:t,fill:e}=i,s=t.options,n=t.getLabels().length,a=s.reverse?t.max:t.min,r=Uh(e,t,a),o=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,a);return new Ir({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)o.push(t.getPointPositionForValue(l,r));return o}function rs(i,t,e){const s=ef(t),{line:n,scale:a,axis:r}=t,o=n.options,l=o.fill,c=o.backgroundColor,{above:d=c,below:u=c}=l||{};s&&n.points.length&&(Bi(i,e),of(i,{line:n,target:s,above:d,below:u,area:e,scale:a,axis:r}),Ni(i))}function of(i,t){const{line:e,target:s,above:n,below:a,area:r,scale:o}=t,l=e._loop?"angle":t.axis;i.save(),l==="x"&&a!==n&&(oa(i,s,r.top),la(i,{line:e,target:s,color:n,scale:o,property:l}),i.restore(),i.save(),oa(i,s,r.bottom)),la(i,{line:e,target:s,color:a,scale:o,property:l}),i.restore()}function oa(i,t,e){const{segments:s,points:n}=t;let a=!0,r=!1;i.beginPath();for(const o of s){const{start:l,end:c}=o,d=n[l],u=n[Ys(l,c,n)];a?(i.moveTo(d.x,d.y),a=!1):(i.lineTo(d.x,e),i.lineTo(d.x,d.y)),r=!!t.pathSegment(i,o,{move:r}),r?i.closePath():i.lineTo(u.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function la(i,t){const{line:e,target:s,property:n,color:a,scale:r}=t,o=jh(e,s,n);for(const{source:l,target:c,start:d,end:u}of o){const{style:{backgroundColor:h=a}={}}=l,f=s!==!0;i.save(),i.fillStyle=h,lf(i,r,f&&_s(n,d,u)),i.beginPath();const m=!!e.pathSegment(i,l);let p;if(f){m?i.closePath():ca(i,s,u,n);const v=!!s.pathSegment(i,c,{move:m,reverse:!0});p=m&&v,p||ca(i,s,d,n)}i.closePath(),i.fill(p?"evenodd":"nonzero"),i.restore()}}function lf(i,t,e){const{top:s,bottom:n}=t.chart.chartArea,{property:a,start:r,end:o}=e||{};a==="x"&&(i.beginPath(),i.rect(r,s,o-r,n-s),i.clip())}function ca(i,t,e,s){const n=t.interpolate(e,s);n&&i.lineTo(n.x,n.y)}var cf={id:"filler",afterDatasetsUpdate(i,t,e){const s=(i.data.datasets||[]).length,n=[];let a,r,o,l;for(r=0;r<s;++r)a=i.getDatasetMeta(r),o=a.dataset,l=null,o&&o.options&&o instanceof Nt&&(l={visible:i.isDatasetVisible(r),index:r,fill:Gh(o,r,s),chart:i,axis:a.controller.options.indexAxis,scale:a.vScale,line:o}),a.$filler=l,n.push(l);for(r=0;r<s;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=Wh(n,r,e.propagate))},beforeDraw(i,t,e){const s=e.drawTime==="beforeDraw",n=i.getSortedVisibleDatasetMetas(),a=i.chartArea;for(let r=n.length-1;r>=0;--r){const o=n[r].$filler;o&&(o.line.updateControlPoints(a,o.axis),s&&o.fill&&rs(i.ctx,o,a))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=i.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const a=s[n].$filler;ra(a)&&rs(i.ctx,a,i.chartArea)}},beforeDatasetDraw(i,t,e){const s=t.meta.$filler;!ra(s)||e.drawTime!=="beforeDatasetDraw"||rs(i.ctx,s,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const da=(i,t)=>{let{boxHeight:e=t,boxWidth:s=t}=i;return i.usePointStyle&&(e=Math.min(e,t),s=i.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},df=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class ua extends Ft{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=H(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=Z(s.font),a=n.size,r=this._computeTitleHeight(),{boxWidth:o,itemHeight:l}=da(s,a);let c,d;e.font=n.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(r,a,o,l)+10):(d=this.maxHeight,c=this._fitCols(r,n,o,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(d,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,n){const{ctx:a,maxWidth:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=n+o;let u=t;a.textAlign="left",a.textBaseline="middle";let h=-1,f=-d;return this.legendItems.forEach((m,p)=>{const v=s+e/2+a.measureText(m.text).width;(p===0||c[c.length-1]+v+2*o>r)&&(u+=d,c[c.length-(p>0?0:1)]=0,f+=d,h++),l[p]={left:0,top:f,row:h,width:v,height:n},c[c.length-1]+=v+o}),u}_fitCols(t,e,s,n){const{ctx:a,maxHeight:r,options:{labels:{padding:o}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=r-t;let u=o,h=0,f=0,m=0,p=0;return this.legendItems.forEach((v,x)=>{const{itemWidth:g,itemHeight:b}=uf(s,e,a,v,n);x>0&&f+b+2*o>d&&(u+=h+o,c.push({width:h,height:f}),m+=h+o,p++,h=f=0),l[x]={left:m,top:f,col:p,width:g,height:b},h=Math.max(h,g),f+=b+o}),u+=h,c.push({width:h,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:n},rtl:a}}=this,r=ue(a,this.left,this.width);if(this.isHorizontal()){let o=0,l=it(s,this.left+n,this.right-this.lineWidths[o]);for(const c of e)o!==c.row&&(o=c.row,l=it(s,this.left+n,this.right-this.lineWidths[o])),c.top+=this.top+t+n,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+n}else{let o=0,l=it(s,this.top+t+n,this.bottom-this.columnSizes[o].height);for(const c of e)c.col!==o&&(o=c.col,l=it(s,this.top+t+n,this.bottom-this.columnSizes[o].height)),c.top=l,c.left+=this.left+n,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Bi(t,this),this._draw(),Ni(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:n}=this,{align:a,labels:r}=t,o=X.color,l=ue(t.rtl,this.left,this.width),c=Z(r.font),{padding:d}=r,u=c.size,h=u/2;let f;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:m,boxHeight:p,itemHeight:v}=da(r,u),x=function(S,w,k){if(isNaN(m)||m<=0||isNaN(p)||p<0)return;n.save();const M=I(k.lineWidth,1);if(n.fillStyle=I(k.fillStyle,o),n.lineCap=I(k.lineCap,"butt"),n.lineDashOffset=I(k.lineDashOffset,0),n.lineJoin=I(k.lineJoin,"miter"),n.lineWidth=M,n.strokeStyle=I(k.strokeStyle,o),n.setLineDash(I(k.lineDash,[])),r.usePointStyle){const P={radius:p*Math.SQRT2/2,pointStyle:k.pointStyle,rotation:k.rotation,borderWidth:M},T=l.xPlus(S,m/2),E=w+h;er(n,P,T,E,r.pointStyleWidth&&m)}else{const P=w+Math.max((u-p)/2,0),T=l.leftForLtr(S,m),E=ie(k.borderRadius);n.beginPath(),Object.values(E).some(C=>C!==0)?We(n,{x:T,y:P,w:m,h:p,radius:E}):n.rect(T,P,m,p),n.fill(),M!==0&&n.stroke()}n.restore()},g=function(S,w,k){ae(n,k.text,S,w+v/2,c,{strikethrough:k.hidden,textAlign:l.textAlign(k.textAlign)})},b=this.isHorizontal(),y=this._computeTitleHeight();b?f={x:it(a,this.left+d,this.right-s[0]),y:this.top+d+y,line:0}:f={x:this.left+d,y:it(a,this.top+y+d,this.bottom-e[0].height),line:0},dr(this.ctx,t.textDirection);const _=v+d;this.legendItems.forEach((S,w)=>{n.strokeStyle=S.fontColor,n.fillStyle=S.fontColor;const k=n.measureText(S.text).width,M=l.textAlign(S.textAlign||(S.textAlign=r.textAlign)),P=m+h+k;let T=f.x,E=f.y;l.setWidth(this.width),b?w>0&&T+P+d>this.right&&(E=f.y+=_,f.line++,T=f.x=it(a,this.left+d,this.right-s[f.line])):w>0&&E+_>this.bottom&&(T=f.x=T+e[f.line].width+d,f.line++,E=f.y=it(a,this.top+y+d,this.bottom-e[f.line].height));const C=l.x(T);if(x(C,E,S),T=Ac(M,T+m+h,b?T+P:this.right,t.rtl),g(l.x(T),E,S),b)f.x+=P+d;else if(typeof S.text!="string"){const A=c.lineHeight;f.y+=Fr(S,A)+d}else f.y+=_}),ur(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Z(e.font),n=tt(e.padding);if(!e.display)return;const a=ue(t.rtl,this.left,this.width),r=this.ctx,o=e.position,l=s.size/2,c=n.top+l;let d,u=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),d=this.top+c,u=it(t.align,u,this.right-h);else{const m=this.columnSizes.reduce((p,v)=>Math.max(p,v.height),0);d=c+it(t.align,this.top,this.bottom-m-t.labels.padding-this._computeTitleHeight())}const f=it(o,u,u+h);r.textAlign=a.textAlign(Bs(o)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=s.string,ae(r,e.text,f,d,s)}_computeTitleHeight(){const t=this.options.title,e=Z(t.font),s=tt(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,n,a;if(At(t,this.left,this.right)&&At(e,this.top,this.bottom)){for(a=this.legendHitBoxes,s=0;s<a.length;++s)if(n=a[s],At(t,n.left,n.left+n.width)&&At(e,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!pf(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,a=df(n,s);n&&!a&&H(e.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!a&&H(e.onHover,[t,s,this],this)}else s&&H(e.onClick,[t,s,this],this)}}function uf(i,t,e,s,n){const a=hf(s,i,t,e),r=ff(n,s,t.lineHeight);return{itemWidth:a,itemHeight:r}}function hf(i,t,e,s){let n=i.text;return n&&typeof n!="string"&&(n=n.reduce((a,r)=>a.length>r.length?a:r)),t+e.size/2+s.measureText(n).width}function ff(i,t,e){let s=i;return typeof t.text!="string"&&(s=Fr(t,e)),s}function Fr(i,t){const e=i.text?i.text.length:0;return t*e}function pf(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var gf={id:"legend",_element:ua,start(i,t,e){const s=i.legend=new ua({ctx:i.ctx,options:e,chart:i});st.configure(i,s,e),st.addBox(i,s)},stop(i){st.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const s=i.legend;st.configure(i,s,e),s.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const s=t.datasetIndex,n=e.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:n,color:a,useBorderRadius:r,borderRadius:o}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),d=tt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:s||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:r&&(o||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class Xs extends Ft{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const n=W(s.text)?s.text.length:1;this._padding=tt(s.padding);const a=n*Z(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:n,right:a,options:r}=this,o=r.align;let l=0,c,d,u;return this.isHorizontal()?(d=it(o,s,a),u=e+t,c=a-s):(r.position==="left"?(d=s+t,u=it(o,n,e),l=Y*-.5):(d=a-t,u=it(o,e,n),l=Y*.5),c=n-e),{titleX:d,titleY:u,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=Z(e.font),a=s.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:l,rotation:c}=this._drawArgs(a);ae(t,e.text,0,0,s,{color:e.color,maxWidth:l,rotation:c,textAlign:Bs(e.align),textBaseline:"middle",translation:[r,o]})}}function mf(i,t){const e=new Xs({ctx:i.ctx,options:t,chart:i});st.configure(i,e,t),st.addBox(i,e),i.titleBlock=e}var bf={id:"title",_element:Xs,start(i,t,e){mf(i,e)},stop(i){const t=i.titleBlock;st.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){const s=i.titleBlock;st.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ui=new WeakMap;var vf={id:"subtitle",start(i,t,e){const s=new Xs({ctx:i.ctx,options:e,chart:i});st.configure(i,s,e),st.addBox(i,s),ui.set(i,s)},stop(i){st.removeBox(i,ui.get(i)),ui.delete(i)},beforeUpdate(i,t,e){const s=ui.get(i);st.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Pe={average(i){if(!i.length)return!1;let t,e,s=0,n=0,a=0;for(t=0,e=i.length;t<e;++t){const r=i[t].element;if(r&&r.hasValue()){const o=r.tooltipPosition();s+=o.x,n+=o.y,++a}}return{x:s/a,y:n/a}},nearest(i,t){if(!i.length)return!1;let e=t.x,s=t.y,n=Number.POSITIVE_INFINITY,a,r,o;for(a=0,r=i.length;a<r;++a){const l=i[a].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),d=fs(t,c);d<n&&(n=d,o=l)}}if(o){const l=o.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function _t(i,t){return t&&(W(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function Et(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function xf(i,t){const{element:e,datasetIndex:s,index:n}=t,a=i.getDatasetMeta(s).controller,{label:r,value:o}=a.getLabelAndValue(n);return{chart:i,label:r,parsed:a.getParsed(n),raw:i.data.datasets[s].data[n],formattedValue:o,dataset:a.getDataset(),dataIndex:n,datasetIndex:s,element:e}}function ha(i,t){const e=i.chart.ctx,{body:s,footer:n,title:a}=i,{boxWidth:r,boxHeight:o}=t,l=Z(t.bodyFont),c=Z(t.titleFont),d=Z(t.footerFont),u=a.length,h=n.length,f=s.length,m=tt(t.padding);let p=m.height,v=0,x=s.reduce((y,_)=>y+_.before.length+_.lines.length+_.after.length,0);if(x+=i.beforeBody.length+i.afterBody.length,u&&(p+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),x){const y=t.displayColors?Math.max(o,l.lineHeight):l.lineHeight;p+=f*y+(x-f)*l.lineHeight+(x-1)*t.bodySpacing}h&&(p+=t.footerMarginTop+h*d.lineHeight+(h-1)*t.footerSpacing);let g=0;const b=function(y){v=Math.max(v,e.measureText(y).width+g)};return e.save(),e.font=c.string,$(i.title,b),e.font=l.string,$(i.beforeBody.concat(i.afterBody),b),g=t.displayColors?r+2+t.boxPadding:0,$(s,y=>{$(y.before,b),$(y.lines,b),$(y.after,b)}),g=0,e.font=d.string,$(i.footer,b),e.restore(),v+=m.width,{width:v,height:p}}function yf(i,t){const{y:e,height:s}=t;return e<s/2?"top":e>i.height-s/2?"bottom":"center"}function _f(i,t,e,s){const{x:n,width:a}=s,r=e.caretSize+e.caretPadding;if(i==="left"&&n+a+r>t.width||i==="right"&&n-a-r<0)return!0}function wf(i,t,e,s){const{x:n,width:a}=e,{width:r,chartArea:{left:o,right:l}}=i;let c="center";return s==="center"?c=n<=(o+l)/2?"left":"right":n<=a/2?c="left":n>=r-a/2&&(c="right"),_f(c,i,t,e)&&(c="center"),c}function fa(i,t,e){const s=e.yAlign||t.yAlign||yf(i,e);return{xAlign:e.xAlign||t.xAlign||wf(i,t,e,s),yAlign:s}}function Sf(i,t){let{x:e,width:s}=i;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function Mf(i,t,e){let{y:s,height:n}=i;return t==="top"?s+=e:t==="bottom"?s-=n+e:s-=n/2,s}function pa(i,t,e,s){const{caretSize:n,caretPadding:a,cornerRadius:r}=i,{xAlign:o,yAlign:l}=e,c=n+a,{topLeft:d,topRight:u,bottomLeft:h,bottomRight:f}=ie(r);let m=Sf(t,o);const p=Mf(t,l,c);return l==="center"?o==="left"?m+=c:o==="right"&&(m-=c):o==="left"?m-=Math.max(d,h)+n:o==="right"&&(m+=Math.max(u,f)+n),{x:Q(m,0,s.width-t.width),y:Q(p,0,s.height-t.height)}}function hi(i,t,e){const s=tt(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-s.right:i.x+s.left}function ga(i){return _t([],Et(i))}function Tf(i,t,e){return Wt(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function ma(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const zr={beforeTitle:Tt,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Tt,beforeBody:Tt,beforeLabel:Tt,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return z(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Tt,afterBody:Tt,beforeFooter:Tt,footer:Tt,afterFooter:Tt};function nt(i,t,e,s){const n=i[t].call(e,s);return typeof n>"u"?zr[t].call(e,s):n}class ws extends Ft{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&e.options.animation&&s.animations,a=new gr(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Tf(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,n=nt(s,"beforeTitle",this,t),a=nt(s,"title",this,t),r=nt(s,"afterTitle",this,t);let o=[];return o=_t(o,Et(n)),o=_t(o,Et(a)),o=_t(o,Et(r)),o}getBeforeBody(t,e){return ga(nt(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,n=[];return $(t,a=>{const r={before:[],lines:[],after:[]},o=ma(s,a);_t(r.before,Et(nt(o,"beforeLabel",this,a))),_t(r.lines,nt(o,"label",this,a)),_t(r.after,Et(nt(o,"afterLabel",this,a))),n.push(r)}),n}getAfterBody(t,e){return ga(nt(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,n=nt(s,"beforeFooter",this,t),a=nt(s,"footer",this,t),r=nt(s,"afterFooter",this,t);let o=[];return o=_t(o,Et(n)),o=_t(o,Et(a)),o=_t(o,Et(r)),o}_createItems(t){const e=this._active,s=this.chart.data,n=[],a=[],r=[];let o=[],l,c;for(l=0,c=e.length;l<c;++l)o.push(xf(this.chart,e[l]));return t.filter&&(o=o.filter((d,u,h)=>t.filter(d,u,h,s))),t.itemSort&&(o=o.sort((d,u)=>t.itemSort(d,u,s))),$(o,d=>{const u=ma(t.callbacks,d);n.push(nt(u,"labelColor",this,d)),a.push(nt(u,"labelPointStyle",this,d)),r.push(nt(u,"labelTextColor",this,d))}),this.labelColors=n,this.labelPointStyles=a,this.labelTextColors=r,this.dataPoints=o,o}update(t,e){const s=this.options.setContext(this.getContext()),n=this._active;let a,r=[];if(!n.length)this.opacity!==0&&(a={opacity:0});else{const o=Pe[s.position].call(this,n,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const l=this._size=ha(this,s),c=Object.assign({},o,l),d=fa(this.chart,s,c),u=pa(s,c,d,this.chart);this.xAlign=d.xAlign,this.yAlign=d.yAlign,a={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,n){const a=this.getCaretPosition(t,s,n);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,s){const{xAlign:n,yAlign:a}=this,{caretSize:r,cornerRadius:o}=s,{topLeft:l,topRight:c,bottomLeft:d,bottomRight:u}=ie(o),{x:h,y:f}=t,{width:m,height:p}=e;let v,x,g,b,y,_;return a==="center"?(y=f+p/2,n==="left"?(v=h,x=v-r,b=y+r,_=y-r):(v=h+m,x=v+r,b=y-r,_=y+r),g=v):(n==="left"?x=h+Math.max(l,d)+r:n==="right"?x=h+m-Math.max(c,u)-r:x=this.caretX,a==="top"?(b=f,y=b-r,v=x-r,g=x+r):(b=f+p,y=b+r,v=x+r,g=x-r),_=b),{x1:v,x2:x,x3:g,y1:b,y2:y,y3:_}}drawTitle(t,e,s){const n=this.title,a=n.length;let r,o,l;if(a){const c=ue(s.rtl,this.x,this.width);for(t.x=hi(this,s.titleAlign,s),e.textAlign=c.textAlign(s.titleAlign),e.textBaseline="middle",r=Z(s.titleFont),o=s.titleSpacing,e.fillStyle=s.titleColor,e.font=r.string,l=0;l<a;++l)e.fillText(n[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+o,l+1===a&&(t.y+=s.titleMarginBottom-o)}}_drawColorBox(t,e,s,n,a){const r=this.labelColors[s],o=this.labelPointStyles[s],{boxHeight:l,boxWidth:c}=a,d=Z(a.bodyFont),u=hi(this,"left",a),h=n.x(u),f=l<d.lineHeight?(d.lineHeight-l)/2:0,m=e.y+f;if(a.usePointStyle){const p={radius:Math.min(c,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},v=n.leftForLtr(h,c)+c/2,x=m+l/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,gs(t,p,v,x),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,gs(t,p,v,x)}else{t.lineWidth=R(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const p=n.leftForLtr(h,c),v=n.leftForLtr(n.xPlus(h,1),c-2),x=ie(r.borderRadius);Object.values(x).some(g=>g!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,We(t,{x:p,y:m,w:c,h:l,radius:x}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),We(t,{x:v,y:m+1,w:c-2,h:l-2,radius:x}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(p,m,c,l),t.strokeRect(p,m,c,l),t.fillStyle=r.backgroundColor,t.fillRect(v,m+1,c-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:n}=this,{bodySpacing:a,bodyAlign:r,displayColors:o,boxHeight:l,boxWidth:c,boxPadding:d}=s,u=Z(s.bodyFont);let h=u.lineHeight,f=0;const m=ue(s.rtl,this.x,this.width),p=function(k){e.fillText(k,m.x(t.x+f),t.y+h/2),t.y+=h+a},v=m.textAlign(r);let x,g,b,y,_,S,w;for(e.textAlign=r,e.textBaseline="middle",e.font=u.string,t.x=hi(this,v,s),e.fillStyle=s.bodyColor,$(this.beforeBody,p),f=o&&v!=="right"?r==="center"?c/2+d:c+2+d:0,y=0,S=n.length;y<S;++y){for(x=n[y],g=this.labelTextColors[y],e.fillStyle=g,$(x.before,p),b=x.lines,o&&b.length&&(this._drawColorBox(e,t,y,m,s),h=Math.max(u.lineHeight,l)),_=0,w=b.length;_<w;++_)p(b[_]),h=u.lineHeight;$(x.after,p)}f=0,h=u.lineHeight,$(this.afterBody,p),t.y-=a}drawFooter(t,e,s){const n=this.footer,a=n.length;let r,o;if(a){const l=ue(s.rtl,this.x,this.width);for(t.x=hi(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",r=Z(s.footerFont),e.fillStyle=s.footerColor,e.font=r.string,o=0;o<a;++o)e.fillText(n[o],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,e,s,n){const{xAlign:a,yAlign:r}=this,{x:o,y:l}=t,{width:c,height:d}=s,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:m}=ie(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(o+u,l),r==="top"&&this.drawCaret(t,e,s,n),e.lineTo(o+c-h,l),e.quadraticCurveTo(o+c,l,o+c,l+h),r==="center"&&a==="right"&&this.drawCaret(t,e,s,n),e.lineTo(o+c,l+d-m),e.quadraticCurveTo(o+c,l+d,o+c-m,l+d),r==="bottom"&&this.drawCaret(t,e,s,n),e.lineTo(o+f,l+d),e.quadraticCurveTo(o,l+d,o,l+d-f),r==="center"&&a==="left"&&this.drawCaret(t,e,s,n),e.lineTo(o,l+u),e.quadraticCurveTo(o,l,o+u,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,n=s&&s.x,a=s&&s.y;if(n||a){const r=Pe[t.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=ha(this,t),l=Object.assign({},r,this._size),c=fa(e,t,l),d=pa(t,l,c,e);(n._to!==d.x||a._to!==d.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,d))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},a={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=tt(e.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&o&&(t.save(),t.globalAlpha=s,this.drawBackground(a,t,n,e),dr(t,e.textDirection),a.y+=r.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),ur(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,n=t.map(({datasetIndex:o,index:l})=>{const c=this.chart.getDatasetMeta(o);if(!c)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:c.data[l],index:l}}),a=!Pi(s,n),r=this._positionChanged(n,e);(a||r)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,a=this._active||[],r=this._getActiveElements(t,a,e,s),o=this._positionChanged(r,t),l=e||!Pi(r,a)||o;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,n){const a=this.options;if(t.type==="mouseout")return[];if(!n)return e;const r=this.chart.getElementsAtEventForMode(t,a.mode,a,s);return a.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:s,caretY:n,options:a}=this,r=Pe[a.position].call(this,t,e);return r!==!1&&(s!==r.x||n!==r.y)}}L(ws,"positioners",Pe);var kf={id:"tooltip",_element:ws,positioners:Pe,afterInit(i,t,e){e&&(i.tooltip=new ws({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:zr},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Cf=Object.freeze({__proto__:null,Colors:Vh,Decimation:Hh,Filler:cf,Legend:gf,SubTitle:vf,Title:bf,Tooltip:kf});const Ef=(i,t,e,s)=>(typeof t=="string"?(e=i.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Lf(i,t,e,s){const n=i.indexOf(t);if(n===-1)return Ef(i,t,e,s);const a=i.lastIndexOf(t);return n!==a?e:n}const Pf=(i,t)=>i===null?null:Q(Math.round(i),0,t);function ba(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class Ss extends re{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:n,label:a}of e)s[n]===a&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(z(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:Lf(s,t,I(e,t),this._addedLabels),Pf(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,n=[];let a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=e;r++)n.push({value:r});return n}getLabelForValue(t){return ba.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}L(Ss,"id","category"),L(Ss,"defaults",{ticks:{callback:ba}});function Af(i,t){const e=[],{bounds:n,step:a,min:r,max:o,precision:l,count:c,maxTicks:d,maxDigits:u,includeBounds:h}=i,f=a||1,m=d-1,{min:p,max:v}=t,x=!z(r),g=!z(o),b=!z(c),y=(v-p)/(u+1);let _=un((v-p)/m/f)*f,S,w,k,M;if(_<1e-14&&!x&&!g)return[{value:p},{value:v}];M=Math.ceil(v/_)-Math.floor(p/_),M>m&&(_=un(M*_/m/f)*f),z(l)||(S=Math.pow(10,l),_=Math.ceil(_*S)/S),n==="ticks"?(w=Math.floor(p/_)*_,k=Math.ceil(v/_)*_):(w=p,k=v),x&&g&&a&&Mc((o-r)/a,_/1e3)?(M=Math.round(Math.min((o-r)/_,d)),_=(o-r)/M,w=r,k=o):b?(w=x?r:w,k=g?o:k,M=c-1,_=(k-w)/M):(M=(k-w)/_,De(M,Math.round(M),_/1e3)?M=Math.round(M):M=Math.ceil(M));const P=Math.max(hn(_),hn(w));S=Math.pow(10,z(l)?P:l),w=Math.round(w*S)/S,k=Math.round(k*S)/S;let T=0;for(x&&(h&&w!==r?(e.push({value:r}),w<r&&T++,De(Math.round((w+T*_)*S)/S,r,va(r,y,i))&&T++):w<r&&T++);T<M;++T){const E=Math.round((w+T*_)*S)/S;if(g&&E>o)break;e.push({value:E})}return g&&h&&k!==o?e.length&&De(e[e.length-1].value,o,va(o,y,i))?e[e.length-1].value=o:e.push({value:o}):(!g||k===o)&&e.push({value:k}),e}function va(i,t,{horizontal:e,minRotation:s}){const n=bt(s),a=(e?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+i).length;return Math.min(t/a,r)}class Ri extends re{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return z(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:n,max:a}=this;const r=l=>n=e?n:l,o=l=>a=s?a:l;if(t){const l=St(n),c=St(a);l<0&&c<0?o(0):l>0&&c>0&&r(0)}if(n===a){let l=a===0?1:Math.abs(a*.05);o(a+l),t||r(n-l)}this.min=n,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e=e||11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,r=Af(n,a);return t.bounds==="ticks"&&Ga(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-e)/Math.max(t.length-1,1)/2;e-=n,s+=n}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Ke(t,this.chart.options.locale,this.options.ticks.format)}}class Ms extends Ri{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=U(t)?t:0,this.max=U(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=bt(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}L(Ms,"id","linear"),L(Ms,"defaults",{ticks:{callback:Vi.formatters.numeric}});const Ye=i=>Math.floor(Bt(i)),Kt=(i,t)=>Math.pow(10,Ye(i)+t);function xa(i){return i/Math.pow(10,Ye(i))===1}function ya(i,t,e){const s=Math.pow(10,e),n=Math.floor(i/s);return Math.ceil(t/s)-n}function Of(i,t){const e=t-i;let s=Ye(e);for(;ya(i,t,s)>10;)s++;for(;ya(i,t,s)<10;)s--;return Math.min(s,Ye(i))}function Df(i,{min:t,max:e}){t=lt(i.min,t);const s=[],n=Ye(t);let a=Of(t,e),r=a<0?Math.pow(10,Math.abs(a)):1;const o=Math.pow(10,a),l=n>a?Math.pow(10,n):0,c=Math.round((t-l)*r)/r,d=Math.floor((t-l)/o/10)*o*10;let u=Math.floor((c-d)/Math.pow(10,a)),h=lt(i.min,Math.round((l+d+u*Math.pow(10,a))*r)/r);for(;h<e;)s.push({value:h,major:xa(h),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(a++,u=2,r=a>=0?1:r),h=Math.round((l+d+u*Math.pow(10,a))*r)/r;const f=lt(i.max,h);return s.push({value:f,major:xa(f),significand:u}),s}class Ts extends re{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=Ri.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return U(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=U(t)?Math.max(0,t):null,this.max=U(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!U(this._userMin)&&(this.min=t===Kt(this.min,0)?Kt(this.min,-1):Kt(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,n=this.max;const a=o=>s=t?s:o,r=o=>n=e?n:o;s===n&&(s<=0?(a(1),r(10)):(a(Kt(s,-1)),r(Kt(n,1)))),s<=0&&a(Kt(n,-1)),n<=0&&r(Kt(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=Df(e,this);return t.bounds==="ticks"&&Ga(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Ke(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Bt(t),this._valueRange=Bt(this.max)-Bt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Bt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}L(Ts,"id","logarithmic"),L(Ts,"defaults",{ticks:{callback:Vi.formatters.logarithmic,major:{enabled:!0}}});function ks(i){const t=i.ticks;if(t.display&&i.display){const e=tt(t.backdropPadding);return I(t.font&&t.font.size,X.font.size)+e.height}return 0}function If(i,t,e){return e=W(e)?e:[e],{w:$c(i,t.string,e),h:e.length*t.lineHeight}}function _a(i,t,e,s,n){return i===s||i===n?{start:t-e/2,end:t+e/2}:i<s||i>n?{start:t-e,end:t}:{start:t,end:t+e}}function Ff(i){const t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),s=[],n=[],a=i._pointLabels.length,r=i.options.pointLabels,o=r.centerPointLabels?Y/a:0;for(let l=0;l<a;l++){const c=r.setContext(i.getPointLabelContext(l));n[l]=c.padding;const d=i.getPointPosition(l,i.drawingArea+n[l],o),u=Z(c.font),h=If(i.ctx,u,i._pointLabels[l]);s[l]=h;const f=ut(i.getIndexAngle(l)+o),m=Math.round(Rs(f)),p=_a(m,d.x,h.w,0,180),v=_a(m,d.y,h.h,90,270);zf(e,t,f,p,v)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=Bf(i,s,n)}function zf(i,t,e,s,n){const a=Math.abs(Math.sin(e)),r=Math.abs(Math.cos(e));let o=0,l=0;s.start<t.l?(o=(t.l-s.start)/a,i.l=Math.min(i.l,t.l-o)):s.end>t.r&&(o=(s.end-t.r)/a,i.r=Math.max(i.r,t.r+o)),n.start<t.t?(l=(t.t-n.start)/r,i.t=Math.min(i.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,i.b=Math.max(i.b,t.b+l))}function Rf(i,t,e){const s=i.drawingArea,{extra:n,additionalAngle:a,padding:r,size:o}=e,l=i.getPointPosition(t,s+n+r,a),c=Math.round(Rs(ut(l.angle+K))),d=Hf(l.y,o.h,c),u=Nf(c),h=$f(l.x,o.w,u);return{visible:!0,x:l.x,y:d,textAlign:u,left:h,top:d,right:h+o.w,bottom:d+o.h}}function Vf(i,t){if(!t)return!0;const{left:e,top:s,right:n,bottom:a}=i;return!(Dt({x:e,y:s},t)||Dt({x:e,y:a},t)||Dt({x:n,y:s},t)||Dt({x:n,y:a},t))}function Bf(i,t,e){const s=[],n=i._pointLabels.length,a=i.options,{centerPointLabels:r,display:o}=a.pointLabels,l={extra:ks(a)/2,additionalAngle:r?Y/n:0};let c;for(let d=0;d<n;d++){l.padding=e[d],l.size=t[d];const u=Rf(i,d,l);s.push(u),o==="auto"&&(u.visible=Vf(u,c),u.visible&&(c=u))}return s}function Nf(i){return i===0||i===180?"center":i<180?"left":"right"}function $f(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function Hf(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function jf(i,t,e){const{left:s,top:n,right:a,bottom:r}=e,{backdropColor:o}=t;if(!z(o)){const l=ie(t.borderRadius),c=tt(t.backdropPadding);i.fillStyle=o;const d=s-c.left,u=n-c.top,h=a-s+c.width,f=r-n+c.height;Object.values(l).some(m=>m!==0)?(i.beginPath(),We(i,{x:d,y:u,w:h,h:f,radius:l}),i.fill()):i.fillRect(d,u,h,f)}}function qf(i,t){const{ctx:e,options:{pointLabels:s}}=i;for(let n=t-1;n>=0;n--){const a=i._pointLabelItems[n];if(!a.visible)continue;const r=s.setContext(i.getPointLabelContext(n));jf(e,r,a);const o=Z(r.font),{x:l,y:c,textAlign:d}=a;ae(e,i._pointLabels[n],l,c+o.lineHeight/2,o,{color:r.color,textAlign:d,textBaseline:"middle"})}}function Rr(i,t,e,s){const{ctx:n}=i;if(e)n.arc(i.xCenter,i.yCenter,t,0,G);else{let a=i.getPointPosition(0,t);n.moveTo(a.x,a.y);for(let r=1;r<s;r++)a=i.getPointPosition(r,t),n.lineTo(a.x,a.y)}}function Wf(i,t,e,s,n){const a=i.ctx,r=t.circular,{color:o,lineWidth:l}=t;!r&&!s||!o||!l||e<0||(a.save(),a.strokeStyle=o,a.lineWidth=l,a.setLineDash(n.dash),a.lineDashOffset=n.dashOffset,a.beginPath(),Rr(i,e,r,s),a.closePath(),a.stroke(),a.restore())}function Gf(i,t,e){return Wt(i,{label:e,index:t,type:"pointLabel"})}class Ae extends Ri{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=tt(ks(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=U(t)&&!isNaN(t)?t:0,this.max=U(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ks(this.options))}generateTickLabels(t){Ri.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const n=H(this.options.pointLabels.callback,[e,s],this);return n||n===0?n:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?Ff(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,n))}getIndexAngle(t){const e=G/(this._pointLabels.length||1),s=this.options.startAngle||0;return ut(t*e+bt(s))}getDistanceFromCenterForValue(t){if(z(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(z(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return Gf(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const n=this.getIndexAngle(t)-K+s;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:n,bottom:a}=this._pointLabelItems[t];return{left:e,top:s,right:n,bottom:a}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Rr(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:n,border:a}=e,r=this._pointLabels.length;let o,l,c;if(e.pointLabels.display&&qf(this,r),n.display&&this.ticks.forEach((d,u)=>{if(u!==0){l=this.getDistanceFromCenterForValue(d.value);const h=this.getContext(u),f=n.setContext(h),m=a.setContext(h);Wf(this,f,l,r,m)}}),s.display){for(t.save(),o=r-1;o>=0;o--){const d=s.setContext(this.getPointLabelContext(o)),{color:u,lineWidth:h}=d;!h||!u||(t.lineWidth=h,t.strokeStyle=u,t.setLineDash(d.borderDash),t.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),c=this.getPointPosition(o,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let a,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((o,l)=>{if(l===0&&!e.reverse)return;const c=s.setContext(this.getContext(l)),d=Z(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=d.string,r=t.measureText(o.label).width,t.fillStyle=c.backdropColor;const u=tt(c.backdropPadding);t.fillRect(-r/2-u.left,-a-d.size/2-u.top,r+u.width,d.size+u.height)}ae(t,o.label,0,-a,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}L(Ae,"id","radialLinear"),L(Ae,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Vi.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),L(Ae,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),L(Ae,"descriptors",{angleLines:{_fallback:"grid"}});const Hi={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},rt=Object.keys(Hi);function wa(i,t){return i-t}function Sa(i,t){if(z(t))return null;const e=i._adapter,{parser:s,round:n,isoWeekday:a}=i._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),U(r)||(r=typeof s=="string"?e.parse(r,s):e.parse(r)),r===null?null:(n&&(r=n==="week"&&(he(a)||a===!0)?e.startOf(r,"isoWeek",a):e.startOf(r,n)),+r)}function Ma(i,t,e,s){const n=rt.length;for(let a=rt.indexOf(i);a<n-1;++a){const r=Hi[rt[a]],o=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((e-t)/(o*r.size))<=s)return rt[a]}return rt[n-1]}function Yf(i,t,e,s,n){for(let a=rt.length-1;a>=rt.indexOf(e);a--){const r=rt[a];if(Hi[r].common&&i._adapter.diff(n,s,r)>=t-1)return r}return rt[e?rt.indexOf(e):0]}function Xf(i){for(let t=rt.indexOf(i)+1,e=rt.length;t<e;++t)if(Hi[rt[t]].common)return rt[t]}function Ta(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:s,hi:n}=Vs(e,t),a=e[s]>=t?e[s]:e[n];i[a]=!0}}function Uf(i,t,e,s){const n=i._adapter,a=+n.startOf(t[0].value,s),r=t[t.length-1].value;let o,l;for(o=a;o<=r;o=+n.add(o,1,s))l=e[o],l>=0&&(t[l].major=!0);return t}function ka(i,t,e){const s=[],n={},a=t.length;let r,o;for(r=0;r<a;++r)o=t[r],n[o]=r,s.push({value:o,major:!1});return a===0||!e?s:Uf(i,s,n,e)}class Xe extends re{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),n=this._adapter=new su._date(t.adapters.date);n.init(e),Oe(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Sa(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:n,max:a,minDefined:r,maxDefined:o}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!o&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!r||!o)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=U(n)&&!isNaN(n)?n:+e.startOf(Date.now(),s),a=U(a)&&!isNaN(a)?a:+e.endOf(Date.now(),s)+1,this.min=Math.min(n,a-1),this.max=Math.max(n+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const a=this.min,r=this.max,o=Ec(n,a,r);return this._unit=e.unit||(s.autoSkip?Ma(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):Yf(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:Xf(this._unit),this.initOffsets(n),t.reverse&&o.reverse(),ka(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,n,a;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?e=1-n:e=(this.getDecimalForValue(t[1])-n)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?s=a:s=(a-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;e=Q(e,0,r),s=Q(s,0,r),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,n=this.options,a=n.time,r=a.unit||Ma(a.minUnit,e,s,this._getLabelCapacity(e)),o=I(n.ticks.stepSize,1),l=r==="week"?a.isoWeekday:!1,c=he(l)||l===!0,d={};let u=e,h,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":r),t.diff(s,e,r)>1e5*o)throw new Error(e+" and "+s+" are too far apart with stepSize of "+o+" "+r);const m=n.ticks.source==="data"&&this.getDataTimestamps();for(h=u,f=0;h<s;h=+t.add(h,o,r),f++)Ta(d,h,m);return(h===s||n.bounds==="ticks"||f===1)&&Ta(d,h,m),Object.keys(d).sort(wa).map(p=>+p)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const n=this.options.time.displayFormats,a=this._unit,r=e||n[a];return this._adapter.format(t,r)}_tickFormatFunction(t,e,s,n){const a=this.options,r=a.ticks.callback;if(r)return H(r,[t,e,s],this);const o=a.time.displayFormats,l=this._unit,c=this._majorUnit,d=l&&o[l],u=c&&o[c],h=s[e],f=c&&u&&h&&h.major;return this._adapter.format(t,n||(f?u:d))}generateTickLabels(t){let e,s,n;for(e=0,s=t.length;e<s;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,n=bt(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(n),r=Math.sin(n),o=this._resolveTickFontOptions(0).size;return{w:s*a+o*r,h:s*r+o*a}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,n=s[e.unit]||s.millisecond,a=this._tickFormatFunction(t,0,ka(this,[t],this._majorUnit),n),r=this._getLabelSize(a),o=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return o>0?o:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(e=0,s=n.length;e<s;++e)t=t.concat(n[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const n=this.getLabels();for(e=0,s=n.length;e<s;++e)t.push(Sa(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Ua(t.sort(wa))}}L(Xe,"id","time"),L(Xe,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function fi(i,t,e){let s=0,n=i.length-1,a,r,o,l;e?(t>=i[s].pos&&t<=i[n].pos&&({lo:s,hi:n}=Ot(i,"pos",t)),{pos:a,time:o}=i[s],{pos:r,time:l}=i[n]):(t>=i[s].time&&t<=i[n].time&&({lo:s,hi:n}=Ot(i,"time",t)),{time:a,pos:o}=i[s],{time:r,pos:l}=i[n]);const c=r-a;return c?o+(l-o)*(t-a)/c:o}class Cs extends Xe{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=fi(e,this.min),this._tableRange=fi(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,n=[],a=[];let r,o,l,c,d;for(r=0,o=t.length;r<o;++r)c=t[r],c>=e&&c<=s&&n.push(c);if(n.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(r=0,o=n.length;r<o;++r)d=n[r+1],l=n[r-1],c=n[r],Math.round((d+l)/2)!==c&&a.push({time:c,pos:r/(o-1)});return a}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((n,a)=>n-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(fi(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return fi(this._table,s*this._tableRange+this._minPos,!0)}}L(Cs,"id","timeseries"),L(Cs,"defaults",Xe.defaults);var Kf=Object.freeze({__proto__:null,CategoryScale:Ss,LinearScale:Ms,LogarithmicScale:Ts,RadialLinearScale:Ae,TimeScale:Xe,TimeSeriesScale:Cs});const Zf=[iu,Oh,Cf,Kf];gt.register(...Zf);/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */var Ca=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var i=window.screen;if(i)return(i.deviceXDPI||1)/(i.logicalXDPI||1)}return 1}(),Be={toTextLines:function(i){var t=[],e;for(i=[].concat(i);i.length;)e=i.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?i.push.apply(i,e):z(i)||t.unshift(""+e);return t},textSize:function(i,t,e){var s=[].concat(t),n=s.length,a=i.font,r=0,o;for(i.font=e.string,o=0;o<n;++o)r=Math.max(i.measureText(s[o]).width,r);return i.font=a,{height:n*e.lineHeight,width:r}},bound:function(i,t,e){return Math.max(i,Math.min(t,e))},arrayDiff:function(i,t){var e=i.slice(),s=[],n,a,r,o;for(n=0,r=t.length;n<r;++n)o=t[n],a=e.indexOf(o),a===-1?s.push([o,1]):e.splice(a,1);for(n=0,r=e.length;n<r;++n)s.push([e[n],-1]);return s},rasterize:function(i){return Math.round(i*Ca)/Ca}};function os(i,t){var e=t.x,s=t.y;if(e===null)return{x:0,y:-1};if(s===null)return{x:1,y:0};var n=i.x-e,a=i.y-s,r=Math.sqrt(n*n+a*a);return{x:r?n/r:0,y:r?a/r:-1}}function Jf(i,t,e,s,n){switch(n){case"center":e=s=0;break;case"bottom":e=0,s=1;break;case"right":e=1,s=0;break;case"left":e=-1,s=0;break;case"top":e=0,s=-1;break;case"start":e=-e,s=-s;break;case"end":break;default:n*=Math.PI/180,e=Math.cos(n),s=Math.sin(n);break}return{x:i,y:t,vx:e,vy:s}}var Qf=0,Vr=1,Br=2,Nr=4,$r=8;function pi(i,t,e){var s=Qf;return i<e.left?s|=Vr:i>e.right&&(s|=Br),t<e.top?s|=$r:t>e.bottom&&(s|=Nr),s}function tp(i,t){for(var e=i.x0,s=i.y0,n=i.x1,a=i.y1,r=pi(e,s,t),o=pi(n,a,t),l,c,d;!(!(r|o)||r&o);)l=r||o,l&$r?(c=e+(n-e)*(t.top-s)/(a-s),d=t.top):l&Nr?(c=e+(n-e)*(t.bottom-s)/(a-s),d=t.bottom):l&Br?(d=s+(a-s)*(t.right-e)/(n-e),c=t.right):l&Vr&&(d=s+(a-s)*(t.left-e)/(n-e),c=t.left),l===r?(e=c,s=d,r=pi(e,s,t)):(n=c,a=d,o=pi(n,a,t));return{x0:e,x1:n,y0:s,y1:a}}function gi(i,t){var e=t.anchor,s=i,n,a;return t.clamp&&(s=tp(s,t.area)),e==="start"?(n=s.x0,a=s.y0):e==="end"?(n=s.x1,a=s.y1):(n=(s.x0+s.x1)/2,a=(s.y0+s.y1)/2),Jf(n,a,i.vx,i.vy,t.align)}var mi={arc:function(i,t){var e=(i.startAngle+i.endAngle)/2,s=Math.cos(e),n=Math.sin(e),a=i.innerRadius,r=i.outerRadius;return gi({x0:i.x+s*a,y0:i.y+n*a,x1:i.x+s*r,y1:i.y+n*r,vx:s,vy:n},t)},point:function(i,t){var e=os(i,t.origin),s=e.x*i.options.radius,n=e.y*i.options.radius;return gi({x0:i.x-s,y0:i.y-n,x1:i.x+s,y1:i.y+n,vx:e.x,vy:e.y},t)},bar:function(i,t){var e=os(i,t.origin),s=i.x,n=i.y,a=0,r=0;return i.horizontal?(s=Math.min(i.x,i.base),a=Math.abs(i.base-i.x)):(n=Math.min(i.y,i.base),r=Math.abs(i.base-i.y)),gi({x0:s,y0:n+r,x1:s+a,y1:n,vx:e.x,vy:e.y},t)},fallback:function(i,t){var e=os(i,t.origin);return gi({x0:i.x,y0:i.y,x1:i.x+(i.width||0),y1:i.y+(i.height||0),vx:e.x,vy:e.y},t)}},It=Be.rasterize;function ep(i){var t=i.borderWidth||0,e=i.padding,s=i.size.height,n=i.size.width,a=-n/2,r=-s/2;return{frame:{x:a-e.left-t,y:r-e.top-t,w:n+e.width+t*2,h:s+e.height+t*2},text:{x:a,y:r,w:n,h:s}}}function ip(i,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var s=e.getBasePixel();return i.horizontal?{x:s,y:null}:{x:null,y:s}}function sp(i){return i instanceof de?mi.arc:i instanceof Re?mi.point:i instanceof Ve?mi.bar:mi.fallback}function np(i,t,e,s,n,a){var r=Math.PI/2;if(a){var o=Math.min(a,n/2,s/2),l=t+o,c=e+o,d=t+s-o,u=e+n-o;i.moveTo(t,c),l<d&&c<u?(i.arc(l,c,o,-Math.PI,-r),i.arc(d,c,o,-r,0),i.arc(d,u,o,0,r),i.arc(l,u,o,r,Math.PI)):l<d?(i.moveTo(l,e),i.arc(d,c,o,-r,r),i.arc(l,c,o,r,Math.PI+r)):c<u?(i.arc(l,c,o,-Math.PI,0),i.arc(l,u,o,0,Math.PI)):i.arc(l,c,o,-Math.PI,Math.PI),i.closePath(),i.moveTo(t,e)}else i.rect(t,e,s,n)}function ap(i,t,e){var s=e.backgroundColor,n=e.borderColor,a=e.borderWidth;!s&&(!n||!a)||(i.beginPath(),np(i,It(t.x)+a/2,It(t.y)+a/2,It(t.w)-a,It(t.h)-a,e.borderRadius),i.closePath(),s&&(i.fillStyle=s,i.fill()),n&&a&&(i.strokeStyle=n,i.lineWidth=a,i.lineJoin="miter",i.stroke()))}function rp(i,t,e){var s=e.lineHeight,n=i.w,a=i.x,r=i.y+s/2;return t==="center"?a+=n/2:(t==="end"||t==="right")&&(a+=n),{h:s,w:n,x:a,y:r}}function op(i,t,e){var s=i.shadowBlur,n=e.stroked,a=It(e.x),r=It(e.y),o=It(e.w);n&&i.strokeText(t,a,r,o),e.filled&&(s&&n&&(i.shadowBlur=0),i.fillText(t,a,r,o),s&&n&&(i.shadowBlur=s))}function lp(i,t,e,s){var n=s.textAlign,a=s.color,r=!!a,o=s.font,l=t.length,c=s.textStrokeColor,d=s.textStrokeWidth,u=c&&d,h;if(!(!l||!r&&!u))for(e=rp(e,n,o),i.font=o.string,i.textAlign=n,i.textBaseline="middle",i.shadowBlur=s.textShadowBlur,i.shadowColor=s.textShadowColor,r&&(i.fillStyle=a),u&&(i.lineJoin="round",i.lineWidth=d,i.strokeStyle=c),h=0,l=t.length;h<l;++h)op(i,t[h],{stroked:u,filled:r,w:e.w,x:e.x,y:e.y+e.h*h})}var Hr=function(i,t,e,s){var n=this;n._config=i,n._index=s,n._model=null,n._rects=null,n._ctx=t,n._el=e};Mt(Hr.prototype,{_modelize:function(i,t,e,s){var n=this,a=n._index,r=Z(q([e.font,{}],s,a)),o=q([e.color,X.color],s,a);return{align:q([e.align,"center"],s,a),anchor:q([e.anchor,"center"],s,a),area:s.chart.chartArea,backgroundColor:q([e.backgroundColor,null],s,a),borderColor:q([e.borderColor,null],s,a),borderRadius:q([e.borderRadius,0],s,a),borderWidth:q([e.borderWidth,0],s,a),clamp:q([e.clamp,!1],s,a),clip:q([e.clip,!1],s,a),color:o,display:i,font:r,lines:t,offset:q([e.offset,4],s,a),opacity:q([e.opacity,1],s,a),origin:ip(n._el,s),padding:tt(q([e.padding,4],s,a)),positioner:sp(n._el),rotation:q([e.rotation,0],s,a)*(Math.PI/180),size:Be.textSize(n._ctx,t,r),textAlign:q([e.textAlign,"start"],s,a),textShadowBlur:q([e.textShadowBlur,0],s,a),textShadowColor:q([e.textShadowColor,o],s,a),textStrokeColor:q([e.textStrokeColor,o],s,a),textStrokeWidth:q([e.textStrokeWidth,0],s,a)}},update:function(i){var t=this,e=null,s=null,n=t._index,a=t._config,r,o,l,c=q([a.display,!0],i,n);c&&(r=i.dataset.data[n],o=I(H(a.formatter,[r,i]),r),l=z(o)?[]:Be.toTextLines(o),l.length&&(e=t._modelize(c,l,a,i),s=ep(e))),t._model=e,t._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(i,t){var e=this,s=i.ctx,n=e._model,a=e._rects,r;this.visible()&&(s.save(),n.clip&&(r=n.area,s.beginPath(),s.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),s.clip()),s.globalAlpha=Be.bound(0,n.opacity,1),s.translate(It(t.x),It(t.y)),s.rotate(n.rotation),ap(s,a.frame,n),lp(s,n.lines,a.text,n),s.restore())}});var cp=Number.MIN_SAFE_INTEGER||-9007199254740991,dp=Number.MAX_SAFE_INTEGER||9007199254740991;function Me(i,t,e){var s=Math.cos(e),n=Math.sin(e),a=t.x,r=t.y;return{x:a+s*(i.x-a)-n*(i.y-r),y:r+n*(i.x-a)+s*(i.y-r)}}function Ea(i,t){var e=dp,s=cp,n=t.origin,a,r,o,l,c;for(a=0;a<i.length;++a)r=i[a],o=r.x-n.x,l=r.y-n.y,c=t.vx*o+t.vy*l,e=Math.min(e,c),s=Math.max(s,c);return{min:e,max:s}}function bi(i,t){var e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);return{vx:(t.x-i.x)/n,vy:(t.y-i.y)/n,origin:i,ln:n}}var jr=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};Mt(jr.prototype,{center:function(){var i=this._rect;return{x:i.x+i.w/2,y:i.y+i.h/2}},update:function(i,t,e){this._rotation=e,this._rect={x:t.x+i.x,y:t.y+i.y,w:t.w,h:t.h}},contains:function(i){var t=this,e=1,s=t._rect;return i=Me(i,t.center(),-t._rotation),!(i.x<s.x-e||i.y<s.y-e||i.x>s.x+s.w+e*2||i.y>s.y+s.h+e*2)},intersects:function(i){var t=this._points(),e=i._points(),s=[bi(t[0],t[1]),bi(t[0],t[3])],n,a,r;for(this._rotation!==i._rotation&&s.push(bi(e[0],e[1]),bi(e[0],e[3])),n=0;n<s.length;++n)if(a=Ea(t,s[n]),r=Ea(e,s[n]),a.max<r.min||r.max<a.min)return!1;return!0},_points:function(){var i=this,t=i._rect,e=i._rotation,s=i.center();return[Me({x:t.x,y:t.y},s,e),Me({x:t.x+t.w,y:t.y},s,e),Me({x:t.x+t.w,y:t.y+t.h},s,e),Me({x:t.x,y:t.y+t.h},s,e)]}});function qr(i,t,e){var s=t.positioner(i,t),n=s.vx,a=s.vy;if(!n&&!a)return{x:s.x,y:s.y};var r=e.w,o=e.h,l=t.rotation,c=Math.abs(r/2*Math.cos(l))+Math.abs(o/2*Math.sin(l)),d=Math.abs(r/2*Math.sin(l))+Math.abs(o/2*Math.cos(l)),u=1/Math.max(Math.abs(n),Math.abs(a));return c*=n*u,d*=a*u,c+=t.offset*n,d+=t.offset*a,{x:s.x+c,y:s.y+d}}function up(i,t){var e,s,n,a;for(e=i.length-1;e>=0;--e)for(n=i[e].$layout,s=e-1;s>=0&&n._visible;--s)a=i[s].$layout,a._visible&&n._box.intersects(a._box)&&t(n,a);return i}function hp(i){var t,e,s,n,a,r,o;for(t=0,e=i.length;t<e;++t)s=i[t],n=s.$layout,n._visible&&(o=new Proxy(s._el,{get:(l,c)=>l.getProps([c],!0)[c]}),a=s.geometry(),r=qr(o,s.model(),a),n._box.update(r,a,s.rotation()));return up(i,function(l,c){var d=l._hidable,u=c._hidable;d&&u||u?c._visible=!1:d&&(l._visible=!1)})}var Ne={prepare:function(i){var t=[],e,s,n,a,r;for(e=0,n=i.length;e<n;++e)for(s=0,a=i[e].length;s<a;++s)r=i[e][s],t.push(r),r.$layout={_box:new jr,_hidable:!1,_visible:!0,_set:e,_idx:r._index};return t.sort(function(o,l){var c=o.$layout,d=l.$layout;return c._idx===d._idx?d._set-c._set:d._idx-c._idx}),this.update(t),t},update:function(i){var t=!1,e,s,n,a,r;for(e=0,s=i.length;e<s;++e)n=i[e],a=n.model(),r=n.$layout,r._hidable=a&&a.display==="auto",r._visible=n.visible(),t|=r._hidable;t&&hp(i)},lookup:function(i,t){var e,s;for(e=i.length-1;e>=0;--e)if(s=i[e].$layout,s&&s._visible&&s._box.contains(t))return i[e];return null},draw:function(i,t){var e,s,n,a,r,o;for(e=0,s=t.length;e<s;++e)n=t[e],a=n.$layout,a._visible&&(r=n.geometry(),o=qr(n._el,n.model(),r),a._box.update(o,r,n.rotation()),n.draw(i,o))}},fp=function(i){if(z(i))return null;var t=i,e,s,n;if(R(i))if(!z(i.label))t=i.label;else if(!z(i.r))t=i.r;else for(t="",e=Object.keys(i),n=0,s=e.length;n<s;++n)t+=(n!==0?", ":"")+e[n]+": "+i[e[n]];return""+t},pp={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:fp,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},at="$datalabels",Wr="$default";function gp(i,t){var e=i.datalabels,s={},n=[],a,r;return e===!1?null:(e===!0&&(e={}),t=Mt({},[t,e]),a=t.labels||{},r=Object.keys(a),delete t.labels,r.length?r.forEach(function(o){a[o]&&n.push(Mt({},[t,a[o],{_key:o}]))}):n.push(t),s=n.reduce(function(o,l){return $(l.listeners||{},function(c,d){o[d]=o[d]||{},o[d][l._key||Wr]=c}),delete l.listeners,o},{}),{labels:n,listeners:s})}function Es(i,t,e,s){if(t){var n=e.$context,a=e.$groups,r;t[a._set]&&(r=t[a._set][a._key],r&&H(r,[n,s])===!0&&(i[at]._dirty=!0,e.update(n)))}}function mp(i,t,e,s,n){var a,r;!e&&!s||(e?s?e!==s&&(r=a=!0):r=!0:a=!0,r&&Es(i,t.leave,e,n),a&&Es(i,t.enter,s,n))}function bp(i,t){var e=i[at],s=e._listeners,n,a;if(!(!s.enter&&!s.leave)){if(t.type==="mousemove")a=Ne.lookup(e._labels,t);else if(t.type!=="mouseout")return;n=e._hovered,e._hovered=a,mp(i,s,n,a,t)}}function vp(i,t){var e=i[at],s=e._listeners.click,n=s&&Ne.lookup(e._labels,t);n&&Es(i,s,n,t)}var xp={id:"datalabels",defaults:pp,beforeInit:function(i){i[at]={_actives:[]}},beforeUpdate:function(i){var t=i[at];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(i,t,e){var s=t.index,n=i[at],a=n._datasets[s]=[],r=i.isDatasetVisible(s),o=i.data.datasets[s],l=gp(o,e),c=t.meta.data||[],d=i.ctx,u,h,f,m,p,v,x,g;for(d.save(),u=0,f=c.length;u<f;++u)if(x=c[u],x[at]=[],r&&x&&i.getDataVisibility(u)&&!x.skip)for(h=0,m=l.labels.length;h<m;++h)p=l.labels[h],v=p._key,g=new Hr(p,d,x,u),g.$groups={_set:s,_key:v||Wr},g.$context={active:!1,chart:i,dataIndex:u,dataset:o,datasetIndex:s},g.update(g.$context),x[at].push(g),a.push(g);d.restore(),Mt(n._listeners,l.listeners,{merger:function(b,y,_){y[b]=y[b]||{},y[b][t.index]=_[b],n._listened=!0}})},afterUpdate:function(i){i[at]._labels=Ne.prepare(i[at]._datasets)},afterDatasetsDraw:function(i){Ne.draw(i,i[at]._labels)},beforeEvent:function(i,t){if(i[at]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":bp(i,e);break;case"click":vp(i,e);break}}},afterEvent:function(i){var t=i[at],e=t._actives,s=t._actives=i.getActiveElements(),n=Be.arrayDiff(e,s),a,r,o,l,c,d,u;for(a=0,r=n.length;a<r;++a)if(c=n[a],c[1])for(u=c[0].element[at]||[],o=0,l=u.length;o<l;++o)d=u[o],d.$context.active=c[1]===1,d.update(d.$context);(t._dirty||n.length)&&(Ne.update(t._labels),i.render()),delete t._dirty}};class Us{constructor(){L(this,"getValues",t=>(t.forEach(e=>this.brandColors.push(getComputedStyle(document.documentElement,null).getPropertyValue(e))),this.brandColors));this.brandColors=[]}}const yp=new Us,Te=yp.getValues(["--clr-1a","--clr-1b","--clr-2a","--clr-2b","--clr-2c"]),_p={labels:["Data-1","Data-2","Data-3","Data-4","Data-5"],datasets:[{label:"Amount",data:[65,72,88,43,56],backgroundColor:[`hsl(${Te[0]})`,`hsl(${Te[1]})`,`hsl(${Te[2]})`,`hsl(${Te[3]})`,`hsl(${Te[4]})`],hoverOffset:50}]},wp={cutout:50,maintainAspectRatio:!1,plugins:{legend:{position:"left"},colors:{enabled:!0},datalabels:{backgroundColor:"#000",borderRadius:3,font:{size:14},formatter:(i,t)=>{const s=t.chart.data.datasets[0].data.reduce((a,r)=>a+r,0);return(i/s*100).toFixed(2)+"%"},color:"#fff"}}},Sp={type:"doughnut",plugins:[xp],options:wp,data:_p};document.querySelectorAll(".chart-doughnut").forEach(i=>new gt(i,Sp));const Mp=new Us,pt=Mp.getValues(["--clr-1a","--clr-1b","--clr-2a","--clr-2b","--clr-2c"]),Tp=["January","February","March","April","May","June","July"],kp={labels:Tp,datasets:[{label:"Dataset-1",data:[65,34,82,75,47,55,91],backgroundColor:[`hsl(${pt[0]}, 0.3)`,`hsl(${pt[1]}, 0.3)`,`hsl(${pt[2]}, 0.3)`,`hsl(${pt[3]}, 0.3)`,`hsl(${pt[4]}, 0.3)`,`hsl(${pt[0]}, 0.6)`,`hsl(${pt[1]}, 0.6)`],borderColor:[`hsl(${pt[0]})`,`hsl(${pt[1]})`,`hsl(${pt[2]})`,`hsl(${pt[3]})`,`hsl(${pt[4]})`],borderWidth:1}]},Cp={maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}},Ep={type:"bar",data:kp,options:Cp};document.querySelectorAll(".chart-bar").forEach(i=>new gt(i,Ep));const Lp=new Us,ce=Lp.getValues(["--clr-1a","--clr-1b","--clr-2a","--clr-2b","--clr-2c"]),Pp=["January","February","March","April","May","June","July"],Ap={labels:Pp,datasets:[{label:"Data-1",data:[65,34,82,75,47,55,91],borderColor:`hsl(${ce[2]}, 1)`,fill:{target:!0,above:`hsl(${ce[2]}, 0.1)`},tension:.25,pointStyle:"circle",backgroundColor:`hsl(${ce[2]}, 1)`,pointRadius:5,pointHoverRadius:15},{label:"Data-2",data:[25,44,54,32,14,46,52],borderColor:`hsl(${ce[3]}, 1)`,borderDash:[6,2],fill:{target:!0,above:`hsl(${ce[3]}, 0.1)`},tension:.25,pointStyle:"circle",backgroundColor:`hsl(${ce[3]}, 1)`,pointRadius:5,pointHoverRadius:15}]},Op={maintainAspectRatio:!1,scales:{y:{beginAtZero:!0}}},Dp={type:"line",data:Ap,options:Op};document.querySelectorAll(".chart-line").forEach(i=>new gt(i,Dp));const Ip=()=>{const i=document.querySelectorAll(".video");for(let t=0;t<i.length;t++)Fp(i[t])},Fp=i=>{const t=i.querySelector(".video__link"),e=i.querySelector(".video__media"),s=i.querySelector(".video__button"),n=zp(e);i.addEventListener("click",()=>{const a=Rp(n);t.remove(),s.remove(),i.appendChild(a)}),i.classList.add("video--enabled")},zp=i=>{const t=/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;return i.src.match(t)[1]},Rp=i=>{const t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",Vp(i)),t.classList.add("video__media"),t},Vp=i=>{const t="?rel=0&showinfo=0&autoplay=1";return"https://www.youtube.com/embed/"+i+t};Ip();var Bp=Object.defineProperty,Np=(i,t,e)=>t in i?Bp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,N=(i,t,e)=>(Np(i,typeof t!="symbol"?t+"":t,e),e);const $p=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Hp=/^-?[0-9]\d*$/,jp=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,qp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,Wp=i=>{let t=i;return typeof i=="string"&&(t=i.trim()),!t},Gp=i=>$p.test(i),Yp=(i,t)=>i.length>t,Xp=(i,t)=>i.length<t,Up=i=>typeof i!="string"?!1:!isNaN(+i)&&!isNaN(parseFloat(i)),Kp=i=>Hp.test(i),Zp=i=>jp.test(i),Jp=i=>qp.test(i),Qp=(i,t)=>i>t,tg=(i,t)=>i<t,kt=i=>typeof i!="string"||i==="";var B=(i=>(i.Required="required",i.Email="email",i.MinLength="minLength",i.MaxLength="maxLength",i.Password="password",i.Number="number",i.Integer="integer",i.MaxNumber="maxNumber",i.MinNumber="minNumber",i.StrongPassword="strongPassword",i.CustomRegexp="customRegexp",i.MinFilesCount="minFilesCount",i.MaxFilesCount="maxFilesCount",i.Files="files",i))(B||{}),Ls=(i=>(i.Required="required",i))(Ls||{}),Gr=(i=>(i.Label="label",i.LabelArrow="labelArrow",i))(Gr||{});const La=[{key:B.Required,dict:{en:"The field is required"}},{key:B.Email,dict:{en:"Email has invalid format"}},{key:B.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:B.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:B.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:B.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:B.Number,dict:{en:"Value should be a number"}},{key:B.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:B.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:B.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:B.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:B.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],eg="Value is incorrect",ke=i=>typeof i=="object"&&i!==null&&"then"in i&&typeof i.then=="function",ig=i=>{let t=i;const e=[];for(;t;)e.unshift(t),t=t.parentNode;return e},sg=(i,t)=>{const e=[...t].reverse();for(let s=0,n=e.length;s<n;++s){const a=e[s];for(const r in i){const o=i[r];if(o.groupElem===a)return[r,o]}}return null},yt=i=>Array.isArray(i)?i.filter(t=>t.length>0):typeof i=="string"&&i.trim()?[...i.split(" ").filter(t=>t.length>0)]:[],Ce=i=>i instanceof Element||i instanceof HTMLDocument,ng=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",vi=5,ls={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1};class ag{constructor(t,e,s){N(this,"form",null),N(this,"fields",{}),N(this,"groupFields",{}),N(this,"errors",{}),N(this,"isValid",!1),N(this,"isSubmitted",!1),N(this,"globalConfig",ls),N(this,"errorLabels",{}),N(this,"successLabels",{}),N(this,"eventListeners",[]),N(this,"dictLocale",La),N(this,"currentLocale","en"),N(this,"customStyleTags",{}),N(this,"onSuccessCallback"),N(this,"onFailCallback"),N(this,"onValidateCallback"),N(this,"tooltips",[]),N(this,"lastScrollPosition"),N(this,"isScrollTick"),N(this,"fieldIds",new Map),N(this,"getKeyByFieldSelector",n=>this.fieldIds.get(n)),N(this,"getFieldSelectorByKey",n=>{for(const[a,r]of this.fieldIds)if(n===r)return a}),N(this,"getCompatibleFields",()=>{const n={};return Object.keys(this.fields).forEach(a=>{let r=a;const o=this.getFieldSelectorByKey(a);typeof o=="string"&&(r=o),n[r]={...this.fields[a]}}),n}),N(this,"setKeyByFieldSelector",n=>{if(this.fieldIds.has(n))return this.fieldIds.get(n);const a=String(this.fieldIds.size+1);return this.fieldIds.set(n,a),a}),N(this,"refreshAllTooltips",()=>{this.tooltips.forEach(n=>{n.refresh()})}),N(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),N(this,"formSubmitHandler",n=>{n.preventDefault(),this.isSubmitted=!0,this.validateHandler(n)}),N(this,"handleFieldChange",n=>{let a;for(const r in this.fields)if(this.fields[r].elem===n){a=r;break}a&&(this.fields[a].touched=!0,this.validateField(a,!0))}),N(this,"handleGroupChange",n=>{let a;for(const r in this.groupFields)if(this.groupFields[r].elems.find(l=>l===n)){a=r;break}a&&(this.groupFields[a].touched=!0,this.validateGroup(a,!0))}),N(this,"handlerChange",n=>{n.target&&(this.handleFieldChange(n.target),this.handleGroupChange(n.target),this.renderErrors())}),this.initialize(t,e,s)}initialize(t,e,s){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=ls,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof t=="string"){const n=document.querySelector(t);if(!n)throw Error(`Form with ${t} selector not found! Please check the form selector`);this.setForm(n)}else if(t instanceof HTMLFormElement)this.setForm(t);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...ls,...e},s&&(this.dictLocale=[...s,...La]),this.isTooltip()){const n=document.createElement("style");n.textContent=ng,this.customStyleTags[Gr.Label]=document.head.appendChild(n),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(t,e,s){var n;const a=s??t;let r=(n=this.dictLocale.find(o=>o.key===a))==null?void 0:n.dict[this.currentLocale];if(r||s&&(r=s),r&&e!==void 0)switch(t){case B.MaxLength:case B.MinLength:case B.MaxNumber:case B.MinNumber:case B.MinFilesCount:case B.MaxFilesCount:r=r.replace(":value",String(e))}return r||s||eg}getFieldErrorMessage(t,e){const s=typeof t.errorMessage=="function"?t.errorMessage(this.getElemValue(e),this.fields):t.errorMessage;return this.getLocalisedString(t.rule,t.value,s)}getFieldSuccessMessage(t,e){const s=typeof t=="function"?t(this.getElemValue(e),this.fields):t;return this.getLocalisedString(void 0,void 0,s)}getGroupErrorMessage(t){return this.getLocalisedString(t.rule,void 0,t.errorMessage)}getGroupSuccessMessage(t){if(t.successMessage)return this.getLocalisedString(void 0,void 0,t.successMessage)}setFieldInvalid(t,e){this.fields[t].isValid=!1,this.fields[t].errorMessage=this.getFieldErrorMessage(e,this.fields[t].elem)}setFieldValid(t,e){this.fields[t].isValid=!0,e!==void 0&&(this.fields[t].successMessage=this.getFieldSuccessMessage(e,this.fields[t].elem))}setGroupInvalid(t,e){this.groupFields[t].isValid=!1,this.groupFields[t].errorMessage=this.getGroupErrorMessage(e)}setGroupValid(t,e){this.groupFields[t].isValid=!0,this.groupFields[t].successMessage=this.getGroupSuccessMessage(e)}getElemValue(t){switch(t.type){case"checkbox":return t.checked;case"file":return t.files;default:return t.value}}validateGroupRule(t,e,s){switch(s.rule){case Ls.Required:e.every(n=>!n.checked)?this.setGroupInvalid(t,s):this.setGroupValid(t,s)}}validateFieldRule(t,e,s,n=!1){const a=s.value,r=this.getElemValue(e);if(s.plugin){s.plugin(r,this.getCompatibleFields())||this.setFieldInvalid(t,s);return}switch(s.rule){case B.Required:{Wp(r)&&this.setFieldInvalid(t,s);break}case B.Email:{if(kt(r))break;Gp(r)||this.setFieldInvalid(t,s);break}case B.MaxLength:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;Yp(r,a)&&this.setFieldInvalid(t,s);break}case B.MinLength:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;Xp(r,a)&&this.setFieldInvalid(t,s);break}case B.Password:{if(kt(r))break;Zp(r)||this.setFieldInvalid(t,s);break}case B.StrongPassword:{if(kt(r))break;Jp(r)||this.setFieldInvalid(t,s);break}case B.Number:{if(kt(r))break;Up(r)||this.setFieldInvalid(t,s);break}case B.Integer:{if(kt(r))break;Kp(r)||this.setFieldInvalid(t,s);break}case B.MaxNumber:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;const o=+r;(Number.isNaN(o)||Qp(o,a))&&this.setFieldInvalid(t,s);break}case B.MinNumber:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(kt(r))break;const o=+r;(Number.isNaN(o)||tg(o,a))&&this.setFieldInvalid(t,s);break}case B.CustomRegexp:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);return}let o;try{o=new RegExp(a)}catch{console.error(`Value for ${s.rule} rule for [${t}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(t,s);break}const l=String(r);l!==""&&!o.test(l)&&this.setFieldInvalid(t,s);break}case B.MinFilesCount:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(Number.isFinite(r==null?void 0:r.length)&&r.length<a){this.setFieldInvalid(t,s);break}break}case B.MaxFilesCount:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);break}if(typeof a!="number"){console.error(`Value for ${s.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,s);break}if(Number.isFinite(r==null?void 0:r.length)&&r.length>a){this.setFieldInvalid(t,s);break}break}case B.Files:{if(a===void 0){console.error(`Value for ${s.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,s);return}if(typeof a!="object"){console.error(`Value for ${s.rule} rule for [${t}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(t,s);return}const o=a.files;if(typeof o!="object"){console.error(`Value for ${s.rule} rule for [${t}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(t,s);return}const l=(c,d)=>{const u=Number.isFinite(d.minSize)&&c.size<d.minSize,h=Number.isFinite(d.maxSize)&&c.size>d.maxSize,f=Array.isArray(d.names)&&!d.names.includes(c.name),m=Array.isArray(d.extensions)&&!d.extensions.includes(c.name.split(".")[c.name.split(".").length-1]),p=Array.isArray(d.types)&&!d.types.includes(c.type);return u||h||f||m||p};if(typeof r=="object"&&r!==null)for(let c=0,d=r.length;c<d;++c){const u=r.item(c);if(!u){this.setFieldInvalid(t,s);break}if(l(u,o)){this.setFieldInvalid(t,s);break}}break}default:{if(typeof s.validator!="function"){console.error(`Validator for custom rule for [${t}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(t,s);return}const o=s.validator(r,this.getCompatibleFields());if(typeof o!="boolean"&&typeof o!="function"&&console.error(`Validator return value for [${t}] field should be boolean or function. It will be cast to boolean.`),typeof o=="function")if(n)this.fields[t].asyncCheckPending=!0;else{this.fields[t].asyncCheckPending=!1;const l=o();if(!ke(l)){console.error(`Validator function for custom rule for [${t}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(t,s);return}return l.then(c=>{c||this.setFieldInvalid(t,s)}).catch(()=>{this.setFieldInvalid(t,s)})}o||this.setFieldInvalid(t,s)}}}isFormValid(){let t=!0;for(let e=0,s=Object.values(this.fields).length;e<s;++e){const n=Object.values(this.fields)[e];if(n.isValid===void 0){t=void 0;break}if(n.isValid===!1){t=!1;break}}for(let e=0,s=Object.values(this.groupFields).length;e<s;++e){const n=Object.values(this.groupFields)[e];if(n.isValid===void 0){t=void 0;break}if(n.isValid===!1){t=!1;break}}return t}validateField(t,e=!1){var s;const n=this.fields[t];n.isValid=!0;const a=[];return[...n.rules].reverse().forEach(r=>{const o=this.validateFieldRule(t,n.elem,r,e);ke(o)&&a.push(o)}),n.isValid&&this.setFieldValid(t,(s=n.config)==null?void 0:s.successMessage),Promise.allSettled(a).finally(()=>{var r;e&&((r=this.onValidateCallback)==null||r.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(t){if(typeof t!="string"&&!Ce(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);return!e||!this.fields[e]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(s=>{this.validateField(e,!0).finally(()=>{this.clearFieldStyle(e),this.clearFieldLabel(e),this.renderFieldError(e,!0),s(!!this.fields[e].isValid)})})}revalidateGroup(t){if(typeof t!="string"&&!Ce(t))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);return!e||!this.groupFields[e]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(s=>{this.validateGroup(e).finally(()=>{this.clearFieldLabel(e),this.renderGroupError(e,!0),s(!!this.groupFields[e].isValid)})})}validateGroup(t,e=!1){const s=this.groupFields[t],n=[];return[...s.rules].reverse().forEach(a=>{const r=this.validateGroupRule(t,s.elems,a);ke(r)&&n.push(r)}),Promise.allSettled(n).finally(()=>{var a;e&&((a=this.onValidateCallback)==null||a.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const t in this.fields){const e=this.fields[t];if(!e.isValid){setTimeout(()=>e.elem.focus(),0);break}}}afterSubmitValidation(t=!1){this.renderErrors(t),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(t=!1){return new Promise(e=>{const s=[];Object.keys(this.fields).forEach(n=>{const a=this.validateField(n);ke(a)&&s.push(a)}),Object.keys(this.groupFields).forEach(n=>{const a=this.validateGroup(n);ke(a)&&s.push(a)}),Promise.allSettled(s).then(()=>{var n;this.afterSubmitValidation(t),(n=this.onValidateCallback)==null||n.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),e(!!s.length)})})}revalidate(){return new Promise(t=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),t(this.isValid)})})}validateHandler(t,e=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(e).finally(()=>{var s,n;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?(s=this.onSuccessCallback)==null||s.call(this,t):(n=this.onFailCallback)==null||n.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(t){this.form=t,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(t,e,s){e.addEventListener(t,s),this.eventListeners.push({type:t,elem:e,func:s})}removeListener(t,e,s){e.removeEventListener(t,s),this.eventListeners=this.eventListeners.filter(n=>n.type!==t||n.elem!==e)}addField(t,e,s){if(typeof t!="string"&&!Ce(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let n;if(typeof t=="string"?n=this.form.querySelector(t):n=t,!n)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(e)||!e.length)throw Error("Rules argument should be an array and should contain at least 1 element.");e.forEach(r=>{if(!("rule"in r||"validator"in r||"plugin"in r))throw Error("Rules argument must contain at least one rule or validator property.");if(!r.validator&&!r.plugin&&(!r.rule||!Object.values(B).includes(r.rule)))throw Error(`Rule should be one of these types: ${Object.values(B).join(", ")}. Provided value: ${r.rule}`)});const a=this.setKeyByFieldSelector(t);return this.fields[a]={elem:n,rules:e,isValid:void 0,touched:!1,config:s},this.setListeners(n),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(a),this}removeField(t){if(typeof t!="string"&&!Ce(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);if(!e||!this.fields[e])return console.error("Field not found. Check the field selector."),this;const s=this.getListenerType(this.fields[e].elem.type);return this.removeListener(s,this.fields[e].elem,this.handlerChange),this.clearErrors(),delete this.fields[e],this}removeGroup(t){if(typeof t!="string")throw Error("Group selector is not valid. Please specify a string selector.");const e=this.getKeyByFieldSelector(t);return!e||!this.groupFields[e]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[e].elems.forEach(s=>{const n=this.getListenerType(s.type);this.removeListener(n,s,this.handlerChange)}),this.clearErrors(),delete this.groupFields[e],this)}addRequiredGroup(t,e,s,n){if(typeof t!="string"&&!Ce(t))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let a;if(typeof t=="string"?a=this.form.querySelector(t):a=t,!a)throw Error("Group selector not found! Please check the group selector.");const r=a.querySelectorAll("input"),o=Array.from(r).filter(c=>{const d=sg(this.groupFields,ig(c));return d?d[1].elems.find(u=>u!==c):!0}),l=this.setKeyByFieldSelector(t);return this.groupFields[l]={rules:[{rule:Ls.Required,errorMessage:e,successMessage:n}],groupElem:a,elems:o,touched:!1,isValid:void 0,config:s},r.forEach(c=>{this.setListeners(c)}),this}getListenerType(t){switch(t){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(t){const e=this.getListenerType(t.type);this.removeListener(e,t,this.handlerChange),this.addListener(e,t,this.handlerChange)}clearFieldLabel(t){var e,s;(e=this.errorLabels[t])==null||e.remove(),(s=this.successLabels[t])==null||s.remove()}clearFieldStyle(t){var e,s,n,a;const r=this.fields[t],o=((e=r.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach(c=>{r.elem.style[c]=""});const l=((s=r.config)==null?void 0:s.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(l).forEach(c=>{r.elem.style[c]=""}),r.elem.classList.remove(...yt(((n=r.config)==null?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...yt(((a=r.config)==null?void 0:a.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var t,e;Object.keys(this.errorLabels).forEach(s=>this.errorLabels[s].remove()),Object.keys(this.successLabels).forEach(s=>this.successLabels[s].remove());for(const s in this.fields)this.clearFieldStyle(s);for(const s in this.groupFields){const n=this.groupFields[s],a=((t=n.config)==null?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(o=>{n.elems.forEach(l=>{var c;l.style[o]="",l.classList.remove(...yt(((c=n.config)==null?void 0:c.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const r=((e=n.config)==null?void 0:e.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(r).forEach(o=>{n.elems.forEach(l=>{var c;l.style[o]="",l.classList.remove(...yt(((c=n.config)==null?void 0:c.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const t=this.form.querySelectorAll("input, textarea, button, select");for(let e=0,s=t.length;e<s;++e)t[e].setAttribute("data-just-validate-fallback-disabled",t[e].disabled?"true":"false"),t[e].setAttribute("disabled","disabled"),t[e].style.pointerEvents="none",t[e].style.webkitFilter="grayscale(100%)",t[e].style.filter="grayscale(100%)"}unlockForm(){const t=this.form.querySelectorAll("input, textarea, button, select");for(let e=0,s=t.length;e<s;++e)t[e].getAttribute("data-just-validate-fallback-disabled")!=="true"&&t[e].removeAttribute("disabled"),t[e].style.pointerEvents="",t[e].style.webkitFilter="",t[e].style.filter=""}renderTooltip(t,e,s){var n;const{top:a,left:r,width:o,height:l}=t.getBoundingClientRect(),c=e.getBoundingClientRect(),d=s||((n=this.globalConfig.tooltip)==null?void 0:n.position);switch(d){case"left":{e.style.top=`${a+l/2-c.height/2}px`,e.style.left=`${r-c.width-vi}px`;break}case"top":{e.style.top=`${a-c.height-vi}px`,e.style.left=`${r+o/2-c.width/2}px`;break}case"right":{e.style.top=`${a+l/2-c.height/2}px`,e.style.left=`${r+o+vi}px`;break}case"bottom":{e.style.top=`${a+l+vi}px`,e.style.left=`${r+o/2-c.width/2}px`;break}}return e.dataset.direction=d,{refresh:()=>{this.renderTooltip(t,e,s)}}}createErrorLabelElem(t,e,s){const n=document.createElement("div");n.innerHTML=e;const a=this.isTooltip()?s==null?void 0:s.errorLabelStyle:(s==null?void 0:s.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(n.style,a),n.classList.add(...yt((s==null?void 0:s.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(n.dataset.tooltip="true"),this.globalConfig.testingMode&&(n.dataset.testId=`error-label-${t}`),this.errorLabels[t]=n,n}createSuccessLabelElem(t,e,s){if(e===void 0)return null;const n=document.createElement("div");n.innerHTML=e;const a=(s==null?void 0:s.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(n.style,a),n.classList.add(...yt((s==null?void 0:s.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(n.dataset.testId=`success-label-${t}`),this.successLabels[t]=n,n}renderErrorsContainer(t,e){const s=e||this.globalConfig.errorsContainer;if(typeof s=="string"){const n=this.form.querySelector(s);if(n)return n.appendChild(t),!0;console.error(`Error container with ${s} selector not found. Errors will be rendered as usual`)}return s instanceof Element?(s.appendChild(t),!0):(s!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(t,e,s,n){!n&&this.renderErrorsContainer(e,s)||t.appendChild(e)}renderFieldLabel(t,e,s,n){var a,r,o,l,c,d,u;if(!(!n&&this.renderErrorsContainer(e,s)))if(t.type==="checkbox"||t.type==="radio"){const h=document.querySelector(`label[for="${t.getAttribute("id")}"]`);((r=(a=t.parentElement)==null?void 0:a.tagName)==null?void 0:r.toLowerCase())==="label"?(l=(o=t.parentElement)==null?void 0:o.parentElement)==null||l.appendChild(e):h?(c=h.parentElement)==null||c.appendChild(e):(d=t.parentElement)==null||d.appendChild(e)}else(u=t.parentElement)==null||u.appendChild(e)}showLabels(t,e){Object.keys(t).forEach((s,n)=>{const a=t[s],r=this.getKeyByFieldSelector(s);if(!r||!this.fields[r]){console.error("Field not found. Check the field selector.");return}const o=this.fields[r];o.isValid=!e,this.clearFieldStyle(r),this.clearFieldLabel(r),this.renderFieldError(r,!1,a),n===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>o.elem.focus(),0)})}showErrors(t){if(typeof t!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(t,!0)}showSuccessLabels(t){if(typeof t!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(t,!1)}renderFieldError(t,e=!1,s){var n,a,r,o,l,c;const d=this.fields[t];if(d.isValid===!1&&(this.isValid=!1),d.isValid===void 0||!e&&!this.isSubmitted&&!d.touched&&s===void 0)return;if(d.isValid){if(!d.asyncCheckPending){const h=this.createSuccessLabelElem(t,s!==void 0?s:d.successMessage,d.config);h&&this.renderFieldLabel(d.elem,h,(n=d.config)==null?void 0:n.errorsContainer,!0),d.elem.classList.add(...yt(((a=d.config)==null?void 0:a.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}d.elem.classList.add(...yt(((r=d.config)==null?void 0:r.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const u=this.createErrorLabelElem(t,s!==void 0?s:d.errorMessage,d.config);this.renderFieldLabel(d.elem,u,(o=d.config)==null?void 0:o.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(d.elem,u,(c=(l=d.config)==null?void 0:l.tooltip)==null?void 0:c.position))}renderGroupError(t,e=!0){var s,n,a,r;const o=this.groupFields[t];if(o.isValid===!1&&(this.isValid=!1),o.isValid===void 0||!e&&!this.isSubmitted&&!o.touched)return;if(o.isValid){o.elems.forEach(d=>{var u,h;Object.assign(d.style,((u=o.config)==null?void 0:u.successFieldStyle)||this.globalConfig.successFieldStyle),d.classList.add(...yt(((h=o.config)==null?void 0:h.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const c=this.createSuccessLabelElem(t,o.successMessage,o.config);c&&this.renderGroupLabel(o.groupElem,c,(s=o.config)==null?void 0:s.errorsContainer,!0);return}this.isValid=!1,o.elems.forEach(c=>{var d,u;Object.assign(c.style,((d=o.config)==null?void 0:d.errorFieldStyle)||this.globalConfig.errorFieldStyle),c.classList.add(...yt(((u=o.config)==null?void 0:u.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const l=this.createErrorLabelElem(t,o.errorMessage,o.config);this.renderGroupLabel(o.groupElem,l,(n=o.config)==null?void 0:n.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.groupElem,l,(r=(a=o.config)==null?void 0:a.tooltip)==null?void 0:r.position))}renderErrors(t=!1){if(!(!this.isSubmitted&&!t&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const e in this.groupFields)this.renderGroupError(e);for(const e in this.fields)this.renderFieldError(e)}}destroy(){this.eventListeners.forEach(t=>{this.removeListener(t.type,t.elem,t.func)}),Object.keys(this.customStyleTags).forEach(t=>{this.customStyleTags[t].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(t=>{const e=this.getFieldSelectorByKey(t);e&&this.addField(e,[...this.fields[t].rules],this.fields[t].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(t){if(typeof t!="string"&&t!==void 0){console.error("Current locale should be a string");return}this.currentLocale=t,this.isSubmitted&&this.validate()}onSuccess(t){return this.onSuccessCallback=t,this}onFail(t){return this.onFailCallback=t,this}onValidate(t){return this.onValidateCallback=t,this}}const Ks={form:document.querySelector("#sign-up-form"),input:document.querySelector("#email"),btn:document.querySelector("#submit-form"),modal:document.querySelector(".form-modal"),userEmail:document.querySelector(".user-email")},cs={emptyMessage:"Заполните это поле",errorMessage:"Некорректный email",successMessage:"Подходит"},Qt={fields:{success:"success-field",error:"error-field"},labels:{general:"labels",success:"success-label",error:"error-label"},modifiers:{granted:"unlocked",denied:"locked"}},rg=new ag(Ks.form,{successFieldCssClass:[Qt.fields.success],errorFieldCssClass:[Qt.fields.error],successLabelCssClass:[Qt.labels.general,Qt.labels.success],errorLabelCssClass:[Qt.labels.general,Qt.labels.error],validateBeforeSubmitting:!0});rg.addField(Ks.input,[{rule:"required",errorMessage:cs.emptyMessage},{rule:"email",errorMessage:cs.errorMessage}],{successMessage:cs.successMessage});class og{constructor(t,e){L(this,"unlockSubmitBtn",()=>{this.btn.classList.replace(this.cssClasses.modifiers.denied,this.cssClasses.modifiers.granted)});L(this,"lockSubmitBtn",()=>{this.btn.classList.replace(this.cssClasses.modifiers.granted,this.cssClasses.modifiers.denied)});L(this,"getState",()=>this.input.classList.contains(this.cssClasses.fields.success));L(this,"handleInputChange",()=>this.getState()?this.unlockSubmitBtn():this.lockSubmitBtn());L(this,"removeSuccessLabel",()=>document.querySelector(`.${this.cssClasses.labels.success}`).remove());L(this,"clearInput",()=>this.input.value="");L(this,"insertUserEmail",()=>this.userEmail.textContent=this.input.value);L(this,"restoreInitialState",()=>{this.clearInput(),this.removeSuccessLabel(),this.lockSubmitBtn()});L(this,"handleFormSubmit",t=>{this.getState()&&(t.preventDefault(),this.insertUserEmail(),this.modal.showModal(),this.restoreInitialState())});L(this,"init",()=>{this.input.addEventListener("input",this.handleInputChange),this.form.addEventListener("submit",this.handleFormSubmit)});this.form=t.form,this.input=t.input,this.btn=t.btn,this.modal=t.modal,this.userEmail=t.userEmail,this.cssClasses=e}}const lg=new og(Ks,Qt);lg.init();Wl(document.querySelectorAll("table"));const cg=new ql;cg.initWith("role",{thead:"rowgroup",tbody:"rowgroup",tfoot:"rowgroup",tr:"row",td:"cell",th:"columnheader","th[scope=row]":"rowheader"});const dg=new Na("w");dg.initWith([["w-master-2","w-slave-2"]]);const ug=new Na("h");ug.initWith([["h-master-1","h-slave-1"],["h-master-2","h-slave-2"],["h-master-3","h-slave-3"]]);const ee=document.querySelector(".sidebar"),Pa=document.querySelector(".sidebar-toggle");let Aa=null;Pa.addEventListener("click",()=>{Pa.classList.toggle("active"),ee.classList.contains("isOpen")?(ee.classList.remove("isOpen"),clearTimeout(Aa)):(ee.style.display="initial",Aa=setTimeout(()=>requestAnimationFrame(()=>ee.classList.add("isOpen")),.1))});ee.addEventListener("transitionend",()=>!ee.classList.contains("isOpen")&&(ee.style.display="none"));const Zs=document.querySelector('[href="mailto:nospam@google.com"]');let Oa=null;const hg=()=>Zs.setAttribute("href","mailto:KrivoshlykovNN@yandex.ru"),fg=()=>Zs.setAttribute("href","mailto:nospampls@google.com"),pg=()=>{clearTimeout(Oa),hg(),Oa=setTimeout(fg,1)};Zs.addEventListener("click",pg);const gg=(i,t)=>{document.querySelectorAll(`${i} ${t}`).forEach(s=>{const n=s.closest(`${i}`),a=()=>{s.style.display="none",n.removeEventListener("scrollend",a,{passive:!0})};n.addEventListener("scrollend",a,{passive:!0})})};gg(".layout-center",".scroll-down");console.log(`%cCoded by ✨Nazhdaque✨
https://www.frontendmentor.io/profile/Nazhdaque/solutions`,"background: #222; color: chartreuse;");
