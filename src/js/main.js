(function () {

    class SkillsWidget {
        /**
         * 
         * @param {string} selector 
         * @param {{'title': string, 'progress': number}[]} skills 
         */
        constructor (selector, skills) {
            this.skills = skills;
            this.element = document.querySelector(selector);

            if (this.element) {
                this.renderOptions();
            }
        }

        generatePercentColor (percent) {
            var hue = '' + 140 * percent / 100;
            return ["hsl(", hue, ", 80%,50%)"].join("");
        }

        renderOptions () {
            this.skills.forEach((skill) => {
                let color = this.generatePercentColor(skill['progress']);
                let progressCss = `width: ${skill['progress']-15}%; background-color: ${color};`;
                let row = `<div class="row"><div class="skill-title">${skill['title']}</div><div class="skill-progress" style="${progressCss}"><span>${skill['title']}</span></div></div>`;
                this.element.innerHTML += row;
            });
        }
    }

    window.addEventListener('load', (e) => {
        
        const frameworks = [
            {
                title: 'Angular',
                progress: 95
            }, {
                title: 'NestJS',
                progress: 95
            }, {
                title: 'Magento 2',
                progress: 85
            },  {
                title: 'Laravel',
                progress: 84
            }, {
                title: 'Yii2',
                progress: 75
            }, {
                title: 'Magento 1',
                progress: 50
            }, {
                title: 'Flutter',
                progress: 40,
            }
        ];

        const databaseSkills = [
            {
                title: 'MySQL',
                progress: 95,
            },
            {
                title: 'MongoDB',
                progress: 93,
            },
            {
                title: 'Neo4j',
                progress: 45,
            }
        ]

        const programmingSkills = [
            {
                title: 'Type Script',
                progress: 95
            }, {
                title: 'Java Script',
                progress: 95
            }, {
                title: 'PHP',
                progress: 95
            }, {
                title: 'Dart',
                progress: 65,
            }, {
                title: 'Bash / Shell scripting',
                progress: 55
            }, {
                title: 'C/C++',
                progress: 40
            }
        ];  

        new SkillsWidget('#frameworks', frameworks);
        new SkillsWidget('#databases', databaseSkills)
        new SkillsWidget('#programming_skills', programmingSkills);
    });
})();