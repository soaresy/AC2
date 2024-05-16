function loadActivity(activityName) {
    const activityPath = `${activityName}.html`;

    fetch(activityPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a atividade: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar a atividade:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const domActivityContainer = document.getElementById('domActivityContainer');

    // Cria um elemento iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'dom_activity.html';
    iframe.width = '100%';
    iframe.height = '400px';
    iframe.frameBorder = '0';

    // Adiciona o iframe à div de container
    domActivityContainer.appendChild(iframe);
});

