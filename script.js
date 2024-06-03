document.addEventListener('DOMContentLoaded', () => {
    const questions = {
        neonato: {
            anamnesi: [
                { question: "Presenta tosse?", options: ["Sì", "No"] },
                { question: "Associata a scolo nasale?", options: ["Sì", "No"] },
                { question: "Non febbre?", options: ["Sì", "No"] }
            ],
            esameObiettivo: [
                { question: "Condizioni generali?", options: ["Buone", "Scarse"] },
                { question: "Vigile e reattivo?", options: ["Sì", "No"] },
                { question: "FA normotesa?", options: ["Sì", "No"] }
            ],
            terapie: [
                { question: "Assunzione di VIT D 800 UI al giorno per 4 mesi?", options: ["Sì", "No"] },
                { question: "BACTOBLIS in FT ricorrenti?", options: ["Sì", "No"] }
            ]
        },
        bambino: {
            anamnesi: [
                { question: "Presenta tosse?", options: ["Sì", "No"] },
                { question: "Associata a scolo nasale?", options: ["Sì", "No"] },
                { question: "Non febbre?", options: ["Sì", "No"] }
            ],
            esameObiettivo: [
                { question: "Condizioni generali?", options: ["Buone", "Scarse"] },
                { question: "Colorito roseo?", options: ["Sì", "No"] },
                { question: "Buono lo stato di idratazione?", options: ["Sì", "No"] }
            ],
            terapie: [
                { question: "Sciroppo per la tosse?", options: ["GRINTUSS", "UNCADEPT", "LENIRTUS"] },
                { question: "Per la rinite?", options: ["LAVAGGI NASALI", "ARGOTONE 0-12", "BACTORINOLO"] }
            ]
        }
    };

    const form = document.getElementById('anamnesiForm');
    const questionsContainer = document.getElementById('questionsContainer');
    const reportOutput = document.getElementById('reportOutput');

    form.addEventListener('change', (e) => {
        if (e.target.name === 'eta') {
            const selectedAgeGroup = e.target.value;
            generateQuestions(selectedAgeGroup);
        }
    });

    function generateQuestions(ageGroup) {
        questionsContainer.innerHTML = '';
        const sections = ['anamnesi', 'esameObiettivo', 'terapie'];
        sections.forEach(section => {
            const sectionWrapper = document.createElement('div');
            sectionWrapper.className = 'questionSection';

            const sectionTitle = document.createElement('h3');
            sectionTitle.textContent = section.charAt(0).toUpperCase() + section.slice(1);
            sectionWrapper.appendChild(sectionTitle);

            questions[ageGroup][section].forEach((item, index) => {
                const questionWrapper = document.createElement('div');
                questionWrapper.className = 'questionWrapper';

                const questionLabel = document.createElement('label');
                questionLabel.textContent = item.question;
                questionWrapper.appendChild(questionLabel);

                item.options.forEach(option => {
                    const optionLabel = document.createElement('label');
                    optionLabel.innerHTML = `<input type="checkbox" name="${section}Question${index}" value="${option}">${option}`;
                    questionWrapper.appendChild(optionLabel);
                });

                sectionWrapper.appendChild(questionWrapper);
            });

            const toggleButton = document.createElement('button');
            toggleButton.type = 'button';
            toggleButton.textContent = `Mostra/Nascondi ${section.charAt(0).toUpperCase() + section.slice(1)}`;
            toggleButton.onclick = () => {
                sectionWrapper.classList.toggle('hidden');
            };

            questionsContainer.appendChild(toggleButton);
            questionsContainer.appendChild(sectionWrapper);
        });
    }

    window.generateReport = function() {
        const formData = new FormData(form);
        const selectedAgeGroup = formData.get('eta');
        let report = `Anamnesi ed Esame Obiettivo per ${selectedAgeGroup}:\n\n`;

        const sections = ['anamnesi', 'esameObiettivo', 'terapie'];
        sections.forEach(section => {
            report += `${section.charAt(0).toUpperCase() + section.slice(1)}:\n`;
            questions[selectedAgeGroup][section].forEach((item, index) => {
                report += `${item.question}\n`;
                const selectedOptions = formData.getAll(`${section}Question${index}`);
                if (selectedOptions.length > 0) {
                    report += `Risposte: ${selectedOptions.join(', ')}\n`;
                } else {
                    report += `Nessuna risposta selezionata\n`;
                }
                report += '\n';
            });
        });

        reportOutput.textContent = report;
    }
});
