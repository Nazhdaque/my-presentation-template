var re=Object.defineProperty;var ae=(i,t,e)=>t in i?re(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var J=(i,t,e)=>(ae(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const le=`<li class="sidebar-item">
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
</li>`,oe=`<li class="swiper-slide slide-1">
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
</li>`,de=`<li class="swiper-slide slide-2">
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
					<div class="li-head">
						<h3>Готово к использованию</h3>
					</div>
					<div class="li-body">
						<p>Не нужны никакие спец. программы для просмотра — все открывается по ссылке и работает в любом
							браузере, на любом устройстве.</p>
					</div>
				</li>

				<li>
					<div class="img-box bg-sphere">
						<img class="icon"
								 src="images/icons/figure-2-white.svg"
								 alt="">
					</div>
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
						<img class="icon"
								 src="images/icons/figure-1-white.svg"
								 alt="">
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
						<img class="icon"
								 src="images/icons/figure-10-white.svg"
								 alt="">
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
</li>`,ce=`<li class="swiper-slide slide-3">
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
</li>`,ue=`<li class="swiper-slide slide-4">
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
						<img class="icon"
								 src="images/icons/figure-2-white.svg"
								 alt="">
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
</li>`,fe=`<li class="swiper-slide slide-5">
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
</li>`,he=`<li class="swiper-slide slide-7">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg diag w-img"></div>
		</div>
	</div>
</li>`,me=`<li class="swiper-slide slide-8">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg zigzag w-img"></div>
		</div>
	</div>
</li>`,ve=`<li class="swiper-slide slide-9">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg waves w-img"></div>
		</div>
	</div>
</li>`,ge=`<li class="swiper-slide slide-10">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg spike w-img"></div>
			<div class="slide-bg spike"></div>
		</div>
	</div>
</li>`,we=`<li class="swiper-slide slide-11">
	<div class="layout-center">
		<div class="slide-content width-x">
			<div class="slide-bg circle w-img"></div>
		</div>
	</div>
</li>`,be=document.querySelector(".sidebar");be.insertAdjacentHTML("beforeend",le);const q=document.querySelector(".swiper-wrapper");q.insertAdjacentHTML("beforeend",oe);q.insertAdjacentHTML("beforeend",de);q.insertAdjacentHTML("beforeend",ce);q.insertAdjacentHTML("beforeend",ue);q.insertAdjacentHTML("beforeend",fe);q.insertAdjacentHTML("beforeend",pe);q.insertAdjacentHTML("beforeend",he);q.insertAdjacentHTML("beforeend",me);q.insertAdjacentHTML("beforeend",ve);q.insertAdjacentHTML("beforeend",ge);q.insertAdjacentHTML("beforeend",we);function Mt(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function xt(i,t){i===void 0&&(i={}),t===void 0&&(t={}),Object.keys(t).forEach(e=>{typeof i[e]>"u"?i[e]=t[e]:Mt(t[e])&&Mt(i[e])&&Object.keys(t[e]).length>0&&xt(i[e],t[e])})}const Rt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function N(){const i=typeof document<"u"?document:{};return xt(i,Rt),i}const ye={document:Rt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function O(){const i=typeof window<"u"?window:{};return xt(i,ye),i}function Se(i){const t=i;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function wt(i,t){return t===void 0&&(t=0),setTimeout(i,t)}function st(){return Date.now()}function xe(i){const t=O();let e;return t.getComputedStyle&&(e=t.getComputedStyle(i,null)),!e&&i.currentStyle&&(e=i.currentStyle),e||(e=i.style),e}function Te(i,t){t===void 0&&(t="x");const e=O();let s,r,n;const o=xe(i);return e.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(l=>l.replace(",",".")).join(", ")),n=new e.WebKitCSSMatrix(r==="none"?"":r)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),t==="x"&&(e.WebKitCSSMatrix?r=n.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),t==="y"&&(e.WebKitCSSMatrix?r=n.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function tt(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function Ee(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function k(){const i=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let e=1;e<arguments.length;e+=1){const s=e<0||arguments.length<=e?void 0:arguments[e];if(s!=null&&!Ee(s)){const r=Object.keys(Object(s)).filter(n=>t.indexOf(n)<0);for(let n=0,o=r.length;n<o;n+=1){const l=r[n],a=Object.getOwnPropertyDescriptor(s,l);a!==void 0&&a.enumerable&&(tt(i[l])&&tt(s[l])?s[l].__swiper__?i[l]=s[l]:k(i[l],s[l]):!tt(i[l])&&tt(s[l])?(i[l]={},s[l].__swiper__?i[l]=s[l]:k(i[l],s[l])):i[l]=s[l])}}}return i}function et(i,t,e){i.style.setProperty(t,e)}function jt(i){let{swiper:t,targetPosition:e,side:s}=i;const r=O(),n=-t.translate;let o=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(t.cssModeFrameID);const p=e>n?"next":"prev",h=(y,m)=>p==="next"&&y>=m||p==="prev"&&y<=m,v=()=>{l=new Date().getTime(),o===null&&(o=l);const y=Math.max(Math.min((l-o)/a,1),0),m=.5-Math.cos(y*Math.PI)/2;let f=n+m*(e-n);if(h(f,e)&&(f=e),t.wrapperEl.scrollTo({[s]:f}),h(f,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[s]:f})}),r.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=r.requestAnimationFrame(v)};v()}function Tt(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function D(i,t){return t===void 0&&(t=""),[...i.children].filter(e=>e.matches(t))}function Et(i,t){t===void 0&&(t=[]);const e=document.createElement(i);return e.classList.add(...Array.isArray(t)?t:[t]),e}function Ce(i){const t=O(),e=N(),s=i.getBoundingClientRect(),r=e.body,n=i.clientTop||r.clientTop||0,o=i.clientLeft||r.clientLeft||0,l=i===t?t.scrollY:i.scrollTop,a=i===t?t.scrollX:i.scrollLeft;return{top:s.top+l-n,left:s.left+a-o}}function Ae(i,t){const e=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function Le(i,t){const e=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function B(i,t){return O().getComputedStyle(i,null).getPropertyValue(t)}function nt(i){let t=i,e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function rt(i,t){const e=[];let s=i.parentElement;for(;s;)t?s.matches(t)&&e.push(s):e.push(s),s=s.parentElement;return e}function Pe(i,t){function e(s){s.target===i&&(t.call(i,s),i.removeEventListener("transitionend",e))}t&&i.addEventListener("transitionend",e)}function bt(i,t,e){const s=O();return e?i[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let ct;function Me(){const i=O(),t=N();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&t instanceof i.DocumentTouch)}}function Wt(){return ct||(ct=Me()),ct}let ut;function $e(i){let{userAgent:t}=i===void 0?{}:i;const e=Wt(),s=O(),r=s.navigator.platform,n=t||s.navigator.userAgent,o={ios:!1,android:!1},l=s.screen.width,a=s.screen.height,p=n.match(/(Android);?[\s\/]+([\d.]+)?/);let h=n.match(/(iPad).*OS\s([\d_]+)/);const v=n.match(/(iPod)(.*OS\s([\d_]+))?/),y=!h&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let f=r==="MacIntel";const u=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&f&&e.touch&&u.indexOf(`${l}x${a}`)>=0&&(h=n.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),f=!1),p&&!m&&(o.os="android",o.android=!0),(h||y||v)&&(o.os="ios",o.ios=!0),o}function Ie(i){return i===void 0&&(i={}),ut||(ut=$e(i)),ut}let ft;function _e(){const i=O();let t=!1;function e(){const s=i.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(e()){const s=String(i.navigator.userAgent);if(s.includes("Version/")){const[r,n]=s.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));t=r<16||r===16&&n<2}}return{isSafari:t||e(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function Oe(){return ft||(ft=_e()),ft}function ke(i){let{swiper:t,on:e,emit:s}=i;const r=O();let n=null,o=null;const l=()=>{!t||t.destroyed||!t.initialized||(s("beforeResize"),s("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(n=new ResizeObserver(v=>{o=r.requestAnimationFrame(()=>{const{width:y,height:m}=t;let f=y,u=m;v.forEach(w=>{let{contentBoxSize:g,contentRect:d,target:c}=w;c&&c!==t.el||(f=d?d.width:(g[0]||g).inlineSize,u=d?d.height:(g[0]||g).blockSize)}),(f!==y||u!==m)&&l()})}),n.observe(t.el))},p=()=>{o&&r.cancelAnimationFrame(o),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null)},h=()=>{!t||t.destroyed||!t.initialized||s("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",l),r.addEventListener("orientationchange",h)}),e("destroy",()=>{p(),r.removeEventListener("resize",l),r.removeEventListener("orientationchange",h)})}function ze(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n=[],o=O(),l=function(h,v){v===void 0&&(v={});const y=o.MutationObserver||o.WebkitMutationObserver,m=new y(f=>{if(t.__preventObserver__)return;if(f.length===1){r("observerUpdate",f[0]);return}const u=function(){r("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(u):o.setTimeout(u,0)});m.observe(h,{attributes:typeof v.attributes>"u"?!0:v.attributes,childList:typeof v.childList>"u"?!0:v.childList,characterData:typeof v.characterData>"u"?!0:v.characterData}),n.push(m)},a=()=>{if(t.params.observer){if(t.params.observeParents){const h=rt(t.hostEl);for(let v=0;v<h.length;v+=1)l(h[v])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},p=()=>{n.forEach(h=>{h.disconnect()}),n.splice(0,n.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",a),s("destroy",p)}var qe={on(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const r=e?"unshift":"push";return i.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][r](t)}),s},once(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function r(){s.off(i,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];t.apply(s,o)}return r.__emitterProxy=t,s.on(i,r,e)},onAny(i,t){const e=this;if(!e.eventsListeners||e.destroyed||typeof i!="function")return e;const s=t?"unshift":"push";return e.eventsAnyListeners.indexOf(i)<0&&e.eventsAnyListeners[s](i),e},offAny(i){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const e=t.eventsAnyListeners.indexOf(i);return e>=0&&t.eventsAnyListeners.splice(e,1),t},off(i,t){const e=this;return!e.eventsListeners||e.destroyed||!e.eventsListeners||i.split(" ").forEach(s=>{typeof t>"u"?e.eventsListeners[s]=[]:e.eventsListeners[s]&&e.eventsListeners[s].forEach((r,n)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&e.eventsListeners[s].splice(n,1)})}),e},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let t,e,s;for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return typeof n[0]=="string"||Array.isArray(n[0])?(t=n[0],e=n.slice(1,n.length),s=i):(t=n[0].events,e=n[0].data,s=n[0].context||i),e.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(p=>{p.apply(s,[a,...e])}),i.eventsListeners&&i.eventsListeners[a]&&i.eventsListeners[a].forEach(p=>{p.apply(s,e)})}),i}};function De(){const i=this;let t,e;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?t=i.params.width:t=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?e=i.params.height:e=s.clientHeight,!(t===0&&i.isHorizontal()||e===0&&i.isVertical())&&(t=t-parseInt(B(s,"padding-left")||0,10)-parseInt(B(s,"padding-right")||0,10),e=e-parseInt(B(s,"padding-top")||0,10)-parseInt(B(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(e)&&(e=0),Object.assign(i,{width:t,height:e,size:i.isHorizontal()?t:e}))}function He(){const i=this;function t(x){return i.isHorizontal()?x:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[x]}function e(x,C){return parseFloat(x.getPropertyValue(t(C))||0)}const s=i.params,{wrapperEl:r,slidesEl:n,size:o,rtlTranslate:l,wrongRTL:a}=i,p=i.virtual&&s.virtual.enabled,h=p?i.virtual.slides.length:i.slides.length,v=D(n,`.${i.params.slideClass}, swiper-slide`),y=p?i.virtual.slides.length:v.length;let m=[];const f=[],u=[];let w=s.slidesOffsetBefore;typeof w=="function"&&(w=s.slidesOffsetBefore.call(i));let g=s.slidesOffsetAfter;typeof g=="function"&&(g=s.slidesOffsetAfter.call(i));const d=i.snapGrid.length,c=i.slidesGrid.length;let b=s.spaceBetween,S=-w,T=0,L=0;if(typeof o>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*o:typeof b=="string"&&(b=parseFloat(b)),i.virtualSize=-b,v.forEach(x=>{l?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(et(r,"--swiper-centered-offset-before",""),et(r,"--swiper-centered-offset-after",""));const M=s.grid&&s.grid.rows>1&&i.grid;M&&i.grid.initSlides(y);let A;const _=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(x=>typeof s.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<y;x+=1){A=0;let C;if(v[x]&&(C=v[x]),M&&i.grid.updateSlide(x,C,y,t),!(v[x]&&B(C,"display")==="none")){if(s.slidesPerView==="auto"){_&&(v[x].style[t("width")]="");const E=getComputedStyle(C),P=C.style.transform,$=C.style.webkitTransform;if(P&&(C.style.transform="none"),$&&(C.style.webkitTransform="none"),s.roundLengths)A=i.isHorizontal()?bt(C,"width",!0):bt(C,"height",!0);else{const H=e(E,"width"),ee=e(E,"padding-left"),ie=e(E,"padding-right"),At=e(E,"margin-left"),Lt=e(E,"margin-right"),Pt=E.getPropertyValue("box-sizing");if(Pt&&Pt==="border-box")A=H+At+Lt;else{const{clientWidth:se,offsetWidth:ne}=C;A=H+ee+ie+At+Lt+(ne-se)}}P&&(C.style.transform=P),$&&(C.style.webkitTransform=$),s.roundLengths&&(A=Math.floor(A))}else A=(o-(s.slidesPerView-1)*b)/s.slidesPerView,s.roundLengths&&(A=Math.floor(A)),v[x]&&(v[x].style[t("width")]=`${A}px`);v[x]&&(v[x].swiperSlideSize=A),u.push(A),s.centeredSlides?(S=S+A/2+T/2+b,T===0&&x!==0&&(S=S-o/2-b),x===0&&(S=S-o/2-b),Math.abs(S)<1/1e3&&(S=0),s.roundLengths&&(S=Math.floor(S)),L%s.slidesPerGroup===0&&m.push(S),f.push(S)):(s.roundLengths&&(S=Math.floor(S)),(L-Math.min(i.params.slidesPerGroupSkip,L))%i.params.slidesPerGroup===0&&m.push(S),f.push(S),S=S+A+b),i.virtualSize+=A+b,T=A,L+=1}}if(i.virtualSize=Math.max(i.virtualSize,o)+g,l&&a&&(s.effect==="slide"||s.effect==="coverflow")&&(r.style.width=`${i.virtualSize+b}px`),s.setWrapperSize&&(r.style[t("width")]=`${i.virtualSize+b}px`),M&&i.grid.updateWrapperSize(A,m,t),!s.centeredSlides){const x=[];for(let C=0;C<m.length;C+=1){let E=m[C];s.roundLengths&&(E=Math.floor(E)),m[C]<=i.virtualSize-o&&x.push(E)}m=x,Math.floor(i.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(i.virtualSize-o)}if(p&&s.loop){const x=u[0]+b;if(s.slidesPerGroup>1){const C=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/s.slidesPerGroup),E=x*s.slidesPerGroup;for(let P=0;P<C;P+=1)m.push(m[m.length-1]+E)}for(let C=0;C<i.virtual.slidesBefore+i.virtual.slidesAfter;C+=1)s.slidesPerGroup===1&&m.push(m[m.length-1]+x),f.push(f[f.length-1]+x),i.virtualSize+=x}if(m.length===0&&(m=[0]),b!==0){const x=i.isHorizontal()&&l?"marginLeft":t("marginRight");v.filter((C,E)=>!s.cssMode||s.loop?!0:E!==v.length-1).forEach(C=>{C.style[x]=`${b}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let x=0;u.forEach(E=>{x+=E+(b||0)}),x-=b;const C=x-o;m=m.map(E=>E<=0?-w:E>C?C+g:E)}if(s.centerInsufficientSlides){let x=0;if(u.forEach(C=>{x+=C+(b||0)}),x-=b,x<o){const C=(o-x)/2;m.forEach((E,P)=>{m[P]=E-C}),f.forEach((E,P)=>{f[P]=E+C})}}if(Object.assign(i,{slides:v,snapGrid:m,slidesGrid:f,slidesSizesGrid:u}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){et(r,"--swiper-centered-offset-before",`${-m[0]}px`),et(r,"--swiper-centered-offset-after",`${i.size/2-u[u.length-1]/2}px`);const x=-i.snapGrid[0],C=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(E=>E+x),i.slidesGrid=i.slidesGrid.map(E=>E+C)}if(y!==h&&i.emit("slidesLengthChange"),m.length!==d&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),f.length!==c&&i.emit("slidesGridLengthChange"),s.watchSlidesProgress&&i.updateSlidesOffset(),!p&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const x=`${s.containerModifierClass}backface-hidden`,C=i.el.classList.contains(x);y<=s.maxBackfaceHiddenSlides?C||i.el.classList.add(x):C&&i.el.classList.remove(x)}}function Ne(i){const t=this,e=[],s=t.virtual&&t.params.virtual.enabled;let r=0,n;typeof i=="number"?t.setTransition(i):i===!0&&t.setTransition(t.params.speed);const o=l=>s?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{e.push(l)});else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const l=t.activeIndex+n;if(l>t.slides.length&&!s)break;e.push(o(l))}else e.push(o(t.activeIndex));for(n=0;n<e.length;n+=1)if(typeof e[n]<"u"){const l=e[n].offsetHeight;r=l>r?l:r}(r||r===0)&&(t.wrapperEl.style.height=`${r}px`)}function Ge(){const i=this,t=i.slides,e=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(i.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-e-i.cssOverflowAdjustment()}function Be(i){i===void 0&&(i=this&&this.translate||0);const t=this,e=t.params,{slides:s,rtlTranslate:r,snapGrid:n}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-i;r&&(o=i),s.forEach(a=>{a.classList.remove(e.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=e.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<s.length;a+=1){const p=s[a];let h=p.swiperSlideOffset;e.cssMode&&e.centeredSlides&&(h-=s[0].swiperSlideOffset);const v=(o+(e.centeredSlides?t.minTranslate():0)-h)/(p.swiperSlideSize+l),y=(o-n[0]+(e.centeredSlides?t.minTranslate():0)-h)/(p.swiperSlideSize+l),m=-(o-h),f=m+t.slidesSizesGrid[a];(m>=0&&m<t.size-1||f>1&&f<=t.size||m<=0&&f>=t.size)&&(t.visibleSlides.push(p),t.visibleSlidesIndexes.push(a),s[a].classList.add(e.slideVisibleClass)),p.progress=r?-v:v,p.originalProgress=r?-y:y}}function Ve(i){const t=this;if(typeof i>"u"){const h=t.rtlTranslate?-1:1;i=t&&t.translate&&t.translate*h||0}const e=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:n,isEnd:o,progressLoop:l}=t;const a=n,p=o;if(s===0)r=0,n=!0,o=!0;else{r=(i-t.minTranslate())/s;const h=Math.abs(i-t.minTranslate())<1,v=Math.abs(i-t.maxTranslate())<1;n=h||r<=0,o=v||r>=1,h&&(r=0),v&&(r=1)}if(e.loop){const h=t.getSlideIndexByData(0),v=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[h],m=t.slidesGrid[v],f=t.slidesGrid[t.slidesGrid.length-1],u=Math.abs(i);u>=y?l=(u-y)/f:l=(u+f-m)/f,l>1&&(l-=1)}Object.assign(t,{progress:r,progressLoop:l,isBeginning:n,isEnd:o}),(e.watchSlidesProgress||e.centeredSlides&&e.autoHeight)&&t.updateSlidesProgress(i),n&&!a&&t.emit("reachBeginning toEdge"),o&&!p&&t.emit("reachEnd toEdge"),(a&&!n||p&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}function Fe(){const i=this,{slides:t,params:e,slidesEl:s,activeIndex:r}=i,n=i.virtual&&e.virtual.enabled,o=a=>D(s,`.${e.slideClass}${a}, swiper-slide${a}`)[0];t.forEach(a=>{a.classList.remove(e.slideActiveClass,e.slideNextClass,e.slidePrevClass)});let l;if(n)if(e.loop){let a=r-i.virtual.slidesBefore;a<0&&(a=i.virtual.slides.length+a),a>=i.virtual.slides.length&&(a-=i.virtual.slides.length),l=o(`[data-swiper-slide-index="${a}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else l=t[r];if(l){l.classList.add(e.slideActiveClass);let a=Le(l,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!a&&(a=t[0]),a&&a.classList.add(e.slideNextClass);let p=Ae(l,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!p===0&&(p=t[t.length-1]),p&&p.classList.add(e.slidePrevClass)}i.emitSlidesClasses()}const it=(i,t)=>{if(!i||i.destroyed||!i.params)return;const e=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=t.closest(e());if(s){let r=s.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(r=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`)),r&&r.remove()}},pt=(i,t)=>{if(!i.slides[t])return;const e=i.slides[t].querySelector('[loading="lazy"]');e&&e.removeAttribute("loading")},yt=i=>{if(!i||i.destroyed||!i.params)return;let t=i.params.lazyPreloadPrevNext;const e=i.slides.length;if(!e||!t||t<0)return;t=Math.min(t,e);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const o=r,l=[o-t];l.push(...Array.from({length:t}).map((a,p)=>o+s+p)),i.slides.forEach((a,p)=>{l.includes(a.column)&&pt(i,p)});return}const n=r+s-1;if(i.params.rewind||i.params.loop)for(let o=r-t;o<=n+t;o+=1){const l=(o%e+e)%e;(l<r||l>n)&&pt(i,l)}else for(let o=Math.max(r-t,0);o<=Math.min(n+t,e-1);o+=1)o!==r&&(o>n||o<r)&&pt(i,o)};function Re(i){const{slidesGrid:t,params:e}=i,s=i.rtlTranslate?i.translate:-i.translate;let r;for(let n=0;n<t.length;n+=1)typeof t[n+1]<"u"?s>=t[n]&&s<t[n+1]-(t[n+1]-t[n])/2?r=n:s>=t[n]&&s<t[n+1]&&(r=n+1):s>=t[n]&&(r=n);return e.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function je(i){const t=this,e=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:r,activeIndex:n,realIndex:o,snapIndex:l}=t;let a=i,p;const h=y=>{let m=y-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof a>"u"&&(a=Re(t)),s.indexOf(e)>=0)p=s.indexOf(e);else{const y=Math.min(r.slidesPerGroupSkip,a);p=y+Math.floor((a-y)/r.slidesPerGroup)}if(p>=s.length&&(p=s.length-1),a===n){p!==l&&(t.snapIndex=p,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=h(a));return}let v;t.virtual&&r.virtual.enabled&&r.loop?v=h(a):t.slides[a]?v=parseInt(t.slides[a].getAttribute("data-swiper-slide-index")||a,10):v=a,Object.assign(t,{previousSnapIndex:l,snapIndex:p,previousRealIndex:o,realIndex:v,previousIndex:n,activeIndex:a}),t.initialized&&yt(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==v&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function We(i){const t=this,e=t.params,s=i.closest(`.${e.slideClass}, swiper-slide`);let r=!1,n;if(s){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===s){r=!0,n=o;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=n;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}e.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Xe={updateSize:De,updateSlides:He,updateAutoHeight:Ne,updateSlidesOffset:Ge,updateSlidesProgress:Be,updateProgress:Ve,updateSlidesClasses:Fe,updateActiveIndex:je,updateClickedSlide:We};function Ye(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const t=this,{params:e,rtlTranslate:s,translate:r,wrapperEl:n}=t;if(e.virtualTranslate)return s?-r:r;if(e.cssMode)return r;let o=Te(n,i);return o+=t.cssOverflowAdjustment(),s&&(o=-o),o||0}function Ue(i,t){const e=this,{rtlTranslate:s,params:r,wrapperEl:n,progress:o}=e;let l=0,a=0;const p=0;e.isHorizontal()?l=s?-i:i:a=i,r.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),e.previousTranslate=e.translate,e.translate=e.isHorizontal()?l:a,r.cssMode?n[e.isHorizontal()?"scrollLeft":"scrollTop"]=e.isHorizontal()?-l:-a:r.virtualTranslate||(e.isHorizontal()?l-=e.cssOverflowAdjustment():a-=e.cssOverflowAdjustment(),n.style.transform=`translate3d(${l}px, ${a}px, ${p}px)`);let h;const v=e.maxTranslate()-e.minTranslate();v===0?h=0:h=(i-e.minTranslate())/v,h!==o&&e.updateProgress(i),e.emit("setTranslate",e.translate,t)}function Ke(){return-this.snapGrid[0]}function Qe(){return-this.snapGrid[this.snapGrid.length-1]}function Ze(i,t,e,s,r){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),s===void 0&&(s=!0);const n=this,{params:o,wrapperEl:l}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const a=n.minTranslate(),p=n.maxTranslate();let h;if(s&&i>a?h=a:s&&i<p?h=p:h=i,n.updateProgress(h),o.cssMode){const v=n.isHorizontal();if(t===0)l[v?"scrollLeft":"scrollTop"]=-h;else{if(!n.support.smoothScroll)return jt({swiper:n,targetPosition:-h,side:v?"left":"top"}),!0;l.scrollTo({[v?"left":"top"]:-h,behavior:"smooth"})}return!0}return t===0?(n.setTransition(0),n.setTranslate(h),e&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(h),e&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(y){!n||n.destroyed||y.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,e&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Je={getTranslate:Ye,setTranslate:Ue,minTranslate:Ke,maxTranslate:Qe,translateTo:Ze};function ti(i,t){const e=this;e.params.cssMode||(e.wrapperEl.style.transitionDuration=`${i}ms`,e.wrapperEl.style.transitionDelay=i===0?"0ms":""),e.emit("setTransition",i,t)}function Xt(i){let{swiper:t,runCallbacks:e,direction:s,step:r}=i;const{activeIndex:n,previousIndex:o}=t;let l=s;if(l||(n>o?l="next":n<o?l="prev":l="reset"),t.emit(`transition${r}`),e&&n!==o){if(l==="reset"){t.emit(`slideResetTransition${r}`);return}t.emit(`slideChangeTransition${r}`),l==="next"?t.emit(`slideNextTransition${r}`):t.emit(`slidePrevTransition${r}`)}}function ei(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;s.cssMode||(s.autoHeight&&e.updateAutoHeight(),Xt({swiper:e,runCallbacks:i,direction:t,step:"Start"}))}function ii(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;e.animating=!1,!s.cssMode&&(e.setTransition(0),Xt({swiper:e,runCallbacks:i,direction:t,step:"End"}))}var si={setTransition:ti,transitionStart:ei,transitionEnd:ii};function ni(i,t,e,s,r){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this;let o=i;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:p,previousIndex:h,activeIndex:v,rtlTranslate:y,wrapperEl:m,enabled:f}=n;if(n.animating&&l.preventInteractionOnTransition||!f&&!s&&!r)return!1;const u=Math.min(n.params.slidesPerGroupSkip,o);let w=u+Math.floor((o-u)/n.params.slidesPerGroup);w>=a.length&&(w=a.length-1);const g=-a[w];if(l.normalizeSlideIndex)for(let c=0;c<p.length;c+=1){const b=-Math.floor(g*100),S=Math.floor(p[c]*100),T=Math.floor(p[c+1]*100);typeof p[c+1]<"u"?b>=S&&b<T-(T-S)/2?o=c:b>=S&&b<T&&(o=c+1):b>=S&&(o=c)}if(n.initialized&&o!==v&&(!n.allowSlideNext&&(y?g>n.translate&&g>n.minTranslate():g<n.translate&&g<n.minTranslate())||!n.allowSlidePrev&&g>n.translate&&g>n.maxTranslate()&&(v||0)!==o))return!1;o!==(h||0)&&e&&n.emit("beforeSlideChangeStart"),n.updateProgress(g);let d;if(o>v?d="next":o<v?d="prev":d="reset",y&&-g===n.translate||!y&&g===n.translate)return n.updateActiveIndex(o),l.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),l.effect!=="slide"&&n.setTranslate(g),d!=="reset"&&(n.transitionStart(e,d),n.transitionEnd(e,d)),!1;if(l.cssMode){const c=n.isHorizontal(),b=y?g:-g;if(t===0){const S=n.virtual&&n.params.virtual.enabled;S&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),S&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[c?"scrollLeft":"scrollTop"]=b})):m[c?"scrollLeft":"scrollTop"]=b,S&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return jt({swiper:n,targetPosition:b,side:c?"left":"top"}),!0;m.scrollTo({[c?"left":"top"]:b,behavior:"smooth"})}return!0}return n.setTransition(t),n.setTranslate(g),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(e,d),t===0?n.transitionEnd(e,d):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(b){!n||n.destroyed||b.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(e,d))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function ri(i,t,e,s){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;let n=i;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?n=n+r.virtual.slidesBefore:n=r.getSlideIndexByData(n)),r.slideTo(n,t,e,s)}function ai(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{enabled:r,params:n,animating:o}=s;if(!r)return s;let l=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(l=Math.max(s.slidesPerViewDynamic("current",!0),1));const a=s.activeIndex<n.slidesPerGroupSkip?1:l,p=s.virtual&&n.virtual.enabled;if(n.loop){if(o&&!p&&n.loopPreventsSliding)return!1;s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft}return n.rewind&&s.isEnd?s.slideTo(0,i,t,e):s.slideTo(s.activeIndex+a,i,t,e)}function li(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{params:r,snapGrid:n,slidesGrid:o,rtlTranslate:l,enabled:a,animating:p}=s;if(!a)return s;const h=s.virtual&&r.virtual.enabled;if(r.loop){if(p&&!h&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const v=l?s.translate:-s.translate;function y(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const m=y(v),f=n.map(g=>y(g));let u=n[f.indexOf(m)-1];if(typeof u>"u"&&r.cssMode){let g;n.forEach((d,c)=>{m>=d&&(g=c)}),typeof g<"u"&&(u=n[g>0?g-1:g])}let w=0;if(typeof u<"u"&&(w=o.indexOf(u),w<0&&(w=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(w=w-s.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),r.rewind&&s.isBeginning){const g=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(g,i,t,e)}return s.slideTo(w,i,t,e)}function oi(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this;return s.slideTo(s.activeIndex,i,t,e)}function di(i,t,e,s){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=.5);const r=this;let n=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,n),l=o+Math.floor((n-o)/r.params.slidesPerGroup),a=r.rtlTranslate?r.translate:-r.translate;if(a>=r.snapGrid[l]){const p=r.snapGrid[l],h=r.snapGrid[l+1];a-p>(h-p)*s&&(n+=r.params.slidesPerGroup)}else{const p=r.snapGrid[l-1],h=r.snapGrid[l];a-p<=(h-p)*s&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,i,t,e)}function ci(){const i=this,{params:t,slidesEl:e}=i,s=t.slidesPerView==="auto"?i.slidesPerViewDynamic():t.slidesPerView;let r=i.clickedIndex,n;const o=i.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(i.animating)return;n=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<i.loopedSlides-s/2||r>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),r=i.getSlideIndex(D(e,`${o}[data-swiper-slide-index="${n}"]`)[0]),wt(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-s?(i.loopFix(),r=i.getSlideIndex(D(e,`${o}[data-swiper-slide-index="${n}"]`)[0]),wt(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var ui={slideTo:ni,slideToLoop:ri,slideNext:ai,slidePrev:li,slideReset:oi,slideToClosest:di,slideToClickedSlide:ci};function fi(i){const t=this,{params:e,slidesEl:s}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;D(s,`.${e.slideClass}, swiper-slide`).forEach((n,o)=>{n.setAttribute("data-swiper-slide-index",o)}),t.loopFix({slideRealIndex:i,direction:e.centeredSlides?void 0:"next"})}function pi(i){let{slideRealIndex:t,slideTo:e=!0,direction:s,setTranslate:r,activeSlideIndex:n,byController:o,byMousewheel:l}=i===void 0?{}:i;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:p,allowSlidePrev:h,allowSlideNext:v,slidesEl:y,params:m}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&m.virtual.enabled){e&&(!m.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):m.centeredSlides&&a.snapIndex<m.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=h,a.allowSlideNext=v,a.emit("loopFix");return}const f=m.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(m.slidesPerView,10));let u=m.loopedSlides||f;u%m.slidesPerGroup!==0&&(u+=m.slidesPerGroup-u%m.slidesPerGroup),a.loopedSlides=u;const w=[],g=[];let d=a.activeIndex;typeof n>"u"?n=a.getSlideIndex(a.slides.filter(L=>L.classList.contains(m.slideActiveClass))[0]):d=n;const c=s==="next"||!s,b=s==="prev"||!s;let S=0,T=0;if(n<u){S=Math.max(u-n,m.slidesPerGroup);for(let L=0;L<u-n;L+=1){const M=L-Math.floor(L/p.length)*p.length;w.push(p.length-M-1)}}else if(n>a.slides.length-u*2){T=Math.max(n-(a.slides.length-u*2),m.slidesPerGroup);for(let L=0;L<T;L+=1){const M=L-Math.floor(L/p.length)*p.length;g.push(M)}}if(b&&w.forEach(L=>{a.slides[L].swiperLoopMoveDOM=!0,y.prepend(a.slides[L]),a.slides[L].swiperLoopMoveDOM=!1}),c&&g.forEach(L=>{a.slides[L].swiperLoopMoveDOM=!0,y.append(a.slides[L]),a.slides[L].swiperLoopMoveDOM=!1}),a.recalcSlides(),m.slidesPerView==="auto"&&a.updateSlides(),m.watchSlidesProgress&&a.updateSlidesOffset(),e){if(w.length>0&&b)if(typeof t>"u"){const L=a.slidesGrid[d],A=a.slidesGrid[d+S]-L;l?a.setTranslate(a.translate-A):(a.slideTo(d+S,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=A,a.touchEventsData.currentTranslate=a.translate))}else r&&(a.slideToLoop(t,0,!1,!0),a.touchEventsData.currentTranslate=a.translate);else if(g.length>0&&c)if(typeof t>"u"){const L=a.slidesGrid[d],A=a.slidesGrid[d-T]-L;l?a.setTranslate(a.translate-A):(a.slideTo(d-T,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=A,a.touchEventsData.currentTranslate=a.translate))}else a.slideToLoop(t,0,!1,!0)}if(a.allowSlidePrev=h,a.allowSlideNext=v,a.controller&&a.controller.control&&!o){const L={slideRealIndex:t,direction:s,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...L,slideTo:M.params.slidesPerView===m.slidesPerView?e:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...L,slideTo:a.controller.control.params.slidesPerView===m.slidesPerView?e:!1})}a.emit("loopFix")}function hi(){const i=this,{params:t,slidesEl:e}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[n]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{e.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var mi={loopCreate:fi,loopFix:pi,loopDestroy:hi};function vi(i){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const e=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),e.style.cursor="move",e.style.cursor=i?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function gi(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var wi={setGrabCursor:vi,unsetGrabCursor:gi};function bi(i,t){t===void 0&&(t=this);function e(s){if(!s||s===N()||s===O())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(i);return!r&&!s.getRootNode?null:r||e(s.getRootNode().host)}return e(t)}function yi(i){const t=this,e=N(),s=O(),r=t.touchEventsData;r.evCache.push(i);const{params:n,touches:o,enabled:l}=t;if(!l||!n.simulateTouch&&i.pointerType==="mouse"||t.animating&&n.preventInteractionOnTransition)return;!t.animating&&n.cssMode&&n.loop&&t.loopFix();let a=i;a.originalEvent&&(a=a.originalEvent);let p=a.target;if(n.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(p)||"which"in a&&a.which===3||"button"in a&&a.button>0||r.isTouched&&r.isMoved)return;const h=!!n.noSwipingClass&&n.noSwipingClass!=="",v=i.composedPath?i.composedPath():i.path;h&&a.target&&a.target.shadowRoot&&v&&(p=v[0]);const y=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,m=!!(a.target&&a.target.shadowRoot);if(n.noSwiping&&(m?bi(y,p):p.closest(y))){t.allowClick=!0;return}if(n.swipeHandler&&!p.closest(n.swipeHandler))return;o.currentX=a.pageX,o.currentY=a.pageY;const f=o.currentX,u=o.currentY,w=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,g=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(w&&(f<=g||f>=s.innerWidth-g))if(w==="prevent")i.preventDefault();else return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=u,r.touchStartTime=st(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let d=!0;p.matches(r.focusableElements)&&(d=!1,p.nodeName==="SELECT"&&(r.isTouched=!1)),e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==p&&e.activeElement.blur();const c=d&&t.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||c)&&!p.isContentEditable&&a.preventDefault(),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.animating&&!n.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function Si(i){const t=N(),e=this,s=e.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:l}=e;if(!l||!r.simulateTouch&&i.pointerType==="mouse")return;let a=i;if(a.originalEvent&&(a=a.originalEvent),!s.isTouched){s.startMoving&&s.isScrolling&&e.emit("touchMoveOpposite",a);return}const p=s.evCache.findIndex(T=>T.pointerId===a.pointerId);p>=0&&(s.evCache[p]=a);const h=s.evCache.length>1?s.evCache[0]:a,v=h.pageX,y=h.pageY;if(a.preventedByNestedSwiper){n.startX=v,n.startY=y;return}if(!e.allowTouchMove){a.target.matches(s.focusableElements)||(e.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:v,startY:y,prevX:e.touches.currentX,prevY:e.touches.currentY,currentX:v,currentY:y}),s.touchStartTime=st());return}if(r.touchReleaseOnEdges&&!r.loop){if(e.isVertical()){if(y<n.startY&&e.translate<=e.maxTranslate()||y>n.startY&&e.translate>=e.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(v<n.startX&&e.translate<=e.maxTranslate()||v>n.startX&&e.translate>=e.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(s.focusableElements)){s.isMoved=!0,e.allowClick=!1;return}if(s.allowTouchCallbacks&&e.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;n.currentX=v,n.currentY=y;const m=n.currentX-n.startX,f=n.currentY-n.startY;if(e.params.threshold&&Math.sqrt(m**2+f**2)<e.params.threshold)return;if(typeof s.isScrolling>"u"){let T;e.isHorizontal()&&n.currentY===n.startY||e.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:m*m+f*f>=25&&(T=Math.atan2(Math.abs(f),Math.abs(m))*180/Math.PI,s.isScrolling=e.isHorizontal()?T>r.touchAngle:90-T>r.touchAngle)}if(s.isScrolling&&e.emit("touchMoveOpposite",a),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||e.zoom&&e.params.zoom&&e.params.zoom.enabled&&s.evCache.length>1){s.isTouched=!1;return}if(!s.startMoving)return;e.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation();let u=e.isHorizontal()?m:f,w=e.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(u=Math.abs(u)*(o?1:-1),w=Math.abs(w)*(o?1:-1)),n.diff=u,u*=r.touchRatio,o&&(u=-u,w=-w);const g=e.touchesDirection;e.swipeDirection=u>0?"prev":"next",e.touchesDirection=w>0?"prev":"next";const d=e.params.loop&&!r.cssMode;if(!s.isMoved){if(d&&e.loopFix({direction:e.swipeDirection}),s.startTranslate=e.getTranslate(),e.setTransition(0),e.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(T)}s.allowMomentumBounce=!1,r.grabCursor&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!0),e.emit("sliderFirstMove",a)}let c;s.isMoved&&g!==e.touchesDirection&&d&&Math.abs(u)>=1&&(e.loopFix({direction:e.swipeDirection,setTranslate:!0}),c=!0),e.emit("sliderMove",a),s.isMoved=!0,s.currentTranslate=u+s.startTranslate;let b=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),u>0?(d&&!c&&s.currentTranslate>(r.centeredSlides?e.minTranslate()-e.size/2:e.minTranslate())&&e.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>e.minTranslate()&&(b=!1,r.resistance&&(s.currentTranslate=e.minTranslate()-1+(-e.minTranslate()+s.startTranslate+u)**S))):u<0&&(d&&!c&&s.currentTranslate<(r.centeredSlides?e.maxTranslate()+e.size/2:e.maxTranslate())&&e.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:e.slides.length-(r.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<e.maxTranslate()&&(b=!1,r.resistance&&(s.currentTranslate=e.maxTranslate()+1-(e.maxTranslate()-s.startTranslate-u)**S))),b&&(a.preventedByNestedSwiper=!0),!e.allowSlideNext&&e.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&e.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&!e.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(u)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=e.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&e.freeMode||r.watchSlidesProgress)&&(e.updateActiveIndex(),e.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.freeMode.onTouchMove(),e.updateProgress(s.currentTranslate),e.setTranslate(s.currentTranslate))}function xi(i){const t=this,e=t.touchEventsData,s=e.evCache.findIndex(c=>c.pointerId===i.pointerId);if(s>=0&&e.evCache.splice(s,1),["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:r,touches:n,rtlTranslate:o,slidesGrid:l,enabled:a}=t;if(!a||!r.simulateTouch&&i.pointerType==="mouse")return;let p=i;if(p.originalEvent&&(p=p.originalEvent),e.allowTouchCallbacks&&t.emit("touchEnd",p),e.allowTouchCallbacks=!1,!e.isTouched){e.isMoved&&r.grabCursor&&t.setGrabCursor(!1),e.isMoved=!1,e.startMoving=!1;return}r.grabCursor&&e.isMoved&&e.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const h=st(),v=h-e.touchStartTime;if(t.allowClick){const c=p.path||p.composedPath&&p.composedPath();t.updateClickedSlide(c&&c[0]||p.target),t.emit("tap click",p),v<300&&h-e.lastClickTime<300&&t.emit("doubleTap doubleClick",p)}if(e.lastClickTime=st(),wt(()=>{t.destroyed||(t.allowClick=!0)}),!e.isTouched||!e.isMoved||!t.swipeDirection||n.diff===0||e.currentTranslate===e.startTranslate){e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;return}e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;let y;if(r.followFinger?y=o?t.translate:-t.translate:y=-e.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:y});return}let m=0,f=t.slidesSizesGrid[0];for(let c=0;c<l.length;c+=c<r.slidesPerGroupSkip?1:r.slidesPerGroup){const b=c<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof l[c+b]<"u"?y>=l[c]&&y<l[c+b]&&(m=c,f=l[c+b]-l[c]):y>=l[c]&&(m=c,f=l[l.length-1]-l[l.length-2])}let u=null,w=null;r.rewind&&(t.isBeginning?w=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const g=(y-l[m])/f,d=m<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(v>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(g>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?u:m+d):t.slideTo(m)),t.swipeDirection==="prev"&&(g>1-r.longSwipesRatio?t.slideTo(m+d):w!==null&&g<0&&Math.abs(g)>r.longSwipesRatio?t.slideTo(w):t.slideTo(m))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(p.target===t.navigation.nextEl||p.target===t.navigation.prevEl)?p.target===t.navigation.nextEl?t.slideTo(m+d):t.slideTo(m):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:m+d),t.swipeDirection==="prev"&&t.slideTo(w!==null?w:m))}}function $t(){const i=this,{params:t,el:e}=i;if(e&&e.offsetWidth===0)return;t.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:n}=i,o=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!l?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!o?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=s,i.params.watchOverflow&&n!==i.snapGrid&&i.checkOverflow()}function Ti(i){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&i.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Ei(){const i=this,{wrapperEl:t,rtlTranslate:e,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-t.scrollLeft:i.translate=-t.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const n=i.maxTranslate()-i.minTranslate();n===0?r=0:r=(i.translate-i.minTranslate())/n,r!==i.progress&&i.updateProgress(e?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function Ci(i){const t=this;it(t,i.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let It=!1;function Ai(){}const Yt=(i,t)=>{const e=N(),{params:s,el:r,wrapperEl:n,device:o}=i,l=!!s.nested,a=t==="on"?"addEventListener":"removeEventListener",p=t;r[a]("pointerdown",i.onTouchStart,{passive:!1}),e[a]("pointermove",i.onTouchMove,{passive:!1,capture:l}),e[a]("pointerup",i.onTouchEnd,{passive:!0}),e[a]("pointercancel",i.onTouchEnd,{passive:!0}),e[a]("pointerout",i.onTouchEnd,{passive:!0}),e[a]("pointerleave",i.onTouchEnd,{passive:!0}),e[a]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[a]("click",i.onClick,!0),s.cssMode&&n[a]("scroll",i.onScroll),s.updateOnWindowResize?i[p](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",$t,!0):i[p]("observerUpdate",$t,!0),r[a]("load",i.onLoad,{capture:!0})};function Li(){const i=this,t=N(),{params:e}=i;i.onTouchStart=yi.bind(i),i.onTouchMove=Si.bind(i),i.onTouchEnd=xi.bind(i),e.cssMode&&(i.onScroll=Ei.bind(i)),i.onClick=Ti.bind(i),i.onLoad=Ci.bind(i),It||(t.addEventListener("touchstart",Ai),It=!0),Yt(i,"on")}function Pi(){Yt(this,"off")}var Mi={attachEvents:Li,detachEvents:Pi};const _t=(i,t)=>i.grid&&t.grid&&t.grid.rows>1;function $i(){const i=this,{realIndex:t,initialized:e,params:s,el:r}=i,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=i.getBreakpoint(n,i.params.breakpointsBase,i.el);if(!o||i.currentBreakpoint===o)return;const a=(o in n?n[o]:void 0)||i.originalParams,p=_t(i,s),h=_t(i,a),v=s.enabled;p&&!h?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!p&&h&&(r.classList.add(`${s.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(u=>{if(typeof a[u]>"u")return;const w=s[u]&&s[u].enabled,g=a[u]&&a[u].enabled;w&&!g&&i[u].disable(),!w&&g&&i[u].enable()});const y=a.direction&&a.direction!==s.direction,m=s.loop&&(a.slidesPerView!==s.slidesPerView||y);y&&e&&i.changeDirection(),k(i.params,a);const f=i.params.enabled;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),v&&!f?i.disable():!v&&f&&i.enable(),i.currentBreakpoint=o,i.emit("_beforeBreakpoint",a),m&&e&&(i.loopDestroy(),i.loopCreate(t),i.updateSlides()),i.emit("breakpoint",a)}function Ii(i,t,e){if(t===void 0&&(t="window"),!i||t==="container"&&!e)return;let s=!1;const r=O(),n=t==="window"?r.innerHeight:e.clientHeight,o=Object.keys(i).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:n*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:p}=o[l];t==="window"?r.matchMedia(`(min-width: ${p}px)`).matches&&(s=a):p<=e.clientWidth&&(s=a)}return s||"max"}var _i={setBreakpoint:$i,getBreakpoint:Ii};function Oi(i,t){const e=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&e.push(t+r)}):typeof s=="string"&&e.push(t+s)}),e}function ki(){const i=this,{classNames:t,params:e,rtl:s,el:r,device:n}=i,o=Oi(["initialized",e.direction,{"free-mode":i.params.freeMode&&e.freeMode.enabled},{autoheight:e.autoHeight},{rtl:s},{grid:e.grid&&e.grid.rows>1},{"grid-column":e.grid&&e.grid.rows>1&&e.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":e.cssMode},{centered:e.cssMode&&e.centeredSlides},{"watch-progress":e.watchSlidesProgress}],e.containerModifierClass);t.push(...o),r.classList.add(...t),i.emitContainerClasses()}function zi(){const i=this,{el:t,classNames:e}=i;t.classList.remove(...e),i.emitContainerClasses()}var qi={addClasses:ki,removeClasses:zi};function Di(){const i=this,{isLocked:t,params:e}=i,{slidesOffsetBefore:s}=e;if(s){const r=i.slides.length-1,n=i.slidesGrid[r]+i.slidesSizesGrid[r]+s*2;i.isLocked=i.size>n}else i.isLocked=i.snapGrid.length===1;e.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),e.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),t&&t!==i.isLocked&&(i.isEnd=!1),t!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Hi={checkOverflow:Di},Ot={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ni(i,t){return function(s){s===void 0&&(s={});const r=Object.keys(s)[0],n=s[r];if(typeof n!="object"||n===null){k(t,s);return}if(["navigation","pagination","scrollbar"].indexOf(r)>=0&&i[r]===!0&&(i[r]={auto:!0}),!(r in i&&"enabled"in n)){k(t,s);return}i[r]===!0&&(i[r]={enabled:!0}),typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),k(t,s)}}const ht={eventsEmitter:qe,update:Xe,translate:Je,transition:si,slide:ui,loop:mi,grabCursor:wi,events:Mi,breakpoints:_i,checkOverflow:Hi,classes:qi},mt={};class z{constructor(){let t,e;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?e=r[0]:[t,e]=r,e||(e={}),e=k({},e),t&&!e.el&&(e.el=t);const o=N();if(e.el&&typeof e.el=="string"&&o.querySelectorAll(e.el).length>1){const h=[];return o.querySelectorAll(e.el).forEach(v=>{const y=k({},e,{el:v});h.push(new z(y))}),h}const l=this;l.__swiper__=!0,l.support=Wt(),l.device=Ie({userAgent:e.userAgent}),l.browser=Oe(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],e.modules&&Array.isArray(e.modules)&&l.modules.push(...e.modules);const a={};l.modules.forEach(h=>{h({params:e,swiper:l,extendParams:Ni(e,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const p=k({},Ot,a);return l.params=k({},p,mt,e),l.originalParams=k({},l.params),l.passedParams=k({},e),l.params&&l.params.on&&Object.keys(l.params.on).forEach(h=>{l.on(h,l.params.on[h])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getSlideIndex(t){const{slidesEl:e,params:s}=this,r=D(e,`.${s.slideClass}, swiper-slide`),n=nt(r[0]);return nt(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(e=>e.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:e,params:s}=t;t.slides=D(e,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,e){const s=this;t=Math.min(Math.max(t,0),1);const r=s.minTranslate(),o=(s.maxTranslate()-r)*t+r;s.translateTo(o,typeof e>"u"?0:e),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",e.join(" "))}getSlideClasses(t){const e=this;return e.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(e.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=[];t.slides.forEach(s=>{const r=t.getSlideClasses(s);e.push({slideEl:s,classNames:r}),t.emit("_slideClass",s,r)}),t.emit("_slideClasses",e)}slidesPerViewDynamic(t,e){t===void 0&&(t="current"),e===void 0&&(e=!1);const s=this,{params:r,slides:n,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:p}=s;let h=1;if(r.centeredSlides){let v=n[p]?n[p].swiperSlideSize:0,y;for(let m=p+1;m<n.length;m+=1)n[m]&&!y&&(v+=n[m].swiperSlideSize,h+=1,v>a&&(y=!0));for(let m=p-1;m>=0;m-=1)n[m]&&!y&&(v+=n[m].swiperSlideSize,h+=1,v>a&&(y=!0))}else if(t==="current")for(let v=p+1;v<n.length;v+=1)(e?o[v]+l[v]-o[p]<a:o[v]-o[p]<a)&&(h+=1);else for(let v=p-1;v>=0;v-=1)o[p]-o[v]<a&&(h+=1);return h}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:e,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&it(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const o=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;n=t.slideTo(o.length-1,0,!1,!0)}else n=t.slideTo(t.activeIndex,0,!1,!0);n||r()}s.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,e){e===void 0&&(e=!0);const s=this,r=s.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(n=>{t==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),e&&s.update()),s}changeLanguageDirection(t){const e=this;e.rtl&&t==="rtl"||!e.rtl&&t==="ltr"||(e.rtl=t==="rtl",e.rtlTranslate=e.params.direction==="horizontal"&&e.rtl,e.rtl?(e.el.classList.add(`${e.params.containerModifierClass}rtl`),e.el.dir="rtl"):(e.el.classList.remove(`${e.params.containerModifierClass}rtl`),e.el.dir="ltr"),e.update())}mount(t){const e=this;if(e.mounted)return!0;let s=t||e.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=e,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(e.isElement=!0);const r=()=>`.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):D(s,r())[0])();return!o&&e.params.createElements&&(o=Et("div",e.params.wrapperClass),s.append(o),D(s,`.${e.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(e,{el:s,wrapperEl:o,slidesEl:e.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:e.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||B(s,"direction")==="rtl",rtlTranslate:e.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||B(s,"direction")==="rtl"),wrongRTL:B(o,"display")==="-webkit-box"}),!0}init(t){const e=this;if(e.initialized||e.mount(t)===!1)return e;e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.enabled&&e.setGrabCursor(),e.params.loop&&e.virtual&&e.params.virtual.enabled?e.slideTo(e.params.initialSlide+e.virtual.slidesBefore,0,e.params.runCallbacksOnInit,!1,!0):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit,!1,!0),e.params.loop&&e.loopCreate(),e.attachEvents();const r=[...e.el.querySelectorAll('[loading="lazy"]')];return e.isElement&&r.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?it(e,n):n.addEventListener("load",o=>{it(e,o.target)})}),yt(e),e.initialized=!0,yt(e),e.emit("init"),e.emit("afterInit"),e}destroy(t,e){t===void 0&&(t=!0),e===void 0&&(e=!0);const s=this,{params:r,el:n,wrapperEl:o,slides:l}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),e&&(s.removeClasses(),n.removeAttribute("style"),o.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(a=>{s.off(a)}),t!==!1&&(s.el.swiper=null,Se(s)),s.destroyed=!0),null}static extendDefaults(t){k(mt,t)}static get extendedDefaults(){return mt}static get defaults(){return Ot}static installModule(t){z.prototype.__modules__||(z.prototype.__modules__=[]);const e=z.prototype.__modules__;typeof t=="function"&&e.indexOf(t)<0&&e.push(t)}static use(t){return Array.isArray(t)?(t.forEach(e=>z.installModule(e)),z):(z.installModule(t),z)}}Object.keys(ht).forEach(i=>{Object.keys(ht[i]).forEach(t=>{z.prototype[t]=ht[i][t]})});z.use([ke,ze]);function Gi(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n=N(),o=O();t.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function l(h){if(!t.enabled)return;const{rtlTranslate:v}=t;let y=h;y.originalEvent&&(y=y.originalEvent);const m=y.keyCode||y.charCode,f=t.params.keyboard.pageUpDown,u=f&&m===33,w=f&&m===34,g=m===37,d=m===39,c=m===38,b=m===40;if(!t.allowSlideNext&&(t.isHorizontal()&&d||t.isVertical()&&b||w)||!t.allowSlidePrev&&(t.isHorizontal()&&g||t.isVertical()&&c||u))return!1;if(!(y.shiftKey||y.altKey||y.ctrlKey||y.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(u||w||g||d||c||b)){let S=!1;if(rt(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&rt(t.el,`.${t.params.slideActiveClass}`).length===0)return;const T=t.el,L=T.clientWidth,M=T.clientHeight,A=o.innerWidth,_=o.innerHeight,x=Ce(T);v&&(x.left-=T.scrollLeft);const C=[[x.left,x.top],[x.left+L,x.top],[x.left,x.top+M],[x.left+L,x.top+M]];for(let E=0;E<C.length;E+=1){const P=C[E];if(P[0]>=0&&P[0]<=A&&P[1]>=0&&P[1]<=_){if(P[0]===0&&P[1]===0)continue;S=!0}}if(!S)return}t.isHorizontal()?((u||w||g||d)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),((w||d)&&!v||(u||g)&&v)&&t.slideNext(),((u||g)&&!v||(w||d)&&v)&&t.slidePrev()):((u||w||c||b)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),(w||b)&&t.slideNext(),(u||c)&&t.slidePrev()),r("keyPress",m)}}function a(){t.keyboard.enabled||(n.addEventListener("keydown",l),t.keyboard.enabled=!0)}function p(){t.keyboard.enabled&&(n.removeEventListener("keydown",l),t.keyboard.enabled=!1)}s("init",()=>{t.params.keyboard.enabled&&a()}),s("destroy",()=>{t.keyboard.enabled&&p()}),Object.assign(t.keyboard,{enable:a,disable:p})}function Ut(i,t,e,s){return i.params.createElements&&Object.keys(s).forEach(r=>{if(!e[r]&&e.auto===!0){let n=D(i.el,`.${s[r]}`)[0];n||(n=Et("div",s[r]),n.className=s[r],i.el.append(n)),e[r]=n,t[r]=n}}),e}function Bi(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const n=u=>(Array.isArray(u)?u:[u]).filter(w=>!!w);function o(u){let w;return u&&typeof u=="string"&&t.isElement&&(w=t.el.querySelector(u),w)?w:(u&&(typeof u=="string"&&(w=[...document.querySelectorAll(u)]),t.params.uniqueNavElements&&typeof u=="string"&&w.length>1&&t.el.querySelectorAll(u).length===1&&(w=t.el.querySelector(u))),u&&!w?u:w)}function l(u,w){const g=t.params.navigation;u=n(u),u.forEach(d=>{d&&(d.classList[w?"add":"remove"](...g.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=w),t.params.watchOverflow&&t.enabled&&d.classList[t.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:u,prevEl:w}=t.navigation;if(t.params.loop){l(w,!1),l(u,!1);return}l(w,t.isBeginning&&!t.params.rewind),l(u,t.isEnd&&!t.params.rewind)}function p(u){u.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function h(u){u.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function v(){const u=t.params.navigation;if(t.params.navigation=Ut(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let w=o(u.nextEl),g=o(u.prevEl);Object.assign(t.navigation,{nextEl:w,prevEl:g}),w=n(w),g=n(g);const d=(c,b)=>{c&&c.addEventListener("click",b==="next"?h:p),!t.enabled&&c&&c.classList.add(...u.lockClass.split(" "))};w.forEach(c=>d(c,"next")),g.forEach(c=>d(c,"prev"))}function y(){let{nextEl:u,prevEl:w}=t.navigation;u=n(u),w=n(w);const g=(d,c)=>{d.removeEventListener("click",c==="next"?h:p),d.classList.remove(...t.params.navigation.disabledClass.split(" "))};u.forEach(d=>g(d,"next")),w.forEach(d=>g(d,"prev"))}s("init",()=>{t.params.navigation.enabled===!1?f():(v(),a())}),s("toEdge fromEdge lock unlock",()=>{a()}),s("destroy",()=>{y()}),s("enable disable",()=>{let{nextEl:u,prevEl:w}=t.navigation;u=n(u),w=n(w),[...u,...w].filter(g=>!!g).forEach(g=>g.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass))}),s("click",(u,w)=>{let{nextEl:g,prevEl:d}=t.navigation;g=n(g),d=n(d);const c=w.target;if(t.params.navigation.hideOnClick&&!d.includes(c)&&!g.includes(c)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===c||t.pagination.el.contains(c)))return;let b;g.length?b=g[0].classList.contains(t.params.navigation.hiddenClass):d.length&&(b=d[0].classList.contains(t.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),[...g,...d].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),v(),a()},f=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(t.navigation,{enable:m,disable:f,update:a,init:v,destroy:y})}function Y(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Vi(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:d=>d,formatFractionTotal:d=>d,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),t.pagination={el:null,bullets:[]};let o,l=0;const a=d=>(Array.isArray(d)?d:[d]).filter(c=>!!c);function p(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function h(d,c){const{bulletActiveClass:b}=t.params.pagination;d&&(d=d[`${c==="prev"?"previous":"next"}ElementSibling`],d&&(d.classList.add(`${b}-${c}`),d=d[`${c==="prev"?"previous":"next"}ElementSibling`],d&&d.classList.add(`${b}-${c}-${c}`)))}function v(d){const c=d.target.closest(Y(t.params.pagination.bulletClass));if(!c)return;d.preventDefault();const b=nt(c)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===b)return;const S=t.realIndex,T=t.getSlideIndexByData(b),L=t.getSlideIndexByData(t.realIndex);if(T>t.slides.length-t.loopedSlides){const M=t.activeIndex;t.loopFix({direction:T>L?"next":"prev",activeSlideIndex:T,slideTo:!1});const A=t.activeIndex;M===A&&t.slideToLoop(S,0,!1,!0)}t.slideToLoop(b)}else t.slideTo(b)}function y(){const d=t.rtl,c=t.params.pagination;if(p())return;let b=t.pagination.el;b=a(b);let S,T;const L=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,M=t.params.loop?Math.ceil(L/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(T=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,T=t.previousSnapIndex):(T=t.previousIndex||0,S=t.activeIndex||0),c.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let _,x,C;if(c.dynamicBullets&&(o=bt(A[0],t.isHorizontal()?"width":"height",!0),b.forEach(E=>{E.style[t.isHorizontal()?"width":"height"]=`${o*(c.dynamicMainBullets+4)}px`}),c.dynamicMainBullets>1&&T!==void 0&&(l+=S-(T||0),l>c.dynamicMainBullets-1?l=c.dynamicMainBullets-1:l<0&&(l=0)),_=Math.max(S-l,0),x=_+(Math.min(A.length,c.dynamicMainBullets)-1),C=(x+_)/2),A.forEach(E=>{const P=[...["","-next","-next-next","-prev","-prev-prev","-main"].map($=>`${c.bulletActiveClass}${$}`)].map($=>typeof $=="string"&&$.includes(" ")?$.split(" "):$).flat();E.classList.remove(...P)}),b.length>1)A.forEach(E=>{const P=nt(E);P===S?E.classList.add(...c.bulletActiveClass.split(" ")):t.isElement&&E.setAttribute("part","bullet"),c.dynamicBullets&&(P>=_&&P<=x&&E.classList.add(...`${c.bulletActiveClass}-main`.split(" ")),P===_&&h(E,"prev"),P===x&&h(E,"next"))});else{const E=A[S];if(E&&E.classList.add(...c.bulletActiveClass.split(" ")),t.isElement&&A.forEach((P,$)=>{P.setAttribute("part",$===S?"bullet-active":"bullet")}),c.dynamicBullets){const P=A[_],$=A[x];for(let H=_;H<=x;H+=1)A[H]&&A[H].classList.add(...`${c.bulletActiveClass}-main`.split(" "));h(P,"prev"),h($,"next")}}if(c.dynamicBullets){const E=Math.min(A.length,c.dynamicMainBullets+4),P=(o*E-o)/2-C*o,$=d?"right":"left";A.forEach(H=>{H.style[t.isHorizontal()?$:"top"]=`${P}px`})}}b.forEach((A,_)=>{if(c.type==="fraction"&&(A.querySelectorAll(Y(c.currentClass)).forEach(x=>{x.textContent=c.formatFractionCurrent(S+1)}),A.querySelectorAll(Y(c.totalClass)).forEach(x=>{x.textContent=c.formatFractionTotal(M)})),c.type==="progressbar"){let x;c.progressbarOpposite?x=t.isHorizontal()?"vertical":"horizontal":x=t.isHorizontal()?"horizontal":"vertical";const C=(S+1)/M;let E=1,P=1;x==="horizontal"?E=C:P=C,A.querySelectorAll(Y(c.progressbarFillClass)).forEach($=>{$.style.transform=`translate3d(0,0,0) scaleX(${E}) scaleY(${P})`,$.style.transitionDuration=`${t.params.speed}ms`})}c.type==="custom"&&c.renderCustom?(A.innerHTML=c.renderCustom(t,S+1,M),_===0&&r("paginationRender",A)):(_===0&&r("paginationRender",A),r("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](c.lockClass)})}function m(){const d=t.params.pagination;if(p())return;const c=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let b=t.pagination.el;b=a(b);let S="";if(d.type==="bullets"){let T=t.params.loop?Math.ceil(c/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&T>c&&(T=c);for(let L=0;L<T;L+=1)d.renderBullet?S+=d.renderBullet.call(t,L,d.bulletClass):S+=`<${d.bulletElement} ${t.isElement?'part="bullet"':""} class="${d.bulletClass}"></${d.bulletElement}>`}d.type==="fraction"&&(d.renderFraction?S=d.renderFraction.call(t,d.currentClass,d.totalClass):S=`<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`),d.type==="progressbar"&&(d.renderProgressbar?S=d.renderProgressbar.call(t,d.progressbarFillClass):S=`<span class="${d.progressbarFillClass}"></span>`),t.pagination.bullets=[],b.forEach(T=>{d.type!=="custom"&&(T.innerHTML=S||""),d.type==="bullets"&&t.pagination.bullets.push(...T.querySelectorAll(Y(d.bulletClass)))}),d.type!=="custom"&&r("paginationRender",b[0])}function f(){t.params.pagination=Ut(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const d=t.params.pagination;if(!d.el)return;let c;typeof d.el=="string"&&t.isElement&&(c=t.el.querySelector(d.el)),!c&&typeof d.el=="string"&&(c=[...document.querySelectorAll(d.el)]),c||(c=d.el),!(!c||c.length===0)&&(t.params.uniqueNavElements&&typeof d.el=="string"&&Array.isArray(c)&&c.length>1&&(c=[...t.el.querySelectorAll(d.el)],c.length>1&&(c=c.filter(b=>rt(b,".swiper")[0]===t.el)[0])),Array.isArray(c)&&c.length===1&&(c=c[0]),Object.assign(t.pagination,{el:c}),c=a(c),c.forEach(b=>{d.type==="bullets"&&d.clickable&&b.classList.add(...(d.clickableClass||"").split(" ")),b.classList.add(d.modifierClass+d.type),b.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.type==="bullets"&&d.dynamicBullets&&(b.classList.add(`${d.modifierClass}${d.type}-dynamic`),l=0,d.dynamicMainBullets<1&&(d.dynamicMainBullets=1)),d.type==="progressbar"&&d.progressbarOpposite&&b.classList.add(d.progressbarOppositeClass),d.clickable&&b.addEventListener("click",v),t.enabled||b.classList.add(d.lockClass)}))}function u(){const d=t.params.pagination;if(p())return;let c=t.pagination.el;c&&(c=a(c),c.forEach(b=>{b.classList.remove(d.hiddenClass),b.classList.remove(d.modifierClass+d.type),b.classList.remove(t.isHorizontal()?d.horizontalClass:d.verticalClass),d.clickable&&(b.classList.remove(...(d.clickableClass||"").split(" ")),b.removeEventListener("click",v))})),t.pagination.bullets&&t.pagination.bullets.forEach(b=>b.classList.remove(...d.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const d=t.params.pagination;let{el:c}=t.pagination;c=a(c),c.forEach(b=>{b.classList.remove(d.horizontalClass,d.verticalClass),b.classList.add(t.isHorizontal()?d.horizontalClass:d.verticalClass)})}),s("init",()=>{t.params.pagination.enabled===!1?g():(f(),m(),y())}),s("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),s("snapIndexChange",()=>{y()}),s("snapGridLengthChange",()=>{m(),y()}),s("destroy",()=>{u()}),s("enable disable",()=>{let{el:d}=t.pagination;d&&(d=a(d),d.forEach(c=>c.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),s("lock unlock",()=>{y()}),s("click",(d,c)=>{const b=c.target,S=a(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&b===t.navigation.nextEl||t.navigation.prevEl&&b===t.navigation.prevEl))return;const T=S[0].classList.contains(t.params.pagination.hiddenClass);r(T===!0?"paginationShow":"paginationHide"),S.forEach(L=>L.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=a(d),d.forEach(c=>c.classList.remove(t.params.pagination.paginationDisabledClass))),f(),m(),y()},g=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:d}=t.pagination;d&&(d=a(d),d.forEach(c=>c.classList.add(t.params.pagination.paginationDisabledClass))),u()};Object.assign(t.pagination,{enable:w,disable:g,render:m,update:y,init:f,destroy:u})}function Fi(i){const{effect:t,swiper:e,on:s,setTranslate:r,setTransition:n,overwriteParams:o,perspective:l,recreateShadows:a,getEffectParams:p}=i;s("beforeInit",()=>{if(e.params.effect!==t)return;e.classNames.push(`${e.params.containerModifierClass}${t}`),l&&l()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const v=o?o():{};Object.assign(e.params,v),Object.assign(e.originalParams,v)}),s("setTranslate",()=>{e.params.effect===t&&r()}),s("setTransition",(v,y)=>{e.params.effect===t&&n(y)}),s("transitionEnd",()=>{if(e.params.effect===t&&a){if(!p||!p().slideShadows)return;e.slides.forEach(v=>{v.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(y=>y.remove())}),a()}});let h;s("virtualUpdate",()=>{e.params.effect===t&&(e.slides.length||(h=!0),requestAnimationFrame(()=>{h&&e.slides&&e.slides.length&&(r(),h=!1)}))})}function Ri(i,t){const e=Tt(t);return e!==t&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}function ji(i){let{swiper:t,duration:e,transformElements:s,allSlides:r}=i;const{activeIndex:n}=t,o=l=>l.parentElement?l.parentElement:t.slides.filter(p=>p.shadowRoot&&p.shadowRoot===l.parentNode)[0];if(t.params.virtualTranslate&&e!==0){let l=!1,a;r?a=s:a=s.filter(p=>{const h=p.classList.contains("swiper-slide-transform")?o(p):p;return t.getSlideIndex(h)===n}),a.forEach(p=>{Pe(p,()=>{if(l||!t||t.destroyed)return;l=!0,t.animating=!1;const h=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(h)})})}}function Wi(i,t,e){const s=`swiper-slide-shadow${e?`-${e}`:""}${i?` swiper-slide-shadow-${i}`:""}`,r=Tt(t);let n=r.querySelector(`.${s.split(" ").join(".")}`);return n||(n=Et("div",s.split(" ")),r.append(n)),n}function Xi(i){let{swiper:t,extendParams:e,on:s}=i;e({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const r=l=>typeof l=="string"?l:`${l}px`;Fi({effect:"creative",swiper:t,on:s,setTranslate:()=>{const{slides:l,wrapperEl:a,slidesSizesGrid:p}=t,h=t.params.creativeEffect,{progressMultiplier:v}=h,y=t.params.centeredSlides;if(y){const m=p[0]/2-t.params.slidesOffsetBefore||0;a.style.transform=`translateX(calc(50% - ${m}px))`}for(let m=0;m<l.length;m+=1){const f=l[m],u=f.progress,w=Math.min(Math.max(f.progress,-h.limitProgress),h.limitProgress);let g=w;y||(g=Math.min(Math.max(f.originalProgress,-h.limitProgress),h.limitProgress));const d=f.swiperSlideOffset,c=[t.params.cssMode?-d-t.translate:-d,0,0],b=[0,0,0];let S=!1;t.isHorizontal()||(c[1]=c[0],c[0]=0);let T={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};w<0?(T=h.next,S=!0):w>0&&(T=h.prev,S=!0),c.forEach((E,P)=>{c[P]=`calc(${E}px + (${r(T.translate[P])} * ${Math.abs(w*v)}))`}),b.forEach((E,P)=>{b[P]=T.rotate[P]*Math.abs(w*v)}),f.style.zIndex=-Math.abs(Math.round(u))+l.length;const L=c.join(", "),M=`rotateX(${b[0]}deg) rotateY(${b[1]}deg) rotateZ(${b[2]}deg)`,A=g<0?`scale(${1+(1-T.scale)*g*v})`:`scale(${1-(1-T.scale)*g*v})`,_=g<0?1+(1-T.opacity)*g*v:1-(1-T.opacity)*g*v,x=`translate3d(${L}) ${M} ${A}`;if(S&&T.shadow||!S){let E=f.querySelector(".swiper-slide-shadow");if(!E&&T.shadow&&(E=Wi("creative",f)),E){const P=h.shadowPerProgress?w*(1/h.limitProgress):w;E.style.opacity=Math.min(Math.max(Math.abs(P),0),1)}}const C=Ri(h,f);C.style.transform=x,C.style.opacity=_,T.origin&&(C.style.transformOrigin=T.origin)}},setTransition:l=>{const a=t.slides.map(p=>Tt(p));a.forEach(p=>{p.style.transitionDuration=`${l}ms`,p.querySelectorAll(".swiper-slide-shadow").forEach(h=>{h.style.transitionDuration=`${l}ms`})}),ji({swiper:t,duration:l,transformElements:a,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}const Yi=new z(".swiper-creative",{modules:[Bi,Vi,Gi,Xi],initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},effect:"creative",creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:500,spaceBetween:16,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,breakpoints:{576:{pagination:{dynamicBullets:!1}}}}),Ui=i=>Yi.slideTo(i);document.querySelectorAll(".slide-to").forEach((i,t)=>i.addEventListener("click",()=>Ui(t)));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt;const at=window,W=at.trustedTypes,kt=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,St="$lit$",G=`lit$${(Math.random()+"").slice(9)}$`,Kt="?"+G,Ki=`<${Kt}>`,j=document,lt=()=>j.createComment(""),K=i=>i===null||typeof i!="object"&&typeof i!="function",Qt=Array.isArray,Qi=i=>Qt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",gt=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,qt=/>/g,V=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Ht=/"/g,Zt=/^(?:script|style|textarea|title)$/i,Q=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Nt=new WeakMap,F=j.createTreeWalker(j,129,null,!1);function Jt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}const Zi=(i,t)=>{const e=i.length-1,s=[];let r,n=t===2?"<svg>":"",o=U;for(let l=0;l<e;l++){const a=i[l];let p,h,v=-1,y=0;for(;y<a.length&&(o.lastIndex=y,h=o.exec(a),h!==null);)y=o.lastIndex,o===U?h[1]==="!--"?o=zt:h[1]!==void 0?o=qt:h[2]!==void 0?(Zt.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=V):h[3]!==void 0&&(o=V):o===V?h[0]===">"?(o=r??U,v=-1):h[1]===void 0?v=-2:(v=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?V:h[3]==='"'?Ht:Dt):o===Ht||o===Dt?o=V:o===zt||o===qt?o=U:(o=V,r=void 0);const m=o===V&&i[l+1].startsWith("/>")?" ":"";n+=o===U?a+Ki:v>=0?(s.push(p),a.slice(0,v)+St+a.slice(v)+G+m):a+G+(v===-2?(s.push(void 0),l):m)}return[Jt(i,n+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class Z{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[p,h]=Zi(t,e);if(this.el=Z.createElement(p,s),F.currentNode=this.el.content,e===2){const v=this.el.content,y=v.firstChild;y.remove(),v.append(...y.childNodes)}for(;(r=F.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const v=[];for(const y of r.getAttributeNames())if(y.endsWith(St)||y.startsWith(G)){const m=h[o++];if(v.push(y),m!==void 0){const f=r.getAttribute(m.toLowerCase()+St).split(G),u=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:u[2],strings:f,ctor:u[1]==="."?ts:u[1]==="?"?is:u[1]==="@"?ss:dt})}else a.push({type:6,index:n})}for(const y of v)r.removeAttribute(y)}if(Zt.test(r.tagName)){const v=r.textContent.split(G),y=v.length-1;if(y>0){r.textContent=W?W.emptyScript:"";for(let m=0;m<y;m++)r.append(v[m],lt()),F.nextNode(),a.push({type:2,index:++n});r.append(v[y],lt())}}}else if(r.nodeType===8)if(r.data===Kt)a.push({type:2,index:n});else{let v=-1;for(;(v=r.data.indexOf(G,v+1))!==-1;)a.push({type:7,index:n}),v+=G.length-1}n++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function X(i,t,e=i,s){var r,n,o,l;if(t===Q)return t;let a=s!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[s]:e._$Cl;const p=K(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==p&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),p===void 0?a=void 0:(a=new p(i),a._$AT(i,e,s)),s!==void 0?((o=(l=e)._$Co)!==null&&o!==void 0?o:l._$Co=[])[s]=a:e._$Cl=a),a!==void 0&&(t=X(i,a._$AS(i,t.values),a,s)),t}class Ji{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:r}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:j).importNode(s,!0);F.currentNode=n;let o=F.nextNode(),l=0,a=0,p=r[0];for(;p!==void 0;){if(l===p.index){let h;p.type===2?h=new ot(o,o.nextSibling,this,t):p.type===1?h=new p.ctor(o,p.name,p.strings,this,t):p.type===6&&(h=new ns(o,this,t)),this._$AV.push(h),p=r[++a]}l!==(p==null?void 0:p.index)&&(o=F.nextNode(),l++)}return F.currentNode=j,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ot{constructor(t,e,s,r){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),K(t)?t===I||t==null||t===""?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==Q&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qi(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&K(this._$AH)?this._$AA.nextSibling.data=t:this.$(j.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Z.createElement(Jt(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const o=new Ji(n,this),l=o.u(this.options);o.v(s),this.$(l),this._$AH=o}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new Z(t)),e}T(t){Qt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const n of t)r===e.length?e.push(s=new ot(this.k(lt()),this.k(lt()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class dt{constructor(t,e,s,r,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){const n=this.strings;let o=!1;if(n===void 0)t=X(this,t,e,0),o=!K(t)||t!==this._$AH&&t!==Q,o&&(this._$AH=t);else{const l=t;let a,p;for(t=n[0],a=0;a<n.length-1;a++)p=X(this,l[s+a],e,a),p===Q&&(p=this._$AH[a]),o||(o=!K(p)||p!==this._$AH[a]),p===I?t=I:t!==I&&(t+=(p??"")+n[a+1]),this._$AH[a]=p}o&&!r&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ts extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const es=W?W.emptyScript:"";class is extends dt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,es):this.element.removeAttribute(this.name)}}class ss extends dt{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=X(this,t,e,0))!==null&&s!==void 0?s:I)===Q)return;const r=this._$AH,n=t===I&&r!==I||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==I&&(r===I||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class ns{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const Gt=at.litHtmlPolyfillSupport;Gt==null||Gt(Z,ot),((vt=at.litHtmlVersions)!==null&&vt!==void 0?vt:at.litHtmlVersions=[]).push("2.8.0");function rs(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var te={exports:{}};(function(i){(function(t){var e=0,s=function r(n,o){var l=this,a=this,p=!1;if(Array.isArray(n))return!!n.length&&n.map(function(f){return new r(f,o)});var h={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},o);var f=typeof n=="string";this.container=f?document.querySelector(n):n,this.createDefinitions(),a.attachEvents()},createDefinitions:function(){var f=this,u=this.options,w=u.elementClass,g=u.openOnInit,d=u.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(m(w));this.elements=Array.from(d).filter(function(c){return c.classList&&c.classList.contains(w)}),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter(function(c){return!c.classList.contains("js-enabled")}).forEach(function(c){c.classList.add("js-enabled"),f.generateIDs(c),f.setARIA(c),f.setTransition(c);var b=f.elements.indexOf(c);e++,g.includes(b)?f.showElement(c,!1):f.closeElement(c,!1)})},setTransition:function(f){var u=arguments.length>1&&arguments[1]!==void 0&&arguments[1],w=this.options,g=w.duration,d=w.panelClass,c=f.querySelector(m(d)),b=v("transitionDuration");c.style[b]=u?null:"".concat(g,"ms")},generateIDs:function(f){var u=this.options,w=u.triggerClass,g=u.panelClass,d=f.querySelector(m(w)),c=f.querySelector(m(g));f.setAttribute("id",f.id||"ac-".concat(e)),d.setAttribute("id",d.id||"ac-trigger-".concat(e)),c.setAttribute("id",c.id||"ac-panel-".concat(e))},removeIDs:function(f){var u=this.options,w=u.triggerClass,g=u.panelClass,d=f.querySelector(m(w)),c=f.querySelector(m(g));f.id.startsWith("ac-")&&f.removeAttribute("id"),d.id.startsWith("ac-")&&d.removeAttribute("id"),c.id.startsWith("ac-")&&c.removeAttribute("id")},setARIA:function(f){var u=this.options,w=u.ariaEnabled,g=u.triggerClass,d=u.panelClass;if(w){var c=f.querySelector(m(g)),b=f.querySelector(m(d));c.setAttribute("role","button"),c.setAttribute("aria-controls",b.id),c.setAttribute("aria-disabled",!1),c.setAttribute("aria-expanded",!1),b.setAttribute("role","region"),b.setAttribute("aria-labelledby",c.id)}},updateARIA:function(f,u){var w=u.ariaExpanded,g=u.ariaDisabled,d=this.options,c=d.ariaEnabled,b=d.triggerClass;if(c){var S=f.querySelector(m(b));S.setAttribute("aria-expanded",w),S.setAttribute("aria-disabled",g)}},removeARIA:function(f){var u=this.options,w=u.ariaEnabled,g=u.triggerClass,d=u.panelClass;if(w){var c=f.querySelector(m(g)),b=f.querySelector(m(d));c.removeAttribute("role"),c.removeAttribute("aria-controls"),c.removeAttribute("aria-disabled"),c.removeAttribute("aria-expanded"),b.removeAttribute("role"),b.removeAttribute("aria-labelledby")}},focus:function(f,u){f.preventDefault();var w=this.options.triggerClass;u.querySelector(m(w)).focus()},focusFirstElement:function(f){this.focus(f,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(f){this.focus(f,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(f){var u=this.currFocusedIdx+1;if(u>this.elements.length-1)return this.focusFirstElement(f);this.focus(f,this.elements[u]),this.currFocusedIdx=u},focusPrevElement:function(f){var u=this.currFocusedIdx-1;if(u<0)return this.focusLastElement(f);this.focus(f,this.elements[u]),this.currFocusedIdx=u},showElement:function(f){var u=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],w=this.options,g=w.panelClass,d=w.activeClass,c=w.collapse,b=w.beforeOpen;u&&b(f);var S=f.querySelector(m(g)),T=S.scrollHeight;f.classList.add(d),requestAnimationFrame(function(){requestAnimationFrame(function(){S.style.height=u?"".concat(T,"px"):"auto"})}),this.updateARIA(f,{ariaExpanded:!0,ariaDisabled:!c})},closeElement:function(f){var u=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],w=this.options,g=w.panelClass,d=w.activeClass,c=w.beforeClose,b=f.querySelector(m(g)),S=b.scrollHeight;f.classList.remove(d),u?(c(f),requestAnimationFrame(function(){b.style.height="".concat(S,"px"),requestAnimationFrame(function(){b.style.height=0})})):b.style.height=0,this.updateARIA(f,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(f){var u=this.options,w=u.activeClass,g=u.collapse,d=f.classList.contains(w);if(!d||g)return d?this.closeElement(f):this.showElement(f)},closeElements:function(){var f=this,u=this.options,w=u.activeClass;u.showMultiple||this.elements.forEach(function(g,d){g.classList.contains(w)&&d!==f.currFocusedIdx&&f.closeElement(g)})},handleClick:function(f){var u=this,w=f.currentTarget;this.elements.forEach(function(g,d){g.contains(w)&&f.target.nodeName!=="A"&&(u.currFocusedIdx=d,u.closeElements(),u.focus(f,g),u.toggleElement(g))})},handleKeydown:function(f){switch(f.key){case"ArrowUp":return this.focusPrevElement(f);case"ArrowDown":return this.focusNextElement(f);case"Home":return this.focusFirstElement(f);case"End":return this.focusLastElement(f);default:return null}},handleFocus:function(f){var u=f.currentTarget,w=this.elements.find(function(g){return g.contains(u)});this.currFocusedIdx=this.elements.indexOf(w)},handleTransitionEnd:function(f){if(f.stopPropagation(),f.propertyName==="height"){var u=this.options,w=u.onOpen,g=u.onClose,d=f.currentTarget,c=parseInt(d.style.height),b=this.elements.find(function(S){return S.contains(d)});c>0?(d.style.height="auto",w(b)):g(b)}}};this.attachEvents=function(){if(!p){var f=h.options,u=f.triggerClass,w=f.panelClass;h.handleClick=h.handleClick.bind(h),h.handleKeydown=h.handleKeydown.bind(h),h.handleFocus=h.handleFocus.bind(h),h.handleTransitionEnd=h.handleTransitionEnd.bind(h),h.elements.forEach(function(g){var d=g.querySelector(m(u)),c=g.querySelector(m(w));d.addEventListener("click",h.handleClick),d.addEventListener("keydown",h.handleKeydown),d.addEventListener("focus",h.handleFocus),c.addEventListener("webkitTransitionEnd",h.handleTransitionEnd),c.addEventListener("transitionend",h.handleTransitionEnd)}),p=!0}},this.detachEvents=function(){if(p){var f=h.options,u=f.triggerClass,w=f.panelClass;h.elements.forEach(function(g){var d=g.querySelector(m(u)),c=g.querySelector(m(w));d.removeEventListener("click",h.handleClick),d.removeEventListener("keydown",h.handleKeydown),d.removeEventListener("focus",h.handleFocus),c.removeEventListener("webkitTransitionEnd",h.handleTransitionEnd),c.removeEventListener("transitionend",h.handleTransitionEnd)}),p=!1}},this.toggle=function(f){var u=h.elements[f];u&&h.toggleElement(u)},this.open=function(f){var u=h.elements[f];u&&h.showElement(u)},this.openAll=function(){var f=h.options,u=f.activeClass,w=f.onOpen;h.elements.forEach(function(g){g.classList.contains(u)||(h.showElement(g,!1),w(g))})},this.close=function(f){var u=h.elements[f];u&&h.closeElement(u)},this.closeAll=function(){var f=h.options,u=f.activeClass,w=f.onClose;h.elements.forEach(function(g){g.classList.contains(u)&&(h.closeElement(g,!1),w(g))})},this.destroy=function(){l.detachEvents(),l.openAll(),h.elements.forEach(function(f){h.removeIDs(f),h.removeARIA(f),h.setTransition(f,!0)}),p=!0},this.update=function(){h.createDefinitions(),l.detachEvents(),l.attachEvents()};var v=function(f){return typeof document.documentElement.style[f]=="string"?f:(f=y(f),f="webkit".concat(f))},y=function(f){return f.charAt(0).toUpperCase()+f.slice(1)},m=function(f){return".".concat(CSS.escape(f))};h.init()};i.exports!==void 0?i.exports=s:t.Accordion=s})(window)})(te);var as=te.exports;const ls=rs(as);new ls(".sidebar",{duration:200,showMultiple:!0});class os{constructor(){J(this,"observer",t=>new ResizeObserver(e=>e.forEach(s=>{const r=s.borderBoxSize[0].inlineSize;t.forEach(n=>n.style.maxWidth=`${r}px`)})));J(this,"initWith",t=>{t.forEach(([e,s],r)=>{const n=document.querySelector(`.${e}`),o=document.querySelectorAll(`.${s}`),l=r+1;n&&o?this.observer(o).observe(n):console.error(`SizeSetter: there is no master-${l} or slave-${l}`)})})}}class ds{constructor(){J(this,"initWith",(t,e)=>{for(const s in e)document.querySelectorAll(`${s}`).forEach(r=>r.setAttribute(`${t}`,`${e[s]}`))})}}const cs=i=>{i.forEach(t=>{const e=t.querySelectorAll("thead th:not(:first-child)"),s=t.querySelectorAll("tbody th");t.querySelectorAll("tbody tr").forEach((n,o)=>{n.querySelectorAll("td").forEach((a,p)=>{const h=()=>{e[p].classList.add("clr-accent"),s[o].classList.add("clr-accent")},v=()=>{e[p].classList.remove("clr-accent"),s[o].classList.remove("clr-accent")},y=g=>{switch(g){case!0:a.addEventListener("mouseover",h),a.addEventListener("mouseout",v);break;case!1:a.removeEventListener("mouseover",h),a.removeEventListener("mouseout",v);break}},m=g=>window.innerWidth>=g&&y(!0),f=g=>y(!!g),u=g=>{window.matchMedia(`(min-width: ${g}px)`).addEventListener("change",c=>f(c.matches))};(g=>{m(g),u(g)})(992)})})})};cs(document.querySelectorAll("table"));const us=new ds,fs=i=>{i.matches&&(us.initWith("role",{table:"table",caption:"caption",thead:"rowgroup",tbody:"rowgroup",tfoot:"rowgroup",tr:"row",td:"cell",th:"columnheader","th[scope=row]":"rowheader"}),console.log("!!!"))},ps=i=>{window.matchMedia(`(max-width: ${i}px)`).addEventListener("change",fs)};ps(992);const hs=new os;hs.initWith([["master-1","slave-1"]]);const R=document.querySelector(".sidebar"),Bt=document.querySelector(".sidebar-toggle");let Vt=null;Bt.addEventListener("click",()=>{Bt.classList.toggle("active"),R.classList.contains("isOpen")?(R.classList.remove("isOpen"),clearTimeout(Vt)):(R.style.display="initial",Vt=setTimeout(()=>requestAnimationFrame(()=>R.classList.add("isOpen")),.1))});R.addEventListener("transitionend",()=>!R.classList.contains("isOpen")&&(R.style.display="none"));const Ct=document.querySelector('[href="mailto:nospam@google.com"]');let Ft=null;const ms=()=>Ct.setAttribute("href","mailto:KrivoshlykovNN@yandex.ru"),vs=()=>Ct.setAttribute("href","mailto:nospampls@google.com"),gs=()=>{clearTimeout(Ft),ms(),Ft=setTimeout(vs,1)};Ct.addEventListener("click",gs);console.log(`%cCoded by ✨Nazhdaque✨
https://www.frontendmentor.io/profile/Nazhdaque/solutions`,"background: #222; color: chartreuse; font-size: 1.25rem");
