// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// CONVERSORES
function convertKmToM() {
    const km = parseFloat(document.getElementById('km-input').value);
    if (isNaN(km)) {
        document.getElementById('km-result').innerHTML = '⚠️ Digite um valor válido!';
        return;
    }
    const meters = km * 1000;
    document.getElementById('km-result').innerHTML = 
        `🏹 <strong>${km} km</strong> = <strong>${meters.toLocaleString()} metros</strong>`;
}

function convertHourToMin() {
    const hours = parseFloat(document.getElementById('hour-input').value);
    if (isNaN(hours)) {
        document.getElementById('hour-result').innerHTML = '⚠️ Digite um valor válido!';
        return;
    }
    const minutes = hours * 60;
    document.getElementById('hour-result').innerHTML = 
        `⛈️ <strong>${hours} horas</strong> = <strong>${minutes} minutos</strong>`;
}

function convertSpeed() {
    const kmh = parseFloat(document.getElementById('speed-input').value);
    if (isNaN(kmh)) {
        document.getElementById('speed-result').innerHTML = '⚠️ Digite um valor válido!';
        return;
    }
    const ms = kmh / 3.6;
    document.getElementById('speed-result').innerHTML = 
        `🚗 <strong>${kmh} km/h</strong> = <strong>${ms.toFixed(2)} m/s</strong>`;
}

function convertHeight() {
    const meters = parseFloat(document.getElementById('height-input').value);
    if (isNaN(meters)) {
        document.getElementById('height-result').innerHTML = '⚠️ Digite um valor válido!';
        return;
    }
    const cm = meters * 100;
    document.getElementById('height-result').innerHTML = 
        `🎈 <strong>${meters} metros</strong> = <strong>${cm} centímetros</strong>`;
}

// MOVIMENTO UNIFORME
function calculateMUVelocity() {
    const distance = parseFloat(document.getElementById('mu-distance').value);
    const time = parseFloat(document.getElementById('mu-time').value);
    
    if (isNaN(distance) || isNaN(time) || time === 0) {
        document.getElementById('mu-velocity-result').innerHTML = '⚠️ Digite valores válidos!';
        return;
    }
    
    const velocity = distance / time;
    document.getElementById('mu-velocity-result').innerHTML = 
        `📏 <strong>Velocidade:</strong> ${velocity.toFixed(2)} m/s<br>
        <small>Fórmula: V = ΔS / Δt = ${distance} / ${time}</small>`;
}

function calculateMUDistance() {
    const velocity = parseFloat(document.getElementById('mu-velocity').value);
    const time = parseFloat(document.getElementById('mu-time2').value);
    const initialPos = parseFloat(document.getElementById('mu-initial-pos').value) || 0;
    
    if (isNaN(velocity) || isNaN(time)) {
        document.getElementById('mu-distance-result').innerHTML = '⚠️ Digite valores válidos!';
        return;
    }
    
    const finalPosition = initialPos + (velocity * time);
    const displacement = velocity * time;
    
    document.getElementById('mu-distance-result').innerHTML = 
        `🏹 <strong>Posição final:</strong> ${finalPosition.toFixed(2)} m<br>
        <strong>Deslocamento:</strong> ${displacement.toFixed(2)} m<br>
        <small>Fórmula: S = S₀ + V×t = ${initialPos} + ${velocity}×${time}</small>`;
}

function calculateMUTime() {
    const distance = parseFloat(document.getElementById('mu-distance2').value);
    const velocity = parseFloat(document.getElementById('mu-velocity2').value);
    
    if (isNaN(distance) || isNaN(velocity) || velocity === 0) {
        document.getElementById('mu-time-result').innerHTML = '⚠️ Digite valores válidos!';
        return;
    }
    
    const time = distance / velocity;
    document.getElementById('mu-time-result').innerHTML = 
        `⏰ <strong>Tempo:</strong> ${time.toFixed(2)} segundos<br>
        <small>Fórmula: t = ΔS / V = ${distance} / ${velocity}</small>`;
}

// MOVIMENTO UNIFORMEMENTE VARIADO (MUV)
function calculateSorvete() {
    const s0 = parseFloat(document.getElementById('sorv-s0').value) || 0;
    const v0 = parseFloat(document.getElementById('sorv-v0').value);
    const acceleration = parseFloat(document.getElementById('sorv-a').value);
    const time = parseFloat(document.getElementById('sorv-t').value);
    
    if (isNaN(v0) || isNaN(acceleration) || isNaN(time)) {
        document.getElementById('sorv-result').innerHTML = '⚠️ Digite valores válidos!';
        return;
    }
    
    const finalPosition = s0 + (v0 * time) + (0.5 * acceleration * time * time);
    
    document.getElementById('sorv-result').innerHTML = 
        `🍦 <strong>Posição final:</strong> ${finalPosition.toFixed(2)} m<br>
        <small>Fórmula do Sorvete: S = S₀ + V₀t + ½at²</small><br>
        <small>S = ${s0} + ${v0}×${time} + ½×${acceleration}×${time}²</small>`;
}

