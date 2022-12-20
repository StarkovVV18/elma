document.addEventListener("DOMContentLoaded", () => {
        let tasks = [
        {
            "id": "a330e552-e6d0-4392-af94-cf34af3a911d",
            "subject": "Анализ",
            "description": "",
            "creationAuthor": 1,
            "executor": 1,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-16",
            "planEndDate": "2022-12-20",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "7119699d-01eb-49e0-8920-dbdac8a70288",
            "subject": "Планирование",
            "description": "",
            "creationAuthor": 1,
            "executor": 1,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-20",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "a07849db-98b8-43e1-8169-356ed125d60f",
            "subject": "Проектирование",
            "description": "",
            "creationAuthor": 1,
            "executor": 2,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-20",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "0a6ebceb-5a5c-4c9f-b810-0c2fea126cbc",
            "subject": "Разработка",
            "description": "",
            "creationAuthor": 1,
            "executor": 3,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-20",
            "planEndDate": "2022-12-23",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "0119120d-d245-4647-b1d6-c9fa0cbf8ff0",
            "subject": "Тестирование",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-22",
            "planEndDate": "2022-12-23",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "35760e3e-eeec-4930-a9c4-8892ab71c29f",
            "subject": "Заместитель",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "1a839cca-5548-42d7-a11f-15a391f7248e",
            "subject": "Наблюдатель",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-22",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "37d9191e-1847-4d65-bfe3-92806e1e8c99",
            "subject": "Декоратор",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-23",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "a0ec224b-500d-4f8b-9c96-9c53e481e6e4",
            "subject": "Фасад",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "df4f472a-def0-40c0-9455-34d8490f8d17",
            "subject": "Адаптер",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-22",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "ed131834-2568-4f18-8933-a2b012fe58d5",
            "subject": "Строитель",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-20",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "a574a1cf-f182-41b7-b7cc-0cf61261ec91",
            "subject": "Мост",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-22",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "c15e7504-b555-4228-9549-305eb1a3a5df",
            "subject": "Команда",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "fa53a5d3-2e07-4210-9452-f875b718d03f",
            "subject": "Итератор",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-22",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "d1bb8543-4b7d-41f5-83ca-7c693eea590a",
            "subject": "Посредник",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-23",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "03ba7ac4-0f59-4779-92a9-bb9085775147",
            "subject": "Прототип",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-23",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "ade008bf-9ae3-4b03-b4d2-9015869c53bb",
            "subject": "Компоновщик",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-23",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "ebc1fc6f-58ba-4701-b47b-65bef3f0bbca",
            "subject": "Снимок",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "d7582ef8-8722-4e23-abe5-d48caa834c23",
            "subject": "Состояние",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-22",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "451d079d-b9bc-46c5-889e-adb6a9d289cc",
            "subject": "Стратегия",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-22",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "0c35cf2f-d067-47a1-9c1f-71c90ff1cfba",
            "subject": "Одиночка",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "f3120f91-22db-4f98-9a28-3620381d3040",
            "subject": "Легковес",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "6b46299e-09c8-4d45-887e-4e157e5fc026",
            "subject": "Посетитель",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-23",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "3d94a870-b000-4fd0-8a50-b1728707216a",
            "subject": "Фабричный метод",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-22",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "53211ad9-47eb-493a-bb27-2de1af5e22e1",
            "subject": "Абстрактная фабрика",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-21",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        },
        {
            "id": "dad9365a-e3ab-4ba2-acff-6061b619f740",
            "subject": "Цепочка обязанностей",
            "description": "",
            "creationAuthor": 1,
            "executor": null,
            "creationDate": "2022-12-16",
            "planStartDate": "2022-12-19",
            "planEndDate": "2022-12-20",
            "endDate": "2022-12-16",
            "status": 1,
            "order": 1
        }
        ];

        let users = [
        {
            "id": 1,
            "username": "user1",
            "surname": "Кожин",
            "firstName": "Антон",
            "secondName": ""
        },
        {
            "id": 2,
            "username": "user2",
            "surname": "Петренко",
            "firstName": "Сергей",
            "secondName": ""
        },
        {
            "id": 3,
            "username": "user3",
            "surname": "Кузнецов",
            "firstName": "Денис",
            "secondName": ""
        },
        {
            "id": 4,
            "username": "user4",
            "surname": "Васильев",
            "firstName": "Олег",
            "secondName": ""
        },
        {
            "id": 5,
            "username": "user5",
            "surname": "Некрасов",
            "firstName": "Денис",
            "secondName": ""
        },
        {
            "id": 6,
            "username": "user6",
            "surname": "Быстров",
            "firstName": "Иван",
            "secondName": ""
        },
        {
            "id": 7,
            "username": "user7",
            "surname": "Кожин",
            "firstName": "Александр",
            "secondName": ""
        },
        {
            "id": 8,
            "username": "user8",
            "surname": "Тонких",
            "firstName": "Влад",
            "secondName": ""
        },
        {
            "id": 9,
            "username": "user9",
            "surname": "Некрасов",
            "firstName": "Влад",
            "secondName": ""
        },
        {
            "id": 10,
            "username": "user10",
            "surname": "Кожин",
            "firstName": "Александр",
            "secondName": ""
        },
        {
            "id": 11,
            "username": "user11",
            "surname": "Быстров",
            "firstName": "Борис",
            "secondName": ""
        },
        {
            "id": 12,
            "username": "user12",
            "surname": "Васильев",
            "firstName": "Олег",
            "secondName": ""
        },
        {
            "id": 13,
            "username": "user13",
            "surname": "Тонких",
            "firstName": "Дмитрий",
            "secondName": ""
        },
        {
            "id": 14,
            "username": "user14",
            "surname": "Стольный",
            "firstName": "Григорий",
            "secondName": ""
        },
        {
            "id": 15,
            "username": "user15",
            "surname": "Быстров",
            "firstName": "Антон",
            "secondName": ""
        },
        {
            "id": 16,
            "username": "user16",
            "surname": "Стольный",
            "firstName": "Евгений",
            "secondName": ""
        },
        {
            "id": 17,
            "username": "user17",
            "surname": "Кузнецов",
            "firstName": "Иван",
            "secondName": ""
        },
        {
            "id": 18,
            "username": "user18",
            "surname": "Стольный",
            "firstName": "Денис",
            "secondName": ""
        },
        {
            "id": 19,
            "username": "user19",
            "surname": "Кузнецов",
            "firstName": "Денис",
            "secondName": ""
        },
        {
            "id": 20,
            "username": "user20",
            "surname": "Некрасов",
            "firstName": "Антон",
            "secondName": ""
        },
        {
            "id": 21,
            "username": "user21",
            "surname": "Потапенко",
            "firstName": "Денис",
            "secondName": ""
        },
        {
            "id": 22,
            "username": "user22",
            "surname": "Тонких",
            "firstName": "Олег",
            "secondName": ""
        },
        {
            "id": 23,
            "username": "user23",
            "surname": "Стольный",
            "firstName": "Григорий",
            "secondName": ""
        },
        {
            "id": 24,
            "username": "user24",
            "surname": "Кузнецов",
            "firstName": "Олег",
            "secondName": ""
        },
        {
            "id": 25,
            "username": "user25",
            "surname": "Кузнецов",
            "firstName": "Олег",
            "secondName": ""
        }
        ];

        var backlog = document.getElementsByClassName('backlog');
        var backlogTasks = backlog[0].children[1];
        var chart = document.getElementsByClassName('collection');
        var inputSearch = document.getElementById('inputSearch');
        var btnSearch = document.getElementById('btnSearch').addEventListener("click", x => { 
            serachTask(tasks, inputSearch.value)
        });

        var startDate = new Date("2022-12-16"); // YYYY-MM-DD
        var endDate = new Date("2022-12-22"); // YYYY-MM-DD
        var draggedElement;
        
        // Сформировать массив дат
        var getDateArray = function(start, end) {
            var arr = new Array();
            var dt = new Date(start);
            while (dt <= end)
            {
                arr.push(new Date(dt));
                dt.setDate(dt.getDate() + 1);
            }
            return arr;
        }

        function addDays(date, days)
        {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
        var datesArray = getDateArray(startDate, endDate);
        
        // Кнопки переключения недель
        var nextBtn = document.getElementById('nextBtn').addEventListener("click", x => {
            let start = endDate;
            let end = addDays(endDate, 7);

            datesArray = getDateArray(start, end);
            setChartPeriod(true);
            setChartTasks();
            setListTasks(tasks, backlogTasks);
            setDnDListener();
        });
        var backBtn = document.getElementById('backBtn').addEventListener("click", x => { 
            let start = startDate;
            let end = addDays(startDate, 7);

            datesArray = getDateArray(start, end);
            setChartPeriod(true);
            setChartTasks();
            setListTasks(tasks, backlogTasks);
            setDnDListener();
        });

        // Удаление потомков узла
        function removeAllChildNodes(parent)
        {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

        // Создание списка задач
        function setListTasks(findedTasks = null)
        {
            if (backlogTasks.children.length > 0)
            {
                removeAllChildNodes(backlogTasks);
            }

            // Создаем список задач
            (findedTasks != null ? findedTasks : tasks).forEach(x => {
                // Создание элементов тега задачи
                let div = document.createElement("div");
                let h4 = document.createElement("h4");
                let p = document.createElement("p");
                div.setAttribute('data-id', x.id);
                // Присваивание значений
                h4.innerText = x.subject + " " + x.executor + " " + x.planStartDate;
                p.innerHTML = x.description;

                // Сборка тега задачи
                div.appendChild(h4);
                div.appendChild(p);
                div.classList.add("task");
                div.setAttribute("draggable", true);

                div.addEventListener('dragstart', x => {
                    x.dataTransfer.setData("text/html", x.target);
                    draggedElement = x.target;
                });

                // Добавление задачи в список задач
                if (x.executor == null)
                    backlogTasks.appendChild(div);
            })
        }

        // Поиск задач
        function serachTask(tasks, value)
        {
            if (value == null || value == "")
                setListTasks(null);

            let newTasks = tasks;
            var result = newTasks.filter(x => x.subject.includes(value) || x.description.includes(value));
            
            setListTasks(result);
        }

        // Добавление периода на диаграмму
        function setChartPeriod(update)
        {
            let chartPeriod = chart[0].children[0];

            if (update)
                chartPeriod = chart[0].removeChild(chart[0].children[0]);

            datesArray.forEach((x, idx) => {
                let divInLi = document.createElement("div");
                let date = x.toLocaleString().split(',')[0];
                // Присваивание значений
                divInLi.setAttribute('data-name', date)
                divInLi.classList.add("attribute");
                divInLi.innerText = date;

                chartPeriod.appendChild(divInLi);
            })
        }

        // Добавление задач на диаграмму
        function setChartTasks()
        {
            users.forEach(x => {
                // Находим задачу для сотрудника
                let userTasks = tasks.filter(t => t.executor == x.id);
                // Если задача найдена то добавляем её на диаграмму
                if (userTasks.length > 0)
                {
                    let liItem = document.createElement("li");
                    let divInLi = document.createElement("div");
                    divInLi.addEventListener('dragover', x => {
                        x.preventDefault();
                    })
                    divInLi.addEventListener('drop', x => dropTask(x));
                    divInLi.innerText = x.surname;
                    divInLi.setAttribute('data-name', x.surname)
                    divInLi.setAttribute('data-user', true)
                    divInLi.setAttribute('data-userid', x.id)

                    divInLi.classList.add("attribute");
                    liItem.appendChild(divInLi);
                    liItem.classList.add("item");
                    liItem.classList.add("item-container");

                    setTasksOfUser(liItem, userTasks, x.id)
                    // Добавление задачи на диаграмму
                    chart[0].appendChild(liItem);
                }
            })
        }

        // Добавление задач сотрудникам
        function setTasksOfUser(liItem, userTasks, userId)
        {
            datesArray.forEach(x => {
                let date = x.toISOString().split('T')[0];
                let planingtasks = userTasks.filter(d => d.planStartDate == date);
                let div = document.createElement("div");
                let ul = document.createElement("ul");
                
                planingtasks.forEach(t => {
                    let li = document.createElement("li");
                    li.innerText = t.subject;
                    li.setAttribute('data-name', date);
                    li.setAttribute('data-userid', userId)
                    ul.appendChild(li);
                })

                div.addEventListener('dragover', x => {
                    x.preventDefault();
                })
                
                div.addEventListener('drop', x => dropTask(x));

                div.setAttribute('data-name', date);
                div.setAttribute('data-userid', userId);
                div.classList.add("attribute");
                ul.classList.add("bars");
                
                div.appendChild(ul);
                liItem.appendChild(div);
            })
        }

        // Добавить задачу в план сотрудника
        function setTaskOfUser(src, taskIndex)
        {
            let userId = src.dataset.userid;
            tasks[taskIndex]["executor"] = userId;

            let li = document.createElement("li");
            li.innerText = tasks[taskIndex].subject;
            li.setAttribute('data-name', tasks[taskIndex].planStartDate);
            li.setAttribute('data-userid', userId)
            src.children[0].appendChild(li);
            setListTasks()
        }
        
        // Функция "приёма" задачи и довления её на график
        function dropTask(target)
        {
            // console.log(target)
            let src = target.target;
            let task = tasks.find(t => t.id == draggedElement.dataset.id)
            let taskUser = tasks.find(t => t.id == task.id);
            let taskIndex = tasks.indexOf(taskUser);

            if (src.nodeName == "UL")
                src = src.parentNode;

            // Скидываем задачу на имя сотрудника
            if (src.dataset.user == "true")
            {
                let parent = src.parentNode;
                parent.childNodes.forEach(p => {
                    if (p.dataset.name == taskUser.planStartDate)
                        setTaskOfUser(p, taskIndex);
                })
            }

            // Скидываем задачу на пересечение сотрудника и даты
            if (src.dataset.name == task.planStartDate)
                setTaskOfUser(src, taskIndex);
        }

        setChartPeriod();
        setChartTasks();
        setListTasks(tasks, backlogTasks);
  });