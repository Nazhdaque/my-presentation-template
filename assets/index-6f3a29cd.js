var re=Object.defineProperty;var ae=(i,t,e)=>t in i?re(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var nt=(i,t,e)=>(ae(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const le=`<li class="sidebar-item">
	<h2 class="ac-header sidebar-item__ttl">
		<button class="sidebar-item__btn marker ellipsis-container slide-to"
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
		<button class="ac-trigger sidebar-item__btn marker ellipsis-container"
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
					 class="marker sidebar-item__link ellipsis-container slide-to">
					<span class="ellipsis">Lorem ipsum dolor.</span>
				</a>
			</li>

			<li>
				<a href="#"
					 class="marker sidebar-item__link ellipsis-container slide-to">
					<span class="ellipsis">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						inventore.
					</span>
				</a>
			</li>

			<li>
				<a href="#"
					 class="marker sidebar-item__link ellipsis-container slide-to">
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
		<button class="sidebar-item__btn marker ellipsis-container slide-to"
						type="button">
			<span class="ellipsis">Ссылка на слайд</span>
			<svg class="chevron chevron-right">
				<use href="images/chevron.svg#chevron"></use>
			</svg>
		</button>
	</h2>
</li>`,oe=`<li class="swiper-slide slide-1">
	<div class="layout-center">
		<div class="slide-content">
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
		<div class="slide-content">
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
		<div class="slide-content">
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
		<div class="slide-content">
			<div class="slide-bg spike"></div>
			<h2 class="heading fs-xl width-x">Lorem ipsum dolor sit</h2>

			<ul class="grid-x cards-x cards-1"
					style="--cards-item-cols: 2fr 3fr; --card-img-shadow: var(--img-shadow-right)">
				<li>
					<div class="img-box circle">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>

					<div class="card-body">
						<h3 class="card-head caps">Lorem ipsum</h3>
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

					<div class="card-body">
						<h3 class="card-head caps">Lorem ipsum</h3>
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
					<div class="card-body">
						<h3 class="card-head caps">Lorem ipsum</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ipsum rem quod quisquam
							asperiores eaque porro vel unde? Itaque?</p>
					</div>
				</li>
			</ul>

			<ul class="grid-x cards-x cards-2"
					style="--cards-item-rows: 2fr 1fr">
				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
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
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
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
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quod, tempore labore asperiores
							alias facilis odio non eaque vitae sed error quam culpa quae.</p>
					</div>
				</li>
			</ul>

			<ul class="grid-x cards-x cards-2 cards-w-bg"
					style="--cards-item-cols: 2fr 3fr; --card-body-padding: var(--for-img-left); --card-img-shadow: var(--img-shadow-right)">
				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
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
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
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
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quod, tempore labore asperiores
							alias facilis odio non eaque vitae sed error quam culpa quae.</p>
					</div>
				</li>
			</ul>

			<ul class="grid-x cards-x cards-2 cards-w-bg">
				<li>
					<div class="img-box">
						<img class="o-fit-cover"
								 src="images/demo-img-720p.webp"
								 alt="">
					</div>
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
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
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
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
					<div class="card-head">
						<h3 class="caps">Lorem ipsum</h3>
					</div>
					<div class="card-body">
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, quod, tempore labore asperiores
							alias facilis odio non eaque vitae sed error quam culpa quae.</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</li>`,fe=`<li class="swiper-slide slide-11">
	<div class="layout-center">
		<div class="slide-content">
			<div class="slide-bg circle w-img"></div>
		</div>
	</div>
</li>`,pe=document.querySelector(".sidebar");pe.insertAdjacentHTML("beforeend",le);const st=document.querySelector(".swiper-wrapper");st.insertAdjacentHTML("beforeend",oe);st.insertAdjacentHTML("beforeend",de);st.insertAdjacentHTML("beforeend",ce);st.insertAdjacentHTML("beforeend",ue);st.insertAdjacentHTML("beforeend",fe);function It(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function At(i,t){i===void 0&&(i={}),t===void 0&&(t={}),Object.keys(t).forEach(e=>{typeof i[e]>"u"?i[e]=t[e]:It(t[e])&&It(i[e])&&Object.keys(t[e]).length>0&&At(i[e],t[e])})}const Wt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function N(){const i=typeof document<"u"?document:{};return At(i,Wt),i}const he={document:Wt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function _(){const i=typeof window<"u"?window:{};return At(i,he),i}function me(i){const t=i;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function J(i,t){return t===void 0&&(t=0),setTimeout(i,t)}function q(){return Date.now()}function ve(i){const t=_();let e;return t.getComputedStyle&&(e=t.getComputedStyle(i,null)),!e&&i.currentStyle&&(e=i.currentStyle),e||(e=i.style),e}function ge(i,t){t===void 0&&(t="x");const e=_();let s,r,n;const o=ve(i);return e.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(l=>l.replace(",",".")).join(", ")),n=new e.WebKitCSSMatrix(r==="none"?"":r)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),t==="x"&&(e.WebKitCSSMatrix?r=n.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),t==="y"&&(e.WebKitCSSMatrix?r=n.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function rt(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function we(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function k(){const i=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let e=1;e<arguments.length;e+=1){const s=e<0||arguments.length<=e?void 0:arguments[e];if(s!=null&&!we(s)){const r=Object.keys(Object(s)).filter(n=>t.indexOf(n)<0);for(let n=0,o=r.length;n<o;n+=1){const l=r[n],a=Object.getOwnPropertyDescriptor(s,l);a!==void 0&&a.enumerable&&(rt(i[l])&&rt(s[l])?s[l].__swiper__?i[l]=s[l]:k(i[l],s[l]):!rt(i[l])&&rt(s[l])?(i[l]={},s[l].__swiper__?i[l]=s[l]:k(i[l],s[l])):i[l]=s[l])}}}return i}function at(i,t,e){i.style.setProperty(t,e)}function Xt(i){let{swiper:t,targetPosition:e,side:s}=i;const r=_(),n=-t.translate;let o=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(t.cssModeFrameID);const u=e>n?"next":"prev",h=(y,m)=>u==="next"&&y>=m||u==="prev"&&y<=m,g=()=>{l=new Date().getTime(),o===null&&(o=l);const y=Math.max(Math.min((l-o)/a,1),0),m=.5-Math.cos(y*Math.PI)/2;let p=n+m*(e-n);if(h(p,e)&&(p=e),t.wrapperEl.scrollTo({[s]:p}),h(p,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[s]:p})}),r.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=r.requestAnimationFrame(g)};g()}function Lt(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function H(i,t){return t===void 0&&(t=""),[...i.children].filter(e=>e.matches(t))}function Pt(i,t){t===void 0&&(t=[]);const e=document.createElement(i);return e.classList.add(...Array.isArray(t)?t:[t]),e}function be(i){const t=_(),e=N(),s=i.getBoundingClientRect(),r=e.body,n=i.clientTop||r.clientTop||0,o=i.clientLeft||r.clientLeft||0,l=i===t?t.scrollY:i.scrollTop,a=i===t?t.scrollX:i.scrollLeft;return{top:s.top+l-n,left:s.left+a-o}}function ye(i,t){const e=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function Se(i,t){const e=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;t?s.matches(t)&&e.push(s):e.push(s),i=s}return e}function B(i,t){return _().getComputedStyle(i,null).getPropertyValue(t)}function ot(i){let t=i,e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function dt(i,t){const e=[];let s=i.parentElement;for(;s;)t?s.matches(t)&&e.push(s):e.push(s),s=s.parentElement;return e}function xe(i,t){function e(s){s.target===i&&(t.call(i,s),i.removeEventListener("transitionend",e))}t&&i.addEventListener("transitionend",e)}function Tt(i,t,e){const s=_();return e?i[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let mt;function Te(){const i=_(),t=N();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&t instanceof i.DocumentTouch)}}function Yt(){return mt||(mt=Te()),mt}let vt;function Ee(i){let{userAgent:t}=i===void 0?{}:i;const e=Yt(),s=_(),r=s.navigator.platform,n=t||s.navigator.userAgent,o={ios:!1,android:!1},l=s.screen.width,a=s.screen.height,u=n.match(/(Android);?[\s\/]+([\d.]+)?/);let h=n.match(/(iPad).*OS\s([\d_]+)/);const g=n.match(/(iPod)(.*OS\s([\d_]+))?/),y=!h&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let p=r==="MacIntel";const f=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&p&&e.touch&&f.indexOf(`${l}x${a}`)>=0&&(h=n.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),p=!1),u&&!m&&(o.os="android",o.android=!0),(h||y||g)&&(o.os="ios",o.ios=!0),o}function Ce(i){return i===void 0&&(i={}),vt||(vt=Ee(i)),vt}let gt;function Ae(){const i=_();let t=!1;function e(){const s=i.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(e()){const s=String(i.navigator.userAgent);if(s.includes("Version/")){const[r,n]=s.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));t=r<16||r===16&&n<2}}return{isSafari:t||e(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function Le(){return gt||(gt=Ae()),gt}function Pe(i){let{swiper:t,on:e,emit:s}=i;const r=_();let n=null,o=null;const l=()=>{!t||t.destroyed||!t.initialized||(s("beforeResize"),s("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(n=new ResizeObserver(g=>{o=r.requestAnimationFrame(()=>{const{width:y,height:m}=t;let p=y,f=m;g.forEach(b=>{let{contentBoxSize:v,contentRect:c,target:d}=b;d&&d!==t.el||(p=c?c.width:(v[0]||v).inlineSize,f=c?c.height:(v[0]||v).blockSize)}),(p!==y||f!==m)&&l()})}),n.observe(t.el))},u=()=>{o&&r.cancelAnimationFrame(o),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null)},h=()=>{!t||t.destroyed||!t.initialized||s("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",l),r.addEventListener("orientationchange",h)}),e("destroy",()=>{u(),r.removeEventListener("resize",l),r.removeEventListener("orientationchange",h)})}function Me(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n=[],o=_(),l=function(h,g){g===void 0&&(g={});const y=o.MutationObserver||o.WebkitMutationObserver,m=new y(p=>{if(t.__preventObserver__)return;if(p.length===1){r("observerUpdate",p[0]);return}const f=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(f):o.setTimeout(f,0)});m.observe(h,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:typeof g.childList>"u"?!0:g.childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),n.push(m)},a=()=>{if(t.params.observer){if(t.params.observeParents){const h=dt(t.hostEl);for(let g=0;g<h.length;g+=1)l(h[g])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},u=()=>{n.forEach(h=>{h.disconnect()}),n.splice(0,n.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",a),s("destroy",u)}var $e={on(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const r=e?"unshift":"push";return i.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][r](t)}),s},once(i,t,e){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function r(){s.off(i,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];t.apply(s,o)}return r.__emitterProxy=t,s.on(i,r,e)},onAny(i,t){const e=this;if(!e.eventsListeners||e.destroyed||typeof i!="function")return e;const s=t?"unshift":"push";return e.eventsAnyListeners.indexOf(i)<0&&e.eventsAnyListeners[s](i),e},offAny(i){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const e=t.eventsAnyListeners.indexOf(i);return e>=0&&t.eventsAnyListeners.splice(e,1),t},off(i,t){const e=this;return!e.eventsListeners||e.destroyed||!e.eventsListeners||i.split(" ").forEach(s=>{typeof t>"u"?e.eventsListeners[s]=[]:e.eventsListeners[s]&&e.eventsListeners[s].forEach((r,n)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&e.eventsListeners[s].splice(n,1)})}),e},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let t,e,s;for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return typeof n[0]=="string"||Array.isArray(n[0])?(t=n[0],e=n.slice(1,n.length),s=i):(t=n[0].events,e=n[0].data,s=n[0].context||i),e.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(u=>{u.apply(s,[a,...e])}),i.eventsListeners&&i.eventsListeners[a]&&i.eventsListeners[a].forEach(u=>{u.apply(s,e)})}),i}};function Ie(){const i=this;let t,e;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?t=i.params.width:t=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?e=i.params.height:e=s.clientHeight,!(t===0&&i.isHorizontal()||e===0&&i.isVertical())&&(t=t-parseInt(B(s,"padding-left")||0,10)-parseInt(B(s,"padding-right")||0,10),e=e-parseInt(B(s,"padding-top")||0,10)-parseInt(B(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(e)&&(e=0),Object.assign(i,{width:t,height:e,size:i.isHorizontal()?t:e}))}function Oe(){const i=this;function t(x){return i.isHorizontal()?x:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[x]}function e(x,A){return parseFloat(x.getPropertyValue(t(A))||0)}const s=i.params,{wrapperEl:r,slidesEl:n,size:o,rtlTranslate:l,wrongRTL:a}=i,u=i.virtual&&s.virtual.enabled,h=u?i.virtual.slides.length:i.slides.length,g=H(n,`.${i.params.slideClass}, swiper-slide`),y=u?i.virtual.slides.length:g.length;let m=[];const p=[],f=[];let b=s.slidesOffsetBefore;typeof b=="function"&&(b=s.slidesOffsetBefore.call(i));let v=s.slidesOffsetAfter;typeof v=="function"&&(v=s.slidesOffsetAfter.call(i));const c=i.snapGrid.length,d=i.slidesGrid.length;let w=s.spaceBetween,S=-b,C=0,L=0;if(typeof o>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*o:typeof w=="string"&&(w=parseFloat(w)),i.virtualSize=-w,g.forEach(x=>{l?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(at(r,"--swiper-centered-offset-before",""),at(r,"--swiper-centered-offset-after",""));const M=s.grid&&s.grid.rows>1&&i.grid;M&&i.grid.initSlides(y);let E;const $=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(x=>typeof s.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<y;x+=1){E=0;let A;if(g[x]&&(A=g[x]),M&&i.grid.updateSlide(x,A,y,t),!(g[x]&&B(A,"display")==="none")){if(s.slidesPerView==="auto"){$&&(g[x].style[t("width")]="");const T=getComputedStyle(A),P=A.style.transform,I=A.style.webkitTransform;if(P&&(A.style.transform="none"),I&&(A.style.webkitTransform="none"),s.roundLengths)E=i.isHorizontal()?Tt(A,"width",!0):Tt(A,"height",!0);else{const D=e(T,"width"),ht=e(T,"padding-left"),Y=e(T,"padding-right"),U=e(T,"margin-left"),K=e(T,"margin-right"),$t=T.getPropertyValue("box-sizing");if($t&&$t==="border-box")E=D+U+K;else{const{clientWidth:se,offsetWidth:ne}=A;E=D+ht+Y+U+K+(ne-se)}}P&&(A.style.transform=P),I&&(A.style.webkitTransform=I),s.roundLengths&&(E=Math.floor(E))}else E=(o-(s.slidesPerView-1)*w)/s.slidesPerView,s.roundLengths&&(E=Math.floor(E)),g[x]&&(g[x].style[t("width")]=`${E}px`);g[x]&&(g[x].swiperSlideSize=E),f.push(E),s.centeredSlides?(S=S+E/2+C/2+w,C===0&&x!==0&&(S=S-o/2-w),x===0&&(S=S-o/2-w),Math.abs(S)<1/1e3&&(S=0),s.roundLengths&&(S=Math.floor(S)),L%s.slidesPerGroup===0&&m.push(S),p.push(S)):(s.roundLengths&&(S=Math.floor(S)),(L-Math.min(i.params.slidesPerGroupSkip,L))%i.params.slidesPerGroup===0&&m.push(S),p.push(S),S=S+E+w),i.virtualSize+=E+w,C=E,L+=1}}if(i.virtualSize=Math.max(i.virtualSize,o)+v,l&&a&&(s.effect==="slide"||s.effect==="coverflow")&&(r.style.width=`${i.virtualSize+w}px`),s.setWrapperSize&&(r.style[t("width")]=`${i.virtualSize+w}px`),M&&i.grid.updateWrapperSize(E,m,t),!s.centeredSlides){const x=[];for(let A=0;A<m.length;A+=1){let T=m[A];s.roundLengths&&(T=Math.floor(T)),m[A]<=i.virtualSize-o&&x.push(T)}m=x,Math.floor(i.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(i.virtualSize-o)}if(u&&s.loop){const x=f[0]+w;if(s.slidesPerGroup>1){const A=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/s.slidesPerGroup),T=x*s.slidesPerGroup;for(let P=0;P<A;P+=1)m.push(m[m.length-1]+T)}for(let A=0;A<i.virtual.slidesBefore+i.virtual.slidesAfter;A+=1)s.slidesPerGroup===1&&m.push(m[m.length-1]+x),p.push(p[p.length-1]+x),i.virtualSize+=x}if(m.length===0&&(m=[0]),w!==0){const x=i.isHorizontal()&&l?"marginLeft":t("marginRight");g.filter((A,T)=>!s.cssMode||s.loop?!0:T!==g.length-1).forEach(A=>{A.style[x]=`${w}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let x=0;f.forEach(T=>{x+=T+(w||0)}),x-=w;const A=x-o;m=m.map(T=>T<=0?-b:T>A?A+v:T)}if(s.centerInsufficientSlides){let x=0;if(f.forEach(A=>{x+=A+(w||0)}),x-=w,x<o){const A=(o-x)/2;m.forEach((T,P)=>{m[P]=T-A}),p.forEach((T,P)=>{p[P]=T+A})}}if(Object.assign(i,{slides:g,snapGrid:m,slidesGrid:p,slidesSizesGrid:f}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){at(r,"--swiper-centered-offset-before",`${-m[0]}px`),at(r,"--swiper-centered-offset-after",`${i.size/2-f[f.length-1]/2}px`);const x=-i.snapGrid[0],A=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(T=>T+x),i.slidesGrid=i.slidesGrid.map(T=>T+A)}if(y!==h&&i.emit("slidesLengthChange"),m.length!==c&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),p.length!==d&&i.emit("slidesGridLengthChange"),s.watchSlidesProgress&&i.updateSlidesOffset(),!u&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const x=`${s.containerModifierClass}backface-hidden`,A=i.el.classList.contains(x);y<=s.maxBackfaceHiddenSlides?A||i.el.classList.add(x):A&&i.el.classList.remove(x)}}function _e(i){const t=this,e=[],s=t.virtual&&t.params.virtual.enabled;let r=0,n;typeof i=="number"?t.setTransition(i):i===!0&&t.setTransition(t.params.speed);const o=l=>s?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{e.push(l)});else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const l=t.activeIndex+n;if(l>t.slides.length&&!s)break;e.push(o(l))}else e.push(o(t.activeIndex));for(n=0;n<e.length;n+=1)if(typeof e[n]<"u"){const l=e[n].offsetHeight;r=l>r?l:r}(r||r===0)&&(t.wrapperEl.style.height=`${r}px`)}function ke(){const i=this,t=i.slides,e=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(i.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-e-i.cssOverflowAdjustment()}function ze(i){i===void 0&&(i=this&&this.translate||0);const t=this,e=t.params,{slides:s,rtlTranslate:r,snapGrid:n}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-i;r&&(o=i),s.forEach(a=>{a.classList.remove(e.slideVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=e.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<s.length;a+=1){const u=s[a];let h=u.swiperSlideOffset;e.cssMode&&e.centeredSlides&&(h-=s[0].swiperSlideOffset);const g=(o+(e.centeredSlides?t.minTranslate():0)-h)/(u.swiperSlideSize+l),y=(o-n[0]+(e.centeredSlides?t.minTranslate():0)-h)/(u.swiperSlideSize+l),m=-(o-h),p=m+t.slidesSizesGrid[a];(m>=0&&m<t.size-1||p>1&&p<=t.size||m<=0&&p>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(a),s[a].classList.add(e.slideVisibleClass)),u.progress=r?-g:g,u.originalProgress=r?-y:y}}function De(i){const t=this;if(typeof i>"u"){const h=t.rtlTranslate?-1:1;i=t&&t.translate&&t.translate*h||0}const e=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:n,isEnd:o,progressLoop:l}=t;const a=n,u=o;if(s===0)r=0,n=!0,o=!0;else{r=(i-t.minTranslate())/s;const h=Math.abs(i-t.minTranslate())<1,g=Math.abs(i-t.maxTranslate())<1;n=h||r<=0,o=g||r>=1,h&&(r=0),g&&(r=1)}if(e.loop){const h=t.getSlideIndexByData(0),g=t.getSlideIndexByData(t.slides.length-1),y=t.slidesGrid[h],m=t.slidesGrid[g],p=t.slidesGrid[t.slidesGrid.length-1],f=Math.abs(i);f>=y?l=(f-y)/p:l=(f+p-m)/p,l>1&&(l-=1)}Object.assign(t,{progress:r,progressLoop:l,isBeginning:n,isEnd:o}),(e.watchSlidesProgress||e.centeredSlides&&e.autoHeight)&&t.updateSlidesProgress(i),n&&!a&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(a&&!n||u&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}function He(){const i=this,{slides:t,params:e,slidesEl:s,activeIndex:r}=i,n=i.virtual&&e.virtual.enabled,o=a=>H(s,`.${e.slideClass}${a}, swiper-slide${a}`)[0];t.forEach(a=>{a.classList.remove(e.slideActiveClass,e.slideNextClass,e.slidePrevClass)});let l;if(n)if(e.loop){let a=r-i.virtual.slidesBefore;a<0&&(a=i.virtual.slides.length+a),a>=i.virtual.slides.length&&(a-=i.virtual.slides.length),l=o(`[data-swiper-slide-index="${a}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else l=t[r];if(l){l.classList.add(e.slideActiveClass);let a=Se(l,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!a&&(a=t[0]),a&&a.classList.add(e.slideNextClass);let u=ye(l,`.${e.slideClass}, swiper-slide`)[0];e.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(e.slidePrevClass)}i.emitSlidesClasses()}const lt=(i,t)=>{if(!i||i.destroyed||!i.params)return;const e=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=t.closest(e());if(s){let r=s.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(r=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`)),r&&r.remove()}},wt=(i,t)=>{if(!i.slides[t])return;const e=i.slides[t].querySelector('[loading="lazy"]');e&&e.removeAttribute("loading")},Et=i=>{if(!i||i.destroyed||!i.params)return;let t=i.params.lazyPreloadPrevNext;const e=i.slides.length;if(!e||!t||t<0)return;t=Math.min(t,e);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const o=r,l=[o-t];l.push(...Array.from({length:t}).map((a,u)=>o+s+u)),i.slides.forEach((a,u)=>{l.includes(a.column)&&wt(i,u)});return}const n=r+s-1;if(i.params.rewind||i.params.loop)for(let o=r-t;o<=n+t;o+=1){const l=(o%e+e)%e;(l<r||l>n)&&wt(i,l)}else for(let o=Math.max(r-t,0);o<=Math.min(n+t,e-1);o+=1)o!==r&&(o>n||o<r)&&wt(i,o)};function qe(i){const{slidesGrid:t,params:e}=i,s=i.rtlTranslate?i.translate:-i.translate;let r;for(let n=0;n<t.length;n+=1)typeof t[n+1]<"u"?s>=t[n]&&s<t[n+1]-(t[n+1]-t[n])/2?r=n:s>=t[n]&&s<t[n+1]&&(r=n+1):s>=t[n]&&(r=n);return e.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Ne(i){const t=this,e=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:r,activeIndex:n,realIndex:o,snapIndex:l}=t;let a=i,u;const h=y=>{let m=y-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof a>"u"&&(a=qe(t)),s.indexOf(e)>=0)u=s.indexOf(e);else{const y=Math.min(r.slidesPerGroupSkip,a);u=y+Math.floor((a-y)/r.slidesPerGroup)}if(u>=s.length&&(u=s.length-1),a===n){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange")),t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=h(a));return}let g;t.virtual&&r.virtual.enabled&&r.loop?g=h(a):t.slides[a]?g=parseInt(t.slides[a].getAttribute("data-swiper-slide-index")||a,10):g=a,Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:o,realIndex:g,previousIndex:n,activeIndex:a}),t.initialized&&Et(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==g&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function Ge(i){const t=this,e=t.params,s=i.closest(`.${e.slideClass}, swiper-slide`);let r=!1,n;if(s){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===s){r=!0,n=o;break}}if(s&&r)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=n;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}e.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Be={updateSize:Ie,updateSlides:Oe,updateAutoHeight:_e,updateSlidesOffset:ke,updateSlidesProgress:ze,updateProgress:De,updateSlidesClasses:He,updateActiveIndex:Ne,updateClickedSlide:Ge};function Ve(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const t=this,{params:e,rtlTranslate:s,translate:r,wrapperEl:n}=t;if(e.virtualTranslate)return s?-r:r;if(e.cssMode)return r;let o=ge(n,i);return o+=t.cssOverflowAdjustment(),s&&(o=-o),o||0}function Fe(i,t){const e=this,{rtlTranslate:s,params:r,wrapperEl:n,progress:o}=e;let l=0,a=0;const u=0;e.isHorizontal()?l=s?-i:i:a=i,r.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),e.previousTranslate=e.translate,e.translate=e.isHorizontal()?l:a,r.cssMode?n[e.isHorizontal()?"scrollLeft":"scrollTop"]=e.isHorizontal()?-l:-a:r.virtualTranslate||(e.isHorizontal()?l-=e.cssOverflowAdjustment():a-=e.cssOverflowAdjustment(),n.style.transform=`translate3d(${l}px, ${a}px, ${u}px)`);let h;const g=e.maxTranslate()-e.minTranslate();g===0?h=0:h=(i-e.minTranslate())/g,h!==o&&e.updateProgress(i),e.emit("setTranslate",e.translate,t)}function Re(){return-this.snapGrid[0]}function je(){return-this.snapGrid[this.snapGrid.length-1]}function We(i,t,e,s,r){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),s===void 0&&(s=!0);const n=this,{params:o,wrapperEl:l}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const a=n.minTranslate(),u=n.maxTranslate();let h;if(s&&i>a?h=a:s&&i<u?h=u:h=i,n.updateProgress(h),o.cssMode){const g=n.isHorizontal();if(t===0)l[g?"scrollLeft":"scrollTop"]=-h;else{if(!n.support.smoothScroll)return Xt({swiper:n,targetPosition:-h,side:g?"left":"top"}),!0;l.scrollTo({[g?"left":"top"]:-h,behavior:"smooth"})}return!0}return t===0?(n.setTransition(0),n.setTranslate(h),e&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(h),e&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(y){!n||n.destroyed||y.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,e&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Xe={getTranslate:Ve,setTranslate:Fe,minTranslate:Re,maxTranslate:je,translateTo:We};function Ye(i,t){const e=this;e.params.cssMode||(e.wrapperEl.style.transitionDuration=`${i}ms`,e.wrapperEl.style.transitionDelay=i===0?"0ms":""),e.emit("setTransition",i,t)}function Ut(i){let{swiper:t,runCallbacks:e,direction:s,step:r}=i;const{activeIndex:n,previousIndex:o}=t;let l=s;if(l||(n>o?l="next":n<o?l="prev":l="reset"),t.emit(`transition${r}`),e&&n!==o){if(l==="reset"){t.emit(`slideResetTransition${r}`);return}t.emit(`slideChangeTransition${r}`),l==="next"?t.emit(`slideNextTransition${r}`):t.emit(`slidePrevTransition${r}`)}}function Ue(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;s.cssMode||(s.autoHeight&&e.updateAutoHeight(),Ut({swiper:e,runCallbacks:i,direction:t,step:"Start"}))}function Ke(i,t){i===void 0&&(i=!0);const e=this,{params:s}=e;e.animating=!1,!s.cssMode&&(e.setTransition(0),Ut({swiper:e,runCallbacks:i,direction:t,step:"End"}))}var Ze={setTransition:Ye,transitionStart:Ue,transitionEnd:Ke};function Qe(i,t,e,s,r){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this;let o=i;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:u,previousIndex:h,activeIndex:g,rtlTranslate:y,wrapperEl:m,enabled:p}=n;if(n.animating&&l.preventInteractionOnTransition||!p&&!s&&!r)return!1;const f=Math.min(n.params.slidesPerGroupSkip,o);let b=f+Math.floor((o-f)/n.params.slidesPerGroup);b>=a.length&&(b=a.length-1);const v=-a[b];if(l.normalizeSlideIndex)for(let d=0;d<u.length;d+=1){const w=-Math.floor(v*100),S=Math.floor(u[d]*100),C=Math.floor(u[d+1]*100);typeof u[d+1]<"u"?w>=S&&w<C-(C-S)/2?o=d:w>=S&&w<C&&(o=d+1):w>=S&&(o=d)}if(n.initialized&&o!==g&&(!n.allowSlideNext&&(y?v>n.translate&&v>n.minTranslate():v<n.translate&&v<n.minTranslate())||!n.allowSlidePrev&&v>n.translate&&v>n.maxTranslate()&&(g||0)!==o))return!1;o!==(h||0)&&e&&n.emit("beforeSlideChangeStart"),n.updateProgress(v);let c;if(o>g?c="next":o<g?c="prev":c="reset",y&&-v===n.translate||!y&&v===n.translate)return n.updateActiveIndex(o),l.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),l.effect!=="slide"&&n.setTranslate(v),c!=="reset"&&(n.transitionStart(e,c),n.transitionEnd(e,c)),!1;if(l.cssMode){const d=n.isHorizontal(),w=y?v:-v;if(t===0){const S=n.virtual&&n.params.virtual.enabled;S&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),S&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[d?"scrollLeft":"scrollTop"]=w})):m[d?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return Xt({swiper:n,targetPosition:w,side:d?"left":"top"}),!0;m.scrollTo({[d?"left":"top"]:w,behavior:"smooth"})}return!0}return n.setTransition(t),n.setTranslate(v),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(e,c),t===0?n.transitionEnd(e,c):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(w){!n||n.destroyed||w.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(e,c))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Je(i,t,e,s){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;let n=i;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?n=n+r.virtual.slidesBefore:n=r.getSlideIndexByData(n)),r.slideTo(n,t,e,s)}function ti(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{enabled:r,params:n,animating:o}=s;if(!r)return s;let l=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(l=Math.max(s.slidesPerViewDynamic("current",!0),1));const a=s.activeIndex<n.slidesPerGroupSkip?1:l,u=s.virtual&&n.virtual.enabled;if(n.loop){if(o&&!u&&n.loopPreventsSliding)return!1;s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft}return n.rewind&&s.isEnd?s.slideTo(0,i,t,e):s.slideTo(s.activeIndex+a,i,t,e)}function ei(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this,{params:r,snapGrid:n,slidesGrid:o,rtlTranslate:l,enabled:a,animating:u}=s;if(!a)return s;const h=s.virtual&&r.virtual.enabled;if(r.loop){if(u&&!h&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const g=l?s.translate:-s.translate;function y(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const m=y(g),p=n.map(v=>y(v));let f=n[p.indexOf(m)-1];if(typeof f>"u"&&r.cssMode){let v;n.forEach((c,d)=>{m>=c&&(v=d)}),typeof v<"u"&&(f=n[v>0?v-1:v])}let b=0;if(typeof f<"u"&&(b=o.indexOf(f),b<0&&(b=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(b=b-s.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),r.rewind&&s.isBeginning){const v=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(v,i,t,e)}return s.slideTo(b,i,t,e)}function ii(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);const s=this;return s.slideTo(s.activeIndex,i,t,e)}function si(i,t,e,s){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=.5);const r=this;let n=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,n),l=o+Math.floor((n-o)/r.params.slidesPerGroup),a=r.rtlTranslate?r.translate:-r.translate;if(a>=r.snapGrid[l]){const u=r.snapGrid[l],h=r.snapGrid[l+1];a-u>(h-u)*s&&(n+=r.params.slidesPerGroup)}else{const u=r.snapGrid[l-1],h=r.snapGrid[l];a-u<=(h-u)*s&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,i,t,e)}function ni(){const i=this,{params:t,slidesEl:e}=i,s=t.slidesPerView==="auto"?i.slidesPerViewDynamic():t.slidesPerView;let r=i.clickedIndex,n;const o=i.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(i.animating)return;n=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<i.loopedSlides-s/2||r>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),r=i.getSlideIndex(H(e,`${o}[data-swiper-slide-index="${n}"]`)[0]),J(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-s?(i.loopFix(),r=i.getSlideIndex(H(e,`${o}[data-swiper-slide-index="${n}"]`)[0]),J(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var ri={slideTo:Qe,slideToLoop:Je,slideNext:ti,slidePrev:ei,slideReset:ii,slideToClosest:si,slideToClickedSlide:ni};function ai(i){const t=this,{params:e,slidesEl:s}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;H(s,`.${e.slideClass}, swiper-slide`).forEach((n,o)=>{n.setAttribute("data-swiper-slide-index",o)}),t.loopFix({slideRealIndex:i,direction:e.centeredSlides?void 0:"next"})}function li(i){let{slideRealIndex:t,slideTo:e=!0,direction:s,setTranslate:r,activeSlideIndex:n,byController:o,byMousewheel:l}=i===void 0?{}:i;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:u,allowSlidePrev:h,allowSlideNext:g,slidesEl:y,params:m}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&m.virtual.enabled){e&&(!m.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):m.centeredSlides&&a.snapIndex<m.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=h,a.allowSlideNext=g,a.emit("loopFix");return}const p=m.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(m.slidesPerView,10));let f=m.loopedSlides||p;f%m.slidesPerGroup!==0&&(f+=m.slidesPerGroup-f%m.slidesPerGroup),a.loopedSlides=f;const b=[],v=[];let c=a.activeIndex;typeof n>"u"?n=a.getSlideIndex(a.slides.filter(L=>L.classList.contains(m.slideActiveClass))[0]):c=n;const d=s==="next"||!s,w=s==="prev"||!s;let S=0,C=0;if(n<f){S=Math.max(f-n,m.slidesPerGroup);for(let L=0;L<f-n;L+=1){const M=L-Math.floor(L/u.length)*u.length;b.push(u.length-M-1)}}else if(n>a.slides.length-f*2){C=Math.max(n-(a.slides.length-f*2),m.slidesPerGroup);for(let L=0;L<C;L+=1){const M=L-Math.floor(L/u.length)*u.length;v.push(M)}}if(w&&b.forEach(L=>{a.slides[L].swiperLoopMoveDOM=!0,y.prepend(a.slides[L]),a.slides[L].swiperLoopMoveDOM=!1}),d&&v.forEach(L=>{a.slides[L].swiperLoopMoveDOM=!0,y.append(a.slides[L]),a.slides[L].swiperLoopMoveDOM=!1}),a.recalcSlides(),m.slidesPerView==="auto"&&a.updateSlides(),m.watchSlidesProgress&&a.updateSlidesOffset(),e){if(b.length>0&&w)if(typeof t>"u"){const L=a.slidesGrid[c],E=a.slidesGrid[c+S]-L;l?a.setTranslate(a.translate-E):(a.slideTo(c+S,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=E,a.touchEventsData.currentTranslate=a.translate))}else r&&(a.slideToLoop(t,0,!1,!0),a.touchEventsData.currentTranslate=a.translate);else if(v.length>0&&d)if(typeof t>"u"){const L=a.slidesGrid[c],E=a.slidesGrid[c-C]-L;l?a.setTranslate(a.translate-E):(a.slideTo(c-C,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=E,a.touchEventsData.currentTranslate=a.translate))}else a.slideToLoop(t,0,!1,!0)}if(a.allowSlidePrev=h,a.allowSlideNext=g,a.controller&&a.controller.control&&!o){const L={slideRealIndex:t,direction:s,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...L,slideTo:M.params.slidesPerView===m.slidesPerView?e:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...L,slideTo:a.controller.control.params.slidesPerView===m.slidesPerView?e:!1})}a.emit("loopFix")}function oi(){const i=this,{params:t,slidesEl:e}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[n]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{e.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var di={loopCreate:ai,loopFix:li,loopDestroy:oi};function ci(i){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const e=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),e.style.cursor="move",e.style.cursor=i?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ui(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var fi={setGrabCursor:ci,unsetGrabCursor:ui};function pi(i,t){t===void 0&&(t=this);function e(s){if(!s||s===N()||s===_())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(i);return!r&&!s.getRootNode?null:r||e(s.getRootNode().host)}return e(t)}function hi(i){const t=this,e=N(),s=_(),r=t.touchEventsData;r.evCache.push(i);const{params:n,touches:o,enabled:l}=t;if(!l||!n.simulateTouch&&i.pointerType==="mouse"||t.animating&&n.preventInteractionOnTransition)return;!t.animating&&n.cssMode&&n.loop&&t.loopFix();let a=i;a.originalEvent&&(a=a.originalEvent);let u=a.target;if(n.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(u)||"which"in a&&a.which===3||"button"in a&&a.button>0||r.isTouched&&r.isMoved)return;const h=!!n.noSwipingClass&&n.noSwipingClass!=="",g=i.composedPath?i.composedPath():i.path;h&&a.target&&a.target.shadowRoot&&g&&(u=g[0]);const y=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,m=!!(a.target&&a.target.shadowRoot);if(n.noSwiping&&(m?pi(y,u):u.closest(y))){t.allowClick=!0;return}if(n.swipeHandler&&!u.closest(n.swipeHandler))return;o.currentX=a.pageX,o.currentY=a.pageY;const p=o.currentX,f=o.currentY,b=n.edgeSwipeDetection||n.iOSEdgeSwipeDetection,v=n.edgeSwipeThreshold||n.iOSEdgeSwipeThreshold;if(b&&(p<=v||p>=s.innerWidth-v))if(b==="prevent")i.preventDefault();else return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=f,r.touchStartTime=q(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let c=!0;u.matches(r.focusableElements)&&(c=!1,u.nodeName==="SELECT"&&(r.isTouched=!1)),e.activeElement&&e.activeElement.matches(r.focusableElements)&&e.activeElement!==u&&e.activeElement.blur();const d=c&&t.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||d)&&!u.isContentEditable&&a.preventDefault(),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.animating&&!n.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function mi(i){const t=N(),e=this,s=e.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:l}=e;if(!l||!r.simulateTouch&&i.pointerType==="mouse")return;let a=i;if(a.originalEvent&&(a=a.originalEvent),!s.isTouched){s.startMoving&&s.isScrolling&&e.emit("touchMoveOpposite",a);return}const u=s.evCache.findIndex(C=>C.pointerId===a.pointerId);u>=0&&(s.evCache[u]=a);const h=s.evCache.length>1?s.evCache[0]:a,g=h.pageX,y=h.pageY;if(a.preventedByNestedSwiper){n.startX=g,n.startY=y;return}if(!e.allowTouchMove){a.target.matches(s.focusableElements)||(e.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:g,startY:y,prevX:e.touches.currentX,prevY:e.touches.currentY,currentX:g,currentY:y}),s.touchStartTime=q());return}if(r.touchReleaseOnEdges&&!r.loop){if(e.isVertical()){if(y<n.startY&&e.translate<=e.maxTranslate()||y>n.startY&&e.translate>=e.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(g<n.startX&&e.translate<=e.maxTranslate()||g>n.startX&&e.translate>=e.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(s.focusableElements)){s.isMoved=!0,e.allowClick=!1;return}if(s.allowTouchCallbacks&&e.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;n.currentX=g,n.currentY=y;const m=n.currentX-n.startX,p=n.currentY-n.startY;if(e.params.threshold&&Math.sqrt(m**2+p**2)<e.params.threshold)return;if(typeof s.isScrolling>"u"){let C;e.isHorizontal()&&n.currentY===n.startY||e.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:m*m+p*p>=25&&(C=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,s.isScrolling=e.isHorizontal()?C>r.touchAngle:90-C>r.touchAngle)}if(s.isScrolling&&e.emit("touchMoveOpposite",a),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||e.zoom&&e.params.zoom&&e.params.zoom.enabled&&s.evCache.length>1){s.isTouched=!1;return}if(!s.startMoving)return;e.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation();let f=e.isHorizontal()?m:p,b=e.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(f=Math.abs(f)*(o?1:-1),b=Math.abs(b)*(o?1:-1)),n.diff=f,f*=r.touchRatio,o&&(f=-f,b=-b);const v=e.touchesDirection;e.swipeDirection=f>0?"prev":"next",e.touchesDirection=b>0?"prev":"next";const c=e.params.loop&&!r.cssMode;if(!s.isMoved){if(c&&e.loopFix({direction:e.swipeDirection}),s.startTranslate=e.getTranslate(),e.setTransition(0),e.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(C)}s.allowMomentumBounce=!1,r.grabCursor&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!0),e.emit("sliderFirstMove",a)}let d;s.isMoved&&v!==e.touchesDirection&&c&&Math.abs(f)>=1&&(e.loopFix({direction:e.swipeDirection,setTranslate:!0}),d=!0),e.emit("sliderMove",a),s.isMoved=!0,s.currentTranslate=f+s.startTranslate;let w=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),f>0?(c&&!d&&s.currentTranslate>(r.centeredSlides?e.minTranslate()-e.size/2:e.minTranslate())&&e.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>e.minTranslate()&&(w=!1,r.resistance&&(s.currentTranslate=e.minTranslate()-1+(-e.minTranslate()+s.startTranslate+f)**S))):f<0&&(c&&!d&&s.currentTranslate<(r.centeredSlides?e.maxTranslate()+e.size/2:e.maxTranslate())&&e.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:e.slides.length-(r.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<e.maxTranslate()&&(w=!1,r.resistance&&(s.currentTranslate=e.maxTranslate()+1-(e.maxTranslate()-s.startTranslate-f)**S))),w&&(a.preventedByNestedSwiper=!0),!e.allowSlideNext&&e.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&e.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!e.allowSlidePrev&&!e.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(f)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=e.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&e.freeMode||r.watchSlidesProgress)&&(e.updateActiveIndex(),e.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.freeMode.onTouchMove(),e.updateProgress(s.currentTranslate),e.setTranslate(s.currentTranslate))}function vi(i){const t=this,e=t.touchEventsData,s=e.evCache.findIndex(d=>d.pointerId===i.pointerId);if(s>=0&&e.evCache.splice(s,1),["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return;const{params:r,touches:n,rtlTranslate:o,slidesGrid:l,enabled:a}=t;if(!a||!r.simulateTouch&&i.pointerType==="mouse")return;let u=i;if(u.originalEvent&&(u=u.originalEvent),e.allowTouchCallbacks&&t.emit("touchEnd",u),e.allowTouchCallbacks=!1,!e.isTouched){e.isMoved&&r.grabCursor&&t.setGrabCursor(!1),e.isMoved=!1,e.startMoving=!1;return}r.grabCursor&&e.isMoved&&e.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const h=q(),g=h-e.touchStartTime;if(t.allowClick){const d=u.path||u.composedPath&&u.composedPath();t.updateClickedSlide(d&&d[0]||u.target),t.emit("tap click",u),g<300&&h-e.lastClickTime<300&&t.emit("doubleTap doubleClick",u)}if(e.lastClickTime=q(),J(()=>{t.destroyed||(t.allowClick=!0)}),!e.isTouched||!e.isMoved||!t.swipeDirection||n.diff===0||e.currentTranslate===e.startTranslate){e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;return}e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;let y;if(r.followFinger?y=o?t.translate:-t.translate:y=-e.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:y});return}let m=0,p=t.slidesSizesGrid[0];for(let d=0;d<l.length;d+=d<r.slidesPerGroupSkip?1:r.slidesPerGroup){const w=d<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof l[d+w]<"u"?y>=l[d]&&y<l[d+w]&&(m=d,p=l[d+w]-l[d]):y>=l[d]&&(m=d,p=l[l.length-1]-l[l.length-2])}let f=null,b=null;r.rewind&&(t.isBeginning?b=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const v=(y-l[m])/p,c=m<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(g>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(v>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?f:m+c):t.slideTo(m)),t.swipeDirection==="prev"&&(v>1-r.longSwipesRatio?t.slideTo(m+c):b!==null&&v<0&&Math.abs(v)>r.longSwipesRatio?t.slideTo(b):t.slideTo(m))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(u.target===t.navigation.nextEl||u.target===t.navigation.prevEl)?u.target===t.navigation.nextEl?t.slideTo(m+c):t.slideTo(m):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:m+c),t.swipeDirection==="prev"&&t.slideTo(b!==null?b:m))}}function Ot(){const i=this,{params:t,el:e}=i;if(e&&e.offsetWidth===0)return;t.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:n}=i,o=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!l?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!o?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=s,i.params.watchOverflow&&n!==i.snapGrid&&i.checkOverflow()}function gi(i){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&i.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function wi(){const i=this,{wrapperEl:t,rtlTranslate:e,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-t.scrollLeft:i.translate=-t.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const n=i.maxTranslate()-i.minTranslate();n===0?r=0:r=(i.translate-i.minTranslate())/n,r!==i.progress&&i.updateProgress(e?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function bi(i){const t=this;lt(t,i.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}let _t=!1;function yi(){}const Kt=(i,t)=>{const e=N(),{params:s,el:r,wrapperEl:n,device:o}=i,l=!!s.nested,a=t==="on"?"addEventListener":"removeEventListener",u=t;r[a]("pointerdown",i.onTouchStart,{passive:!1}),e[a]("pointermove",i.onTouchMove,{passive:!1,capture:l}),e[a]("pointerup",i.onTouchEnd,{passive:!0}),e[a]("pointercancel",i.onTouchEnd,{passive:!0}),e[a]("pointerout",i.onTouchEnd,{passive:!0}),e[a]("pointerleave",i.onTouchEnd,{passive:!0}),e[a]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[a]("click",i.onClick,!0),s.cssMode&&n[a]("scroll",i.onScroll),s.updateOnWindowResize?i[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ot,!0):i[u]("observerUpdate",Ot,!0),r[a]("load",i.onLoad,{capture:!0})};function Si(){const i=this,t=N(),{params:e}=i;i.onTouchStart=hi.bind(i),i.onTouchMove=mi.bind(i),i.onTouchEnd=vi.bind(i),e.cssMode&&(i.onScroll=wi.bind(i)),i.onClick=gi.bind(i),i.onLoad=bi.bind(i),_t||(t.addEventListener("touchstart",yi),_t=!0),Kt(i,"on")}function xi(){Kt(this,"off")}var Ti={attachEvents:Si,detachEvents:xi};const kt=(i,t)=>i.grid&&t.grid&&t.grid.rows>1;function Ei(){const i=this,{realIndex:t,initialized:e,params:s,el:r}=i,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=i.getBreakpoint(n,i.params.breakpointsBase,i.el);if(!o||i.currentBreakpoint===o)return;const a=(o in n?n[o]:void 0)||i.originalParams,u=kt(i,s),h=kt(i,a),g=s.enabled;u&&!h?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!u&&h&&(r.classList.add(`${s.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(f=>{if(typeof a[f]>"u")return;const b=s[f]&&s[f].enabled,v=a[f]&&a[f].enabled;b&&!v&&i[f].disable(),!b&&v&&i[f].enable()});const y=a.direction&&a.direction!==s.direction,m=s.loop&&(a.slidesPerView!==s.slidesPerView||y);y&&e&&i.changeDirection(),k(i.params,a);const p=i.params.enabled;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),g&&!p?i.disable():!g&&p&&i.enable(),i.currentBreakpoint=o,i.emit("_beforeBreakpoint",a),m&&e&&(i.loopDestroy(),i.loopCreate(t),i.updateSlides()),i.emit("breakpoint",a)}function Ci(i,t,e){if(t===void 0&&(t="window"),!i||t==="container"&&!e)return;let s=!1;const r=_(),n=t==="window"?r.innerHeight:e.clientHeight,o=Object.keys(i).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:n*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:u}=o[l];t==="window"?r.matchMedia(`(min-width: ${u}px)`).matches&&(s=a):u<=e.clientWidth&&(s=a)}return s||"max"}var Ai={setBreakpoint:Ei,getBreakpoint:Ci};function Li(i,t){const e=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&e.push(t+r)}):typeof s=="string"&&e.push(t+s)}),e}function Pi(){const i=this,{classNames:t,params:e,rtl:s,el:r,device:n}=i,o=Li(["initialized",e.direction,{"free-mode":i.params.freeMode&&e.freeMode.enabled},{autoheight:e.autoHeight},{rtl:s},{grid:e.grid&&e.grid.rows>1},{"grid-column":e.grid&&e.grid.rows>1&&e.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":e.cssMode},{centered:e.cssMode&&e.centeredSlides},{"watch-progress":e.watchSlidesProgress}],e.containerModifierClass);t.push(...o),r.classList.add(...t),i.emitContainerClasses()}function Mi(){const i=this,{el:t,classNames:e}=i;t.classList.remove(...e),i.emitContainerClasses()}var $i={addClasses:Pi,removeClasses:Mi};function Ii(){const i=this,{isLocked:t,params:e}=i,{slidesOffsetBefore:s}=e;if(s){const r=i.slides.length-1,n=i.slidesGrid[r]+i.slidesSizesGrid[r]+s*2;i.isLocked=i.size>n}else i.isLocked=i.snapGrid.length===1;e.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),e.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),t&&t!==i.isLocked&&(i.isEnd=!1),t!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Oi={checkOverflow:Ii},zt={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function _i(i,t){return function(s){s===void 0&&(s={});const r=Object.keys(s)[0],n=s[r];if(typeof n!="object"||n===null){k(t,s);return}if(["navigation","pagination","scrollbar"].indexOf(r)>=0&&i[r]===!0&&(i[r]={auto:!0}),!(r in i&&"enabled"in n)){k(t,s);return}i[r]===!0&&(i[r]={enabled:!0}),typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),k(t,s)}}const bt={eventsEmitter:$e,update:Be,translate:Xe,transition:Ze,slide:ri,loop:di,grabCursor:fi,events:Ti,breakpoints:Ai,checkOverflow:Oi,classes:$i},yt={};class z{constructor(){let t,e;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?e=r[0]:[t,e]=r,e||(e={}),e=k({},e),t&&!e.el&&(e.el=t);const o=N();if(e.el&&typeof e.el=="string"&&o.querySelectorAll(e.el).length>1){const h=[];return o.querySelectorAll(e.el).forEach(g=>{const y=k({},e,{el:g});h.push(new z(y))}),h}const l=this;l.__swiper__=!0,l.support=Yt(),l.device=Ce({userAgent:e.userAgent}),l.browser=Le(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],e.modules&&Array.isArray(e.modules)&&l.modules.push(...e.modules);const a={};l.modules.forEach(h=>{h({params:e,swiper:l,extendParams:_i(e,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const u=k({},zt,a);return l.params=k({},u,yt,e),l.originalParams=k({},l.params),l.passedParams=k({},e),l.params&&l.params.on&&Object.keys(l.params.on).forEach(h=>{l.on(h,l.params.on[h])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getSlideIndex(t){const{slidesEl:e,params:s}=this,r=H(e,`.${s.slideClass}, swiper-slide`),n=ot(r[0]);return ot(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(e=>e.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:e,params:s}=t;t.slides=H(e,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,e){const s=this;t=Math.min(Math.max(t,0),1);const r=s.minTranslate(),o=(s.maxTranslate()-r)*t+r;s.translateTo(o,typeof e>"u"?0:e),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",e.join(" "))}getSlideClasses(t){const e=this;return e.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(e.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const e=[];t.slides.forEach(s=>{const r=t.getSlideClasses(s);e.push({slideEl:s,classNames:r}),t.emit("_slideClass",s,r)}),t.emit("_slideClasses",e)}slidesPerViewDynamic(t,e){t===void 0&&(t="current"),e===void 0&&(e=!1);const s=this,{params:r,slides:n,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:u}=s;let h=1;if(r.centeredSlides){let g=n[u]?n[u].swiperSlideSize:0,y;for(let m=u+1;m<n.length;m+=1)n[m]&&!y&&(g+=n[m].swiperSlideSize,h+=1,g>a&&(y=!0));for(let m=u-1;m>=0;m-=1)n[m]&&!y&&(g+=n[m].swiperSlideSize,h+=1,g>a&&(y=!0))}else if(t==="current")for(let g=u+1;g<n.length;g+=1)(e?o[g]+l[g]-o[u]<a:o[g]-o[u]<a)&&(h+=1);else for(let g=u-1;g>=0;g-=1)o[u]-o[g]<a&&(h+=1);return h}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:e,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&lt(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const o=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;n=t.slideTo(o.length-1,0,!1,!0)}else n=t.slideTo(t.activeIndex,0,!1,!0);n||r()}s.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,e){e===void 0&&(e=!0);const s=this,r=s.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(n=>{t==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),e&&s.update()),s}changeLanguageDirection(t){const e=this;e.rtl&&t==="rtl"||!e.rtl&&t==="ltr"||(e.rtl=t==="rtl",e.rtlTranslate=e.params.direction==="horizontal"&&e.rtl,e.rtl?(e.el.classList.add(`${e.params.containerModifierClass}rtl`),e.el.dir="rtl"):(e.el.classList.remove(`${e.params.containerModifierClass}rtl`),e.el.dir="ltr"),e.update())}mount(t){const e=this;if(e.mounted)return!0;let s=t||e.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=e,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(e.isElement=!0);const r=()=>`.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):H(s,r())[0])();return!o&&e.params.createElements&&(o=Pt("div",e.params.wrapperClass),s.append(o),H(s,`.${e.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(e,{el:s,wrapperEl:o,slidesEl:e.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:e.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||B(s,"direction")==="rtl",rtlTranslate:e.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||B(s,"direction")==="rtl"),wrongRTL:B(o,"display")==="-webkit-box"}),!0}init(t){const e=this;if(e.initialized||e.mount(t)===!1)return e;e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.enabled&&e.setGrabCursor(),e.params.loop&&e.virtual&&e.params.virtual.enabled?e.slideTo(e.params.initialSlide+e.virtual.slidesBefore,0,e.params.runCallbacksOnInit,!1,!0):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit,!1,!0),e.params.loop&&e.loopCreate(),e.attachEvents();const r=[...e.el.querySelectorAll('[loading="lazy"]')];return e.isElement&&r.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?lt(e,n):n.addEventListener("load",o=>{lt(e,o.target)})}),Et(e),e.initialized=!0,Et(e),e.emit("init"),e.emit("afterInit"),e}destroy(t,e){t===void 0&&(t=!0),e===void 0&&(e=!0);const s=this,{params:r,el:n,wrapperEl:o,slides:l}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),e&&(s.removeClasses(),n.removeAttribute("style"),o.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(a=>{s.off(a)}),t!==!1&&(s.el.swiper=null,me(s)),s.destroyed=!0),null}static extendDefaults(t){k(yt,t)}static get extendedDefaults(){return yt}static get defaults(){return zt}static installModule(t){z.prototype.__modules__||(z.prototype.__modules__=[]);const e=z.prototype.__modules__;typeof t=="function"&&e.indexOf(t)<0&&e.push(t)}static use(t){return Array.isArray(t)?(t.forEach(e=>z.installModule(e)),z):(z.installModule(t),z)}}Object.keys(bt).forEach(i=>{Object.keys(bt[i]).forEach(t=>{z.prototype[t]=bt[i][t]})});z.use([Pe,Me]);function ki(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n=N(),o=_();t.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function l(h){if(!t.enabled)return;const{rtlTranslate:g}=t;let y=h;y.originalEvent&&(y=y.originalEvent);const m=y.keyCode||y.charCode,p=t.params.keyboard.pageUpDown,f=p&&m===33,b=p&&m===34,v=m===37,c=m===39,d=m===38,w=m===40;if(!t.allowSlideNext&&(t.isHorizontal()&&c||t.isVertical()&&w||b)||!t.allowSlidePrev&&(t.isHorizontal()&&v||t.isVertical()&&d||f))return!1;if(!(y.shiftKey||y.altKey||y.ctrlKey||y.metaKey)&&!(n.activeElement&&n.activeElement.nodeName&&(n.activeElement.nodeName.toLowerCase()==="input"||n.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(f||b||v||c||d||w)){let S=!1;if(dt(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&dt(t.el,`.${t.params.slideActiveClass}`).length===0)return;const C=t.el,L=C.clientWidth,M=C.clientHeight,E=o.innerWidth,$=o.innerHeight,x=be(C);g&&(x.left-=C.scrollLeft);const A=[[x.left,x.top],[x.left+L,x.top],[x.left,x.top+M],[x.left+L,x.top+M]];for(let T=0;T<A.length;T+=1){const P=A[T];if(P[0]>=0&&P[0]<=E&&P[1]>=0&&P[1]<=$){if(P[0]===0&&P[1]===0)continue;S=!0}}if(!S)return}t.isHorizontal()?((f||b||v||c)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),((b||c)&&!g||(f||v)&&g)&&t.slideNext(),((f||v)&&!g||(b||c)&&g)&&t.slidePrev()):((f||b||d||w)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),(b||w)&&t.slideNext(),(f||d)&&t.slidePrev()),r("keyPress",m)}}function a(){t.keyboard.enabled||(n.addEventListener("keydown",l),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(n.removeEventListener("keydown",l),t.keyboard.enabled=!1)}s("init",()=>{t.params.keyboard.enabled&&a()}),s("destroy",()=>{t.keyboard.enabled&&u()}),Object.assign(t.keyboard,{enable:a,disable:u})}function zi(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n=_();e({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let o,l=q(),a;const u=[];function h(d){let L=0,M=0,E=0,$=0;return"detail"in d&&(M=d.detail),"wheelDelta"in d&&(M=-d.wheelDelta/120),"wheelDeltaY"in d&&(M=-d.wheelDeltaY/120),"wheelDeltaX"in d&&(L=-d.wheelDeltaX/120),"axis"in d&&d.axis===d.HORIZONTAL_AXIS&&(L=M,M=0),E=L*10,$=M*10,"deltaY"in d&&($=d.deltaY),"deltaX"in d&&(E=d.deltaX),d.shiftKey&&!E&&(E=$,$=0),(E||$)&&d.deltaMode&&(d.deltaMode===1?(E*=40,$*=40):(E*=800,$*=800)),E&&!L&&(L=E<1?-1:1),$&&!M&&(M=$<1?-1:1),{spinX:L,spinY:M,pixelX:E,pixelY:$}}function g(){t.enabled&&(t.mouseEntered=!0)}function y(){t.enabled&&(t.mouseEntered=!1)}function m(d){return t.params.mousewheel.thresholdDelta&&d.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&q()-l<t.params.mousewheel.thresholdTime?!1:d.delta>=6&&q()-l<60?!0:(d.direction<0?(!t.isEnd||t.params.loop)&&!t.animating&&(t.slideNext(),r("scroll",d.raw)):(!t.isBeginning||t.params.loop)&&!t.animating&&(t.slidePrev(),r("scroll",d.raw)),l=new n.Date().getTime(),!1)}function p(d){const w=t.params.mousewheel;if(d.direction<0){if(t.isEnd&&!t.params.loop&&w.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&w.releaseOnEdges)return!0;return!1}function f(d){let w=d,S=!0;if(!t.enabled||d.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const C=t.params.mousewheel;t.params.cssMode&&w.preventDefault();let L=t.el;t.params.mousewheel.eventsTarget!=="container"&&(L=document.querySelector(t.params.mousewheel.eventsTarget));const M=L&&L.contains(w.target);if(!t.mouseEntered&&!M&&!C.releaseOnEdges)return!0;w.originalEvent&&(w=w.originalEvent);let E=0;const $=t.rtlTranslate?-1:1,x=h(w);if(C.forceToAxis)if(t.isHorizontal())if(Math.abs(x.pixelX)>Math.abs(x.pixelY))E=-x.pixelX*$;else return!0;else if(Math.abs(x.pixelY)>Math.abs(x.pixelX))E=-x.pixelY;else return!0;else E=Math.abs(x.pixelX)>Math.abs(x.pixelY)?-x.pixelX*$:-x.pixelY;if(E===0)return!0;C.invert&&(E=-E);let A=t.getTranslate()+E*C.sensitivity;if(A>=t.minTranslate()&&(A=t.minTranslate()),A<=t.maxTranslate()&&(A=t.maxTranslate()),S=t.params.loop?!0:!(A===t.minTranslate()||A===t.maxTranslate()),S&&t.params.nested&&w.stopPropagation(),!t.params.freeMode||!t.params.freeMode.enabled){const T={time:q(),delta:Math.abs(E),direction:Math.sign(E),raw:d};u.length>=2&&u.shift();const P=u.length?u[u.length-1]:void 0;if(u.push(T),P?(T.direction!==P.direction||T.delta>P.delta||T.time>P.time+150)&&m(T):m(T),p(T))return!0}else{const T={time:q(),delta:Math.abs(E),direction:Math.sign(E)},P=a&&T.time<a.time+500&&T.delta<=a.delta&&T.direction===a.direction;if(!P){a=void 0;let I=t.getTranslate()+E*C.sensitivity;const D=t.isBeginning,ht=t.isEnd;if(I>=t.minTranslate()&&(I=t.minTranslate()),I<=t.maxTranslate()&&(I=t.maxTranslate()),t.setTransition(0),t.setTranslate(I),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!D&&t.isBeginning||!ht&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:T.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(o),o=void 0,u.length>=15&&u.shift();const Y=u.length?u[u.length-1]:void 0,U=u[0];if(u.push(T),Y&&(T.delta>Y.delta||T.direction!==Y.direction))u.splice(0);else if(u.length>=15&&T.time-U.time<500&&U.delta-T.delta>=1&&T.delta<=6){const K=E>0?.8:.2;a=T,u.splice(0),o=J(()=>{t.slideToClosest(t.params.speed,!0,void 0,K)},0)}o||(o=J(()=>{a=T,u.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)},500))}if(P||r("scroll",w),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),C.releaseOnEdges&&(I===t.minTranslate()||I===t.maxTranslate()))return!0}}return w.preventDefault?w.preventDefault():w.returnValue=!1,!1}function b(d){let w=t.el;t.params.mousewheel.eventsTarget!=="container"&&(w=document.querySelector(t.params.mousewheel.eventsTarget)),w[d]("mouseenter",g),w[d]("mouseleave",y),w[d]("wheel",f)}function v(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",f),!0):t.mousewheel.enabled?!1:(b("addEventListener"),t.mousewheel.enabled=!0,!0)}function c(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,f),!0):t.mousewheel.enabled?(b("removeEventListener"),t.mousewheel.enabled=!1,!0):!1}s("init",()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&c(),t.params.mousewheel.enabled&&v()}),s("destroy",()=>{t.params.cssMode&&v(),t.mousewheel.enabled&&c()}),Object.assign(t.mousewheel,{enable:v,disable:c})}function Zt(i,t,e,s){return i.params.createElements&&Object.keys(s).forEach(r=>{if(!e[r]&&e.auto===!0){let n=H(i.el,`.${s[r]}`)[0];n||(n=Pt("div",s[r]),n.className=s[r],i.el.append(n)),e[r]=n,t[r]=n}}),e}function Di(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const n=f=>(Array.isArray(f)?f:[f]).filter(b=>!!b);function o(f){let b;return f&&typeof f=="string"&&t.isElement&&(b=t.el.querySelector(f),b)?b:(f&&(typeof f=="string"&&(b=[...document.querySelectorAll(f)]),t.params.uniqueNavElements&&typeof f=="string"&&b.length>1&&t.el.querySelectorAll(f).length===1&&(b=t.el.querySelector(f))),f&&!b?f:b)}function l(f,b){const v=t.params.navigation;f=n(f),f.forEach(c=>{c&&(c.classList[b?"add":"remove"](...v.disabledClass.split(" ")),c.tagName==="BUTTON"&&(c.disabled=b),t.params.watchOverflow&&t.enabled&&c.classList[t.isLocked?"add":"remove"](v.lockClass))})}function a(){const{nextEl:f,prevEl:b}=t.navigation;if(t.params.loop){l(b,!1),l(f,!1);return}l(b,t.isBeginning&&!t.params.rewind),l(f,t.isEnd&&!t.params.rewind)}function u(f){f.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function h(f){f.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function g(){const f=t.params.navigation;if(t.params.navigation=Zt(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(f.nextEl||f.prevEl))return;let b=o(f.nextEl),v=o(f.prevEl);Object.assign(t.navigation,{nextEl:b,prevEl:v}),b=n(b),v=n(v);const c=(d,w)=>{d&&d.addEventListener("click",w==="next"?h:u),!t.enabled&&d&&d.classList.add(...f.lockClass.split(" "))};b.forEach(d=>c(d,"next")),v.forEach(d=>c(d,"prev"))}function y(){let{nextEl:f,prevEl:b}=t.navigation;f=n(f),b=n(b);const v=(c,d)=>{c.removeEventListener("click",d==="next"?h:u),c.classList.remove(...t.params.navigation.disabledClass.split(" "))};f.forEach(c=>v(c,"next")),b.forEach(c=>v(c,"prev"))}s("init",()=>{t.params.navigation.enabled===!1?p():(g(),a())}),s("toEdge fromEdge lock unlock",()=>{a()}),s("destroy",()=>{y()}),s("enable disable",()=>{let{nextEl:f,prevEl:b}=t.navigation;f=n(f),b=n(b),[...f,...b].filter(v=>!!v).forEach(v=>v.classList[t.enabled?"remove":"add"](t.params.navigation.lockClass))}),s("click",(f,b)=>{let{nextEl:v,prevEl:c}=t.navigation;v=n(v),c=n(c);const d=b.target;if(t.params.navigation.hideOnClick&&!c.includes(d)&&!v.includes(d)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===d||t.pagination.el.contains(d)))return;let w;v.length?w=v[0].classList.contains(t.params.navigation.hiddenClass):c.length&&(w=c[0].classList.contains(t.params.navigation.hiddenClass)),r(w===!0?"navigationShow":"navigationHide"),[...v,...c].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),a()},p=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(t.navigation,{enable:m,disable:p,update:a,init:g,destroy:y})}function Z(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Hi(i){let{swiper:t,extendParams:e,on:s,emit:r}=i;const n="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:c=>c,formatFractionTotal:c=>c,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),t.pagination={el:null,bullets:[]};let o,l=0;const a=c=>(Array.isArray(c)?c:[c]).filter(d=>!!d);function u(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function h(c,d){const{bulletActiveClass:w}=t.params.pagination;c&&(c=c[`${d==="prev"?"previous":"next"}ElementSibling`],c&&(c.classList.add(`${w}-${d}`),c=c[`${d==="prev"?"previous":"next"}ElementSibling`],c&&c.classList.add(`${w}-${d}-${d}`)))}function g(c){const d=c.target.closest(Z(t.params.pagination.bulletClass));if(!d)return;c.preventDefault();const w=ot(d)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const S=t.realIndex,C=t.getSlideIndexByData(w),L=t.getSlideIndexByData(t.realIndex);if(C>t.slides.length-t.loopedSlides){const M=t.activeIndex;t.loopFix({direction:C>L?"next":"prev",activeSlideIndex:C,slideTo:!1});const E=t.activeIndex;M===E&&t.slideToLoop(S,0,!1,!0)}t.slideToLoop(w)}else t.slideTo(w)}function y(){const c=t.rtl,d=t.params.pagination;if(u())return;let w=t.pagination.el;w=a(w);let S,C;const L=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,M=t.params.loop?Math.ceil(L/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),d.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const E=t.pagination.bullets;let $,x,A;if(d.dynamicBullets&&(o=Tt(E[0],t.isHorizontal()?"width":"height",!0),w.forEach(T=>{T.style[t.isHorizontal()?"width":"height"]=`${o*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&C!==void 0&&(l+=S-(C||0),l>d.dynamicMainBullets-1?l=d.dynamicMainBullets-1:l<0&&(l=0)),$=Math.max(S-l,0),x=$+(Math.min(E.length,d.dynamicMainBullets)-1),A=(x+$)/2),E.forEach(T=>{const P=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${d.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();T.classList.remove(...P)}),w.length>1)E.forEach(T=>{const P=ot(T);P===S?T.classList.add(...d.bulletActiveClass.split(" ")):t.isElement&&T.setAttribute("part","bullet"),d.dynamicBullets&&(P>=$&&P<=x&&T.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),P===$&&h(T,"prev"),P===x&&h(T,"next"))});else{const T=E[S];if(T&&T.classList.add(...d.bulletActiveClass.split(" ")),t.isElement&&E.forEach((P,I)=>{P.setAttribute("part",I===S?"bullet-active":"bullet")}),d.dynamicBullets){const P=E[$],I=E[x];for(let D=$;D<=x;D+=1)E[D]&&E[D].classList.add(...`${d.bulletActiveClass}-main`.split(" "));h(P,"prev"),h(I,"next")}}if(d.dynamicBullets){const T=Math.min(E.length,d.dynamicMainBullets+4),P=(o*T-o)/2-A*o,I=c?"right":"left";E.forEach(D=>{D.style[t.isHorizontal()?I:"top"]=`${P}px`})}}w.forEach((E,$)=>{if(d.type==="fraction"&&(E.querySelectorAll(Z(d.currentClass)).forEach(x=>{x.textContent=d.formatFractionCurrent(S+1)}),E.querySelectorAll(Z(d.totalClass)).forEach(x=>{x.textContent=d.formatFractionTotal(M)})),d.type==="progressbar"){let x;d.progressbarOpposite?x=t.isHorizontal()?"vertical":"horizontal":x=t.isHorizontal()?"horizontal":"vertical";const A=(S+1)/M;let T=1,P=1;x==="horizontal"?T=A:P=A,E.querySelectorAll(Z(d.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${T}) scaleY(${P})`,I.style.transitionDuration=`${t.params.speed}ms`})}d.type==="custom"&&d.renderCustom?(E.innerHTML=d.renderCustom(t,S+1,M),$===0&&r("paginationRender",E)):($===0&&r("paginationRender",E),r("paginationUpdate",E)),t.params.watchOverflow&&t.enabled&&E.classList[t.isLocked?"add":"remove"](d.lockClass)})}function m(){const c=t.params.pagination;if(u())return;const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let w=t.pagination.el;w=a(w);let S="";if(c.type==="bullets"){let C=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>d&&(C=d);for(let L=0;L<C;L+=1)c.renderBullet?S+=c.renderBullet.call(t,L,c.bulletClass):S+=`<${c.bulletElement} ${t.isElement?'part="bullet"':""} class="${c.bulletClass}"></${c.bulletElement}>`}c.type==="fraction"&&(c.renderFraction?S=c.renderFraction.call(t,c.currentClass,c.totalClass):S=`<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),c.type==="progressbar"&&(c.renderProgressbar?S=c.renderProgressbar.call(t,c.progressbarFillClass):S=`<span class="${c.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(C=>{c.type!=="custom"&&(C.innerHTML=S||""),c.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(Z(c.bulletClass)))}),c.type!=="custom"&&r("paginationRender",w[0])}function p(){t.params.pagination=Zt(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const c=t.params.pagination;if(!c.el)return;let d;typeof c.el=="string"&&t.isElement&&(d=t.el.querySelector(c.el)),!d&&typeof c.el=="string"&&(d=[...document.querySelectorAll(c.el)]),d||(d=c.el),!(!d||d.length===0)&&(t.params.uniqueNavElements&&typeof c.el=="string"&&Array.isArray(d)&&d.length>1&&(d=[...t.el.querySelectorAll(c.el)],d.length>1&&(d=d.filter(w=>dt(w,".swiper")[0]===t.el)[0])),Array.isArray(d)&&d.length===1&&(d=d[0]),Object.assign(t.pagination,{el:d}),d=a(d),d.forEach(w=>{c.type==="bullets"&&c.clickable&&w.classList.add(...(c.clickableClass||"").split(" ")),w.classList.add(c.modifierClass+c.type),w.classList.add(t.isHorizontal()?c.horizontalClass:c.verticalClass),c.type==="bullets"&&c.dynamicBullets&&(w.classList.add(`${c.modifierClass}${c.type}-dynamic`),l=0,c.dynamicMainBullets<1&&(c.dynamicMainBullets=1)),c.type==="progressbar"&&c.progressbarOpposite&&w.classList.add(c.progressbarOppositeClass),c.clickable&&w.addEventListener("click",g),t.enabled||w.classList.add(c.lockClass)}))}function f(){const c=t.params.pagination;if(u())return;let d=t.pagination.el;d&&(d=a(d),d.forEach(w=>{w.classList.remove(c.hiddenClass),w.classList.remove(c.modifierClass+c.type),w.classList.remove(t.isHorizontal()?c.horizontalClass:c.verticalClass),c.clickable&&(w.classList.remove(...(c.clickableClass||"").split(" ")),w.removeEventListener("click",g))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...c.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const c=t.params.pagination;let{el:d}=t.pagination;d=a(d),d.forEach(w=>{w.classList.remove(c.horizontalClass,c.verticalClass),w.classList.add(t.isHorizontal()?c.horizontalClass:c.verticalClass)})}),s("init",()=>{t.params.pagination.enabled===!1?v():(p(),m(),y())}),s("activeIndexChange",()=>{typeof t.snapIndex>"u"&&y()}),s("snapIndexChange",()=>{y()}),s("snapGridLengthChange",()=>{m(),y()}),s("destroy",()=>{f()}),s("enable disable",()=>{let{el:c}=t.pagination;c&&(c=a(c),c.forEach(d=>d.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),s("lock unlock",()=>{y()}),s("click",(c,d)=>{const w=d.target,S=a(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),S.forEach(L=>L.classList.toggle(t.params.pagination.hiddenClass))}});const b=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:c}=t.pagination;c&&(c=a(c),c.forEach(d=>d.classList.remove(t.params.pagination.paginationDisabledClass))),p(),m(),y()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:c}=t.pagination;c&&(c=a(c),c.forEach(d=>d.classList.add(t.params.pagination.paginationDisabledClass))),f()};Object.assign(t.pagination,{enable:b,disable:v,render:m,update:y,init:p,destroy:f})}function qi(i){const{effect:t,swiper:e,on:s,setTranslate:r,setTransition:n,overwriteParams:o,perspective:l,recreateShadows:a,getEffectParams:u}=i;s("beforeInit",()=>{if(e.params.effect!==t)return;e.classNames.push(`${e.params.containerModifierClass}${t}`),l&&l()&&e.classNames.push(`${e.params.containerModifierClass}3d`);const g=o?o():{};Object.assign(e.params,g),Object.assign(e.originalParams,g)}),s("setTranslate",()=>{e.params.effect===t&&r()}),s("setTransition",(g,y)=>{e.params.effect===t&&n(y)}),s("transitionEnd",()=>{if(e.params.effect===t&&a){if(!u||!u().slideShadows)return;e.slides.forEach(g=>{g.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(y=>y.remove())}),a()}});let h;s("virtualUpdate",()=>{e.params.effect===t&&(e.slides.length||(h=!0),requestAnimationFrame(()=>{h&&e.slides&&e.slides.length&&(r(),h=!1)}))})}function Ni(i,t){const e=Lt(t);return e!==t&&(e.style.backfaceVisibility="hidden",e.style["-webkit-backface-visibility"]="hidden"),e}function Gi(i){let{swiper:t,duration:e,transformElements:s,allSlides:r}=i;const{activeIndex:n}=t,o=l=>l.parentElement?l.parentElement:t.slides.filter(u=>u.shadowRoot&&u.shadowRoot===l.parentNode)[0];if(t.params.virtualTranslate&&e!==0){let l=!1,a;r?a=s:a=s.filter(u=>{const h=u.classList.contains("swiper-slide-transform")?o(u):u;return t.getSlideIndex(h)===n}),a.forEach(u=>{xe(u,()=>{if(l||!t||t.destroyed)return;l=!0,t.animating=!1;const h=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(h)})})}}function Bi(i,t,e){const s=`swiper-slide-shadow${e?`-${e}`:""}${i?` swiper-slide-shadow-${i}`:""}`,r=Lt(t);let n=r.querySelector(`.${s.split(" ").join(".")}`);return n||(n=Pt("div",s.split(" ")),r.append(n)),n}function Vi(i){let{swiper:t,extendParams:e,on:s}=i;e({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const r=l=>typeof l=="string"?l:`${l}px`;qi({effect:"creative",swiper:t,on:s,setTranslate:()=>{const{slides:l,wrapperEl:a,slidesSizesGrid:u}=t,h=t.params.creativeEffect,{progressMultiplier:g}=h,y=t.params.centeredSlides;if(y){const m=u[0]/2-t.params.slidesOffsetBefore||0;a.style.transform=`translateX(calc(50% - ${m}px))`}for(let m=0;m<l.length;m+=1){const p=l[m],f=p.progress,b=Math.min(Math.max(p.progress,-h.limitProgress),h.limitProgress);let v=b;y||(v=Math.min(Math.max(p.originalProgress,-h.limitProgress),h.limitProgress));const c=p.swiperSlideOffset,d=[t.params.cssMode?-c-t.translate:-c,0,0],w=[0,0,0];let S=!1;t.isHorizontal()||(d[1]=d[0],d[0]=0);let C={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};b<0?(C=h.next,S=!0):b>0&&(C=h.prev,S=!0),d.forEach((T,P)=>{d[P]=`calc(${T}px + (${r(C.translate[P])} * ${Math.abs(b*g)}))`}),w.forEach((T,P)=>{w[P]=C.rotate[P]*Math.abs(b*g)}),p.style.zIndex=-Math.abs(Math.round(f))+l.length;const L=d.join(", "),M=`rotateX(${w[0]}deg) rotateY(${w[1]}deg) rotateZ(${w[2]}deg)`,E=v<0?`scale(${1+(1-C.scale)*v*g})`:`scale(${1-(1-C.scale)*v*g})`,$=v<0?1+(1-C.opacity)*v*g:1-(1-C.opacity)*v*g,x=`translate3d(${L}) ${M} ${E}`;if(S&&C.shadow||!S){let T=p.querySelector(".swiper-slide-shadow");if(!T&&C.shadow&&(T=Bi("creative",p)),T){const P=h.shadowPerProgress?b*(1/h.limitProgress):b;T.style.opacity=Math.min(Math.max(Math.abs(P),0),1)}}const A=Ni(h,p);A.style.transform=x,A.style.opacity=$,C.origin&&(A.style.transformOrigin=C.origin)}},setTransition:l=>{const a=t.slides.map(u=>Lt(u));a.forEach(u=>{u.style.transitionDuration=`${l}ms`,u.querySelectorAll(".swiper-slide-shadow").forEach(h=>{h.style.transitionDuration=`${l}ms`})}),Gi({swiper:t,duration:l,transformElements:a,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}const Fi=new z(".swiper-creative",{modules:[Di,Hi,ki,zi,Vi],initialSlide:0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},effect:"creative",creativeEffect:{prev:{shadow:!0,translate:[0,0,-400]},next:{translate:["100%",0,0]}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:500,spaceBetween:16,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},grabCursor:!0,slidesPerView:1,breakpoints:{576:{pagination:{dynamicBullets:!1}}}}),Ri=i=>Fi.slideTo(i);document.querySelectorAll(".slide-to").forEach((i,t)=>i.addEventListener("click",()=>Ri(t)));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var St;const ct=window,W=ct.trustedTypes,Dt=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ct="$lit$",G=`lit$${(Math.random()+"").slice(9)}$`,Qt="?"+G,ji=`<${Qt}>`,j=document,ut=()=>j.createComment(""),tt=i=>i===null||typeof i!="object"&&typeof i!="function",Jt=Array.isArray,Wi=i=>Jt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",xt=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ht=/-->/g,qt=/>/g,V=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nt=/'/g,Gt=/"/g,te=/^(?:script|style|textarea|title)$/i,et=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Bt=new WeakMap,F=j.createTreeWalker(j,129,null,!1);function ee(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(t):t}const Xi=(i,t)=>{const e=i.length-1,s=[];let r,n=t===2?"<svg>":"",o=Q;for(let l=0;l<e;l++){const a=i[l];let u,h,g=-1,y=0;for(;y<a.length&&(o.lastIndex=y,h=o.exec(a),h!==null);)y=o.lastIndex,o===Q?h[1]==="!--"?o=Ht:h[1]!==void 0?o=qt:h[2]!==void 0?(te.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=V):h[3]!==void 0&&(o=V):o===V?h[0]===">"?(o=r??Q,g=-1):h[1]===void 0?g=-2:(g=o.lastIndex-h[2].length,u=h[1],o=h[3]===void 0?V:h[3]==='"'?Gt:Nt):o===Gt||o===Nt?o=V:o===Ht||o===qt?o=Q:(o=V,r=void 0);const m=o===V&&i[l+1].startsWith("/>")?" ":"";n+=o===Q?a+ji:g>=0?(s.push(u),a.slice(0,g)+Ct+a.slice(g)+G+m):a+G+(g===-2?(s.push(void 0),l):m)}return[ee(i,n+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class it{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[u,h]=Xi(t,e);if(this.el=it.createElement(u,s),F.currentNode=this.el.content,e===2){const g=this.el.content,y=g.firstChild;y.remove(),g.append(...y.childNodes)}for(;(r=F.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const g=[];for(const y of r.getAttributeNames())if(y.endsWith(Ct)||y.startsWith(G)){const m=h[o++];if(g.push(y),m!==void 0){const p=r.getAttribute(m.toLowerCase()+Ct).split(G),f=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:f[2],strings:p,ctor:f[1]==="."?Ui:f[1]==="?"?Zi:f[1]==="@"?Qi:pt})}else a.push({type:6,index:n})}for(const y of g)r.removeAttribute(y)}if(te.test(r.tagName)){const g=r.textContent.split(G),y=g.length-1;if(y>0){r.textContent=W?W.emptyScript:"";for(let m=0;m<y;m++)r.append(g[m],ut()),F.nextNode(),a.push({type:2,index:++n});r.append(g[y],ut())}}}else if(r.nodeType===8)if(r.data===Qt)a.push({type:2,index:n});else{let g=-1;for(;(g=r.data.indexOf(G,g+1))!==-1;)a.push({type:7,index:n}),g+=G.length-1}n++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function X(i,t,e=i,s){var r,n,o,l;if(t===et)return t;let a=s!==void 0?(r=e._$Co)===null||r===void 0?void 0:r[s]:e._$Cl;const u=tt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),u===void 0?a=void 0:(a=new u(i),a._$AT(i,e,s)),s!==void 0?((o=(l=e)._$Co)!==null&&o!==void 0?o:l._$Co=[])[s]=a:e._$Cl=a),a!==void 0&&(t=X(i,a._$AS(i,t.values),a,s)),t}class Yi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:r}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:j).importNode(s,!0);F.currentNode=n;let o=F.nextNode(),l=0,a=0,u=r[0];for(;u!==void 0;){if(l===u.index){let h;u.type===2?h=new ft(o,o.nextSibling,this,t):u.type===1?h=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(h=new Ji(o,this,t)),this._$AV.push(h),u=r[++a]}l!==(u==null?void 0:u.index)&&(o=F.nextNode(),l++)}return F.currentNode=j,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ft{constructor(t,e,s,r){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),tt(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Wi(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(j.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=it.createElement(ee(r.h,r.h[0]),this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const o=new Yi(n,this),l=o.u(this.options);o.v(s),this.$(l),this._$AH=o}}_$AC(t){let e=Bt.get(t.strings);return e===void 0&&Bt.set(t.strings,e=new it(t)),e}T(t){Jt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const n of t)r===e.length?e.push(s=new ft(this.k(ut()),this.k(ut()),this,this.options)):s=e[r],s._$AI(n),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class pt{constructor(t,e,s,r,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){const n=this.strings;let o=!1;if(n===void 0)t=X(this,t,e,0),o=!tt(t)||t!==this._$AH&&t!==et,o&&(this._$AH=t);else{const l=t;let a,u;for(t=n[0],a=0;a<n.length-1;a++)u=X(this,l[s+a],e,a),u===et&&(u=this._$AH[a]),o||(o=!tt(u)||u!==this._$AH[a]),u===O?t=O:t!==O&&(t+=(u??"")+n[a+1]),this._$AH[a]=u}o&&!r&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ui extends pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}const Ki=W?W.emptyScript:"";class Zi extends pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,Ki):this.element.removeAttribute(this.name)}}class Qi extends pt{constructor(t,e,s,r,n){super(t,e,s,r,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=X(this,t,e,0))!==null&&s!==void 0?s:O)===et)return;const r=this._$AH,n=t===O&&r!==O||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==O&&(r===O||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Ji{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const Vt=ct.litHtmlPolyfillSupport;Vt==null||Vt(it,ft),((St=ct.litHtmlVersions)!==null&&St!==void 0?St:ct.litHtmlVersions=[]).push("2.8.0");function ts(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ie={exports:{}};(function(i){(function(t){var e=0,s=function r(n,o){var l=this,a=this,u=!1;if(Array.isArray(n))return!!n.length&&n.map(function(p){return new r(p,o)});var h={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},o);var p=typeof n=="string";this.container=p?document.querySelector(n):n,this.createDefinitions(),a.attachEvents()},createDefinitions:function(){var p=this,f=this.options,b=f.elementClass,v=f.openOnInit,c=f.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(m(b));this.elements=Array.from(c).filter(function(d){return d.classList&&d.classList.contains(b)}),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter(function(d){return!d.classList.contains("js-enabled")}).forEach(function(d){d.classList.add("js-enabled"),p.generateIDs(d),p.setARIA(d),p.setTransition(d);var w=p.elements.indexOf(d);e++,v.includes(w)?p.showElement(d,!1):p.closeElement(d,!1)})},setTransition:function(p){var f=arguments.length>1&&arguments[1]!==void 0&&arguments[1],b=this.options,v=b.duration,c=b.panelClass,d=p.querySelector(m(c)),w=g("transitionDuration");d.style[w]=f?null:"".concat(v,"ms")},generateIDs:function(p){var f=this.options,b=f.triggerClass,v=f.panelClass,c=p.querySelector(m(b)),d=p.querySelector(m(v));p.setAttribute("id",p.id||"ac-".concat(e)),c.setAttribute("id",c.id||"ac-trigger-".concat(e)),d.setAttribute("id",d.id||"ac-panel-".concat(e))},removeIDs:function(p){var f=this.options,b=f.triggerClass,v=f.panelClass,c=p.querySelector(m(b)),d=p.querySelector(m(v));p.id.startsWith("ac-")&&p.removeAttribute("id"),c.id.startsWith("ac-")&&c.removeAttribute("id"),d.id.startsWith("ac-")&&d.removeAttribute("id")},setARIA:function(p){var f=this.options,b=f.ariaEnabled,v=f.triggerClass,c=f.panelClass;if(b){var d=p.querySelector(m(v)),w=p.querySelector(m(c));d.setAttribute("role","button"),d.setAttribute("aria-controls",w.id),d.setAttribute("aria-disabled",!1),d.setAttribute("aria-expanded",!1),w.setAttribute("role","region"),w.setAttribute("aria-labelledby",d.id)}},updateARIA:function(p,f){var b=f.ariaExpanded,v=f.ariaDisabled,c=this.options,d=c.ariaEnabled,w=c.triggerClass;if(d){var S=p.querySelector(m(w));S.setAttribute("aria-expanded",b),S.setAttribute("aria-disabled",v)}},removeARIA:function(p){var f=this.options,b=f.ariaEnabled,v=f.triggerClass,c=f.panelClass;if(b){var d=p.querySelector(m(v)),w=p.querySelector(m(c));d.removeAttribute("role"),d.removeAttribute("aria-controls"),d.removeAttribute("aria-disabled"),d.removeAttribute("aria-expanded"),w.removeAttribute("role"),w.removeAttribute("aria-labelledby")}},focus:function(p,f){p.preventDefault();var b=this.options.triggerClass;f.querySelector(m(b)).focus()},focusFirstElement:function(p){this.focus(p,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(p){this.focus(p,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(p){var f=this.currFocusedIdx+1;if(f>this.elements.length-1)return this.focusFirstElement(p);this.focus(p,this.elements[f]),this.currFocusedIdx=f},focusPrevElement:function(p){var f=this.currFocusedIdx-1;if(f<0)return this.focusLastElement(p);this.focus(p,this.elements[f]),this.currFocusedIdx=f},showElement:function(p){var f=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],b=this.options,v=b.panelClass,c=b.activeClass,d=b.collapse,w=b.beforeOpen;f&&w(p);var S=p.querySelector(m(v)),C=S.scrollHeight;p.classList.add(c),requestAnimationFrame(function(){requestAnimationFrame(function(){S.style.height=f?"".concat(C,"px"):"auto"})}),this.updateARIA(p,{ariaExpanded:!0,ariaDisabled:!d})},closeElement:function(p){var f=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],b=this.options,v=b.panelClass,c=b.activeClass,d=b.beforeClose,w=p.querySelector(m(v)),S=w.scrollHeight;p.classList.remove(c),f?(d(p),requestAnimationFrame(function(){w.style.height="".concat(S,"px"),requestAnimationFrame(function(){w.style.height=0})})):w.style.height=0,this.updateARIA(p,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(p){var f=this.options,b=f.activeClass,v=f.collapse,c=p.classList.contains(b);if(!c||v)return c?this.closeElement(p):this.showElement(p)},closeElements:function(){var p=this,f=this.options,b=f.activeClass;f.showMultiple||this.elements.forEach(function(v,c){v.classList.contains(b)&&c!==p.currFocusedIdx&&p.closeElement(v)})},handleClick:function(p){var f=this,b=p.currentTarget;this.elements.forEach(function(v,c){v.contains(b)&&p.target.nodeName!=="A"&&(f.currFocusedIdx=c,f.closeElements(),f.focus(p,v),f.toggleElement(v))})},handleKeydown:function(p){switch(p.key){case"ArrowUp":return this.focusPrevElement(p);case"ArrowDown":return this.focusNextElement(p);case"Home":return this.focusFirstElement(p);case"End":return this.focusLastElement(p);default:return null}},handleFocus:function(p){var f=p.currentTarget,b=this.elements.find(function(v){return v.contains(f)});this.currFocusedIdx=this.elements.indexOf(b)},handleTransitionEnd:function(p){if(p.stopPropagation(),p.propertyName==="height"){var f=this.options,b=f.onOpen,v=f.onClose,c=p.currentTarget,d=parseInt(c.style.height),w=this.elements.find(function(S){return S.contains(c)});d>0?(c.style.height="auto",b(w)):v(w)}}};this.attachEvents=function(){if(!u){var p=h.options,f=p.triggerClass,b=p.panelClass;h.handleClick=h.handleClick.bind(h),h.handleKeydown=h.handleKeydown.bind(h),h.handleFocus=h.handleFocus.bind(h),h.handleTransitionEnd=h.handleTransitionEnd.bind(h),h.elements.forEach(function(v){var c=v.querySelector(m(f)),d=v.querySelector(m(b));c.addEventListener("click",h.handleClick),c.addEventListener("keydown",h.handleKeydown),c.addEventListener("focus",h.handleFocus),d.addEventListener("webkitTransitionEnd",h.handleTransitionEnd),d.addEventListener("transitionend",h.handleTransitionEnd)}),u=!0}},this.detachEvents=function(){if(u){var p=h.options,f=p.triggerClass,b=p.panelClass;h.elements.forEach(function(v){var c=v.querySelector(m(f)),d=v.querySelector(m(b));c.removeEventListener("click",h.handleClick),c.removeEventListener("keydown",h.handleKeydown),c.removeEventListener("focus",h.handleFocus),d.removeEventListener("webkitTransitionEnd",h.handleTransitionEnd),d.removeEventListener("transitionend",h.handleTransitionEnd)}),u=!1}},this.toggle=function(p){var f=h.elements[p];f&&h.toggleElement(f)},this.open=function(p){var f=h.elements[p];f&&h.showElement(f)},this.openAll=function(){var p=h.options,f=p.activeClass,b=p.onOpen;h.elements.forEach(function(v){v.classList.contains(f)||(h.showElement(v,!1),b(v))})},this.close=function(p){var f=h.elements[p];f&&h.closeElement(f)},this.closeAll=function(){var p=h.options,f=p.activeClass,b=p.onClose;h.elements.forEach(function(v){v.classList.contains(f)&&(h.closeElement(v,!1),b(v))})},this.destroy=function(){l.detachEvents(),l.openAll(),h.elements.forEach(function(p){h.removeIDs(p),h.removeARIA(p),h.setTransition(p,!0)}),u=!0},this.update=function(){h.createDefinitions(),l.detachEvents(),l.attachEvents()};var g=function(p){return typeof document.documentElement.style[p]=="string"?p:(p=y(p),p="webkit".concat(p))},y=function(p){return p.charAt(0).toUpperCase()+p.slice(1)},m=function(p){return".".concat(CSS.escape(p))};h.init()};i.exports!==void 0?i.exports=s:t.Accordion=s})(window)})(ie);var es=ie.exports;const is=ts(es);new is(".sidebar",{duration:200,showMultiple:!0});class ss{constructor(){nt(this,"observer",t=>new ResizeObserver(e=>e.forEach(s=>{const r=s.borderBoxSize[0].inlineSize;t.forEach(n=>n.style.maxWidth=`${r}px`)})));nt(this,"initWith",t=>{t.forEach(([e,s],r)=>{const n=document.querySelector(`.${e}`),o=document.querySelectorAll(`.${s}`),l=r+1;n&&o?this.observer(o).observe(n):console.error(`SizeSetter: there is no master-${l} or slave-${l}`)})})}}class ns{constructor(){nt(this,"initWith",(t,e)=>{for(const s in e)document.querySelectorAll(`${s}`).forEach(r=>r.setAttribute(`${t}`,`${e[s]}`))})}}const rs=i=>{i.forEach(t=>{const e=t.querySelectorAll("thead th:not(:first-child)"),s=t.querySelectorAll("tbody th");t.querySelectorAll("tbody tr").forEach((n,o)=>{n.querySelectorAll("td").forEach((a,u)=>{const h=()=>{e[u].classList.add("clr-accent"),s[o].classList.add("clr-accent")},g=()=>{e[u].classList.remove("clr-accent"),s[o].classList.remove("clr-accent")},y=v=>{switch(v){case!0:a.addEventListener("mouseover",h),a.addEventListener("mouseout",g);break;case!1:a.removeEventListener("mouseover",h),a.removeEventListener("mouseout",g);break}},m=v=>window.innerWidth>=v&&y(!0),p=v=>y(!!v),f=v=>{window.matchMedia(`(min-width: ${v}px)`).addEventListener("change",d=>p(d.matches))};(v=>{m(v),f(v)})(992)})})})};rs(document.querySelectorAll("table"));const as=new ns;as.initWith("role",{table:"table",caption:"caption",thead:"rowgroup",tbody:"rowgroup",tfoot:"rowgroup",tr:"row",td:"cell",th:"columnheader","th[scope=row]":"rowheader"});const ls=new ss;ls.initWith([["master-1","slave-1"]]);const R=document.querySelector(".sidebar"),Ft=document.querySelector(".sidebar-toggle");let Rt=null;Ft.addEventListener("click",()=>{Ft.classList.toggle("active"),R.classList.contains("isOpen")?(R.classList.remove("isOpen"),clearTimeout(Rt)):(R.style.display="initial",Rt=setTimeout(()=>requestAnimationFrame(()=>R.classList.add("isOpen")),.1))});R.addEventListener("transitionend",()=>!R.classList.contains("isOpen")&&(R.style.display="none"));const Mt=document.querySelector('[href="mailto:nospam@google.com"]');let jt=null;const os=()=>Mt.setAttribute("href","mailto:KrivoshlykovNN@yandex.ru"),ds=()=>Mt.setAttribute("href","mailto:nospampls@google.com"),cs=()=>{clearTimeout(jt),os(),jt=setTimeout(ds,1)};Mt.addEventListener("click",cs);console.log(`%cCoded by ✨Nazhdaque✨
https://www.frontendmentor.io/profile/Nazhdaque/solutions`,"background: #222; color: chartreuse; font-size: 1.25rem");