function calculateMUVVelocity() {
    const v0 = parseFloat(document.getElementById('muv-v0').value);
    const acceleration = parseFloat(document.getElementById('muv-a').value);
    const time = parseFloat(document.getElementById('muv-t').value);
    
    if (isNaN(v0) || isNaN(acceleration) || isNaN(time)) {
        document.getElementById('muv-velocity-result').innerHTML = '⚠️ Digite valores válidos!';
        return;
    }
    
    const finalVelocity = v0 + (acceleration * time);
    
    document.getElementById('muv-velocity-result').innerHTML = 
        `⚡ <strong>Velocidade final:</strong> ${finalVelocity.toFixed(2)} m/s<br>
        <small>Fórmula: V = V₀ + at = ${v0} + ${acceleration}×${time}</small>`;
}

function calculateAcceleration() {
    const vf = parseFloat(document.getElementById('acc-vf').value);
    const v0 = parseFloat(document.getElementById('acc-v0').value);
    const time = parseFloat(document.getElementById('acc-t').value);
    
    if (isNaN(vf) || isNaN(v0) || isNaN(time) || time === 0) {
        document.getElementById('acc-result').innerHTML = '⚠️ Digite valores válidos!';
        return;
    }
    
    const acceleration = (vf - v0) / time;
    
    document.getElementById('acc-result').innerHTML = 
        `🚀 <strong>Aceleração:</strong> ${acceleration.toFixed(2)} m/s²<br>
        <small>Fórmula: a = (V - V₀) / t = (${vf} - ${v0}) / ${time}</small>`;
}

function calculateTorricelli() {
    const v0 = parseFloat(document.getElementById('torr-v0').value);
    const acceleration = parseFloat(document.getElementById('torr-a').value);
    const displacement = parseFloat(document.getElementById('torr-s').value);
    
    if (isNaN(v0) || isNaN(acceleration) || isNaN(displacement)) {
        document.getElementById('torr-result').innerHTML = '⚠️ Digite valores válidos!';
        return;
    }
    
    const vfSquared = (v0 * v0) + (2 * acceleration * displacement);
    
    if (vfSquared < 0) {
        document.getElementById('torr-result').innerHTML = '⚠️ Resultado inválido (velocidade imaginária)!';
        return;
    }
    
    const vf = Math.sqrt(vfSquared);
    
    document.getElementById('torr-result').innerHTML = 
        `🎯 <strong>Velocidade final:</strong> ${vf.toFixed(2)} m/s<br>
        <small>Equação de Torricelli: V² = V₀² + 2aΔS</small><br>
        <small>V² = ${v0}² + 2×${acceleration}×${displacement} = ${vfSquared.toFixed(2)}</small>`;
}

// Função para limpar resultados quando trocar de aba
function clearResults() {
    const results = document.querySelectorAll('.result');
    results.forEach(result => result.innerHTML = '');
}

// Event listeners para limpar inputs com Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const target = e.target;
        if (target.tagName === 'INPUT') {
            const card = target.closest('.calc-card');
            const button = card.querySelector('button');
            if (button) {
                button.click();
            }
        }
    }
});

// Adicionar animação aos resultados
function showResult(elementId, content) {
    const element = document.getElementById(elementId);
    element.style.opacity = '0';
    element.innerHTML = content;
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.3s ease';
        element.style.opacity = '1';
    }, 100);
}

// Função para validar entrada numérica
function validateInput(value, fieldName = 'campo') {
    if (isNaN(value) || value === '') {
        return { valid: false, message: `⚠️ Digite um valor numérico válido para ${fieldName}!` };
    }
    return { valid: true };
}

// Função para formatar números com precisão
function formatNumber(number, decimals = 2) {
    return parseFloat(number.toFixed(decimals));
}

// Adicionar tooltips informativos
const tooltips = {
    'km-input': 'Digite a distância em quilômetros',
    'hour-input': 'Digite o tempo em horas',
    'speed-input': 'Digite a velocidade em km/h',
    'height-input': 'Digite a altura em metros',
    'mu-distance': 'Digite a distância percorrida em metros',
    'mu-time': 'Digite o tempo em segundos',
    'mu-velocity': 'Digite a velocidade em m/s',
    'sorv-s0': 'Posição inicial (geralmente 0)',
    'sorv-v0': 'Velocidade inicial em m/s',
    'sorv-a': 'Aceleração em m/s²',
    'sorv-t': 'Tempo em segundos'
};

// Aplicar tooltips
document.addEventListener('DOMContentLoaded', function() {
    Object.keys(tooltips).forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.title = tooltips[inputId];
        }
    });
});

// Função para mostrar fórmulas utilizadas
function showFormula(formula, substitution = '') {
    return `<div class="formula-used">
        <strong>Fórmula:</strong> ${formula}
        ${substitution ? `<br><strong>Substituição:</strong> ${substitution}` : ''}
    </div>`;
}

