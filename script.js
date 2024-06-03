document.addEventListener('DOMContentLoaded', () => {
    const questions = {
        neonato: {
            anamnesi: [
                { question: "Riferita febbre?", options: ["Sì", "No"], openAnswer: true },
                { question: "Associata a?", options: ["Tosse", "Rinite", "Vomito", "Diarrea"], openAnswer: true },
                { question: "Ultime diuresi ed evacuazioni nella norma?", options: ["Sì", "No"] },
                { question: "Alimentazione e idratazione nella norma?", options: ["Sì", "No"] },
                { question: "Ultimo pasto ore", options: [""], openAnswer: true },
                { question: "Ultima tachipirina ore", options: [""], openAnswer: true },
                { question: "Ultimo ibuprofene ore", options: [""], openAnswer: true },
                { question: "AF: Nascita a termine, perinatalità nella norma?", options: ["Sì", "No"] },
                { question: "Crescita regolare?", options: ["Sì", "No"] },
                { question: "Allergie note?", options: ["Sì", "No"] },
                { question: "Vaccinazioni secondo calendario?", options: ["Sì", "No"] },
                { question: "APR: Precedenti ricoveri, interventi chirurgici o patologie di rilievo?", options: ["Sì", "No"], openAnswer: true },
                { question: "Assunzione di farmaci a domicilio per patologie croniche?", options: ["Sì", "No"], openAnswer: true }
            ],
            esameObiettivo: [
                { question: "Peso (kg)", options: [""], openAnswer: true },
                { question: "TC (°C)", options: [""], openAnswer: true },
                { question: "So2 (%)", options: [""], openAnswer: true },
                { question: "FC (bpm)", options: [""], openAnswer: true },
                { question: "PA (mmHg)", options: [""], openAnswer: true },
                { question: "Condizioni generali", options: ["buone", "scarse"], openAnswer: true },
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
            ]
        },
        lattante: {
            anamnesi: [
                { question: "Riferita febbre?", options: ["Sì", "No"], openAnswer: true },
                { question: "Associata a?", options: ["Tosse", "Rinite", "Vomito", "Diarrea"], openAnswer: true },
                { question: "Ultime diuresi ed evacuazioni nella norma?", options: ["Sì", "No"] },
                { question: "Alimentazione e idratazione nella norma?", options: ["Sì", "No"] },
                { question: "Ultimo pasto ore", options: [""], openAnswer: true },
                { question: "Ultima tachipirina ore", options: [""], openAnswer: true },
                { question: "Ultimo ibuprofene ore", options: [""], openAnswer: true },
                { question: "AF: Nascita a termine, perinatalità nella norma?", options: ["Sì", "No"] },
                { question: "Crescita regolare?", options: ["Sì", "No"] },
                { question: "Allergie note?", options: ["Sì", "No"] },
                { question: "Vaccinazioni secondo calendario?", options: ["Sì", "No"] },
                { question: "APR: Precedenti ricoveri, interventi chirurgici o patologie di rilievo?", options: ["Sì", "No"], openAnswer: true },
                { question: "Assunzione di farmaci a domicilio per patologie croniche?", options: ["Sì", "No"], openAnswer: true }
            ],
            esameObiettivo: [
                { question: "Peso (kg)", options: [""], openAnswer: true },
                { question: "TC (°C)", options: [""], openAnswer: true },
                { question: "So2 (%)", options: [""], openAnswer: true },
                { question: "FC (bpm)", options: [""], openAnswer: true },
                { question: "PA (mmHg)", options: [""], openAnswer: true },
                { question: "Condizioni generali buone.", options: ["Colorito roseo", "Colorito secondo etnia", "Non visibili esantemi", "Esantema maculo papulare al"], openAnswer: true },
                { question: "Idratazione conservata, pianto con lacrime.", options: ["Sì", "No"], openAnswer: true },
                { question: "GCS 15/15. Vigilanza e reattività nella norma.", options: ["Sì", "No"], openAnswer: true },
                { question: "Sorride, gioca, collaborante, non sofferente.", options: ["Sì", "No"], openAnswer: true },
                { question: "Neuromotorio conservato, non segni neuromeningei. Buona interazione con l’esaminatore.", options: ["Sì", "No"], openAnswer: true },
                { question: "Tono e forza adeguati. Non limitazione alla mobilizzazione attiva e passiva del capo.", options: ["Sì", "No"], openAnswer: true },
                { question: "Eupnea. Non segni di distress respiratorio.", options: ["Sì", "No"], openAnswer: true },
                { question: "Al torace buon ingresso aereo bilateralmente, non rumori patologici aggiunti, non broncospasmo.", options: ["Sì", "No"], openAnswer: true },
                { question: "Toni cardiaci validi e ritmici, non soffi.", options: ["Sì", "No"], openAnswer: true },
                { question: "TR<2”. Polsi centrali e periferici eusfigmici. Estremità calde.", options: ["Sì", "No"], openAnswer: true },
                { question: "Addome piano trattabile,", options: ["non dolente né dolorabile alla palpazione S/P, OI nei limiti, peristalsi presente", "Blumberg e Rovsing negativo. Giordano negativo."], openAnswer: true },
                { question: "Faringe", options: ["roseo deterso", "iperemico", "Tonsille nei limiti"], openAnswer: true },
                { question: "Otoscopia:", options: ["negativa", "MMTT e CUE bilateralmente indenni", "MMTT non visibili per cerume", "MMTT non visibili per ristrettezza del CUE", "Non segni di otomastoidite"], openAnswer: true },
                { question: "Linfonodi", options: ["non palpabili nelle csdr", "micropoliadenopatia LC"], openAnswer: true },
                { question: "Apparato osteoarticolare integro.", options: ["Sì", "No"], openAnswer: true },
                { question: "Genitali indenni, normoconformati per età e sesso", options: ["Sì", "No"], openAnswer: true },
                { question: "Riflesso cremasterico presente bilateralmente.", options: ["Sì", "No"], openAnswer: true }
            ]
        },
        bambino: {
            anamnesi: [
                { question: "Riferita febbre?", options: ["Sì", "No"], openAnswer: true },
                { question: "Associata a?", options: ["Tosse", "Rinite", "Vomito", "Diarrea"], openAnswer: true },
                { question: "Ultime diuresi ed evacuazioni nella norma?", options: ["Sì", "No"] },
                { question: "Alimentazione e idratazione nella norma?", options: ["Sì", "No"] },
                { question: "Ultimo pasto ore", options: [""], openAnswer: true },
                { question: "Ultima tachipirina ore", options: [""], openAnswer: true },
                { question: "Ultimo ibuprofene ore", options: [""], openAnswer: true },
                { question: "AF: Nascita a termine, perinatalità nella norma?", options: ["Sì", "No"] },
                { question: "Crescita regolare?", options: ["Sì", "No"] },
                { question: "Allergie note?", options: ["Sì", "No"] },
                { question: "Vaccinazioni secondo calendario?", options: ["Sì", "No"] },
                { question: "APR: Precedenti ricoveri, interventi chirurgici o patologie di rilievo?", options: ["Sì", "No"], openAnswer: true },
                { question: "Assunzione di farmaci a domicilio per patologie croniche?", options: ["Sì", "No"], openAnswer: true }
            ],
            esameObiettivo: [
                { question: "Peso (kg)", options: [""], openAnswer: true },
                { question: "TC (°C)", options: [""], openAnswer: true },
                { question: "So2 (%)", options: [""], openAnswer: true },
                { question: "FC (bpm)", options: [""], openAnswer: true },
                { question: "PA (mmHg)", options: [""], openAnswer: true },
                { question: "Condizioni generali buone.", options: ["Colorito roseo", "Colorito secondo etnia", "Non visibili esantemi", "Esantema maculo papulare al"], openAnswer: true },
                { question: "Idratazione conservata, pianto con lacrime.", options: ["Sì", "No"], openAnswer: true },
                { question: "GCS 15/15. Vigilanza e reattività nella norma.", options: ["Sì", "No"], openAnswer: true },
                { question: "Sorride, gioca, collaborante, non sofferente.", options: ["Sì", "No"], openAnswer: true },
                { question: "Neuromotorio conservato, non segni neuromeningei. Buona interazione con l’esaminatore.", options: ["Sì", "No"], openAnswer: true },
                { question: "Tono e forza adeguati. Non limitazione alla mobilizzazione attiva e passiva del capo.", options: ["Sì", "No"], openAnswer: true },
                { question: "Eupnea. Non segni di distress respiratorio.", options: ["Sì", "No"], openAnswer: true },
                { question: "Al torace buon ingresso aereo bilateralmente, non rumori patologici aggiunti, non broncospasmo.", options: ["Sì", "No"], openAnswer: true },
                { question: "Toni cardiaci validi e ritmici, non soffi.", options: ["Sì", "No"], openAnswer: true },
                { question: "TR<2”. Polsi centrali e periferici eusfigmici. Estremità calde.", options: ["Sì", "No"], openAnswer: true },
                { question: "Addome piano trattabile,", options: ["non dolente né dolorabile alla palpazione S/P, OI nei limiti, peristalsi presente", "Blumberg e Rovsing negativo. Giordano negativo."], openAnswer: true },
                { question: "Faringe", options: ["roseo deterso", "iperemico", "Tonsille nei limiti"], openAnswer: true },
                { question: "Otoscopia:", options: ["negativa", "MMTT e CUE bilateralmente indenni", "MMTT non visibili per cerume", "MMTT non visibili per ristrettezza del CUE", "Non segni di otomastoidite"], openAnswer: true },
                { question: "Linfonodi", options: ["non palpabili nelle csdr", "micropoliadenopatia LC"], openAnswer: true },
                { question: "Apparato osteoarticolare integro.", options: ["Sì", "No"], openAnswer: true },
                { question: "Genitali indenni, normoconformati per età e sesso", options: ["Sì", "No"], openAnswer: true },
                { question: "Riflesso cremasterico presente bilateralmente.", options: ["Sì", "No"], openAnswer: true }
            ]
        },
        adolescente: {
            anamnesi: [
                { question: "Riferita febbre?", options: ["Sì", "No"], openAnswer: true },
                { question: "Associata a?", options: ["Tosse", "Rinite", "Vomito", "Diarrea"], openAnswer: true },
                { question: "Ultime diuresi ed evacuazioni nella norma?", options: ["Sì", "No"] },
                { question: "Alimentazione e idratazione nella norma?", options: ["Sì", "No"] },
                { question: "Ultimo pasto ore", options: [""], openAnswer: true },
                { question: "Ultima tachipirina ore", options: [""], openAnswer: true },
                { question: "Ultimo ibuprofene ore", options: [""], openAnswer: true },
                { question: "AF: Nascita a termine, perinatalità nella norma?", options: ["Sì", "No"] },
                { question: "Crescita regolare?", options: ["Sì", "No"] },
                { question: "Allergie note?", options: ["Sì", "No"] },
                { question: "Vaccinazioni secondo calendario?", options: ["Sì", "No"] },
                { question: "APR: Precedenti ricoveri, interventi chirurgici o patologie di rilievo?", options: ["Sì", "No"], openAnswer: true },
                { question: "Assunzione di farmaci a domicilio per patologie croniche?", options: ["Sì", "No"], openAnswer: true }
            ],
            esameObiettivo: [
                { question: "Peso (kg)", options: [""], openAnswer: true },
                { question: "TC (°C)", options: [""], openAnswer: true },
                { question: "So2 (%)", options: [""], openAnswer: true },
                { question: "FC (bpm)", options: [""], openAnswer: true },
                { question: "PA (mmHg)", options: [""], openAnswer: true },
                { question: "Condizioni generali buone.", options: ["Colorito roseo", "Colorito secondo etnia", "Non visibili esantemi", "Esantema maculo papulare al"], openAnswer: true },
                { question: "Idratazione conservata, pianto con lacrime.", options: ["Sì", "No"], openAnswer: true },
                { question: "GCS 15/15. Vigilanza e reattività nella norma.", options: ["Sì", "No"], openAnswer: true },
                { question: "Sorride, gioca, collaborante, non sofferente.", options: ["Sì", "No"], openAnswer: true },
                { question: "Neuromotorio conservato, non segni neuromeningei. Buona interazione con l’esaminatore.", options: ["Sì", "No"], openAnswer: true },
                { question: "Tono e forza adeguati. Non limitazione alla mobilizzazione attiva e passiva del capo.", options: ["Sì", "No"], openAnswer: true },
                { question: "Eupnea. Non segni di distress respiratorio.", options: ["Sì", "No"], openAnswer: true },
                { question: "Al torace buon ingresso aereo bilateralmente, non rumori patologici aggiunti, non broncospasmo.", options: ["Sì", "No"], openAnswer: true },
                { question: "Toni cardiaci validi e ritmici, non soffi.", options: ["Sì", "No"], openAnswer: true },
                { question: "TR<2”. Polsi centrali e periferici eusfigmici. Estremità calde.", options: ["Sì", "No"], openAnswer: true },
                { question: "Addome piano trattabile,", options: ["non dolente né dolorabile alla palpazione S/P, OI nei limiti, peristalsi presente", "Blumberg e Rovsing negativo. Giordano negativo."], openAnswer: true },
                { question: "Faringe", options: ["roseo deterso", "iperemico", "Tonsille nei limiti"], openAnswer: true },
                { question: "Otoscopia:", options: ["negativa", "MMTT e CUE bilateralmente indenni", "MMTT non visibili per cerume", "MMTT non visibili per ristrettezza del CUE", "Non segni di otomastoidite"], openAnswer: true },
                { question: "Linfonodi", options: ["non palpabili nelle csdr", "micropoliadenopatia LC"], openAnswer: true },
                { question: "Apparato osteoarticolare integro.", options: ["Sì", "No"], openAnswer: true },
                { question: "Genitali indenni, normoconformati per età e sesso", options: ["Sì", "No"], openAnswer: true },
                { question: "Riflesso cremasterico presente bilateralmente.", options: ["Sì", "No"], openAnswer: true }
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
        const sections = ['anamnesi', 'esameObiettivo'];
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

                if (item.options[0] === "" || item.openAnswer) {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = `${section}Question${index}`;
                    questionWrapper.appendChild(input);
                } else {
                    item.options.forEach(option => {
                        const optionLabel = document.createElement('label');
                        optionLabel.innerHTML = `<input type="checkbox" name="${section}Question${index}" value="${option}">${option}`;
                        questionWrapper.appendChild(optionLabel);
                    });
                }

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

        const anamnesi = [];
        const esameObiettivo = {
            generale: [],
            neurologico: [],
            cardiocircolatorio: [],
            respiratorio: [],
            addome: [],
            faringe: [],
            orecchie: [],
            osteoarticolare: [],
            genitali: []
        };

        const sections = ['anamnesi', 'esameObiettivo'];
        sections.forEach(section => {
            questions[selectedAgeGroup][section].forEach((item, index) => {
                const selectedOptions = formData.getAll(`${section}Question${index}`);
                if (selectedOptions.length > 0) {
                    const response = selectedOptions.join(', ');
                    if (section === 'anamnesi') {
                        anamnesi.push(response);
                    } else if (section === 'esameObiettivo') {
                        if (item.question.includes("generali")) {
                            esameObiettivo.generale.push(response);
                        } else if (item.question.includes("neuromotorio") || item.question.includes("neuromeningei")) {
                            esameObiettivo.neurologico.push(response);
                        } else if (item.question.includes("Toni cardiaci") || item.question.includes("Polsi")) {
                            esameObiettivo.cardiocircolatorio.push(response);
                        } else if (item.question.includes("Eupnea") || item.question.includes("torace")) {
                            esameObiettivo.respiratorio.push(response);
                        } else if (item.question.includes("Addome") || item.question.includes("palpazione")) {
                            esameObiettivo.addome.push(response);
                        } else if (item.question.includes("Faringe")) {
                            esameObiettivo.faringe.push(response);
                        } else if (item.question.includes("Otoscopia")) {
                            esameObiettivo.orecchie.push(response);
                        } else if (item.question.includes("ostearticolare")) {
                            esameObiettivo.osteoarticolare.push(response);
                        } else if (item.question.includes("Genitali")) {
                            esameObiettivo.genitali.push(response);
                        }
                    }
                }
            });
        });

        if (anamnesi.length > 0) {
            report += "Anamnesi:\n";
            report += anamnesi.join(".\n") + ".\n\n";
        }

        report += "Esame Obiettivo:\n";
        if (esameObiettivo.generale.length > 0) report += "Generale: " + esameObiettivo.generale.join(".\n") + ".\n\n";
        if (esameObiettivo.neurologico.length > 0) report += "Neurologico: " + esameObiettivo.neurologico.join(".\n") + ".\n\n";
        if (esameObiettivo.cardiocircolatorio.length > 0) report += "Cardiocircolatorio: " + esameObiettivo.cardiocircolatorio.join(".\n") + ".\n\n";
        if (esameObiettivo.respiratorio.length > 0) report += "Respiratorio: " + esameObiettivo.respiratorio.join(".\n") + ".\n\n";
        if (esameObiettivo.addome.length > 0) report += "Addome: " + esameObiettivo.addome.join(".\n") + ".\n\n";
        if (esameObiettivo.faringe.length > 0) report += "Faringe: " + esameObiettivo.faringe.join(".\n") + ".\n\n";
        if (esameObiettivo.orecchie.length > 0) report += "Orecchie: " + esameObiettivo.orecchie.join(".\n") + ".\n\n";
        if (esameObiettivo.osteoarticolare.length > 0) report += "Osteoarticolare: " + esameObiettivo.osteoarticolare.join(".\n") + ".\n\n";
        if (esameObiettivo.genitali.length > 0) report += "Genitali: " + esameObiettivo.genitali.join(".\n") + ".\n";

        reportOutput.textContent = report.trim();
    }

    window.copyReport = function() {
        const reportText = document.getElementById('reportOutput').textContent;
        navigator.clipboard.writeText(reportText).then(() => {
            alert('Report copiato negli appunti!');
        }).catch(err => {
            console.error('Errore nel copiare il report: ', err);
        });
    }
});
