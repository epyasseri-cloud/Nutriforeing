// Calculadora de IMC - Nutriforeing
document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // convertir a metros
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.querySelector('input[name="genero"]:checked').value;
    
    // Calcular IMC
    const imc = (peso / (altura * altura)).toFixed(1);
    
    // Mostrar resultado
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('imcValue').textContent = imc;
    
    // Determinar categoría y color
    let categoria, color, descripcion, recomendaciones, meterPosition;
    
    if (imc < 18.5) {
        categoria = 'Peso Bajo';
        color = '#3498db';
        meterPosition = '12.5%';
        descripcion = 'Tu IMC indica que tienes un peso inferior al normal. Es recomendable consultar con un profesional de la salud.';
        recomendaciones = [
            'Aumenta tu ingesta calórica de manera saludable',
            'Incluye más proteínas en tu dieta',
            'Realiza ejercicios de fuerza para ganar masa muscular',
            'Consulta con un nutricionista'
        ];
    } else if (imc >= 18.5 && imc < 25) {
        categoria = 'Peso Normal';
        color = '#2ecc71';
        meterPosition = '37.5%';
        descripcion = '¡Excelente! Tu IMC está en el rango saludable. Mantén tus hábitos alimenticios y de ejercicio.';
        recomendaciones = [
            'Mantén una dieta balanceada',
            'Realiza ejercicio regularmente (150 min/semana)',
            'Mantén una hidratación adecuada',
            'Duerme entre 7-8 horas diarias'
        ];
    } else if (imc >= 25 && imc < 30) {
        categoria = 'Sobrepeso';
        color = '#f39c12';
        meterPosition = '62.5%';
        descripcion = 'Tu IMC indica sobrepeso. Considera hacer cambios en tu estilo de vida para alcanzar un peso más saludable.';
        recomendaciones = [
            'Reduce el consumo de alimentos procesados',
            'Aumenta la actividad física diaria',
            'Controla las porciones de comida',
            'Bebe más agua y evita bebidas azucaradas'
        ];
    } else {
        categoria = 'Obesidad';
        color = '#e74c3c';
        meterPosition = '87.5%';
        descripcion = 'Tu IMC indica obesidad. Es importante que consultes con un profesional de la salud para crear un plan personalizado.';
        recomendaciones = [
            'Consulta con un médico o nutricionista',
            'Crea un plan de alimentación personalizado',
            'Inicia con ejercicio de bajo impacto',
            'Establece metas realistas y alcanzables'
        ];
    }
    
    // Aplicar estilos
    const badge = document.querySelector('.category-badge');
    badge.textContent = categoria;
    badge.style.backgroundColor = color + '20';
    badge.style.color = color;
    badge.style.border = `2px solid ${color}`;
    
    // Posicionar indicador
    document.getElementById('meterIndicator').style.left = meterPosition;
    
    // Mostrar descripción
    document.getElementById('resultDescription').querySelector('p').textContent = descripcion;
    
    // Mostrar recomendaciones
    const recList = document.querySelector('.result-recommendations ul');
    recList.innerHTML = '';
    recomendaciones.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recList.appendChild(li);
    });
    
    // Scroll suave al resultado
    document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