// Função para detectar unidades e fazer conversões automáticas
function autoConvert(value, fromUnit, toUnit) {
    const conversions = {
        'km_to_m': (val) => val * 1000,
        'm_to_km': (val) => val / 1000,
        'h_to_min': (val) => val * 60,
        'min_to_h': (val) => val / 60,
        'kmh_to_ms': (val) => val / 3.6,
        'ms_to_kmh': (val) => val * 3.6,
        'm_to_cm': (val) => val * 100,
        'cm_to_m': (val) => val / 100
    };
    
    const key = `${fromUnit}_to_${toUnit}`;
    return conversions[key] ? conversions[key](value) : value;
}

// Adicionar suporte para diferentes unidades de entrada
function parseValueWithUnit(inputValue) {
    const value = parseFloat(inputValue);
    const unit = inputValue.toString().replace(/[0-9.,\s]/g, '').toLowerCase();
    
    return {
        value: value,
        unit: unit || 'default',
        isValid: !isNaN(value)
    };
}

// Função para calcular múltiplos resultados do MU
function calculateAllMU() {
    // Esta função pode ser expandida para calcular todos os valores possíveis
    // quando o usuário fornece dois dos três parâmetros (distância, velocidade, tempo)
}

// Adicionar histórico de cálculos (em memória)
let calculationHistory = [];

function addToHistory(calculation) {
    calculationHistory.push({
        timestamp: new Date(),
        type: calculation.type,
        inputs: calculation.inputs,
        result: calculation.result,
        formula: calculation.formula
    });
    
    // Manter apenas os últimos 10 cálculos
    if (calculationHistory.length > 10) {
        calculationHistory.shift();
    }
}

// Função para mostrar histórico (pode ser implementada com uma modal)
function showHistory() {
    if (calculationHistory.length === 0) {
        alert('Nenhum cálculo realizado ainda!');
        return;
    }
    
    let historyText = 'Histórico de Cálculos:\n\n';
    calculationHistory.slice(-5).forEach((calc, index) => {
        historyText += `${index + 1}. ${calc.type}\n`;
        historyText += `   Resultado: ${calc.result}\n`;
        historyText += `   ${calc.timestamp.toLocaleTimeString()}\n\n`;
    });
    
    alert(historyText);
}

// Função para resetar todos os campos
function resetAllFields() {
    const inputs = document.querySelectorAll('input');
    const results = document.querySelectorAll('.result');
    
    inputs.forEach(input => input.value = '');
    results.forEach(result => result.innerHTML = '');
}

// Adicionar botão de reset (pode ser implementado no HTML se necessário)
function addResetButton() {
    const container = document.querySelector('.container');
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '🔄 Limpar Tudo';
    resetBtn.onclick = resetAllFields;
    resetBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #ff6b6b, #ee5a52);
        color: white;
        border: none;
        border-radius: 50px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);
        z-index: 1000;
    `;
    document.body.appendChild(resetBtn);
}

// Chamar a função para adicionar o botão de reset
document.addEventListener('DOMContentLoaded', addResetButton);

// Adicionar validação em tempo real
function addRealTimeValidation() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const value = parseFloat(this.value);
            
            if (this.value !== '' && isNaN(value)) {
                this.style.borderColor = '#ff6b6b';
                this.style.background = '#fff5f5';
            } else {
                this.style.borderColor = '#e0e0e0';
                this.style.background = '#fafafa';
            }
        });
        
        input.addEventListener('focus', function() {
            if (this.style.borderColor !== '#ff6b6b') {
                this.style.borderColor = '#667eea';
                this.style.background = 'white';
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.style.borderColor !== '#ff6b6b') {
                this.style.borderColor = '#e0e0e0';
                this.style.background = '#fafafa';
            }
        });
    });
}

// Aplicar validação em tempo real quando o documento carregar
document.addEventListener('DOMContentLoaded', addRealTimeValidation);

// Função para calcular queda livre (caso especial do MUV)
function calculateFreeFall() {
    // Implementação para cálculos de queda livre
    // g = 9.8 m/s² (aceleração da gravidade)
    const g = 9.8;
    
    return {
        calculateHeight: (time) => 0.5 * g * time * time,
        calculateTime: (height) => Math.sqrt(2 * height / g),
        calculateVelocity: (time) => g * time
    };
}

// Adicionar atalhos de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl + R para resetar
    if (e.ctrlKey && e.key === 'r') {
        e.preventDefault();
        resetAllFields();
    }
    
    // Ctrl + H para histórico
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        showHistory();
    }
    
    // Esc para limpar campo focado
    if (e.key === 'Escape') {
        if (document.activeElement && document.activeElement.tagName === 'INPUT') {
            document.activeElement.value = '';
            document.activeElement.blur();
        }
    }
});

console.log('🧮 Calculadora de Física carregada com sucesso!');
console.log('💡 Dicas:');
console.log('   • Pressione Enter em qualquer campo para calcular');
console.log('   • Ctrl+R para limpar todos os campos');
console.log('   • Ctrl+H para ver histórico');
console.log('   • Esc para limpar campo atual');