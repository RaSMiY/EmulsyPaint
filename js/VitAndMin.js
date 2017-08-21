/*/============================Блок лицензии============================================
Copyright (c) SMiY semenov@razum.top
This file is part of VitAndMin project.

    VitAndMin project is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    VitAndMin project is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with VitAndMin project.  If not, see <http://www.gnu.org/licenses/>.

  (Этот файл — часть VitAndMin project.

   Проект VitAndMin - свободная программа: вы можете перераспространять ее и/или
   изменять ее на условиях Стандартной общественной лицензии GNU в том виде,
   в каком она была опубликована Фондом свободного программного обеспечения;
   либо версии 3 лицензии, либо (по вашему выбору) любой более поздней
   версии.

   Проект VitAndMin распространяется в надежде, что она будет полезной,
   но БЕЗО ВСЯКИХ ГАРАНТИЙ; даже без неявной гарантии ТОВАРНОГО ВИДА
   или ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННЫХ ЦЕЛЕЙ. Подробнее см. в Стандартной
   общественной лицензии GNU.

   Вы должны были получить копию Стандартной общественной лицензии GNU
   вместе с этой программой. Если это не так, см.
   <http://www.gnu.org/licenses/>.)
//=============================Конец блока Лицензии=====================================*/

//===========================Блок определения объектов===================================
Vit_and_Min = [
	{
		alias: ['витамин А', 'vitA', 'vitamin A', 'retinol', 'ретинол'],
		pict: 'paprika.png',
		sources: ['печень трески','болгаркий перец','печень','сливочное масло','молочные продукты','рыба','рыбий жир'],
		appointments: ['обеспечивает нормальную работу сетчатки глаза', 'участвует в процессе дифференциации клеток, т.е., позволяет каждой клетке организма выполнять её уникальную функцию', 'повышает сопротивляемость организма инфекциям', 'витамин А и его производные поддерживают целостность клеток кожи и слизистых оболочек (пищеварительной системы, дыхательных путей), таким образом защищая организм от проникновения инфекции', 'необходим для правильного развития эмбриона, в частности, его конечностей, сердца, глаз и ушей', 'участвует в преобразовании стволовых клеток организма в красные кровянные тельца (эритроциты)'],
		symptoms_of_lack: ['снижение способности видеть в темноте ("куринная слепота")', 'образование на слизистой  оболочке глаза ксеротических бляшек (похожи на застывшую пену в уголках глаз)', 'частые респираторные или желудочно-кишечные заболевания', 'потерявшие блеск и легко выпадающие волосы' ],
		daily_need: 0.9, //мг
		compatibilty: {vitA: 1, vitB1: 0, vitB2:0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: -1, vitC: 1, vitD: 0, vitE: 1, vitK: -1, vitH: 0, Lyc: 0, Lut: 0, Bcar: 1, Fe: 1, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 1, P: 0}
	},
	{
		alias: ['витамин B1', 'vitB1', 'vitamin B1', 'tiamin', 'тиамин', 'витамин Б1'],
		pict: 'potatoes.png',
		sources: ['нежирная свинина','печень','почки','картофель','крупы (пшённая, овсянная, гречневая)','хлеб (ржаной и цельнозерновой)','бобовые', 'зелёный горошек'],
		appointments: ['необходимая составляющая множества ферментов, которые в основном используются для получения энергии из потребляемой пищи', 'нужен для синтеза белков и жиров', 'влияет на обмен веществ, участвующих в передаче нервного импульса, необходим для процессов произвольного сокращения мышц'],
		symptoms_of_lack: ['раздражительность', 'головная боль', 'депрессия', 'бессонница', 'повышенная утомляемость', 'тошнота', 'снижение апетита', 'ощущение тяжести и жжения в подложечной области', 'одышка', 'тахикардия', 'гипотония (низкое кровяное давление)', 'болезнь бери-бери &mdash; крайняя степень недостаточности витамина В1 &mdash; проявляется нарушениями работы сердечно-сосудистой, нервной и пищеварительной систем'],
		daily_need: 1.7,  //мг
		compatibilty: {vitA: 0, vitB1: 1, vitB2: -1, vitB3: -1, vitB5: 1, vitB6: -1, vitB9: 0, vitB12: -1, vitC: -1, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: -1, Mg: -1, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['витамин B2', 'vitB2', 'vitamin B2', 'riboflavin', 'рибофлавин', 'витамин Б2'],
		pict: 'spinach.png',
		sources: ['печень','почки','творог','сыр','шиповник','цельное молоко','бобовые', 'зелёный горошек', 'мясо', 'крупы (гречневая, овсяная)', 'хлеб из муки грубого помола', 'шпинат'],
		appointments: ['является мощным антиоксидантом, блокирует разрушительную деятельность свободных радикалов', 'необходим для нормального обмена в организме белков, жиров и углеводов, а также витамина И6, витамина В3 (ниацина) и витамина В9 (фолиевой кислоты)', 'вместе с витамином А участвует в обеспечении цветового и светового зрения, повышает остроту зрения и способность глаза адаптироваться к темноте; необходим для нормального функционирования сетчатки и хрусталика глаза; оказывает экранирующее влияние, защищая глаза от негативного воздействия ультрафиолета', 'необходим для включения в гемоглобин железа', 'необходим для нормального развития плода'],
		symptoms_of_lack: ['трещины в уголках рта ("заеды")', 'шелушение кожи вокруг рта, на крыльях носа и ушах', 'глоссит (воспаление языка)', 'светобоязнь', 'слёзотечение', 'нарушение зрения в темноте', 'общая слабость', 'головокружение', 'обычно, дефицит витамина В12 наблюдается в комплексе с недостатком других витаминов'],
		daily_need:  2, //мг
		compatibilty: {vitA: 0, vitB1: -1, vitB2: 1, vitB3: 1, vitB5: 1, vitB6: 1, vitB9: 1, vitB12: -1, vitC: 0, vitD: 0, vitE: 0, vitK: 1, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: -0.5, I: 0, K: 0, Ca: 0, Mg: 1, Mn: 0, Mo: 0, Cu: -1, Se: 0, Cr: 0, Zn: 1, P: 0}
	},
	{
		alias: ['витамин B3', 'vitB3', 'niacin', 'ниацин', 'витамин PP', 'витамин Б3'],
		pict: 'prunes.png',
		sources: ['печень','сыр','мясо','колбаса','крупы (гречневая, пшённая, овсяная)','чернослив','бобовые', 'хлеб (пшеничный, грубого помола)'],
		appointments: ['входит в состав множества окислительно-восстановительных ферментов, принимает участие в процессах клеточного дыхания, выделения энергии из углеводов и жиров, а также в метаболизме белков', 'влияет на эритропоэз (процесс образования эритроцитов &mdash; красныых кровяных телец), секреторную и моторную функции желудка и кишечника', 'расширяет периферические сосуды, тем самым улучшая кровообращение и обмен веществ в коже и подкожных тканях'],
		symptoms_of_lack: ['длительное время может протекать бессимптомно', 'клинические проявления дефицита витамина В3 называются пеллагрой, симптомы которой подчиняются правилу "3Д" &mdash; дерматит, диарея, деменция (слабоумие); при отсутствии лечения, пеллагра приводит к летальному исходу', '' ],
		daily_need:  20, //мг
		compatibilty: {vitA: 0, vitB1: -1, vitB2: 1, vitB3: 1, vitB5: 0, vitB6: 1, vitB9: 0, vitB12: -1, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 1, Lyc: 0, Lut: 0, Bcar: 0, Fe: 1, I: 0, K: 0, Ca: 0, Mg: 1, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['витамин B5', 'vitB5', 'vitamin B5', 'пантотеновая кислота', 'витамин Б5'],
		pict: 'cauliflower.png',
		sources: ['печень','почки','бобовые','мясо','птица','рыба','цветная капуста','яичный желток','помидоры','пивные дрожжи'],
		appointments: ['входит в состав коэнзима А &mdash; важнейшего соединения, которое участвует во множестве биохимических реакций организма; коэнзим А необходим для получения энергии из пищи, для синтеза жиров, холестерина, некоторых гормонов (например, мелатонина), для образования гемоглобина; коэнзим А способствует нейтрализации токсинов в печени'],
		symptoms_of_lack: ['покалывание и онемение пальцев ног', 'покраснение кожи стоп', 'депрессия', 'поскольку витамин В5 синтезируется микрофлорой кишечника, к его дефициту может привести только сильное истощение или различные заболевания тонкого кишечника' ],
		daily_need: 5, //мг
		compatibilty: {vitA: 0, vitB1: 1, vitB2: 1, vitB3: 0, vitB5: 1, vitB6: 0, vitB9: 1, vitB12: 1, vitC: 1, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 1, Mn: 0, Mo: 0, Cu: -1, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['витамин B6', 'vitB6', 'vitamin B6', 'пиридоксин и его производные', 'витамин Б6'],
		pict: 'melon.png',
		sources: ['печень','почки','птица','мясо','рыба','бобовые','дыня','крупы (гречневая, пшённая, ячневая)','перец','картофель','хлеб из муки грубого помола','гранат'],
		appointments: ['необходим для функционирования около ста жизненно важных ферментов, которые являются катализаторами важных химических реакций человеческого организма', 'участвует в процессах синтеза серотонина &mdash; вещества, которое называют "гормоном счастья"; серотонин контролирует эмоции, аппетит и сон человека', 'необходим для синтеза нуклеиновых кислот, а также для синтеза гема, компонента гемоглобина', 'может частично восполнять недостаток витамина В3 (ниацина) в организме', 'регулирет воздействие на организм половых гормонов (прогестерона, эстрогена и тестостерона'],
		symptoms_of_lack: ['раздражительность', 'депрессия', 'спутанность сознания', 'воспаление слизистой оболочки рта','стоматит','язвочки на коже и в уголках рта','дерматит','в тяжёлых случаях гиповитаминоза В6 могут наблюдаться судороги'],
		daily_need: 2, //мг
		compatibilty: {vitA: 0, vitB1: -1, vitB2: 1, vitB3: 1, vitB5: 0, vitB6: 1, vitB9: 0, vitB12: -1, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 1, Mg: 1, Mn: 0, Mo: 0, Cu: 1, Se: 0, Cr: 0, Zn: 1, P: 0}
	},
	{
		alias: ['витамин B9', 'vitB9', 'vitamin B9', 'фолиевая кислота', 'витамин Б9'],
		pict: 'parsley.png',
		sources: ['печень','печень трески','хлеб (ржаной и цельнозерновой)', 'бобовые', 'петрушка', 'шпинат', 'салат', 'зелёный лук'],
		appointments: ['фолиевая кислота необходима для процессов обмена нуклеиновых кислот и аминокислот', 'необходима для нормального кроветворения'],
		symptoms_of_lack: ['гиперхромная анемия: быстрая утомляемость, одышка и слабость', 'воспалительные поражения языка, слизистой оболочки рта, а также поражения слизистой оболочк желудка и кишечника, сопровождающиеся диареей', 'недостаток витамина В9 может привести к осложжнениям во время беременности, а также к нарушению развития нервной системы плода'],
		daily_need: {'взрослые': 0.4, 'беременные': 0.6, 'дети': 0.5}, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 1, vitB3: 0, vitB5: 1, vitB6: 0, vitB9: 1, vitB12: 1, vitC: 1, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 1, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: -1, P: 0}
	},
	{
		alias: ['витамин B12', 'vitB12', 'vitamin B12', 'кобаламин', 'витамин Б12'],
		pict: 'cheese.png',
		sources: ['печень','почки','мясо','рыба','сыр'],
		appointments: ['участвует в регуляции процесса обмена белков и нуклеиновых кислот', 'способствует росту и регенерации (восстановлению) тканей', 'необхожим для нормального функционирования нервной системы, так как влияет на выработку миелина &mdash; вещества, образующего электроизолирующую оболочку отростков нервных клеток', 'необходим для синтеза гемоглобина &mdash; переносчика кислорода от лёгких к другим тканям организма'],
		symptoms_of_lack: ['дефицит витамина В12, вызванный длительной вегетарианской диетой, беременностью или алклоголизмом, вызывает частые головные боли и головокружение', 'повышенная утомляемость', 'появление одышки', 'снижение аппетита','желтушность кожи','чувство анемения','дефицит витамина В12, вызванный гастритом и энтеритом, проявляется воспалением слизистой оболочки рта, желудка и тонкого кишечника, диареей и нарушением пищеварения, мегалобластической (злокачественной) анемией'],
		daily_need: 0.003, //мг
		compatibilty: {vitA: -1, vitB1: -1, vitB2: -1, vitB3: -1, vitB5: 1, vitB6: -1, vitB9: 1, vitB12: 1, vitC: -1, vitD: 0, vitE: -1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: -1, I: 0, K: 0, Ca: 1, Mg: 1, Mn: 0, Mo: 0, Cu: -1, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['витамин C', 'vitC', 'vitamin C', 'аскорбиновая кислота', 'витамин Ц'],
		pict: 'lemon.png',
		sources: ['шиповник','сладкий перец','чёрная смородина','облепиха','земляника','цитрусовые','киви','капуста','зелёный горошек','зелёный лук','картофель','хвоя','люцерна'],
		appointments: ['является сильным антиоксидантом', 'даже небольшие количества витамина С защищают молекулы белков, жиров, углеводов и нуклеиновых кислот от разрушения свободными радикалами, которые могут образовываться в организме как в процессе нормального обмена веществ, так и под воздействием токсинов или загрязняющих агентов (например, сигаретного дыма)', 'способен восстанавливать другие антиоксиданты, в частности, витамин Е', 'необходим для синтеза колагена &mdash; одного из структурных компонентов стенок сосудов, сухожилий, связок и костей', 'играет важную роль в синтезе норадреналина &mdash; вещества, которое влияет на настроение и многие психофизические реакции, особенно реакции на стресс', 'участвует в синтезе картинина &mdash; вещества, которое позволяет перерабатывать жиры в энергию','необходим для превращения холестерина в желчные кислоты; желчные кислоты служат для переваривания жиров, а также усиливают перистальтику'],
		symptoms_of_lack: ['начальный гиповитаминоз витамина С характеризуется снижением работоспособности, вялостью, слабостью, повышенной склонностью к ОРВИ, зябкостью, снижением аппетита, кровоточивостью дёсен, "гусинной кожей"', 'переход гиповитаминоза в  авитаминоз называется цингой и сопровождается усилением перечисленных симптомов; появляются кровоизлияния в мышцы, суставы, под кожу; наблюдается изъязвление дёсен и выпадение зубов'],
		daily_need: 70, //мг
		compatibilty: {vitA: 1, vitB1: -1, vitB2: 0, vitB3: 0, vitB5: 1, vitB6: 0, vitB9: 1, vitB12: -1, vitC: 1, vitD: 0, vitE: 1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 1, I: 0, K: 0, Ca: 1, Mg: 0, Mn: 0, Mo: 0, Cu: -1, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['витамин D', 'vitD', 'vitamin D', 'кальциферол', 'витамин Д'],
				pict: 'eggs.png',
		sources: ['печень трески','рыба','рыбий жир','печень','яйца','сливочное масло'],
		appointments: ['поддерживает необходимый уровень кальция в крови, что важно для нормальной работы нервной системы, роста костей и поддержания плотности костной ткани', 'блокирует бесконтрольное размножение клеток организма, ведущее к таким серьёзным паталогиям, как рак', 'способствует подготовке каждой клетки организма к выполнению её уникальной функции', 'необходим для нормального функционирования почек', 'участвует в  работе имунной системы: усиливает природный иммунитет и подавляет аутоимунные процессы (процессы, направленные против тканей собственного тела)', 'играет важную роль в процессе секреции инсулина, особенно при повышенной потребности в нём'],
		symptoms_of_lack: ['у детей недостаток витамина Д проявляется развитием рахита с нарушением известковости костей, деформацией позвоночника, нижних конечностей, замедлением общего развития', 'у взрослых дефицит витамина Д провоцирует остеомаляцию (недостаточную минерализацию костной ткани, её "размягчение") и остеопороз'],
		daily_need: 0.005, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 1, vitE: -1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 1, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 1, P: 1}
	},
	{
		alias: ['витамин E', 'vitE', 'vitamin E', 'токоферол', 'витамин Е'],
		pict: 'gemmifera.png',
		sources: ['растительные масла','крупы','хлеб','орехи','брюссельская капуста'],
		appointments: ['борется со свободными радикалами; в оганизме свободные радикалы формируются как в процессе нормально обмена веществ, так и под воздействием негативных факторов внешней среды, например, ультрафиолета или сигаретного дыма; свободные радикалы окисляют жиры, из которыхх построены стенки клеток, тем самым разрушая их; витамин Е препятствует этому процессу ', 'кроме того, витамин Е предотвращает окисление липопротеидов &mdash; молекул, которые состоят из жиров и белков и, окисляясь, становятся причиной развития многих сердечно-сосудистых заболеваний', 'необходим для нормального функционирования имунной системы', 'стимулирует расслабление сосудов'],
		symptoms_of_lack: ['нарушение координации движений', 'мышечная слабость', 'повреждение сетчатки глаза'],
		daily_need: 15, //мг
		compatibilty: {vitA: 1, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: -1, vitC: 1, vitD: -1, vitE: 1, vitK: -1, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: -1, I: 0, K: 0, Ca: 0, Mg: -1, Mn: 0, Mo: 0, Cu: -1, Se: 1, Cr: 0, Zn: -1, P: 0}
	},
	{
		alias: ['витамин K', 'vitK', 'vitamin K', 'группа веществ нафтохинонов', 'витамин К'],
		pict: 'zucchini.png',
		sources: ['шпинат','капуста','кабачки','растительные масла','люцерна','крапива'],
		appointments: ['необходим для свёртывания крови, следовательно, влияет на скорость заживления ран', 'участвует в процессах минерализации', 'является одним из компонентов мембран клеток, активно влияет на их структурные свойства и функции; благодаря этому поддерживается нормальная моторная деятельность кишечника, желудка и мускулатуры'],
		symptoms_of_lack: ['медленное свёртывание крови, легко образующиеся синяки, кровоточивость слизистых оболочек рта и носа; кровь в моче и слишком обильные менструальные кровотечения', 'витамин К не только поступает в человеческий организм с пищей, но и синтезируется кишечной микрофлорой, поэтому, дефицит витамина К наблюдается крайне редко и, как правило, в сочетании с нарушениями обмена жиров и секреции желчи (при различных видах гепатита и цирроза печени)'],
		daily_need: 0.12, //мг
		compatibilty: {vitA: -1, vitB1: 0, vitB2: 1, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: -1, vitK: 1, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 1, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['витамин H', 'vitH', 'vitamin H', 'биотин', 'витамин Н'],
		pict: 'peas.png',
		sources: ['печень','почки','бобовые (соя, горох)','яичный желток','рожь','цветная капуста','пивные дрожжи'],
		appointments: ['необходимая составляющая многих фермментов,  которые катализируют биохимические реакции в организме', 'синтез жирных кислот', 'получение энергии из поступающих с пищей белков, жиров и углеводов', 'усвоение глюкозы клетками'],
		symptoms_of_lack: ['выпадение волос, покрасневшая и шелушащаяся кожа лица и шеи', 'неврологические нарушения, депрессия', 'нехватка биотина может быть вызвана употреблением большого количества сырых яичных белков, так как они содержат вещество, дезактивирующее биотин'],
		daily_need: 0.05, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 1, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 1, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['ликопин', 'Lyc', 'lycopene'],
		pict: 'watermelon.png',
		sources: ['помидоры','томатный соус','кетчуп','томатный сок','сладкий красный перец','арбуз','папайя','любые фрукты и овощи красного цвета','ликопин легче усваивается организмом из овощей, подвергнутых тепловой обработке'],
		appointments: ['нейтрализует свободные радикалы &mdash; агрессивные содинения, которые могут повредить клетки организма', 'наибольшие концентрации ликопина обнаружены в клетках печени, предстательной железе, прямой кишке и коже', 'ликопин, предположительно, способствует снижению риска развития некоторых видов рака: предстательной железы, лёгких, шейки матки, молочной железы', 'полезен для профилактики ишемической болезни сердца', 'наряду с другим каротиноидом, лютеином, способен защищать сетчатку глаза от воздейятвия ультрафиолетовых лучей'],
		symptoms_of_lack: ['возрастная макулярная дистрофия сетчатки', 'сердечно-сосудистые заболевания', 'онкология'],
		daily_need: 5, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 1, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['лютеин', 'Lut', 'lutein'],
		pict: 'corn.png',
		sources: ['капуста','кабачки','шпинат','кресс-салат','кукуруза','петрушка','зелёный горошек','зелёный сладкий перец','шиповник','пророщенные зёрна пшеницы'],
		appointments: ['в сетчатке выполняет роль "светофильтра", отсекая опасую для неё удьтрафиолетовую часть спектра; ультрафиолет способен вызывать окислительные процессы, которые становятся первопричиной различных заболеваний глаз, к числу которых относится возрастная дегенерация сетчатки &mdash; опасное заболевание, которое стоит на первом месте среди причин потери зрения в пожилом возрасте', 'в коже действует как антиоксидант, т.е., прерывает окислительные реакции, начавшиеся под воздействием внешних факторов', 'наряду с другими антиоксидантами крови предохраняет стенки сосудов от образования атеросклеротических бляшек'],
		symptoms_of_lack: ['возрастная макулярная дистрофия сетчатки', 'катаракта'],
		daily_need: 5, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 1, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['бета-каротин', 'Bcar', 'beta-carotin', 'Е160a'],
		pict: 'carrot.png',
		sources: ['морковь','ппетрушка','укроп','лук','абрикосы','тыква','облепиха','помидоры','рябина','шиповник'],
		appointments: ['является провитамином (предшественником) витамина А, необходимого организму для нормального роста и развития', 'обеспечивает  нормальную работу сетчатки глаза', 'помогает предотвратить окислениежиров в крови, которое является одной из причин развития атеросклероза', 'необходим для нормальной работы имунной системы'],
		symptoms_of_lack: ['снижение способности видеть в темноте ("куриннная слепота")', 'образование на слизистой оболочке глаза ксеротических бляшек (похожи на застывшую пену в уголках глаз)', 'частые респираторные или желудочно-кишечные заболевания', 'потерявшие блеск и легко выпадающие волосы' ],
		daily_need: 5, //мг
		compatibilty: {vitA: 1, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 1, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['железо', 'Fe', 'ferrum'],
		pict: 'bread.png',
		sources: ['мясо','печень','почки','картофель','яйца','хлеб','белые грибы','персики','абрикосы'],
		appointments: ['входит в состав гема &mdash; компонента гемоглобина и миоглобина, которые необходимы для транспорта кислорода в ткани и мышцы тела', 'принимает участие в имунных реакциях, а также, в обмене  энергией в клетках', 'обязательный компонент антиоксидантных ферментов', 'участвует в синтезе ДНК, таким образом, этот минерал чрезвычайно важен для роста и развития организма', 'необходимо для распознавания гипоксии (недостатка кислорода) и стимуляции соответствующих компенсаторных реакций в организме'],
		symptoms_of_lack: ['анемия (малокровие &mdash; уменьшение числа эритроцитов', 'бледность', 'быстрая утомляемость ', 'учащённый пульс', 'затруднённое дыхание', 'дефицит железа &mdash; наиболее часто всречающийся дефицит'],
		daily_need: {'мужчины': 10, 'женщины': 15}, //мг
		compatibilty: {vitA: 1, vitB1: 0, vitB2: -0.5, vitB3: 1, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: -1, vitC: 1, vitD: 0, vitE: -1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 1, I: 0, K: 0, Ca: -1, Mg: -1, Mn: -1, Mo: 0, Cu: 1, Se: 0, Cr: -1, Zn: -1, P: 0}
	},
	{
		alias: ['йод', 'I', 'iod'],
		pict: 'laminaria.png',
		sources: ['морская рыба','ламинария (морская капуста)','молочные продукты','гречневая крупа','картофель','черноплодная рябина','дрожжи','спирулина','грецкие орехи','фейхоа'],
		appointments: ['необходим для нормального функционирования щитовидной железы; является необходимым компонентом её гормонов, которые регулируют множество важных процессов организма, включая рост, развитие, обмен веществ и репродукцию'],
		symptoms_of_lack: ['задержка психического развития (у детей), гипотиреоз (снижение выработки гормонов цитовидной железы)', 'зоб (увеличение щитовидной железы)', 'нарушения роста иразвития', 'по статистике Всемирной Организации Здравоохранения, в мире, растройствами, связанными с дефицитом йода, страдают 740 миллионов человек'],
		daily_need: 0.15, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 1, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['калий', 'K', 'potassium', 'kaliy'],
		pict: 'bananas.png',
		sources: ['бобовые','картофель','мясо','морская рыба','бананы','грибы','хлеб','яблоки','абрикосы','смородина','курага','изюм'],
		appointments: ['поддерживает мембранный потенциал &mdash; универсальный двигатель любых физиологических процессов в  нашем организме; контроль мембранного потенциала имеет решающее значение для процессов передачи нервных импульсов, сокращения мышц и активности сердца', 'необходим для функционирования некоторых ферментов, участвующих в обмене углеводов'],
		symptoms_of_lack: ['гипокалиемия (слишком низкий уровень калия в плазме крови)', 'быстрая утомляемость', 'мышечная слабость и спазмы', 'боли в брюшной области', 'сильная гипокалиемия может повлечь за собой паралич мышц и аритмию', 'чаще всего гипокалиемию вызывает частое использование диуретиков (мочегонных средств), сильная рвота и/или диарея, а также алкоголизм'],
		daily_need: 2500, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 1, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['кальций', 'Ca', 'calcium'],
		pict: 'milk.png',
		sources: ['сыр','творог','молоко','кисломолочные продукты','яйца','бобовые (фасоль, соя)','орехи'],
		appointments: ['является одним из основных структурных элементов костей и зубов; минеральный компонент кости строится в основном из кристаллов гидроксиаппатита &mdash; вещества, в состав которого входит большое количество кальция и фосфатов', 'кальций участвует в процессах сокращения и расслабления сосудов, в сокращении мышц, передаче нервных импульсов и процессе секреции гормонов, например, инсулина', 'необходим для стабилизации и обеспечения оптимальной активности некоторых белков и ферментов, в частности, для свёрстывания крови и, следовательно, заживлении порезов и ран'],
		symptoms_of_lack: ['нарушение функции паращитовидных желез, которые в организме, главным образом, отвечают за нормальное состояние скелета и почек', 'химический недосаток кальция может быть одной из причин развития остеопороза'],
		daily_need: 1250, //мг
		compatibilty: {vitA: 0, vitB1: -1, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 1, vitB9: 0, vitB12: 1, vitC: 1, vitD: 1, vitE: 0, vitK: 1, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: -1, I: 0, K: 0, Ca: 1, Mg: 0.5, Mn: -1, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: -1, P: -1}
	},
	{
		alias: ['магний', 'Mg', 'magnesium'],
		pict: 'peanuts.png',
		sources: ['крупы','рыба','соя','мясо','яйца','хлеб','бобовые','арахис','курага','брокколи','бананы'],
		appointments: ['участвует в переработке углеводов и жиров в энергию', 'необходим на некоторых стадиях синтеза белков, а также, молекул ДНК и РНК', 'поддерживает структуру костей, клеточных стенок и хромосом', 'играет важную роль в процессах передачи нервных импульсов, сокращении мышц и поддержании нормального ритма сердца, так как способствует доставке калия и кальция через клеточные стенки', 'необходим для секреции паратгормона (гормон паращитовидной железы)', 'вместе с кальцием участвует в процессах миграции клеток, что необходимо, например, для заживления ран'],
		symptoms_of_lack: ['тремор (дрожание конечностей)', 'мышечные спазмы', 'тетанию (тонические судороги)', 'потеря аппетита', 'тошнота', 'рвота', 'магний содержится в большом количестве, как в животной, так и в растительной пище, поэтому его дефицит у здоровых людей встречается крайне редко', 'нодостаточность магния может развиться вследствие некоторых заболеваний (хронических болезней кишечника и почек, алкоголизма)' ],
		daily_need: 400, //мг
		compatibilty: {vitA: 0, vitB1: -1, vitB2: 1, vitB3: 1, vitB5: 1, vitB6: 1, vitB9: 1, vitB12: 1, vitC: 0, vitD: 0, vitE: -1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 1, I: 0, K: 0, Ca: 0.5, Mg: 1, Mn: -1, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: -1, P: -1}
	},
	{
		alias: ['марганец', 'Mn', 'manganese'],
		pict: 'tea.png',
		sources: ['печень','крупы','фасоль','горох','гречиха','арахис','чай','кофе','зелёные листья овощей'],
		appointments: ['необходимый компонент главного антиоксидантного фермента митохондрий ("энергетических фабрик") клеток; в митохондриях образуется большое количество свободных радикалов, для борьбы с которыми необходима система эффективной защиты, включающая марганец', 'активирует ферменты, которые играют важную роль в обмене белков, аминокислот, углеводов и холестерина', 'входит в состав фермента, участвующего в процессе образования глюкозы из нецглеводных компонентов', 'участвует в синтезе веществ, стимулирующих образование здоровых хрящей и костной ткани', 'путём сложной цепочки превращений стимулирует образование в клетках кожи коллагена, который необходим для заживления порезов и ран'],
		symptoms_of_lack: ['замедленный рост', 'ослабление репродуктивной функции', 'аномалии скелета', 'инсулинорезистентность ("предиабет")', 'изменение процессов обмена углеводов и жиров'],
		daily_need: 2, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: -1, I: 0, K: 0, Ca: -1, Mg: -1, Mn: 1, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 1, P: 0}
	},
	{
		alias: ['молибден', 'Mo', 'molybdenum'],
		pict: 'cereals.png',
		sources: ['печень','почки','горох','злаки','фасоль','зелёные листовые овощи','дыня','абрикос','цельное коровье молоко','дрожжи'],
		appointments: ['входит в состав ферментов (их около 15), которые участвуют в многочисленных физиологических процессах организма, в частности нейтрализуют токстны'],
		symptoms_of_lack: ['учащение пульса и дыхания', 'головная боль', 'снижение зрения', 'кома', 'дефицит молибдена возникает крайне редко, лишь в сочетании с хроническими болезнями или недостатком других полезных веществ'],
		daily_need: 0.045, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 1, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['медь', 'Cu', 'copper', 'cuprum'],
		pict: 'oysters.png',
		sources: ['мясо','морепродукты','орехи','зерновые','какао','отруби','дрожжи','устрицы','спирулина'],
		appointments: ['учачтвует в процессе образования клеточной энергии', 'необходима для "сшивания" структурных белков коллагена и эластина, что создаёт сильную и эластичную соединительную ткань', 'помогает поддерживать целостность соединительной ткани сердечной мышцы и сосудов', 'активирует железо для включения его в гемоглобин', 'принимает участие в большом количестве важных реакций, протекающих в центральной нервной системе: в синтезе серотонина ("гормона счастья"), норадреналина (вещества, отвечающего за реакции организма на стресс, шок, травмы), миелина (вещества, образующего оболочку отростков нервных клеток)', 'входит в структуру белков &mdash; мощных антиоксидантов'],
		symptoms_of_lack: ['анемия', 'повышенная подверженность инфекциям', 'остеопороз', 'реже встречаются такие симптомы, как витилиго (потеря пигментации кожи), замедленный рост' ],
		daily_need: 1, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: -1, vitB3: 0, vitB5: -1, vitB6: 1, vitB9: 0, vitB12: -1, vitC: -1, vitD: 0, vitE: -1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 1, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 1, Se: 0, Cr: 0, Zn: -1, P: 0}
	},
	{
		alias: ['селен', 'Se', 'selenium'],
		pict: 'mushrooms.png',
		sources: ['зерновые','грибы','морепродукты','печень','почки','сердце','чеснок'],
		appointments: ['необходим для функционирования специфических ферментов &mdash; селенопротеинов; большинство селенопротеинов являются антиоксидантными ферментами', 'сперматогенез (селенопротеины защищают развивающиеся сперматазоиды от свободных радикалов)', 'регуляция роста клеток и их развития', 'защита клеток внутренних стенок сосудов от воздействия свободных радикалов', 'обмен веществ в мышцах', 'селен также необходим в качестве активатора и дезактиватора гормонов щитовидной железы, что делает его незаменимым для роста, развития и обмена веществ в нашем организме'],
		symptoms_of_lack: ['кардиомиопатия (невоспалительное поражение мышц сердца)', 'сердечная недостаточность', 'поражение скелетной мускулатуры', 'недостаточность селена развивается, как правило, вследствие парентерального питания (искусственного питания, которое назначается при невозможности нормального) и некоторых болезней пищеварительного тракта', 'дефицит наблюдается, также, в тех регионах Земли, где отмечена нехватка природного селена. К таким областям, на территории Российской Федерации, относятся Забайкалье, Удмуртия, Ярославская и Читинская области'],
		daily_need: 0.07, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 1, Cr: 0, Zn: 0, P: 0}
	},
	{
		alias: ['хром', 'Cr', 'chromium'],
		pict: 'tomatoes.png',
		sources: ['печень','сыр','бобы','горох','цельное зерно','чёрный перец','помидоры'],
		appointments: ['участвует в обмене глюкозы, усиливая эффект инсулина; инсулин вырабатывается специальными клетками поджелудочной железы, в ответ на повышение уровня глюкозы в крови, например, после еды; инсулин обеспечивает захват глюкозы клетками для образования энергии; кроме того, инсулин участвует в метаболизме белков и жиров'],
		symptoms_of_lack: ['нарушение переработки глюкозы и повышенная потребность организма в инсулине', 'недостаточность хрома гипотетически может способствовать развитию диабета второго типа (сахарного диабета)'],
		daily_need: 0.05, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 0, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: -1, I: 0, K: 0, Ca: 0, Mg: 0, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 1, Zn: -1, P: 0}
	},
	{
		alias: ['цинк', 'Zn', 'zinc'],
		pict: 'legumes.png',
		sources: ['мясо','рыба','устрицы','субпродукты (потроха — внутренние органы и менее ценные части туш животных)','яйца','бобовые','тыквенные семечки','отруби пшеницы','дрожжи'],
		appointments: ['необходим для функционирования около 100 различных ферментов', 'играет важнцю роль в поддержании структуры клеточных стенок', 'входит в состав фермента, регулирующего процесс синтеза белков на основании сведений, закодированных в гене', 'влияет на секрецию гормонов и передачу нервного импульса'],
		symptoms_of_lack: ['небольшой дефицит цинка &mdash; достаточно частое явление у детей; может выражаться в небольшой задержке умственного и физического развития, а также в повышенной подверженности тяжёлым инфекционным заболеваниям', 'серьёзный дефицит цинка проявляется замедлением или даже остановкой роста и развития', 'задержка полового созревания', 'характерная кожная сыпь', 'хроническая диарея', 'дефекты имунной системы', 'незаживляемость ран', 'нарушения вкуса и ночного зрения', 'различные отклонения в поведении'],
		daily_need: 12, //мг
		compatibilty: {vitA: 1, vitB1: 0, vitB2: 1, vitB3: 0, vitB5: 0, vitB6: 1, vitB9: -1, vitB12: 0, vitC: 0, vitD: 1, vitE: -1, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: -1, I: 0, K: 0, Ca: -1, Mg: -1, Mn: 1, Mo: 0, Cu: -1, Se: 0, Cr: -1, Zn: 1, P: 0}
	},
	{
		alias: ['фосфор', 'P', 'phosphorus'],
		pict: 'fowl.png',
		sources: ['сыр','бобовые','крупы','рыба','хлеб','яйца','птица','грибы','орехи'],
		appointments: ['является одним из основных структурных элементов костной ткани (до 85% фосфора, нахходящегося в нашем организме, содержится в костях)', 'входит в состав фосфолипидов, которые являются основным структурным компонентом клеточных стенок', 'необходим для ДНК, АТФ (молекула Аденозинтрифосфата является универсальным источником энергии для всех биохимических процессов, протекающих в живых системах), различных ферментов и гормонов'],
		symptoms_of_lack: ['потеря аппетита', 'анемия', 'снижение мышечного тонуса', 'боли в костях', 'у детей &mdash; рахит', 'у взрослых &mdash; остеомаляции("размягчение костей")', 'повышенная склонность к инфекционным заболеваниям', 'онемение конечностей'],
		daily_need: 800, //мг
		compatibilty: {vitA: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0, vitC: 0, vitD: 1, vitE: 0, vitK: 0, vitH: 0, Lyc: 0, Lut: 0, Bcar: 0, Fe: 0, I: 0, K: 0, Ca: -1, Mg: -1, Mn: 0, Mo: 0, Cu: 0, Se: 0, Cr: 0, Zn: 0, P: 1}
	}
]

//==========================конец блока определения объектов==============================


//=========================Наполнение страницы=========================================

onload = function() {
	description=document.getElementById('description');
	for (vit=0; vit<Vit_and_Min.length; vit++) {
		element=document.createElement("div");
		
		element.innerHTML+='<img src="Pictures/PNG/'+Vit_and_Min[vit].pict+'" alt="'+Vit_and_Min[vit].alias[0]+'" />';
		
		element.innerHTML+='<h2>'+(vit+1)+'. '+Vit_and_Min[vit].alias[0]+'</h2><p></p>';
		
		element.lastChild.innerHTML+='<b>Другие названия: </b>'+Vit_and_Min[vit].alias[2];
		for (vjt=3; vjt<Vit_and_Min[vit].alias.length; vjt++) {
			element.lastChild.innerHTML+=', '+Vit_and_Min[vit].alias[vjt];
		};

		element.innerHTML+='<h4>Основные функции</h4><ul></ul>';
		for (vjt=0; vjt<Vit_and_Min[vit].appointments.length; vjt++) {
			element.lastChild.innerHTML+='<li>'+Vit_and_Min[vit].appointments[vjt]+'</li>';
		};
		
		element.innerHTML+='<h4>Симптомы нехватки</h4><ul></ul>';
		for (vjt=0; vjt<Vit_and_Min[vit].symptoms_of_lack.length; vjt++) {
			element.lastChild.innerHTML+='<li>'+Vit_and_Min[vit].symptoms_of_lack[vjt]+'</li>';
		};
		
		element.innerHTML+='<h4>Суточная потребность</h4>';
		
		if (typeof Vit_and_Min[vit].daily_need == 'object'){
			d_n=Object.keys(Vit_and_Min[vit].daily_need);
			element.innerHTML+='<ul></ul>';
			for (vjt in d_n) {
//				element.innerHTML+='<li>'++'</li>';
				element.lastChild.innerHTML+='<li>'+'<b>'+d_n[vjt]+': '+'</b>'+Vit_and_Min[vit].daily_need[d_n[vjt]]+'мг'+'</li>';
			}
		} else 
			element.innerHTML+='<ul><li>'+Vit_and_Min[vit].daily_need+'мг'+'</li></ul>';
		
		element.innerHTML+='<hr/>';
		description.append(element);
	}
}

//============================конец блока наполнения страницы=============================

//==================Перемещение объектов===============================================
function allowDrop(ev){
	ev.preventDefault();
}

function drag(ev){
	ev.dataTransfer.setData('text', ev.target.id);
}
function drop(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(data));
	
}
//==================Конец блока перемещения объектов=====================================

