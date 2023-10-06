var ne=Object.defineProperty;var re=(i,t,e)=>t in i?ne(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var J=(i,t,e)=>(re(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const ae=`<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Ссылка на слайд</span>
			<svg class="chevron chevron-right">
				<use href="images/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>

<!-- sidebar-item -->
<li class="ac sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="ac-trigger sidebar-item__btn marker ellipsis-box"
						type="button">
			<span class="ellipsis">Несколько слайдов на одну тему</span>
			<svg class="chevron">
				<use href="images/chevron.svg#chevron"></use>
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
</li>

<!-- sidebar-item -->
<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-box slide-to"
						type="button">
			<span class="ellipsis">Ссылка на слайд</span>
			<svg class="chevron chevron-right">
				<use href="images/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>`,le=`<li class="swiper-slide slide-1">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg w-img"></div>
			<div class="slide-bg-overlay"></div>
			<div class="heading fs-3xl">
				<h1 class="fs-3xl width-x">Это шаблон презентации. Альтернатива .pptx</h1>
				<p class="fs-md grid-full-width">Проект находится в стадии разработки</p>
			</div>

			<ul class="cards-w-icons grid-x">
				<li>
					<div class="img-box">
						<img class="icon"
								 src="images/icons/figure-1-white.svg"
								 alt="">
					</div>
					<h2 class="caps">Следует понимать</h2>
					<div class="card-body">
						<p>Весь текстовый и графический контент представлен в демонстрационных целях. Он может быть абсолютно
							любым.</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="icon"
								 src="images/icons/figure-3-white.svg"
								 alt="">
					</div>
					<h2 class="caps">Важно подчеркнуть</h2>
					<div class="card-body">
						<p>Основные усилия направлены на создание универсальной
							функциональности без привязки к конкретному контенту.</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="icon"
								 src="images/icons/figure-2-white.svg"
								 alt="">
					</div>
					<h2 class="caps">Стоит отметить</h2>
					<div class="card-body">
						<p>Быстрая и удобная кастомизация под конкретные задачи и содержание — главная
							цель проекта.</p>
					</div>
				</li>

				<li>
					<div class="img-box circle bg-sphere">
						<img class="icon"
								 src="images/icons/figure-2-white.svg"
								 alt="">
					</div>
					<h2 class="caps">Тем не менее</h2>
					<div class="card-body">
						<p>Уже сейчас это полнофункциональный продукт, готовый к использованию по назначению.</p>
					</div>
				</li>
			</ul>

			<p class="ribbon fs-rg caps">under development</p>
		</div>
	</div>
</li>`,oe=`<li class="swiper-slide slide-2">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg trapeze w-img"></div>
			<div class="slide-bg-overlay trapeze"></div>

			<div class="heading fs-xl">
				<h2 class="fs-xl width-x">Чем такая презентация лучше MS PowerPoint</h2>
				<p class="fs-md grid-full-width">Спойлер: пожалуй, всем! Счет 12:2 не в пользу PP</p>
			</div>

			<ol class="flex-x list-w-arrows">
				<li class="master-1">
					<div class="img-box bg-sphere">
						<img class="icon"
								 src="images/icons/figure-2-white.svg"
								 alt="">
					</div>
					<div class="li-head">
						<h3>Готово к использованию</h3>
					</div>
					<div class="li-body">
						<p>Не нужны никакие спец. программы для просмотра — все открывается по ссылке и работает в любом
							браузере, на любом устройстве.</p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Без лишних телодвижений</h3>
					</div>
					<div class="li-body">
						<p>Нет необходимости скачивать и / или пересылать файлы по почте, хранить их где-то. Кроме того, они
							имеют замечательное свойство теряться.</p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Интуитивно понятно</h3>
					</div>
					<div class="li-body">
						<p>Привычные каждому пользователю возможности управления мышкой, клавиатурой, тачпэдом ноутбука,
							жестами на сенсорных дисплеях: листаем слайды стрелками, колесом мыши, драг-н-дропом, перемещаемся
							между интерактивными элементами (ссылки, кнопки, поля формы) по Tab, свайпаем, тапаем, масштабируем
							и т.д. </p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Выглядит отлично</h3>
					</div>
					<div class="li-body">
						<p>Все
							мы примерно представляем, как выглядит среднестатистическая презентация в .pptx, да еще, как
							водится,
							хорошенько пожатая в при конвертации в .pdf. Как правило, не важно.
						</p>
						<p>Здесь же за качество
							визуализации отвечает браузер, он
							использует аппаратные
							ресурсы ПК, чтобы идеально отрисовать все на вашем мониторе. Поэтому: яркие, насыщенные цвета,
							четкие линии, шрифты, плавные градиенты, хай-рез, никакого муара, пиксельной каши и т.д. Словом —
							максимальное качество картинки в любом
							разрешении.</p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Аккуратно</h3>
					</div>
					<div class="li-body">
						<p>Опрятность, перфектность во всем, что касается макета и расположения элементов на
							странице. Модульная сетка, отступы, размеры, формы,
							позиционирование, поведение на странице, цвета —
							абсолютно все задается параметрически, программным кодом, а не на глазок, вручную, как это часто
							бывает
							при создании .pptx презентации.
						</p>
						<p>Когда презентация элементарно аккуратно выполнена — это уже треть
							всего успеха, даже без особых дизайнерских изысков и навыков.</p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Все поместится</h3>
					</div>
					<div class="li-body">
						<p>Добавить контент в слайд —
							никаких проблем даже в том случае, если что-то не помещается в область просмотра. Просто появится
							возможность вертикальной прокрутки. Как на этой странице, например.
						</p>
						<p>Провернуть такой трюк с .pptx,
							очевидно, не удастся. Все знают, как это бывает: либо новый слайд, либо вот эти пятнашки, когда все
							куда-то сдвигается, уплотняется, налезает и в итоге выглядит печально.</p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Легко кастомизировать</h3>
					</div>
					<div class="li-body">
						<p>Здесь разница просто колоссальная. В .pptx презентации любые изменения —
							это утомительный ручной труд в каждом слайде, которых у вас может быть несколько десятков. Поменять
							фон, актуализировать айдентику в нескольких презентациях — целая проблема: неудобно,
							времязатратно.
						</p>
						<p>В веб-проекте же можно моментально изменить стилизацию любого компонента:
							шрифты, цвета, размеры, положение на странице, изображения. Это делается
							централизованно, изменения затрагивают все однотипные элементы сразу.</p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Reusability</h3>
					</div>
					<div class="li-body">
						<p>Это преимущество прямо следует из предыдущего пункта. PP-презентация — вещь, как правило,
							одноразовая, это статичный формат, тяжело поддающийся радикальной перебаботке. Веб-проект — совсем
							другое дело: потратив время и усилия на разработку с нуля, вы получаете функциональную базу для всех
							последующих проектов. И с каждой итерацией эта база усовершенствуется, оптимизируется,
							дополняется новыми возможностями.</p>
					</div>
				</li>

				<li>
					<div class="li-head">
						<h3>Адаптивность и responsive</h3>
					</div>
					<div class="li-body">
						<p>Возможность комфортного просмотра на любом устройстве, с т.ч. с экрана смартфона. В
							этом легко убедиться: потяните за уголок окна браузера, чтобы уменьшить область просмотра до
							размеров экрана смартфона. Макет
							страницы гибко подстроится под эти изменения, сохраняя при этом аккуратный вид и
							читаемость. В нужный момент появится возможность вертикальной прокрутки и т.д. А теперь вспомните,
							что из себя представляет просмотр .pdf или .pptx на смартфоне.
						</p>
					</div>
				</li>

				<li class="master-1">
					<div class="li-head">
						<h3>Огромный потенциал</h3>
					</div>
					<div class="li-body">
						<p>Возможности связки HTML — CSS — JS в плане визуализации контента несоизмеримо шире,
							чем в PowerPoint (далее PP). Экскаватор и лопата, танк и самокат — такие примерно ассоциации должны
							возникать при
							сравнении инструментов веб-разработки и PP.</p>
					</div>
				</li>

				<li class="slave-1">
					<div class="li-head">
						<h3>Сторонние библиотеки</h3>
					</div>
					<div class="li-body">
						<p>Доступно множество профессиональных решений мирового уровня, позволяющих создавать
							интересный, функциональный, впечатляющий контент. Простой пример: интерактивные графики с
							помощью
							<a class="txt-link"
								 href="https://www.chartjs.org/"
								 target="_blank"
								 rel="noopener noreferrer">chart.js</a>, слайдеры (кстати, в этом проекте используется <a
								 class="txt-link"
								 href="https://swiperjs.com/"
								 target="_blank"
								 rel="noopener noreferrer">swiper.js</a>
							), анимации…
						</p>
					</div>
				</li>

				<li class="slave-1">
					<div class="li-head">
						<h3>Полноценный веб-ресурс</h3>
					</div>
					<div class="li-body">
						<p>Который начинает работать на вас с момента публикации на домене компании. Страница
							проиндексируется и будет попадать в выдачу поисковиков. Если контент годный, его удобно потреблять
							(помним про адаптивность, доступность с мобильных устройств), все сделано технически грамотно,
							быстро грузится и т.д., вы
							получаете трафик.</p>
						<p>Также помимо
							собственно текстового контента
							в вашем распоряжении есть метатеги — один из основных инструментов SEO-продвижения. Формы обратной
							связи, если это вам нужно.</p>
					</div>
				</li>
			</ol>

			<h2 class="heading fs-xl width-x">Плюсы MS PowerPoint</h2>
			<ol class="flex-x list-w-arrows list-w-arrows-left">
				<li class="slave-1">
					<div class="img-box bg-sphere">
						<i class="material-icons-round mui-icon">child_care</i>
					</div>
					<div class="li-head">
						<h3>Что-то получится даже у ребенка</h3>
					</div>
					<div class="li-body">
						<p>Сделать презентацию в PP <b>с нуля</b> куда проще и быстрее, чем сверстать и настроить веб-проект.
							Но только обычную,
							заурядную, доморощенного
							вида,
							словом,
							сферическую в
							вакууме. Думается, всем хорошо знаком этот общепринятый стандарт, который вполне себе норма даже в
							крупных, даже в
							транснациональных
							компаниях-гигантах типа HP.
						</p>
						<p>Профессиональное владение PP мне
							встречалось только на Ютубе. Это отдельный вид искусства, такие умельцы, как правило, только этим и
							зарабатывают. Нужно быть профессиональным дизайнером плюс освоить PP в совершенстве.</p>
						<p>Парадокс здесь
							заключается в том, что многие из тех удивительных трюков, которые они демонстрируют,
							— это зачастую имитация совершенно обычных для веб-проекта вещей. И делать все это в PP сложно.</p>
					</div>
				</li>

				<li class="slave-1">
					<div class="img-box bg-sphere">
						<i class="material-icons-round mui-icon">screenshot_monitor</i>
					</div>
					<div class="li-head">
						<h3>Никаких сюрпризов</h3>
					</div>
					<div class="li-body">
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
			</ol>
		</div>
	</div>
</li>`,de=`<li class="swiper-slide slide-3">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg rounded"></div>

			<table>
				<caption>Адаптивная и семантически корректная таблица с полезным функционалом</caption>

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
</li>`,ce=`<li class="swiper-slide slide-4">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg spike"></div>
			<h2 class="heading fs-xl width-x">Lorem ipsum dolor sit</h2>

			<ul class="grid-x cards card-ttl-underscore card-img-left">
				<li>
					<div class="img-box circle">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>

					<div class="card-body ellipsis-box">
						<h3 class="card-head caps ellipsis">Lorem ipsum</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ipsum rem quod quisquam
							asperiores eaque porro vel unde? Itaque?</p>
					</div>
				</li>

				<li>
					<div class="img-box circle bg-sphere">
						<i class="material-icons-round mui-icon">home</i>
					</div>

					<div class="card-body ellipsis-box">
						<h3 class="card-head caps ellipsis">Lorem ipsum</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ipsum rem quod quisquam
							asperiores eaque porro vel unde? Itaque?</p>
					</div>
				</li>

				<li>
					<div class="img-box circle bg-eye">
						<img class="icon"
								 src="images/icons/figure-2-white.svg"
								 alt="">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-body ellipsis-box">
						<h3 class="card-head caps ellipsis">Lorem ipsum</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ipsum rem quod quisquam
							asperiores eaque porro vel unde? Itaque?</p>
					</div>
				</li>
			</ul>

			<ul class="grid-x cards card-ttl-bg">
				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ipsum rem quod quisquam
							asperiores eaque porro vel unde? Itaque?</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime fugit suscipit, odio
							nostrum rerum obcaecati quidem sapiente. Modi quo voluptatum placeat architecto, corporis officiis
							et aspernatur expedita.</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quod, tempore labore asperiores
							alias facilis odio non eaque vitae sed error quam culpa quae.</p>
					</div>
				</li>
			</ul>

			<ul class="grid-x cards card-ttl-bg card-w-bg card-img-left">
				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ipsum rem quod quisquam
							asperiores eaque porro vel unde? Itaque?</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime fugit suscipit, odio
							nostrum rerum obcaecati quidem sapiente. Modi quo voluptatum placeat architecto, corporis officiis
							et aspernatur expedita.</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quod, tempore labore asperiores
							alias facilis odio non eaque vitae sed error quam culpa quae.</p>
					</div>
				</li>
			</ul>

			<ul class="grid-x cards card-ttl-bg card-w-bg">
				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ipsum rem quod quisquam
							asperiores eaque porro vel unde? Itaque?</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam maxime fugit suscipit, odio
							nostrum rerum obcaecati quidem sapiente. Modi quo voluptatum placeat architecto, corporis officiis
							et aspernatur expedita.</p>
					</div>
				</li>

				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head ellipsis-box">
						<h3 class="caps ellipsis">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quod, tempore labore asperiores
							alias facilis odio non eaque vitae sed error quam culpa quae.</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</li>`,ue=`<li class="swiper-slide slide-5">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg trapeze"></div>
			<div class="slide-bg trapeze w-img"></div>
		</div>
	</div>
</li>`,pe=`<li class="swiper-slide slide-6">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg spike"></div>
			<div class="slide-bg spike w-img"></div>
		</div>
	</div>
</li>`,fe=`<li class="swiper-slide slide-7">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg diag w-img"></div>
		</div>
	</div>
</li>`,he=`<li class="swiper-slide slide-8">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg zigzag w-img"></div>
		</div>
	</div>
</li>`,me=`<li class="swiper-slide slide-9">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg waves w-img"></div>
		</div>
	</div>
</li>`,ve=`<li class="swiper-slide slide-10">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg spike w-img"></div>
			<div class="slide-bg spike"></div>
		</div>
	</div>
</li>`,ge=`<li class="swiper-slide slide-11">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg circle w-img"></div>
		</div>
	</div>
</li>`,be=document.querySelector(".sidebar");be.insertAdjacentHTML("beforeend",ae);const H=document.querySelector(".swiper-wrapper");H.insertAdjacentHTML("beforeend",le);H.insertAdjacentHTML("beforeend",oe);H.insertAdjacentHTML("beforeend",de);H.insertAdjacentHTML("beforeend",ce);H.insertAdjacentHTML("beforeend",ue);H.insertAdjacentHTML("beforeend",pe);H.insertAdjacentHTML("beforeend",fe);H.insertAdjacentHTML("beforeend",he);H.insertAdjacentHTML("beforeend",me);H.insertAdjacentHTML("beforeend",ve);H.insertAdjacentHTML("beforeend",ge);function Lt(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function St(i,t){i===void 0&&(i={}),t===void 0&&(t={}),Object.keys(t).forEach(e=>{typeof i[e]>"u"?i[e]=t[e]:Lt(t[e])&&Lt(i[e])&&Object.keys(t[e]).length>0&&St(i[e],t[e])})}const Vt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function N(){const i=typeof document<"u"?document:{};return St(i,Vt),i}const we={document:Vt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function _(){const i=typeof window<"u"?window:{};return St(i,we),i}function ye(i){const t=i;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function bt(i,t){return t===void 0&&(t=0),setTimeout(i,t)}function st(){return Date.now()}function xe(i){const t=_();let e;return t.getComputedStyle&&(e=t.getComputedStyle(i,null)),!e&&i.currentStyle&&(e=i.currentStyle),e||(e=i.style),e}function Se(i,t){t===void 0&&(t="x");const e=_();let s,r,n;const l=xe(i);return e.WebKitCSSMatrix?(r=l.transform||l.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),n=new e.WebKitCSSMatrix(r==="none"?"":r)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),t==="x"&&(e.WebKitCSSMatrix?r=n.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),t==="y"&&(e.WebKitCSSMatrix?r=n.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function tt(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function Te(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function k(){const i=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let e=1;e<arguments.length;e+=1){const s=e<0||arguments.length<=e?void 0:arguments[e];if(s!=null&&!Te(s)){const r=Object.keys(Object(s)).filter(n=>t.indexOf(n)<0);for(let n=0,l=r.length;n<l;n+=1){const o=r[n],a=Object.getOwnPropertyDescriptor(s,o);a!==void 0&&a.enumerable&&(tt(i[o])&&tt(s[o])?s[o].__swiper__?i[o]=s[o]:k(i[o],s[o]):!tt(i[o])&&tt(s[o])?(i[o]={},s[o].__swiper__?i[o]=s[o]:k(i[o],s[o])):i[o]=s[o])}}}return i}function et(i,t,e){i.style.setProperty(t,e)}function Ft(i){let{swiper:t,targetPosition:e,side:s}=i;const r=_(),n=-t.translate;let l=null,o;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(t.cssModeFrameID);const f=e>n?"next":"prev",h=(y,m)=>f==="next"&&y>=m||f==="prev"&&y<=m,g=()=>{o=new Date().getTime(),l===null&&(l=o);const y=Math.max(Math.min((o-l)/a,1),0),m=.5-Math.cos(y*Math.PI)/2;let p=n+m*(e-n);if(h(p,e)&&(p=e),t.wrapperEl.scrollTo({[s]:p}),h(p,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[s]:p})}),r.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=r.requestAnimationFrame(g)};g()}function D(i,t){return t===void 0&&(t=""),[...i.children].filter(e=>e.matches(t))}function Rt(i,t){t===void 0&&(t=[]);const e=document.createElement(i);return e.classList.add(...Array.isArray(t)?t:[t]),e}function Ee(i){const t=_(),e=N(),s=i.getBoundingClientRect(),r=e.body,n=i.clientTop||r.clientTop||0,l=i.clientLeft||r.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,a=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-n,left:s.left+a-l}}function Ae(i,t){const e=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function Ce(i,t){const e=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function B(i,t){return _().getComputedStyle(i,null).getPropertyValue(t)}function nt(i){let t=i,e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function rt(i,t){const e=[];let s=i.parentElement;for(;s;)t?s.matches(t)&&e.push(s):e.push(s),s=s.parentElement;return e}function wt(i,t,e){const s=_();return e?i[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let ct;function Le(){const i=_(),t=N();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&t instanceof i.DocumentTouch)}}function jt(){return ct||(ct=Le()),ct}let ut;function Pe(i){let{userAgent:t}=i===void 0?{}:i;const e=jt(),s=_(),r=s.navigator.platform,n=t||s.navigator.userAgent,l={ios:!1,android:!1},o=s.screen.width,a=s.screen.height,f=n.match(/(Android);?[\s\/]+([\d.]+)?/);let h=n.match(/(iPad).*OS\s([\d_]+)/);const g=n.match(/(iPod)(.*OS\s([\d_]+))?/),y=!h&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let p=r==="MacIntel";const u=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&p&&e.touch&&u.indexOf(`${o}x${a}`)>=0&&(h=n.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),p=!1),f&&!m&&(l.os="android",l.android=!0),(h||y||g)&&(l.os="ios",l.ios=!0),l}function Me(i){return i===void 0&&(i={}),ut||(ut=Pe(i)),ut}let pt;function $e(){const i=_();let t=!1;function e(){const s=i.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(e()){const s=String(i.navigator.userAgent);if(s.includes("Version/")){const[r,n]=s.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));t=r<16||r===16&&n<2}}return{isSafari:t||e(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function Ie(){return pt||(pt=$e()),pt}function _e(i){let{swiper:t,on:e,emit:s}=i;const r=_();let n=null,l=null;const o=()=>{!t||t.destroyed||!t.initialized||(s("beforeResize"),s("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(n=new ResizeObserver(g=>{l=r.requestAnimationFrame(()=>{const{width:y,height:m}=t;let p=y,u=m;g.forEach(b=>{let{contentBoxSize:v,contentRect:d,target:c}=b;c&&c!==t.el||(p=d?d.width:(v[0]||v).inlineSize,u=d?d.height:(v[0]||v).blockSize)}),(p!==y||u!==m)&&o()})}),n.observe(t.el))},f=()=>{l&&r.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null)},h=()=>{!t||t.destroyed||!t.initialized||s("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",h)}),e("destroy",()=>{f(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",h)})}function Oe(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n=[],l=_(),o=function(h,g){g===void 0&&(g={});const y=l.MutationObserver||l.WebkitMutationObserver,m=new y(p=>{if(t.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const u=function(){r("observerUpdate",p[0])};l.requestAnimationFrame?l.requestAnimationFrame(u):l.setTimeout(u,0)});m.observe(h,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:typeof g.childList>"u"?!0:g.childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),n.push(m)},a=()=>{if(t.params.observer){if(t.params.observeParents){const h=rt(t.hostEl);for(let g=0;g<h.length;g+=1)o(h[g])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},f=()=>{n.forEach(h=>{h.disconnect()}),n.splice(0,n.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",a),s("destroy",f)}var ke={on(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const r=e?"unshift":"push";return i.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][r](t)}),s},once(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function r(){s.off(i,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];t.apply(s,l)}return r.__emitterProxy=t,s.on(i,r,e)},onAny(i,t){const e=this;if(!e.eventsListeners||e.destroyed||typeof i!="function")return e;const s=t?"unshift":"push";return e.eventsAnyListeners.indexOf(i)<0&&e.eventsAnyListeners[s](i),e},offAny(i){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const e=t.eventsAnyListeners.indexOf(i);return e>=0&&t.eventsAnyListeners.splice(e,1),t},off(i,t){const e=this;return!e.eventsListeners||e.destroyed||!e.eventsListeners||i.split(" ").forEach(s=>{typeof t>"u"?e.eventsListeners[s]=[]:e.eventsListeners[s]&&e.eventsListeners[s].forEach((r,n)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&e.eventsListeners[s].splice(n,1)})}),e},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let t,e,s;for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return typeof n[0]=="string"||Array.isArray(n[0])?(t=n[0],e=n.slice(1,n.length),s=i):(t=n[0].events,e=n[0].data,s=n[0].context||i),e.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(f=>{f.apply(s,[a,...e])}),i.eventsListeners&&i.eventsListeners[a]&&i.eventsListeners[a].forEach(f=>{f.apply(s,e)})}),i}};function ze(){const i=this;let t,e;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?t=i.params.width:t=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?e=i.params.height:e=s.clientHeight,!(t===0&&i.isHorizontal()||e===0&&i.isVertical())&&(t=t-parseInt(B(s,"padding-left")||0,10)-parseInt(B(s,"padding-right")||0,10),e=e-parseInt(B(s,"padding-top")||0,10)-parseInt(B(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(e)&&(e=0),Object.assign(i,{width:t,height:e,size:i.isHorizontal()?t:e}))}function He(){const i=this;function t(S){return i.isHorizontal()?S:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[S]}function e(S,E){return parseFloat(S.getPropertyValue(t(E))||0)}const s=i.params,{wrapperEl:r,slidesEl:n,size:l,rtlTranslate:o,wrongRTL:a}=i,f=i.virtual&&s.virtual.enabled,h=f?i.virtual.slides.length:i.slides.length,g=D(n,`.${i.params.slideClass}, swiper-slide`),y=f?i.virtual.slides.length:g.length;let m=[];const p=[],u=[];let b=s.slidesOffsetBefore;typeof b=="function"&&(b=s.slidesOffsetBefore.call(i));let v=s.slidesOffsetAfter;typeof v=="function"&&(v=s.slidesOffsetAfter.call(i));const d=i.snapGrid.length,c=i.slidesGrid.length;let w=s.spaceBetween,x=-b,C=0,L=0;if(typeof l>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*l:typeof w=="string"&&(w=parseFloat(w)),i.virtualSize=-w,g.forEach(S=>{o?S.style.marginLeft="":S.style.marginRight="",S.style.marginBottom="",S.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(et(r,"--swiper-centered-offset-before",""),et(r,"--swiper-centered-offset-after",""));const M=s.grid&&s.grid.rows>1&&i.grid;M&&i.grid.initSlides(y);let A;const O=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(S=>typeof s.breakpoints[S].slidesPerView<"u").length>0;for(let S=0;S<y;S+=1){A=0;let E;if(g[S]&&(E=g[S]),M&&i.grid.updateSlide(S,E,y,t),!(g[S]&&B(E,"display")==="none")){if(s.slidesPerView==="auto"){O&&(g[S].style[t("width")]="");const T=getComputedStyle(E),P=E.style.transform,$=E.style.webkitTransform;if(P&&(E.style.transform="none"),$&&(E.style.webkitTransform="none"),s.roundLengths)A=i.isHorizontal()?wt(E,"width",!0):wt(E,"height",!0);else{const q=e(T,"width"),te=e(T,"padding-left"),ee=e(T,"padding-right"),Et=e(T,"margin-left"),At=e(T,"margin-right"),Ct=T.getPropertyValue("box-sizing");if(Ct&&Ct==="border-box")A=q+Et+At;else{const{clientWidth:ie,offsetWidth:se}=E;A=q+te+ee+Et+At+(se-ie)}}P&&(E.style.transform=P),$&&(E.style.webkitTransform=$),s.roundLengths&&(A=Math.floor(A))}else A=(l-(s.slidesPerView-1)*w)/s.slidesPerView,s.roundLengths&&(A=Math.floor(A)),g[S]&&(g[S].style[t("width")]=`${A}px`);g[S]&&(g[S].swiperSlideSize=A),u.push(A),s.centeredSlides?(x=x+A/2+C/2+w,C===0&&S!==0&&(x=x-l/2-w),S===0&&(x=x-l/2-w),Math.abs(x)<1/1e3&&(x=0),s.roundLengths&&(x=Math.floor(x)),L%s.slidesPerGroup===0&&m.push(x),p.push(x)):(s.roundLengths&&(x=Math.floor(x)),(L-Math.min(i.params.slidesPerGroupSkip,L))%i.params.slidesPerGroup===0&&m.push(x),p.push(x),x=x+A+w),i.virtualSize+=A+w,C=A,L+=1}}if(i.virtualSize=Math.max(i.virtualSize,l)+v,o&&a&&(s.effect==="slide"||s.effect==="coverflow")&&(r.style.width=`${i.virtualSize+w}px`),s.setWrapperSize&&(r.style[t("width")]=`${i.virtualSize+w}px`),M&&i.grid.updateWrapperSize(A,m,t),!s.centeredSlides){const S=[];for(let E=0;E<m.length;E+=1){let T=m[E];s.roundLengths&&(T=Math.floor(T)),m[E]<=i.virtualSize-l&&S.push(T)}m=S,Math.floor(i.virtualSize-l)-Math.floor(m[m.length-1])>1&&m.push(i.virtualSize-l)}if(f&&s.loop){const S=u[0]+w;if(s.slidesPerGroup>1){const E=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/s.slidesPerGroup),T=S*s.slidesPerGroup;for(let P=0;P<E;P+=1)m.push(m[m.length-1]+T)}for(let E=0;E<i.virtual.slidesBefore+i.virtual.slidesAfter;E+=1)s.slidesPerGroup===1&&m.push(m[m.length-1]+S),p.push(p[p.length-1]+S),i.virtualSize+=S}if(m.length===0&&(m=[0]),w!==0){const S=i.isHorizontal()&&o?"marginLeft":t("marginRight");g.filter((E,T)=>!s.cssMode||s.loop?!0:T!==g.length-1).forEach(E=>{E.style[S]=`${w}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let S=0;u.forEach(T=>{S+=T+(w||0)}),S-=w;const E=S-l;m=m.map(T=>T<=0?-b:T>E?E+v:T)}if(s.centerInsufficientSlides){let S=0;if(u.forEach(E=>{S+=E+(w||0)}),S-=w,S<l){const E=(l-S)/2;m.forEach((T,P)=>{m[P]=T-E}),p.forEach((T,P)=>{p[P]=T+E})}}if(Object.assign(i,{slides:g,snapGrid:m,slidesGrid:p,slidesSizesGrid:u}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){et(r,"--swiper-centered-offset-before",`${-m[0]}px`),et(r,"--swiper-centered-offset-after",`${i.size/2-u[u.length-1]/2}px`);const S=-i.snapGrid[0],E=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(T=>T+S),i.slidesGrid=i.slidesGrid.map(T=>T+E)}if(y!==h&&i.emit("slidesLengthChange"),m.length!==d&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),p.length!==c&&i.emit("slidesGridLengthChange"),s.watchSlidesProgress&&i.updateSlidesOffset(),!f&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const S=`${s.containerModifierClass}backface-hidden`,E=i.el.classList.contains(S);y<=s.maxBackfaceHiddenSlides?E||i.el.classList.add(S):E&&i.el.classList.remove(S)}}function De(i){const t=this,e=[],s=t.virtual&&t.params.virtual.enabled;let r=0,n;typeof i=="number"?t.setTransition(i):i===!0&&t.setTransition(t.params.speed);const l=o=>s?t.slides[t.getSlideIndexByData(o)]:t.slides[o];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(o=>{e.push(o)});else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const o=t.activeIndex+n;if(o>t.slides.length&&!s)break;e.push(l(o))}else e.push(l(t.activeIndex));for(n=0;n<e.length;n+=1)if(typeof e[n]<"u"){const o=e[n].offsetHeight;r=o>r?o:r}(r||r===0)&&(t.wrapperEl.style.height=`${r}px`)}function qe(){const i=this,t=i.slides,e=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(i.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-e-i.cssOverflowAdjustment()}function Ne(i){i===void 0&&(i=this&&this.translate||0);const t=this,e=t.params,{slides:s,rtlTranslate:r,snapGrid:n}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let l=-i;r&&(l=i),s.forEach(a=>{a.classList.remove(e.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let o=e.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*t.size:typeof o=="string"&&(o=parseFloat(o));for(let a=0;a<s.length;a+=1){const f=s[a];let h=f.swiperSlideOffset;e.cssMode&&e.centeredSlides&&(h-=s[0].swiperSlideOffset);const g=(l+(e.centeredSlides?t.minTranslate():0)-h)/(f.swiperSlideSize+o),y=(l-n[0]+(e.centeredSlides?t.minTranslate():0)-h)/(f.swiperSlideSize+o),m=-(l-h),p=m+t.slidesSizesGrid[a];(m>=0&&m<t.size-1||p>1&&p<=t.size||m<=0&&p>=t.size)&&(t.visibleSlides.push(f),t.visibleSlidesIndexes.push(a),s[a].classList.add(e.slideVisibleClass)),f.progress=r?-g:g,f.originalProgress=r?-y:y}}function Ge(i){const t=this;if(typeof i>"u"){const h=t.rtlTranslate?-1:1;i=t&&t.translate&&t.translate*h||0}const e=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:n,isEnd:l,progressLoop:o}=t;const a=n,f=l;if(s===0)r=0,n=!0,l=!0;else{r=(i-t.minTranslate())/s;const h=Math.abs(i-t.minTranslate())<1,g=Math.abs(i-t.maxTranslate())<1;n=h||r<=0,l=g||r>=1,h&&(r=0),g&&(r=1)}if(e.loop){const h=t.getSlideIndexByData(0),g=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[h],m=t.slidesGrid[g],p=t.slidesGrid[t.slidesGrid.length-1],u=Math.abs(i);u>=y?o=(u-y)/p:o=(u+p-m)/p,o>1&&(o-=1)}Object.assign(t,{progress:r,progressLoop:o,isBeginning:n,isEnd:l}),(e.watchSlidesProgress||e.centeredSlides&&e.autoHeight)&&t.updateSlidesProgress(i),n&&!a&&t.emit("reachBeginning toEdge"),l&&!f&&t.emit("reachEnd toEdge"),(a&&!n||f&&!l)&&t.emit("fromEdge"),t.emit("progress",r)}function Be(){const i=this,{slides:t,params:e,slidesEl:s,activeIndex:r}=i,n=i.virtual&&e.virtual.enabled,l=a=>D(s,`.${e.slideClass}${a}, swiper-slide${a}`)[0];t.forEach(a=>{a.classList.remove(e.slideActiveClass,e.slideNextClass,e.slidePrevClass)});let o;if(n)if(e.loop){let a=r-i.virtual.slidesBefore;a<0&&(a=i.virtual.slides.length+a),a>=i.virtual.slides.length&&(a-=i.virtual.slides.length),o=l(`[data-swiper-slide-index="${a}"]`)}else o=l(`[data-swiper-slide-index="${r}"]`);else o=t[r];if(o){o.classList.add(e.slideActiveClass);let a=Ce(o,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!a&&(a=t[0]),a&&a.classList.add(e.slideNextClass);let f=Ae(o,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!f===0&&(f=t[t.length-1]),f&&f.classList.add(e.slidePrevClass)}i.emitSlidesClasses()}const it=(i,t)=>{if(!i||i.destroyed||!i.params)return;const e=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=t.closest(e());if(s){let r=s.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(r=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`)),r&&r.remove()}},ft=(i,t)=>{if(!i.slides[t])return;const e=i.slides[t].querySelector('[loading="lazy"]');e&&e.removeAttribute("loading")},yt=i=>{if(!i||i.destroyed||!i.params)return;let t=i.params.lazyPreloadPrevNext;const e=i.slides.length;if(!e||!t||t<0)return;t=Math.min(t,e);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const l=r,o=[l-t];o.push(...Array.from({length:t}).map((a,f)=>l+s+f)),i.slides.forEach((a,f)=>{o.includes(a.column)&&ft(i,f)});return}const n=r+s-1;if(i.params.rewind||i.params.loop)for(let l=r-t;l<=n+t;l+=1){const o=(l%e+e)%e;(o<r||o>n)&&ft(i,o)}else for(let l=Math.max(r-t,0);l<=Math.min(n+t,e-1);l+=1)l!==r&&(l>n||l<r)&&ft(i,l)};function Ve(i){const{slidesGrid:t,params:e}=i,s=i.rtlTranslate?i.translate:-i.translate;let r;for(let n=0;n<t.length;n+=1)typeof t[n+1]<"u"?s>=t[n]&&s<t[n+1]-(t[n+1]-t[n])/2?r=n:s>=t[n]&&s<t[n+1]&&(r=n+1):s>=t[n]&&(r=n);return e.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Fe(i){const t=this,e=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let a=i,f;const h=y=>{let m=y-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof a>"u"&&(a=Ve(t)),s.indexOf(e)>=0)f=s.indexOf(e);else{const y=Math.min(r.slidesPerGroupSkip,a);f=y+Math.floor((a-y)/r.slidesPerGroup)}if(f>=s.length&&(f=s.length-1),a===n){f!==o&&(t.snapIndex=f,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=h(a));return}let g;t.virtual&&r.virtual.enabled&&r.loop?g=h(a):t.slides[a]?g=parseInt(t.slides[a].getAttribute("data-swiper-slide-index")||a,10):g=a,Object.assign(t,{previousSnapIndex:o,snapIndex:f,previousRealIndex:l,realIndex:g,previousIndex:n,activeIndex:a}),t.initialized&&yt(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==g&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function Re(i){const t=this,e=t.params,s=i.closest(`.${e.slideClass}, swiper-slide`);let r=!1,n;if(s){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===s){r=!0,n=l;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=n;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}e.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var je={updateSize:ze,updateSlides:He,updateAutoHeight:De,updateSlidesOffset:qe,updateSlidesProgress:Ne,updateProgress:Ge,updateSlidesClasses:Be,updateActiveIndex:Fe,updateClickedSlide:Re};function We(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const t=this,{params:e,rtlTranslate:s,translate:r,wrapperEl:n}=t;if(e.virtualTranslate)return s?-r:r;if(e.cssMode)return r;let l=Se(n,i);return l+=t.cssOverflowAdjustment(),s&&(l=-l),l||0}function Xe(i,t){const e=this,{rtlTranslate:s,params:r,wrapperEl:n,progress:l}=e;let o=0,a=0;const f=0;e.isHorizontal()?o=s?-i:i:a=i,r.roundLengths&&(o=Math.floor(o),a=Math.floor(a)),e.previousTranslate=e.translate,e.translate=e.isHorizontal()?o:a,r.cssMode?n[e.isHorizontal()?"scrollLeft":"scrollTop"]=e.isHorizontal()?-o:-a:r.virtualTranslate||(e.isHorizontal()?o-=e.cssOverflowAdjustment():a-=e.cssOverflowAdjustment(),n.style.transform=`translate3d(${o}px, ${a}px, ${f}px)`);let h;const g=e.maxTranslate()-e.minTranslate();g===0?h=0:h=(i-e.minTranslate())/g,h!==l&&e.updateProgress(i),e.emit("setTranslate",e.translate,t)}function Ye(){return-this.snapGrid[0]}function Ue(){return-this.snapGrid[this.snapGrid.length-1]}function Ke(i,t,e,s,r){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),s===void 0&&(s=!0);const n=this,{params:l,wrapperEl:o}=n;if(n.animating&&l.preventInteractionOnTransition)return!1;const a=n.minTranslate(),f=n.maxTranslate();let h;if(s&&i>a?h=a:s&&i<f?h=f:h=i,n.updateProgress(h),l.cssMode){const g=n.isHorizontal();if(t===0)o[g?"scrollLeft":"scrollTop"]=-h;else{if(!n.support.smoothScroll)return Ft({swiper:n,targetPosition:-h,side:g?"left":"top"}),!0;o.scrollTo({[g?"left":"top"]:-h,behavior:"smooth"})}return!0}return t===0?(n.setTransition(0),n.setTranslate(h),e&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(h),e&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(y){!n||n.destroyed||y.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,e&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Ze={getTranslate:We,setTranslate:Xe,minTranslate:Ye,maxTranslate:Ue,translateTo:Ke};function Qe(i,t){const e=this;e.params.cssMode||(e.wrapperEl.style.transitionDuration=`${i}ms`,e.wrapperEl.style.transitionDelay=i===0?"0ms":""),e.emit("setTransition",i,t)}function Wt(i){let{swiper:t,runCallbacks:e,direction:s,step:r}=i;const{activeIndex:n,previousIndex:l}=t;let o=s;if(o||(n>l?o="next":n<l?o="prev":o="reset"),t.emit(`transition${r}`),e&&n!==l){if(o==="reset"){t.emit(`slideResetTransition${r}`);return}t.emit(`slideChangeTransition${r}`),o==="next"?t.emit(`slideNextTransition${r}`):t.emit(`slidePrevTransition${r}`)}}function Je(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;s.cssMode||(s.autoHeight&&e.updateAutoHeight(),Wt({swiper:e,runCallbacks:i,direction:t,step:"Start"}))}function ti(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;e.animating=!1,!s.cssMode&&(e.setTransition(0),Wt({swiper:e,runCallbacks:i,direction:t,step:"End"}))}var ei={setTransition:Qe,transitionStart:Je,transitionEnd:ti};function ii(i,t,e,s,r){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this;let l=i;l<0&&(l=0);const{params:o,snapGrid:a,slidesGrid:f,previousIndex:h,activeIndex:g,rtlTranslate:y,wrapperEl:m,enabled:p}=n;if(n.animating&&o.preventInteractionOnTransition||!p&&!s&&!r)return!1;const u=Math.min(n.params.slidesPerGroupSkip,l);let b=u+Math.floor((l-u)/n.params.slidesPerGroup);b>=a.length&&(b=a.length-1);const v=-a[b];if(o.normalizeSlideIndex)for(let c=0;c<f.length;c+=1){const w=-Math.floor(v*100),x=Math.floor(f[c]*100),C=Math.floor(f[c+1]*100);typeof f[c+1]<"u"?w>=x&&w<C-(C-x)/2?l=c:w>=x&&w<C&&(l=c+1):w>=x&&(l=c)}if(n.initialized&&l!==g&&(!n.allowSlideNext&&(y?v>n.translate&&v>n.minTranslate():v<n.translate&&v<n.minTranslate())||!n.allowSlidePrev&&v>n.translate&&v>n.maxTranslate()&&(g||0)!==l))return!1;l!==(h||0)&&e&&n.emit("beforeSlideChangeStart"),n.updateProgress(v);let d;if(l>g?d="next":l<g?d="prev":d="reset",y&&-v===n.translate||!y&&v===n.translate)return n.updateActiveIndex(l),o.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),o.effect!=="slide"&&n.setTranslate(v),d!=="reset"&&(n.transitionStart(e,d),n.transitionEnd(e,d)),!1;if(o.cssMode){const c=n.isHorizontal(),w=y?v:-v;if(t===0){const x=n.virtual&&n.params.virtual.enabled;x&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),x&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[c?"scrollLeft":"scrollTop"]=w})):m[c?"scrollLeft":"scrollTop"]=w,x&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return Ft({swiper:n,targetPosition:w,side:c?"left":"top"}),!0;m.scrollTo({[c?"left":"top"]:w,behavior:"smooth"})}return!0}return n.setTransition(t),n.setTranslate(v),n.updateActiveIndex(l),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(e,d),t===0?n.transitionEnd(e,d):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(w){!n||n.destroyed||w.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(e,d))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function si(i,t,e,s){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;let n=i;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?n=n+r.virtual.slidesBefore:n=r.getSlideIndexByData(n)),r.slideTo(n,t,e,s)}function ni(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{enabled:r,params:n,animating:l}=s;if(!r)return s;let o=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(o=Math.max(s.slidesPerViewDynamic("current",!0),1));const a=s.activeIndex<n.slidesPerGroupSkip?1:o,f=s.virtual&&n.virtual.enabled;if(n.loop){if(l&&!f&&n.loopPreventsSliding)return!1;s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft}return n.rewind&&s.isEnd?s.slideTo(0,i,t,e):s.slideTo(s.activeIndex+a,i,t,e)}function ri(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{params:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:a,animating:f}=s;if(!a)return s;const h=s.virtual&&r.virtual.enabled;if(r.loop){if(f&&!h&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const g=o?s.translate:-s.translate;function y(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const m=y(g),p=n.map(v=>y(v));let u=n[p.indexOf(m)-1];if(typeof u>"u"&&r.cssMode){let v;n.forEach((d,c)=>{m>=d&&(v=c)}),typeof v<"u"&&(u=n[v>0?v-1:v])}let b=0;if(typeof u<"u"&&(b=l.indexOf(u),b<0&&(b=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(b=b-s.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),r.rewind&&s.isBeginning){const v=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(v,i,t,e)}return s.slideTo(b,i,t,e)}function ai(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this;return s.slideTo(s.activeIndex,i,t,e)}function li(i,t,e,s){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=.5);const r=this;let n=r.activeIndex;const l=Math.min(r.params.slidesPerGroupSkip,n),o=l+Math.floor((n-l)/r.params.slidesPerGroup),a=r.rtlTranslate?r.translate:-r.translate;if(a>=r.snapGrid[o]){const f=r.snapGrid[o],h=r.snapGrid[o+1];a-f>(h-f)*s&&(n+=r.params.slidesPerGroup)}else{const f=r.snapGrid[o-1],h=r.snapGrid[o];a-f<=(h-f)*s&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,i,t,e)}function oi(){const i=this,{params:t,slidesEl:e}=i,s=t.slidesPerView==="auto"?i.slidesPerViewDynamic():t.slidesPerView;let r=i.clickedIndex,n;const l=i.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(i.animating)return;n=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<i.loopedSlides-s/2||r>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),r=i.getSlideIndex(D(e,`${l}[data-swiper-slide-index="${n}"]`)[0]),bt(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-s?(i.loopFix(),r=i.getSlideIndex(D(e,`${l}[data-swiper-slide-index="${n}"]`)[0]),bt(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var di={slideTo:ii,slideToLoop:si,slideNext:ni,slidePrev:ri,slideReset:ai,slideToClosest:li,slideToClickedSlide:oi};function ci(i){const t=this,{params:e,slidesEl:s}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;D(s,`.${e.slideClass}, swiper-slide`).forEach((n,l)=>{n.setAttribute("data-swiper-slide-index",l)}),t.loopFix({slideRealIndex:i,direction:e.centeredSlides?void 0:"next"})}function ui(i){let{slideRealIndex:t,slideTo:e=!0,direction:s,setTranslate:r,activeSlideIndex:n,byController:l,byMousewheel:o}=i===void 0?{}:i;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:f,allowSlidePrev:h,allowSlideNext:g,slidesEl:y,params:m}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&m.virtual.enabled){e&&(!m.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):m.centeredSlides&&a.snapIndex<m.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=h,a.allowSlideNext=g,a.emit("loopFix");return}const p=m.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(m.slidesPerView,10));let u=m.loopedSlides||p;u%m.slidesPerGroup!==0&&(u+=m.slidesPerGroup-u%m.slidesPerGroup),a.loopedSlides=u;const b=[],v=[];let d=a.activeIndex;typeof n>"u"?n=a.getSlideIndex(a.slides.filter(L=>L.classList.contains(m.slideActiveClass))[0]):d=n;const c=s==="next"||!s,w=s==="prev"||!s;let x=0,C=0;if(n<u){x=Math.max(u-n,m.slidesPerGroup);for(let L=0;L<u-n;L+=1){const M=L-Math.floor(L/f.length)*f.length;b.push(f.length-M-1)}}else if(n>a.slides.length-u*2){C=Math.max(n-(a.slides.length-u*2),m.slidesPerGroup);for(let L=0;L<C;L+=1){const M=L-Math.floor(L/f.length)*f.length;v.push(M)}}if(w&&b.forEach(L=>{a.slides[L].swiperLoopMoveDOM=!0,y.prepend(a.slides[L]),a.slides[L].swiperLoopMoveDOM=!1}),c&&v.forEach(L=>{a.slides[L].swiperLoopMoveDOM=!0,y.append(a.slides[L]),a.slides[L].swiperLoopMoveDOM=!1}),a.recalcSlides(),m.slidesPerView==="auto"&&a.updateSlides(),m.watchSlidesProgress&&a.updateSlidesOffset(),e){if(b.length>0&&w)if(typeof t>"u"){const L=a.slidesGrid[d],A=a.slidesGrid[d+x]-L;o?a.setTranslate(a.translate-A):(a.slideTo(d+x,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=A,a.touchEventsData.currentTranslate=a.translate))}else r&&(a.slideToLoop(t,0,!1,!0),a.touchEventsData.currentTranslate=a.translate);else if(v.length>0&&c)if(typeof t>"u"){const L=a.slidesGrid[d],A=a.slidesGrid[d-C]-L;o?a.setTranslate(a.translate-A):(a.slideTo(d-C,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=A,a.touchEventsData.currentTranslate=a.translate))}else a.slideToLoop(t,0,!1,!0)}if(a.allowSlidePrev=h,a.allowSlideNext=g,a.controller&&a.controller.control&&!l){const L={slideRealIndex:t,direction:s,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...L,slideTo:M.params.slidesPerView===m.slidesPerView?e:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...L,slideTo:a.controller.control.params.slidesPerView===m.slidesPerView?e:!1})}a.emit("loopFix")}function pi(){const i=this,{params:t,slidesEl:e}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[n]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{e.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var fi={loopCreate:ci,loopFix:ui,loopDestroy:pi};function hi(i){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const e=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),e.style.cursor="move",e.style.cursor=i?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function mi(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var vi={setGrabCursor:hi,unsetGrabCursor:mi};function gi(i,t){t===void 0&&(t=this);function e(s){if(!s||s===N()||s===_())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(i);return!r&&!s.getRootNode?null:r||e(s.getRootNode().host)}return e(t)}function bi(i){const t=this,e=N(),s=_(),r=t.touchEventsData;r.evCache.push(i);const{params:n,touches:l,enabled:o}=t;if(!o||!n.simulateTouch&&i.pointerType==="mouse"||t.animating&&n.preventInteractionOnTransition)return;!t.animating&&n.cssMode&&n.loop&&t.loopFix();let a=i;a.originalEvent&&(a=a.originalEvent);let f=a.target;if(n.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(f)||"which"in a&&a.which===3||"button"in a&&a.button>0||r.isTouched&&r.isMoved)return;const h=!!n.noSwipingClass&&n.noSwipingClass!=="",g=i.composedPath?i.composedPath():i.path;h&&a.target&&a.target.shadowRoot&&g&&(f=g[0]);const y=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,m=!!(a.target&&a.target.shadowRoot);if(n.noSwiping&&(m?gi(y,f):f.closest(y))){t.allowClick=!0;return}if(n.swipeHandler&&!f.closest(n.swipeHandler))return;l.currentX=a.pageX,l.currentY=a.pageY;const p=l.currentX,u=l.currentY,b=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,v=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(b&&(p<=v||p>=s.innerWidth-v))if(b==="prevent")i.preventDefault();else return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=p,l.startY=u,r.touchStartTime=st(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let d=!0;f.matches(r.focusableElements)&&(d=!1,f.nodeName==="SELECT"&&(r.isTouched=!1)),e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==f&&e.activeElement.blur();const c=d&&t.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||c)&&!f.isContentEditable&&a.preventDefault(),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.animating&&!n.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function wi(i){const t=N(),e=this,s=e.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=e;if(!o||!r.simulateTouch&&i.pointerType==="mouse")return;let a=i;if(a.originalEvent&&(a=a.originalEvent),!s.isTouched){s.startMoving&&s.isScrolling&&e.emit("touchMoveOpposite",a);return}const f=s.evCache.findIndex(C=>C.pointerId===a.pointerId);f>=0&&(s.evCache[f]=a);const h=s.evCache.length>1?s.evCache[0]:a,g=h.pageX,y=h.pageY;if(a.preventedByNestedSwiper){n.startX=g,n.startY=y;return}if(!e.allowTouchMove){a.target.matches(s.focusableElements)||(e.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:g,startY:y,prevX:e.touches.currentX,prevY:e.touches.currentY,currentX:g,currentY:y}),s.touchStartTime=st());return}if(r.touchReleaseOnEdges&&!r.loop){if(e.isVertical()){if(y<n.startY&&e.translate<=e.maxTranslate()||y>n.startY&&e.translate>=e.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(g<n.startX&&e.translate<=e.maxTranslate()||g>n.startX&&e.translate>=e.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(s.focusableElements)){s.isMoved=!0,e.allowClick=!1;return}if(s.allowTouchCallbacks&&e.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;n.currentX=g,n.currentY=y;const m=n.currentX-n.startX,p=n.currentY-n.startY;if(e.params.threshold&&Math.sqrt(m**2+p**2)<e.params.threshold)return;if(typeof s.isScrolling>"u"){let C;e.isHorizontal()&&n.currentY===n.startY||e.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:m*m+p*p>=25&&(C=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,s.isScrolling=e.isHorizontal()?C>r.touchAngle:90-C>r.touchAngle)}if(s.isScrolling&&e.emit("touchMoveOpposite",a),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||e.zoom&&e.params.zoom&&e.params.zoom.enabled&&s.evCache.length>1){s.isTouched=!1;return}if(!s.startMoving)return;e.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation();let u=e.isHorizontal()?m:p,b=e.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(u=Math.abs(u)*(l?1:-1),b=Math.abs(b)*(l?1:-1)),n.diff=u,u*=r.touchRatio,l&&(u=-u,b=-b);const v=e.touchesDirection;e.swipeDirection=u>0?"prev":"next",e.touchesDirection=b>0?"prev":"next";const d=e.params.loop&&!r.cssMode;if(!s.isMoved){if(d&&e.loopFix({direction:e.swipeDirection}),s.startTranslate=e.getTranslate(),e.setTransition(0),e.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(C)}s.allowMomentumBounce=!1,r.grabCursor&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!0),e.emit("sliderFirstMove",a)}let c;s.isMoved&&v!==e.touchesDirection&&d&&Math.abs(u)>=1&&(e.loopFix({direction:e.swipeDirection,setTranslate:!0}),c=!0),e.emit("sliderMove",a),s.isMoved=!0,s.currentTranslate=u+s.startTranslate;let w=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),u>0?(d&&!c&&s.currentTranslate>(r.centeredSlides?e.minTranslate()-e.size/2:e.minTranslate())&&e.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>e.minTranslate()&&(w=!1,r.resistance&&(s.currentTranslate=e.minTranslate()-1+(-e.minTranslate()+s.startTranslate+u)**x))):u<0&&(d&&!c&&s.currentTranslate<(r.centeredSlides?e.maxTranslate()+e.size/2:e.maxTranslate())&&e.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:e.slides.length-(r.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<e.maxTranslate()&&(w=!1,r.resistance&&(s.currentTranslate=e.maxTranslate()+1-(e.maxTranslate()-s.startTranslate-u)**x))),w&&(a.preventedByNestedSwiper=!0),!e.allowSlideNext&&e.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&e.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&!e.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(u)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=e.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&e.freeMode||r.watchSlidesProgress)&&(e.updateActiveIndex(),e.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.freeMode.onTouchMove(),e.updateProgress(s.currentTranslate),e.setTranslate(s.currentTranslate))}function yi(i){const t=this,e=t.touchEventsData,s=e.evCache.findIndex(c=>c.pointerId===i.pointerId);if(s>=0&&e.evCache.splice(s,1),["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:r,touches:n,rtlTranslate:l,slidesGrid:o,enabled:a}=t;if(!a||!r.simulateTouch&&i.pointerType==="mouse")return;let f=i;if(f.originalEvent&&(f=f.originalEvent),e.allowTouchCallbacks&&t.emit("touchEnd",f),e.allowTouchCallbacks=!1,!e.isTouched){e.isMoved&&r.grabCursor&&t.setGrabCursor(!1),e.isMoved=!1,e.startMoving=!1;return}r.grabCursor&&e.isMoved&&e.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const h=st(),g=h-e.touchStartTime;if(t.allowClick){const c=f.path||f.composedPath&&f.composedPath();t.updateClickedSlide(c&&c[0]||f.target),t.emit("tap click",f),g<300&&h-e.lastClickTime<300&&t.emit("doubleTap doubleClick",f)}if(e.lastClickTime=st(),bt(()=>{t.destroyed||(t.allowClick=!0)}),!e.isTouched||!e.isMoved||!t.swipeDirection||n.diff===0||e.currentTranslate===e.startTranslate){e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;return}e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;let y;if(r.followFinger?y=l?t.translate:-t.translate:y=-e.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:y});return}let m=0,p=t.slidesSizesGrid[0];for(let c=0;c<o.length;c+=c<r.slidesPerGroupSkip?1:r.slidesPerGroup){const w=c<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof o[c+w]<"u"?y>=o[c]&&y<o[c+w]&&(m=c,p=o[c+w]-o[c]):y>=o[c]&&(m=c,p=o[o.length-1]-o[o.length-2])}let u=null,b=null;r.rewind&&(t.isBeginning?b=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const v=(y-o[m])/p,d=m<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(g>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(v>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?u:m+d):t.slideTo(m)),t.swipeDirection==="prev"&&(v>1-r.longSwipesRatio?t.slideTo(m+d):b!==null&&v<0&&Math.abs(v)>r.longSwipesRatio?t.slideTo(b):t.slideTo(m))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(f.target===t.navigation.nextEl||f.target===t.navigation.prevEl)?f.target===t.navigation.nextEl?t.slideTo(m+d):t.slideTo(m):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:m+d),t.swipeDirection==="prev"&&t.slideTo(b!==null?b:m))}}function Pt(){const i=this,{params:t,el:e}=i;if(e&&e.offsetWidth===0)return;t.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:n}=i,l=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const o=l&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!o?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!l?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=s,i.params.watchOverflow&&n!==i.snapGrid&&i.checkOverflow()}function xi(i){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&i.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Si(){const i=this,{wrapperEl:t,rtlTranslate:e,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-t.scrollLeft:i.translate=-t.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const n=i.maxTranslate()-i.minTranslate();n===0?r=0:r=(i.translate-i.minTranslate())/n,r!==i.progress&&i.updateProgress(e?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function Ti(i){const t=this;it(t,i.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let Mt=!1;function Ei(){}const Xt=(i,t)=>{const e=N(),{params:s,el:r,wrapperEl:n,device:l}=i,o=!!s.nested,a=t==="on"?"addEventListener":"removeEventListener",f=t;r[a]("pointerdown",i.onTouchStart,{passive:!1}),e[a]("pointermove",i.onTouchMove,{passive:!1,capture:o}),e[a]("pointerup",i.onTouchEnd,{passive:!0}),e[a]("pointercancel",i.onTouchEnd,{passive:!0}),e[a]("pointerout",i.onTouchEnd,{passive:!0}),e[a]("pointerleave",i.onTouchEnd,{passive:!0}),e[a]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[a]("click",i.onClick,!0),s.cssMode&&n[a]("scroll",i.onScroll),s.updateOnWindowResize?i[f](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",Pt,!0):i[f]("observerUpdate",Pt,!0),r[a]("load",i.onLoad,{capture:!0})};function Ai(){const i=this,t=N(),{params:e}=i;i.onTouchStart=bi.bind(i),i.onTouchMove=wi.bind(i),i.onTouchEnd=yi.bind(i),e.cssMode&&(i.onScroll=Si.bind(i)),i.onClick=xi.bind(i),i.onLoad=Ti.bind(i),Mt||(t.addEventListener("touchstart",Ei),Mt=!0),Xt(i,"on")}function Ci(){Xt(this,"off")}var Li={attachEvents:Ai,detachEvents:Ci};const $t=(i,t)=>i.grid&&t.grid&&t.grid.rows>1;function Pi(){const i=this,{realIndex:t,initialized:e,params:s,el:r}=i,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const l=i.getBreakpoint(n,i.params.breakpointsBase,i.el);if(!l||i.currentBreakpoint===l)return;const a=(l in n?n[l]:void 0)||i.originalParams,f=$t(i,s),h=$t(i,a),g=s.enabled;f&&!h?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!f&&h&&(r.classList.add(`${s.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(u=>{if(typeof a[u]>"u")return;const b=s[u]&&s[u].enabled,v=a[u]&&a[u].enabled;b&&!v&&i[u].disable(),!b&&v&&i[u].enable()});const y=a.direction&&a.direction!==s.direction,m=s.loop&&(a.slidesPerView!==s.slidesPerView||y);y&&e&&i.changeDirection(),k(i.params,a);const p=i.params.enabled;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),g&&!p?i.disable():!g&&p&&i.enable(),i.currentBreakpoint=l,i.emit("_beforeBreakpoint",a),m&&e&&(i.loopDestroy(),i.loopCreate(t),i.updateSlides()),i.emit("breakpoint",a)}function Mi(i,t,e){if(t===void 0&&(t="window"),!i||t==="container"&&!e)return;let s=!1;const r=_(),n=t==="window"?r.innerHeight:e.clientHeight,l=Object.keys(i).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const a=parseFloat(o.substr(1));return{value:n*a,point:o}}return{value:o,point:o}});l.sort((o,a)=>parseInt(o.value,10)-parseInt(a.value,10));for(let o=0;o<l.length;o+=1){const{point:a,value:f}=l[o];t==="window"?r.matchMedia(`(min-width: ${f}px)`).matches&&(s=a):f<=e.clientWidth&&(s=a)}return s||"max"}var $i={setBreakpoint:Pi,getBreakpoint:Mi};function Ii(i,t){const e=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&e.push(t+r)}):typeof s=="string"&&e.push(t+s)}),e}function _i(){const i=this,{classNames:t,params:e,rtl:s,el:r,device:n}=i,l=Ii(["initialized",e.direction,{"free-mode":i.params.freeMode&&e.freeMode.enabled},{autoheight:e.autoHeight},{rtl:s},{grid:e.grid&&e.grid.rows>1},{"grid-column":e.grid&&e.grid.rows>1&&e.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":e.cssMode},{centered:e.cssMode&&e.centeredSlides},{"watch-progress":e.watchSlidesProgress}],e.containerModifierClass);t.push(...l),r.classList.add(...t),i.emitContainerClasses()}function Oi(){const i=this,{el:t,classNames:e}=i;t.classList.remove(...e),i.emitContainerClasses()}var ki={addClasses:_i,removeClasses:Oi};function zi(){const i=this,{isLocked:t,params:e}=i,{slidesOffsetBefore:s}=e;if(s){const r=i.slides.length-1,n=i.slidesGrid[r]+i.slidesSizesGrid[r]+s*2;i.isLocked=i.size>n}else i.isLocked=i.snapGrid.length===1;e.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),e.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),t&&t!==i.isLocked&&(i.isEnd=!1),t!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Hi={checkOverflow:zi},It={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Di(i,t){return function(s){s===void 0&&(s={});const r=Object.keys(s)[0],n=s[r];if(typeof n!="object"||n===null){k(t,s);return}if(["navigation","pagination","scrollbar"].indexOf(r)>=0&&i[r]===!0&&(i[r]={auto:!0}),!(r in i&&"enabled"in n)){k(t,s);return}i[r]===!0&&(i[r]={enabled:!0}),typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),k(t,s)}}const ht={eventsEmitter:ke,update:je,translate:Ze,transition:ei,slide:di,loop:fi,grabCursor:vi,events:Li,breakpoints:$i,checkOverflow:Hi,classes:ki},mt={};class z{constructor(){let t,e;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?e=r[0]:[t,e]=r,e||(e={}),e=k({},e),t&&!e.el&&(e.el=t);const l=N();if(e.el&&typeof e.el=="string"&&l.querySelectorAll(e.el).length>1){const h=[];return l.querySelectorAll(e.el).forEach(g=>{const y=k({},e,{el:g});h.push(new z(y))}),h}const o=this;o.__swiper__=!0,o.support=jt(),o.device=Me({userAgent:e.userAgent}),o.browser=Ie(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],e.modules&&Array.isArray(e.modules)&&o.modules.push(...e.modules);const a={};o.modules.forEach(h=>{h({params:e,swiper:o,extendParams:Di(e,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const f=k({},It,a);return o.params=k({},f,mt,e),o.originalParams=k({},o.params),o.passedParams=k({},e),o.params&&o.params.on&&Object.keys(o.params.on).forEach(h=>{o.on(h,o.params.on[h])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getSlideIndex(t){const{slidesEl:e,params:s}=this,r=D(e,`.${s.slideClass}, swiper-slide`),n=nt(r[0]);return nt(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(e=>e.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:e,params:s}=t;t.slides=D(e,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,e){const s=this;t=Math.min(Math.max(t,0),1);const r=s.minTranslate(),l=(s.maxTranslate()-r)*t+r;s.translateTo(l,typeof e>"u"?0:e),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",e.join(" "))}getSlideClasses(t){const e=this;return e.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(e.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=[];t.slides.forEach(s=>{const r=t.getSlideClasses(s);e.push({slideEl:s,classNames:r}),t.emit("_slideClass",s,r)}),t.emit("_slideClasses",e)}slidesPerViewDynamic(t,e){t===void 0&&(t="current"),e===void 0&&(e=!1);const s=this,{params:r,slides:n,slidesGrid:l,slidesSizesGrid:o,size:a,activeIndex:f}=s;let h=1;if(r.centeredSlides){let g=n[f]?n[f].swiperSlideSize:0,y;for(let m=f+1;m<n.length;m+=1)n[m]&&!y&&(g+=n[m].swiperSlideSize,h+=1,g>a&&(y=!0));for(let m=f-1;m>=0;m-=1)n[m]&&!y&&(g+=n[m].swiperSlideSize,h+=1,g>a&&(y=!0))}else if(t==="current")for(let g=f+1;g<n.length;g+=1)(e?l[g]+o[g]-l[f]<a:l[g]-l[f]<a)&&(h+=1);else for(let g=f-1;g>=0;g-=1)l[f]-l[g]<a&&(h+=1);return h}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:e,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&it(t,l)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){const l=t.rtlTranslate?t.translate*-1:t.translate,o=Math.min(Math.max(l,t.maxTranslate()),t.minTranslate());t.setTranslate(o),t.updateActiveIndex(),t.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const l=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;n=t.slideTo(l.length-1,0,!1,!0)}else n=t.slideTo(t.activeIndex,0,!1,!0);n||r()}s.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,e){e===void 0&&(e=!0);const s=this,r=s.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(n=>{t==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),e&&s.update()),s}changeLanguageDirection(t){const e=this;e.rtl&&t==="rtl"||!e.rtl&&t==="ltr"||(e.rtl=t==="rtl",e.rtlTranslate=e.params.direction==="horizontal"&&e.rtl,e.rtl?(e.el.classList.add(`${e.params.containerModifierClass}rtl`),e.el.dir="rtl"):(e.el.classList.remove(`${e.params.containerModifierClass}rtl`),e.el.dir="ltr"),e.update())}mount(t){const e=this;if(e.mounted)return!0;let s=t||e.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=e,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(e.isElement=!0);const r=()=>`.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=(()=>s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):D(s,r())[0])();return!l&&e.params.createElements&&(l=Rt("div",e.params.wrapperClass),s.append(l),D(s,`.${e.params.slideClass}`).forEach(o=>{l.append(o)})),Object.assign(e,{el:s,wrapperEl:l,slidesEl:e.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:l,hostEl:e.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||B(s,"direction")==="rtl",rtlTranslate:e.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||B(s,"direction")==="rtl"),wrongRTL:B(l,"display")==="-webkit-box"}),!0}init(t){const e=this;if(e.initialized||e.mount(t)===!1)return e;e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.enabled&&e.setGrabCursor(),e.params.loop&&e.virtual&&e.params.virtual.enabled?e.slideTo(e.params.initialSlide+e.virtual.slidesBefore,0,e.params.runCallbacksOnInit,!1,!0):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit,!1,!0),e.params.loop&&e.loopCreate(),e.attachEvents();const r=[...e.el.querySelectorAll('[loading="lazy"]')];return e.isElement&&r.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?it(e,n):n.addEventListener("load",l=>{it(e,l.target)})}),yt(e),e.initialized=!0,yt(e),e.emit("init"),e.emit("afterInit"),e}destroy(t,e){t===void 0&&(t=!0),e===void 0&&(e=!0);const s=this,{params:r,el:n,wrapperEl:l,slides:o}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),e&&(s.removeClasses(),n.removeAttribute("style"),l.removeAttribute("style"),o&&o.length&&o.forEach(a=>{a.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(a=>{s.off(a)}),t!==!1&&(s.el.swiper=null,ye(s)),s.destroyed=!0),null}static extendDefaults(t){k(mt,t)}static get extendedDefaults(){return mt}static get defaults(){return It}static installModule(t){z.prototype.__modules__||(z.prototype.__modules__=[]);const e=z.prototype.__modules__;typeof t=="function"&&e.indexOf(t)<0&&e.push(t)}static use(t){return Array.isArray(t)?(t.forEach(e=>z.installModule(e)),z):(z.installModule(t),z)}}Object.keys(ht).forEach(i=>{Object.keys(ht[i]).forEach(t=>{z.prototype[t]=ht[i][t]})});z.use([_e,Oe]);function qi(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n=N(),l=_();t.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function o(h){if(!t.enabled)return;const{rtlTranslate:g}=t;let y=h;y.originalEvent&&(y=y.originalEvent);const m=y.keyCode||y.charCode,p=t.params.keyboard.pageUpDown,u=p&&m===33,b=p&&m===34,v=m===37,d=m===39,c=m===38,w=m===40;if(!t.allowSlideNext&&(t.isHorizontal()&&d||t.isVertical()&&w||b)||!t.allowSlidePrev&&(t.isHorizontal()&&v||t.isVertical()&&c||u))return!1;if(!(y.shiftKey||y.altKey||y.ctrlKey||y.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(u||b||v||d||c||w)){let x=!1;if(rt(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&rt(t.el,`.${t.params.slideActiveClass}`).length===0)return;const C=t.el,L=C.clientWidth,M=C.clientHeight,A=l.innerWidth,O=l.innerHeight,S=Ee(C);g&&(S.left-=C.scrollLeft);const E=[[S.left,S.top],[S.left+L,S.top],[S.left,S.top+M],[S.left+L,S.top+M]];for(let T=0;T<E.length;T+=1){const P=E[T];if(P[0]>=0&&P[0]<=A&&P[1]>=0&&P[1]<=O){if(P[0]===0&&P[1]===0)continue;x=!0}}if(!x)return}t.isHorizontal()?((u||b||v||d)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),((b||d)&&!g||(u||v)&&g)&&t.slideNext(),((u||v)&&!g||(b||d)&&g)&&t.slidePrev()):((u||b||c||w)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),(b||w)&&t.slideNext(),(u||c)&&t.slidePrev()),r("keyPress",m)}}function a(){t.keyboard.enabled||(n.addEventListener("keydown",o),t.keyboard.enabled=!0)}function f(){t.keyboard.enabled&&(n.removeEventListener("keydown",o),t.keyboard.enabled=!1)}s("init",()=>{t.params.keyboard.enabled&&a()}),s("destroy",()=>{t.keyboard.enabled&&f()}),Object.assign(t.keyboard,{enable:a,disable:f})}function Yt(i,t,e,s){return i.params.createElements&&Object.keys(s).forEach(r=>{if(!e[r]&&e.auto===!0){let n=D(i.el,`.${s[r]}`)[0];n||(n=Rt("div",s[r]),n.className=s[r],i.el.append(n)),e[r]=n,t[r]=n}}),e}function Ni(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const n=u=>(Array.isArray(u)?u:[u]).filter(b=>!!b);function l(u){let b;return u&&typeof u=="string"&&t.isElement&&(b=t.el.querySelector(u),b)?b:(u&&(typeof u=="string"&&(b=[...document.querySelectorAll(u)]),t.params.uniqueNavElements&&typeof u=="string"&&b.length>1&&t.el.querySelectorAll(u).length===1&&(b=t.el.querySelector(u))),u&&!b?u:b)}function o(u,b){const v=t.params.navigation;u=n(u),u.forEach(d=>{d&&(d.classList[b?"add":"remove"](...v.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=b),t.params.watchOverflow&&t.enabled&&d.classList[t.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:u,prevEl:b}=t.navigation;if(t.params.loop){o(b,!1),o(u,!1);return}o(b,t.isBeginning&&!t.params.rewind),o(u,t.isEnd&&!t.params.rewind)}function f(u){u.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function h(u){u.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function g(){const u=t.params.navigation;if(t.params.navigation=Yt(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let b=l(u.nextEl),v=l(u.prevEl);Object.assign(t.navigation,{nextEl:b,prevEl:v}),b=n(b),v=n(v);const d=(c,w)=>{c&&c.addEventListener("click",w==="next"?h:f),!t.enabled&&c&&c.classList.add(...u.lockClass.split(" "))};b.forEach(c=>d(c,"next")),v.forEach(c=>d(c,"prev"))}function y(){let{nextEl:u,prevEl:b}=t.navigation;u=n(u),b=n(b);const v=(d,c)=>{d.removeEventListener("click",c==="next"?h:f),d.classList.remove(...t.params.navigation.disabledClass.split(" "))};u.forEach(d=>v(d,"next")),b.forEach(d=>v(d,"prev"))}s("init",()=>{t.params.navigation.enabled===!1?p():(g(),a())}),s("toEdge fromEdge lock unlock",()=>{a()}),s("destroy",()=>{y()}),s("enable disable",()=>{let{nextEl:u,prevEl:b}=t.navigation;u=n(u),b=n(b),[...u,...b].filter(v=>!!v).forEach(v=>v.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass))}),s("click",(u,b)=>{let{nextEl:v,prevEl:d}=t.navigation;v=n(v),d=n(d);const c=b.target;if(t.params.navigation.hideOnClick&&!d.includes(c)&&!v.includes(c)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===c||t.pagination.el.contains(c)))return;let w;v.length?w=v[0].classList.contains(t.params.navigation.hiddenClass):d.length&&(w=d[0].classList.contains(t.params.navigation.hiddenClass)),r(w===!0?"navigationShow":"navigationHide"),[...v,...d].filter(x=>!!x).forEach(x=>x.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),a()},p=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(t.navigation,{enable:m,disable:p,update:a,init:g,destroy:y})}function Y(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Gi(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),t.pagination={el:null,bullets:[]};let l,o=0;const a=d=>(Array.isArray(d)?d:[d]).filter(c=>!!c);function f(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function h(d,c){const{bulletActiveClass:w}=t.params.pagination;d&&(d=d[`${c==="prev"?"previous":"next"}ElementSibling`],d&&(d.classList.add(`${w}-${c}`),d=d[`${c==="prev"?"previous":"next"}ElementSibling`],d&&d.classList.add(`${w}-${c}-${c}`)))}function g(d){const c=d.target.closest(Y(t.params.pagination.bulletClass));if(!c)return;d.preventDefault();const w=nt(c)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const x=t.realIndex,C=t.getSlideIndexByData(w),L=t.getSlideIndexByData(t.realIndex);if(C>t.slides.length-t.loopedSlides){const M=t.activeIndex;t.loopFix({direction:C>L?"next":"prev",activeSlideIndex:C,slideTo:!1});const A=t.activeIndex;M===A&&t.slideToLoop(x,0,!1,!0)}t.slideToLoop(w)}else t.slideTo(w)}function y(){const d=t.rtl,c=t.params.pagination;if(f())return;let w=t.pagination.el;w=a(w);let x,C;const L=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,M=t.params.loop?Math.ceil(L/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,x=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(x=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,x=t.activeIndex||0),c.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let O,S,E;if(c.dynamicBullets&&(l=wt(A[0],t.isHorizontal()?"width":"height",!0),w.forEach(T=>{T.style[t.isHorizontal()?"width":"height"]=`${l*(c.dynamicMainBullets+4)}px`}),c.dynamicMainBullets>1&&C!==void 0&&(o+=x-(C||0),o>c.dynamicMainBullets-1?o=c.dynamicMainBullets-1:o<0&&(o=0)),O=Math.max(x-o,0),S=O+(Math.min(A.length,c.dynamicMainBullets)-1),E=(S+O)/2),A.forEach(T=>{const P=[...["","-next","-next-next","-prev","-prev-prev","-main"].map($=>`${c.bulletActiveClass}${$}`)].map($=>typeof $=="string"&&$.includes(" ")?$.split(" "):$).flat();T.classList.remove(...P)}),w.length>1)A.forEach(T=>{const P=nt(T);P===x?T.classList.add(...c.bulletActiveClass.split(" ")):t.isElement&&T.setAttribute("part","bullet"),c.dynamicBullets&&(P>=O&&P<=S&&T.classList.add(...`${c.bulletActiveClass}-main`.split(" ")),P===O&&h(T,"prev"),P===S&&h(T,"next"))});else{const T=A[x];if(T&&T.classList.add(...c.bulletActiveClass.split(" ")),t.isElement&&A.forEach((P,$)=>{P.setAttribute("part",$===x?"bullet-active":"bullet")}),c.dynamicBullets){const P=A[O],$=A[S];for(let q=O;q<=S;q+=1)A[q]&&A[q].classList.add(...`${c.bulletActiveClass}-main`.split(" "));h(P,"prev"),h($,"next")}}if(c.dynamicBullets){const T=Math.min(A.length,c.dynamicMainBullets+4),P=(l*T-l)/2-E*l,$=d?"right":"left";A.forEach(q=>{q.style[t.isHorizontal()?$:"top"]=`${P}px`})}}w.forEach((A,O)=>{if(c.type==="fraction"&&(A.querySelectorAll(Y(c.currentClass)).forEach(S=>{S.textContent=c.formatFractionCurrent(x+1)}),A.querySelectorAll(Y(c.totalClass)).forEach(S=>{S.textContent=c.formatFractionTotal(M)})),c.type==="progressbar"){let S;c.progressbarOpposite?S=t.isHorizontal()?"vertical":"horizontal":S=t.isHorizontal()?"horizontal":"vertical";const E=(x+1)/M;let T=1,P=1;S==="horizontal"?T=E:P=E,A.querySelectorAll(Y(c.progressbarFillClass)).forEach($=>{$.style.transform=`translate3d(0,0,0) scaleX(${T}) scaleY(${P})`,$.style.transitionDuration=`${t.params.speed}ms`})}c.type==="custom"&&c.renderCustom?(A.innerHTML=c.renderCustom(t,x+1,M),O===0&&r("paginationRender",A)):(O===0&&r("paginationRender",A),r("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](c.lockClass)})}function m(){const d=t.params.pagination;if(f())return;const c=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let w=t.pagination.el;w=a(w);let x="";if(d.type==="bullets"){let C=t.params.loop?Math.ceil(c/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>c&&(C=c);for(let L=0;L<C;L+=1)d.renderBullet?x+=d.renderBullet.call(t,L,d.bulletClass):x+=`<${d.bulletElement} ${t.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`}d.type==="fraction"&&(d.renderFraction?x=d.renderFraction.call(t,d.currentClass,d.totalClass):x=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),d.type==="progressbar"&&(d.renderProgressbar?x=d.renderProgressbar.call(t,d.progressbarFillClass):x=`<span class="${d.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(C=>{d.type!=="custom"&&(C.innerHTML=x||""),d.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(Y(d.bulletClass)))}),d.type!=="custom"&&r("paginationRender",w[0])}function p(){t.params.pagination=Yt(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const d=t.params.pagination;if(!d.el)return;let c;typeof d.el=="string"&&t.isElement&&(c=t.el.querySelector(d.el)),!c&&typeof d.el=="string"&&(c=[...document.querySelectorAll(d.el)]),c||(c=d.el),!(!c||c.length===0)&&(t.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray(c)&&c.length>1&&(c=[...t.el.querySelectorAll(d.el)],c.length>1&&(c=c.filter(w=>rt(w,".swiper")[0]===t.el)[0])),Array.isArray(c)&&c.length===1&&(c=c[0]),Object.assign(t.pagination,{el:c}),c=a(c),c.forEach(w=>{d.type==="bullets"&&d.clickable&&w.classList.add(...(d.clickableClass||"").split(" ")),w.classList.add(d.modifierClass+d.type),w.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(w.classList.add(`${d.modifierClass}${d.type}-dynamic`),o=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&w.classList.add(d.progressbarOppositeClass),d.clickable&&w.addEventListener("click",g),t.enabled||w.classList.add(d.lockClass)}))}function u(){const d=t.params.pagination;if(f())return;let c=t.pagination.el;c&&(c=a(c),c.forEach(w=>{w.classList.remove(d.hiddenClass),w.classList.remove(d.modifierClass+d.type),w.classList.remove(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&(w.classList.remove(...(d.clickableClass||"").split(" ")),w.removeEventListener("click",g))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...d.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const d=t.params.pagination;let{el:c}=t.pagination;c=a(c),c.forEach(w=>{w.classList.remove(d.horizontalClass,d.verticalClass),w.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass)})}),s("init",()=>{t.params.pagination.enabled===!1?v():(p(),m(),y())}),s("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),s("snapIndexChange",()=>{y()}),s("snapGridLengthChange",()=>{m(),y()}),s("destroy",()=>{u()}),s("enable disable",()=>{let{el:d}=t.pagination;d&&(d=a(d),d.forEach(c=>c.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),s("lock unlock",()=>{y()}),s("click",(d,c)=>{const w=c.target,x=a(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&x&&x.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const C=x[0].classList.contains(t.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),x.forEach(L=>L.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=a(d),d.forEach(c=>c.classList.remove(t.params.pagination.paginationDisabledClass))),p(),m(),y()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=a(d),d.forEach(c=>c.classList.add(t.params.pagination.paginationDisabledClass))),u()};Object.assign(t.pagination,{enable:b,disable:v,render:m,update:y,init:p,destroy:u})}const Bi=new z(".swiper-creative",{modules:[Ni,Gi,qi],initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:0,spaceBetween:16,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,breakpoints:{576:{pagination:{dynamicBullets:!1}}}}),Vi=i=>Bi.slideTo(i);document.querySelectorAll(".slide-to").forEach((i,t)=>i.addEventListener("click",()=>Vi(t)));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt;const at=window,W=at.trustedTypes,_t=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,xt="$lit$",G=`lit$${(Math.random()+"").slice(9)}$`,Ut="?"+G,Fi=`<${Ut}>`,j=document,lt=()=>j.createComment(""),K=i=>i===null||typeof i!="object"&&typeof i!="function",Kt=Array.isArray,Ri=i=>Kt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,kt=/>/g,V=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ht=/"/g,Zt=/^(?:script|style|textarea|title)$/i,Z=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Dt=new WeakMap,F=j.createTreeWalker(j,129,null,!1);function Qt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return _t!==void 0?_t.createHTML(t):t}const ji=(i,t)=>{const e=i.length-1,s=[];let r,n=t===2?"<svg>":"",l=U;for(let o=0;o<e;o++){const a=i[o];let f,h,g=-1,y=0;for(;y<a.length&&(l.lastIndex=y,h=l.exec(a),h!==null);)y=l.lastIndex,l===U?h[1]==="!--"?l=Ot:h[1]!==void 0?l=kt:h[2]!==void 0?(Zt.test(h[2])&&(r=RegExp("</"+h[2],"g")),l=V):h[3]!==void 0&&(l=V):l===V?h[0]===">"?(l=r??U,g=-1):h[1]===void 0?g=-2:(g=l.lastIndex-h[2].length,f=h[1],l=h[3]===void 0?V:h[3]==='"'?Ht:zt):l===Ht||l===zt?l=V:l===Ot||l===kt?l=U:(l=V,r=void 0);const m=l===V&&i[o+1].startsWith("/>")?" ":"";n+=l===U?a+Fi:g>=0?(s.push(f),a.slice(0,g)+xt+a.slice(g)+G+m):a+G+(g===-2?(s.push(void 0),o):m)}return[Qt(i,n+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class Q{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,l=0;const o=t.length-1,a=this.parts,[f,h]=ji(t,e);if(this.el=Q.createElement(f,s),F.currentNode=this.el.content,e===2){const g=this.el.content,y=g.firstChild;y.remove(),g.append(...y.childNodes)}for(;(r=F.nextNode())!==null&&a.length<o;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const y of r.getAttributeNames())if(y.endsWith(xt)||y.startsWith(G)){const m=h[l++];if(g.push(y),m!==void 0){const p=r.getAttribute(m.toLowerCase()+xt).split(G),u=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:u[2],strings:p,ctor:u[1]==="."?Xi:u[1]==="?"?Ui:u[1]==="@"?Ki:dt})}else a.push({type:6,index:n})}for(const y of g)r.removeAttribute(y)}if(Zt.test(r.tagName)){const g=r.textContent.split(G),y=g.length-1;if(y>0){r.textContent=W?W.emptyScript:"";for(let m=0;m<y;m++)r.append(g[m],lt()),F.nextNode(),a.push({type:2,index:++n});r.append(g[y],lt())}}}else if(r.nodeType===8)if(r.data===Ut)a.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(G,g+1))!==-1;)a.push({type:7,index:n}),g+=G.length-1}n++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function X(i,t,e=i,s){var r,n,l,o;if(t===Z)return t;let a=s!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[s]:e._$Cl;const f=K(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==f&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),f===void 0?a=void 0:(a=new f(i),a._$AT(i,e,s)),s!==void 0?((l=(o=e)._$Co)!==null&&l!==void 0?l:o._$Co=[])[s]=a:e._$Cl=a),a!==void 0&&(t=X(i,a._$AS(i,t.values),a,s)),t}class Wi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:r}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:j).importNode(s,!0);F.currentNode=n;let l=F.nextNode(),o=0,a=0,f=r[0];for(;f!==void 0;){if(o===f.index){let h;f.type===2?h=new ot(l,l.nextSibling,this,t):f.type===1?h=new f.ctor(l,f.name,f.strings,this,t):f.type===6&&(h=new Zi(l,this,t)),this._$AV.push(h),f=r[++a]}o!==(f==null?void 0:f.index)&&(l=F.nextNode(),o++)}return F.currentNode=j,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ot{constructor(t,e,s,r){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),K(t)?t===I||t==null||t===""?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ri(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&K(this._$AH)?this._$AA.nextSibling.data=t:this.$(j.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Q.createElement(Qt(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const l=new Wi(n,this),o=l.u(this.options);l.v(s),this.$(o),this._$AH=l}}_$AC(t){let e=Dt.get(t.strings);return e===void 0&&Dt.set(t.strings,e=new Q(t)),e}T(t){Kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const n of t)r===e.length?e.push(s=new ot(this.k(lt()),this.k(lt()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class dt{constructor(t,e,s,r,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){const n=this.strings;let l=!1;if(n===void 0)t=X(this,t,e,0),l=!K(t)||t!==this._$AH&&t!==Z,l&&(this._$AH=t);else{const o=t;let a,f;for(t=n[0],a=0;a<n.length-1;a++)f=X(this,o[s+a],e,a),f===Z&&(f=this._$AH[a]),l||(l=!K(f)||f!==this._$AH[a]),f===I?t=I:t!==I&&(t+=(f??"")+n[a+1]),this._$AH[a]=f}l&&!r&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xi extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const Yi=W?W.emptyScript:"";class Ui extends dt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,Yi):this.element.removeAttribute(this.name)}}class Ki extends dt{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=X(this,t,e,0))!==null&&s!==void 0?s:I)===Z)return;const r=this._$AH,n=t===I&&r!==I||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,l=t!==I&&(r===I||n);n&&this.element.removeEventListener(this.name,this,r),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Zi{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const qt=at.litHtmlPolyfillSupport;qt==null||qt(Q,ot),((vt=at.litHtmlVersions)!==null&&vt!==void 0?vt:at.litHtmlVersions=[]).push("2.8.0");function Qi(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Jt={exports:{}};(function(i){(function(t){var e=0,s=function r(n,l){var o=this,a=this,f=!1;if(Array.isArray(n))return!!n.length&&n.map(function(p){return new r(p,l)});var h={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},l);var p=typeof n=="string";this.container=p?document.querySelector(n):n,this.createDefinitions(),a.attachEvents()},createDefinitions:function(){var p=this,u=this.options,b=u.elementClass,v=u.openOnInit,d=u.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(m(b));this.elements=Array.from(d).filter(function(c){return c.classList&&c.classList.contains(b)}),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter(function(c){return!c.classList.contains("js-enabled")}).forEach(function(c){c.classList.add("js-enabled"),p.generateIDs(c),p.setARIA(c),p.setTransition(c);var w=p.elements.indexOf(c);e++,v.includes(w)?p.showElement(c,!1):p.closeElement(c,!1)})},setTransition:function(p){var u=arguments.length>1&&arguments[1]!==void 0&&arguments[1],b=this.options,v=b.duration,d=b.panelClass,c=p.querySelector(m(d)),w=g("transitionDuration");c.style[w]=u?null:"".concat(v,"ms")},generateIDs:function(p){var u=this.options,b=u.triggerClass,v=u.panelClass,d=p.querySelector(m(b)),c=p.querySelector(m(v));p.setAttribute("id",p.id||"ac-".concat(e)),d.setAttribute("id",d.id||"ac-trigger-".concat(e)),c.setAttribute("id",c.id||"ac-panel-".concat(e))},removeIDs:function(p){var u=this.options,b=u.triggerClass,v=u.panelClass,d=p.querySelector(m(b)),c=p.querySelector(m(v));p.id.startsWith("ac-")&&p.removeAttribute("id"),d.id.startsWith("ac-")&&d.removeAttribute("id"),c.id.startsWith("ac-")&&c.removeAttribute("id")},setARIA:function(p){var u=this.options,b=u.ariaEnabled,v=u.triggerClass,d=u.panelClass;if(b){var c=p.querySelector(m(v)),w=p.querySelector(m(d));c.setAttribute("role","button"),c.setAttribute("aria-controls",w.id),c.setAttribute("aria-disabled",!1),c.setAttribute("aria-expanded",!1),w.setAttribute("role","region"),w.setAttribute("aria-labelledby",c.id)}},updateARIA:function(p,u){var b=u.ariaExpanded,v=u.ariaDisabled,d=this.options,c=d.ariaEnabled,w=d.triggerClass;if(c){var x=p.querySelector(m(w));x.setAttribute("aria-expanded",b),x.setAttribute("aria-disabled",v)}},removeARIA:function(p){var u=this.options,b=u.ariaEnabled,v=u.triggerClass,d=u.panelClass;if(b){var c=p.querySelector(m(v)),w=p.querySelector(m(d));c.removeAttribute("role"),c.removeAttribute("aria-controls"),c.removeAttribute("aria-disabled"),c.removeAttribute("aria-expanded"),w.removeAttribute("role"),w.removeAttribute("aria-labelledby")}},focus:function(p,u){p.preventDefault();var b=this.options.triggerClass;u.querySelector(m(b)).focus()},focusFirstElement:function(p){this.focus(p,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(p){this.focus(p,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(p){var u=this.currFocusedIdx+1;if(u>this.elements.length-1)return this.focusFirstElement(p);this.focus(p,this.elements[u]),this.currFocusedIdx=u},focusPrevElement:function(p){var u=this.currFocusedIdx-1;if(u<0)return this.focusLastElement(p);this.focus(p,this.elements[u]),this.currFocusedIdx=u},showElement:function(p){var u=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],b=this.options,v=b.panelClass,d=b.activeClass,c=b.collapse,w=b.beforeOpen;u&&w(p);var x=p.querySelector(m(v)),C=x.scrollHeight;p.classList.add(d),requestAnimationFrame(function(){requestAnimationFrame(function(){x.style.height=u?"".concat(C,"px"):"auto"})}),this.updateARIA(p,{ariaExpanded:!0,ariaDisabled:!c})},closeElement:function(p){var u=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],b=this.options,v=b.panelClass,d=b.activeClass,c=b.beforeClose,w=p.querySelector(m(v)),x=w.scrollHeight;p.classList.remove(d),u?(c(p),requestAnimationFrame(function(){w.style.height="".concat(x,"px"),requestAnimationFrame(function(){w.style.height=0})})):w.style.height=0,this.updateARIA(p,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(p){var u=this.options,b=u.activeClass,v=u.collapse,d=p.classList.contains(b);if(!d||v)return d?this.closeElement(p):this.showElement(p)},closeElements:function(){var p=this,u=this.options,b=u.activeClass;u.showMultiple||this.elements.forEach(function(v,d){v.classList.contains(b)&&d!==p.currFocusedIdx&&p.closeElement(v)})},handleClick:function(p){var u=this,b=p.currentTarget;this.elements.forEach(function(v,d){v.contains(b)&&p.target.nodeName!=="A"&&(u.currFocusedIdx=d,u.closeElements(),u.focus(p,v),u.toggleElement(v))})},handleKeydown:function(p){switch(p.key){case"ArrowUp":return this.focusPrevElement(p);case"ArrowDown":return this.focusNextElement(p);case"Home":return this.focusFirstElement(p);case"End":return this.focusLastElement(p);default:return null}},handleFocus:function(p){var u=p.currentTarget,b=this.elements.find(function(v){return v.contains(u)});this.currFocusedIdx=this.elements.indexOf(b)},handleTransitionEnd:function(p){if(p.stopPropagation(),p.propertyName==="height"){var u=this.options,b=u.onOpen,v=u.onClose,d=p.currentTarget,c=parseInt(d.style.height),w=this.elements.find(function(x){return x.contains(d)});c>0?(d.style.height="auto",b(w)):v(w)}}};this.attachEvents=function(){if(!f){var p=h.options,u=p.triggerClass,b=p.panelClass;h.handleClick=h.handleClick.bind(h),h.handleKeydown=h.handleKeydown.bind(h),h.handleFocus=h.handleFocus.bind(h),h.handleTransitionEnd=h.handleTransitionEnd.bind(h),h.elements.forEach(function(v){var d=v.querySelector(m(u)),c=v.querySelector(m(b));d.addEventListener("click",h.handleClick),d.addEventListener("keydown",h.handleKeydown),d.addEventListener("focus",h.handleFocus),c.addEventListener("webkitTransitionEnd",h.handleTransitionEnd),c.addEventListener("transitionend",h.handleTransitionEnd)}),f=!0}},this.detachEvents=function(){if(f){var p=h.options,u=p.triggerClass,b=p.panelClass;h.elements.forEach(function(v){var d=v.querySelector(m(u)),c=v.querySelector(m(b));d.removeEventListener("click",h.handleClick),d.removeEventListener("keydown",h.handleKeydown),d.removeEventListener("focus",h.handleFocus),c.removeEventListener("webkitTransitionEnd",h.handleTransitionEnd),c.removeEventListener("transitionend",h.handleTransitionEnd)}),f=!1}},this.toggle=function(p){var u=h.elements[p];u&&h.toggleElement(u)},this.open=function(p){var u=h.elements[p];u&&h.showElement(u)},this.openAll=function(){var p=h.options,u=p.activeClass,b=p.onOpen;h.elements.forEach(function(v){v.classList.contains(u)||(h.showElement(v,!1),b(v))})},this.close=function(p){var u=h.elements[p];u&&h.closeElement(u)},this.closeAll=function(){var p=h.options,u=p.activeClass,b=p.onClose;h.elements.forEach(function(v){v.classList.contains(u)&&(h.closeElement(v,!1),b(v))})},this.destroy=function(){o.detachEvents(),o.openAll(),h.elements.forEach(function(p){h.removeIDs(p),h.removeARIA(p),h.setTransition(p,!0)}),f=!0},this.update=function(){h.createDefinitions(),o.detachEvents(),o.attachEvents()};var g=function(p){return typeof document.documentElement.style[p]=="string"?p:(p=y(p),p="webkit".concat(p))},y=function(p){return p.charAt(0).toUpperCase()+p.slice(1)},m=function(p){return".".concat(CSS.escape(p))};h.init()};i.exports!==void 0?i.exports=s:t.Accordion=s})(window)})(Jt);var Ji=Jt.exports;const ts=Qi(Ji);new ts(".sidebar",{duration:200,showMultiple:!0});class es{constructor(){J(this,"observer",t=>new ResizeObserver(e=>e.forEach(s=>{const r=s.borderBoxSize[0].inlineSize;t.forEach(n=>n.style.maxWidth=`${r}px`)})));J(this,"initWith",t=>{t.forEach(([e,s],r)=>{const n=document.querySelector(`.${e}`),l=document.querySelectorAll(`.${s}`),o=r+1;n&&l?this.observer(l).observe(n):console.error(`SizeSetter: there is no master-${o} or slave-${o}`)})})}}class is{constructor(){J(this,"initWith",(t,e)=>{for(const s in e)document.querySelectorAll(`${s}`).forEach(r=>r.setAttribute(`${t}`,`${e[s]}`))})}}const ss=i=>{i.forEach(t=>{const e=t.querySelectorAll("thead th:not(:first-child)"),s=t.querySelectorAll("tbody th");t.querySelectorAll("tbody tr").forEach((n,l)=>{n.querySelectorAll("td").forEach((a,f)=>{const h=()=>{e[f].classList.add("clr-accent"),s[l].classList.add("clr-accent")},g=()=>{e[f].classList.remove("clr-accent"),s[l].classList.remove("clr-accent")},y=v=>{switch(v){case!0:a.addEventListener("mouseover",h),a.addEventListener("mouseout",g);break;case!1:a.removeEventListener("mouseover",h),a.removeEventListener("mouseout",g);break}},m=v=>window.innerWidth>=v&&y(!0),p=v=>y(!!v),u=v=>{window.matchMedia(`(min-width: ${v}px)`).addEventListener("change",c=>p(c.matches))};(v=>{m(v),u(v)})(992)})})})};ss(document.querySelectorAll("table"));const ns=new is;ns.initWith("role",{table:"table",caption:"caption",thead:"rowgroup",tbody:"rowgroup",tfoot:"rowgroup",tr:"row",td:"cell",th:"columnheader","th[scope=row]":"rowheader"});const rs=new es;rs.initWith([["master-1","slave-1"]]);const R=document.querySelector(".sidebar"),Nt=document.querySelector(".sidebar-toggle");let Gt=null;Nt.addEventListener("click",()=>{Nt.classList.toggle("active"),R.classList.contains("isOpen")?(R.classList.remove("isOpen"),clearTimeout(Gt)):(R.style.display="initial",Gt=setTimeout(()=>requestAnimationFrame(()=>R.classList.add("isOpen")),.1))});R.addEventListener("transitionend",()=>!R.classList.contains("isOpen")&&(R.style.display="none"));const Tt=document.querySelector('[href="mailto:nospam@google.com"]');let Bt=null;const as=()=>Tt.setAttribute("href","mailto:KrivoshlykovNN@yandex.ru"),ls=()=>Tt.setAttribute("href","mailto:nospampls@google.com"),os=()=>{clearTimeout(Bt),as(),Bt=setTimeout(ls,1)};Tt.addEventListener("click",os);console.log(`%cCoded by ✨Nazhdaque✨
https://www.frontendmentor.io/profile/Nazhdaque/solutions`,"background: #222; color: chartreuse; font-size: 1.25rem");
