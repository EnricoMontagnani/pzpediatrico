document.addEventListener('DOMContentLoaded', () => {
    const questions = {
        neonato: {
            anamnesi: [
                { question: "Riferita febbre?", options: ["Sì", "No"] },
                { question: "Associata a?", options: ["Tosse", "Rinite", "Vomito", "Diarrea"] },
                { question: "Ultime diuresi ed evacuazioni nella norma?", options: ["Sì", "No"] },
                { question: "Alimentazione e idratazione nella norma?", options: ["Sì", "No"] },
                { question: "Ultimo pasto ore", options: [""] },
                { question: "Ultima tachipirina ore", options: [""] },
                { question: "Ultimo ibuprofene ore", options: [""] },
                { question: "AF: Nascita a termine, perinatalità nella norma?", options: ["Sì", "No"] },
                { question: "Crescita regolare?", options: ["Sì", "No"] },
                { question: "Allergie note?", options: ["Sì", "No"] },
                { question: "Vaccinazioni secondo calendario?", options: ["Sì", "No"] },
                { question: "APR: Precedenti ricoveri, interventi chirurgici o patologie di rilievo?", options: ["Sì", "No"] },
                { question: "Assunzione di farmaci a domicilio per patologie croniche?", options: ["Sì", "No"] }
            ],
            esameObiettivo: [
                { question: "Condizioni generali?", options: ["Buone", "Scarse"] },
                { question: "Vigile e reattivo?", options: ["Sì", "No"] },
                { question: "FA normotesa?", options: ["Sì", "No"] },
                { question: "Capo normoconformato?", options: ["Sì", "No"] },
                { question: "Eupnoico, buono l’ingresso aereo polmonare bilaterale?", options: ["Sì", "No"] },
                { question: "Non rientramenti?", options: ["Sì", "No"] },
                { question: "Toni cardiaci ritmici?", options: ["Sì", "No"] },
                { question: "Non udibili soffi?", options: ["Sì", "No"] },
                { question: "Polsi femorali presenti e simmetrici?", options: ["Sì", "No"] },
                { question: "Addome trattabile?", options: ["Sì", "No"] },
                { question: "Non dolente?", options: ["Sì", "No"] },
                { question: "Non apprezabili masse?", options: ["Sì", "No"] },
                { question: "Genitali esterni normoconformati?", options: ["Sì", "No"] },
                { question: "Neuromotorio adeguato all’età?", options: ["Sì", "No"] },
                { question: "Non segni settici né meningei?", options: ["Sì", "No"] },
                { question: "Red Reflex oculare presente bilateralmente?", options: ["Sì", "No"] },
                { question: "Manovra di Ortolani negativa bilateralmente?", options: ["Sì", "No"] }
            ],
            terapie: [
                { question: "Assunzione di VIT D 800 UI al giorno per 4 mesi?", options: ["Sì", "No"] },
                { question: "BACTOBLIS in FT ricorrenti?", options: ["Sì", "No"] }
            ]
        },
        lattante: {
            anamnesi: [
                { question: "Riferita febbre?", options: ["Sì", "No"] },
                { question: "Associata a?", options: ["Tosse", "Rinite", "Vomito", "Diarrea"] },
                { question: "Ultime diuresi ed evacuazioni nella norma?", options: ["Sì", "No"] },
                { question: "Alimentazione e idratazione nella norma?", options: ["Sì", "No"] },
                { question: "Ultimo pasto ore", options: [""] },
                { question: "Ultima tachipirina ore", options: [""] },
                { question: "Ultimo ibuprofene ore", options: [""] },
                { question: "AF: Nascita a termine, perinatalità nella norma?", options: ["Sì", "No"] },
                { question: "Crescita regolare?", options: ["Sì", "No"] },
                { question: "Allergie note?", options: ["Sì", "No"] },
                { question: "Vaccinazioni secondo calendario?", options: ["Sì", "No"] },
                { question: "APR: Precedenti ricoveri, interventi chirurgici o patologie di rilievo?", options: ["Sì", "No"] },
                { question: "Assunzione di farmaci a domicilio per patologie croniche?", options: ["Sì", "No"] }
            ],
            esameObiettivo: [
                { question: "Condizioni generali?", options: ["Buone", "Scarse"] },
                { question: "Colorito?", options: ["Roseo", "Secondo etnia"] },
                { question: "Non visibili esantemi?", options: ["Sì", "No"] },
                { question: "Idratazione conservata, pianto con lacrime?", options: ["Sì", "No"] },
                { question: "GCS 15/15?", options: ["Sì", "No"] },
                { question: "Vigilanza e reattività nella norma?", options: ["Sì", "No"] },
                { question: "Sorride, gioca, collaborante, non sofferente?", options: ["Sì", "No"] },
                { question: "Neuromotorio conservato, non segni neuromeningei?", options: ["Sì", "No"] },
                { question: "Buona interazione con l’esaminatore?", options: ["Sì", "No"] },
                { question: "Tono e forza adeguati?", options: ["Sì", "No"] },
                { question: "Non limitazione alla mobilizzazione attiva e passiva del capo?", options: ["Sì", "No"] },
                { question: "Eupnea?", options: ["Sì", "No"] },
                { question: "Non segni di distress respiratorio?", options: ["Sì", "No"] },
                { question: "Al torace buon ingresso aereo bilateralmente, non rumori patologici aggiunti, non broncospasmo?", options: ["Sì", "No"] },
                { question: "Toni cardiaci validi e ritmici, non soffi. TR<2”?", options: ["Sì", "No"] },
                { question: "Polsi centrali e periferici eusfigmici?", options: ["Sì", "No"] },
                { question: "Estremità calde?", options: ["Sì", "No"] },
                { question: "Addome piano/globoso trattabile, non dolente né dolorabile alla palpazione S/P, OI nei limiti, peristalsi presente. Blumberg e Rovsing negativo. Giordano negativo?", options: ["Sì", "No"] },
                { question: "Faringe?", options: ["Roseo deterso", "Lievemente iperemico"] },
                { question: "Otoscopia?", options: ["Negativa", "MMTT e CUE bilateralmente indenni", "MMTT non visibili per cerume", "MMTT non visibili per ristrettezza del CUE"] },
                { question: "Non segni di otomastoidite?", options: ["Sì", "No"] },
                { question: "Linfonodi?", options: ["Non palpabili nelle csdr", "Micropoliadenopatia LC"] },
                { question: "Apparato osteoarticolare integro?", options: ["Sì", "No"] },
                { question: "Genitali?", options: ["Indenni, normoconformati per età e sesso", "Riflesso cremasterico presente bilateralmente"] }
            ],
            terapie: [
                { question: "Sciroppo per la tosse?", options: ["GRINTUSS", "UNCADEPT", "LENIRTUS"] },
                { question: "Per la rinite?", options: ["LAVAGGI NASALI", "ARGOTONE 0-12", "BACTORINOLO"] }
            ]
        },
        bambino: {
            anamnesi: [
                { question: "Riferita febbre?", options: ["Sì", "No"] },
                { question: "Associata a?", options: ["Tosse", "Rinite", "Vomito", "Diarrea"] },
                { question: "Ultime diuresi ed evacuazioni nella norma?", options: ["Sì", "No"] },
                { question: "Alimentazione e idratazione nella norma?", options: ["Sì", "No"] },
                { question: "Ultimo pasto ore", options: [""] },
                { question: "Ultima tachipirina ore", options: [""] },
                { question: "Ultimo ibuprofene ore", options: [""] },
                { question: "AF: Nascita a termine, perinatalità nella norma?", options: ["Sì", "No"] },
                { question: "Crescita regolare?", options: ["Sì", "No"] },
                { question: "Allergie note?", options: ["Sì", "No"] },
                { question: "Vaccinazioni secondo calendario?", options: ["Sì", "No"] },
                { question: "APR: Precedenti ricoveri, interventi chirurgici o patologie di rilievo?", options: ["Sì", "No"] },
                { question: "Assunzione di farmaci a domicilio per patologie croniche?", options: ["Sì", "No"] }
            ],
            esameObiettivo: [
                { question: "Condizioni generali?", options: ["Buone", "Scarse"] },
                { question: "Colorito?", options: ["Roseo", "Secondo etnia"] },
                { question: "Non visibili esantemi?", options: ["Sì", "No"] },
                { question: "Idratazione conservata, pianto con lacrime?", options: ["Sì", "No"] },
                { question: "GCS 15/15?", options: ["Sì", "No"] },
                { question: "Vigilanza e reattività nella norma?", options: ["Sì", "No"] },
                { question: "Sorride, gioca, collaborante, non sofferente?", options: ["Sì", "No"] },
                { question: "Neuromotorio conservato, non segni neuromeningei?", options: ["Sì", "No"] },
                { question: "Buona interazione con l’esaminatore?", options: ["Sì", "No"] },
                { question: "Tono e forza adeguati?", options: ["Sì", "No"] },
                { question: "Non limitazione alla mobilizzazione attiva e passiva del capo?", options: ["Sì", "No"] },
                { question: "Eupnea?", options: ["Sì", "No"] },
                { question: "Non segni di distress respiratorio?", options: ["Sì", "No"] },
                { question: "Al torace buon ingresso aereo bilateralmente, non rumori patologici aggiunti, non broncospasmo?", options: ["Sì", "No"] },
                { question: "Toni cardiaci validi e ritmici, non soffi. TR<2”?", options: ["Sì", "No"] },
                { question: "Polsi centrali e periferici eusfigmici?", options: ["Sì", "No"] },
                { question: "Estremità calde?", options: ["Sì", "No"] },
                { question: "Addome piano/globoso trattabile, non dolente né dolorabile alla palpazione S/P, OI nei limiti, peristalsi presente. Blumberg e Rovsing negativo. Giordano negativo?", options: ["Sì", "No"] },
                { question: "Faringe?", options: ["Roseo deterso", "Lievemente iperemico"] },
                { question: "Otoscopia?", options: ["Negativa", "MMTT e CUE bilateralmente indenni", "MMTT non visibili per cerume", "MMTT non visibili per ristrettezza del CUE"] },
                { question: "Non segni di otomastoidite?", options: ["Sì", "No"] },
                { question: "Linfonodi?", options: ["Non palpabili nelle csdr", "Micropoliadenopatia LC"] },
                { question: "Apparato osteoarticolare integro?", options: ["Sì", "No"] },
                { question: "Genitali?", options: ["Indenni, normoconformati per età e sesso", "Riflesso cremasterico presente bilateralmente"] }
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

                const openResponseLabel = document.createElement('label');
                openResponseLabel.innerHTML = `<input type="text" name="${section}Question${index}_open" placeholder="Altro...">`;
                questionWrapper.appendChild(openResponseLabel);

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

        // Add vital parameters to the report
        const peso = formData.get('peso');
        const tc = formData.get('tc');
        const so2 = formData.get('so2');
        const fc = formData.get('fc');
        const pa = formData.get('pa');

        if (peso) report += `Peso: ${peso} kg\n`;
        if (tc) report += `TC: ${tc} °C\n`;
        if (so2) report += `So2: ${so2} %\n`;
        if (fc) report += `FC: ${fc} bpm\n`;
        if (pa) report += `PA: ${pa} mmHg\n`;

        const anamnesi = [];
        const esameObiettivo = [];
        const terapie = [];

        const sections = ['anamnesi', 'esameObiettivo', 'terapie'];
        sections.forEach(section => {
            questions[selectedAgeGroup][section].forEach((item, index) => {
                const selectedOptions = formData.getAll(`${section}Question${index}`);
                const openResponse = formData.get(`${section}Question${index}_open`);
                if (selectedOptions.length > 0 || openResponse) {
                    const responses = [...selectedOptions];
                    if (openResponse) {
                        responses.push(openResponse);
                    }
                    const response = `${item.question} ${responses.join(', ')}`;
                    if (section === 'anamnesi') {
                        anamnesi.push(response);
                    } else if (section === 'esameObiettivo') {
                        esameObiettivo.push(response);
                    } else if (section === 'terapie') {
                        terapie.push(response);
                    }
                }
            });
        });

        if (anamnesi.length > 0) {
            report += "\nAnamnesi:\n";
            report += anamnesi.join(". ") + ".\n";
        }
        if (esameObiettivo.length > 0) {
            report += "\nEsame Obiettivo:\n";
            report += esameObiettivo.join(". ") + ".\n";
        }
        if (terapie.length > 0) {
            report += "\nTerapie Consigliate:\n";
            report += terapie.join(". ") + ".\n";
        }

        reportOutput.textContent = report;
    }
});
