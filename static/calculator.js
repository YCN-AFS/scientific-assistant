function changeTool() {
    const selectedTool = document.getElementById('toolSelect').value;
    const calculators = document.querySelectorAll('.calculator');
    
    // Ẩn tất cả calculators
    calculators.forEach(calc => {
        calc.classList.remove('active');
    });

    // Hiện calculator được chọn nếu tồn tại
    const selectedCalc = document.getElementById(`${selectedTool}Calculator`);
    if (selectedCalc) {
        selectedCalc.classList.add('active');
    }
}

function calculateForce() {
    const mass = parseFloat(document.getElementById('mass').value);
    const acceleration = parseFloat(document.getElementById('acceleration').value);
    
    if (isNaN(mass) || isNaN(acceleration)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    const force = mass * acceleration;
    const result = document.getElementById('forceResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        F = m × a<br>
        F = ${mass} × ${acceleration}<br>
        F = ${force.toFixed(2)} N
    `;
}

function calculateVelocity() {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);
    
    if (isNaN(distance) || isNaN(time)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (time === 0) {
        alert('Thời gian không thể bằng 0!');
        return;
    }
    
    const velocity = distance / time;
    const result = document.getElementById('velocityResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        v = s ÷ t<br>
        v = ${distance} ÷ ${time}<br>
        v = ${velocity.toFixed(2)} m/s
    `;
}

function calculateEnergy() {
    const mass = parseFloat(document.getElementById('mass-energy').value);
    const c = 299792458; // Tốc độ ánh sáng (m/s)
    
    if (isNaN(mass)) {
        alert('Vui lòng nhập khối lượng!');
        return;
    }
    
    const energy = mass * Math.pow(c, 2);
    const result = document.getElementById('energyResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        E = m × c²<br>
        E = ${mass} × (${c})²<br>
        E = ${energy.toExponential(2)} J
    `;
}

function calculatePower() {
    const work = parseFloat(document.getElementById('work').value);
    const time = parseFloat(document.getElementById('time-power').value);
    
    if (isNaN(work) || isNaN(time)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (time === 0) {
        alert('Thời gian không thể bằng 0!');
        return;
    }
    
    const power = work / time;
    const result = document.getElementById('powerResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        P = W ÷ t<br>
        P = ${work} ÷ ${time}<br>
        P = ${power.toFixed(2)} W
    `;
}

// Vật lý
function calculatePressure() {
    const force = parseFloat(document.getElementById('force-pressure').value);
    const area = parseFloat(document.getElementById('area').value);
    
    if (isNaN(force) || isNaN(area)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (area === 0) {
        alert('Diện tích không thể bằng 0!');
        return;
    }
    
    const pressure = force / area;
    const result = document.getElementById('pressureResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        P = F ÷ S<br>
        P = ${force} ÷ ${area}<br>
        P = ${pressure.toFixed(2)} Pa
    `;
}

// Hóa học
function calculateConcentration() {
    const soluteMass = parseFloat(document.getElementById('solute-mass').value);
    const solutionMass = parseFloat(document.getElementById('solution-mass').value);
    
    if (isNaN(soluteMass) || isNaN(solutionMass)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (solutionMass === 0) {
        alert('Khối lượng dung dịch không thể bằng 0!');
        return;
    }
    
    const concentration = (soluteMass / solutionMass) * 100;
    const result = document.getElementById('concentrationResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        C% = (m₁ ÷ m₂) × 100%<br>
        C% = (${soluteMass} ÷ ${solutionMass}) × 100<br>
        C% = ${concentration.toFixed(2)}%
    `;
}

function calculateMolar() {
    const moles = parseFloat(document.getElementById('moles').value);
    const volume = parseFloat(document.getElementById('volume').value);
    
    if (isNaN(moles) || isNaN(volume)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (volume === 0) {
        alert('Thể tích không thể bằng 0!');
        return;
    }
    
    const molarConcentration = moles / volume;
    const result = document.getElementById('molarResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        CM = n ÷ V<br>
        CM = ${moles} ÷ ${volume}<br>
        CM = ${molarConcentration.toFixed(2)} mol/L
    `;
}

// Sinh học
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    const bmi = weight / (height * height);
    const result = document.getElementById('bmiResult');
    result.style.display = 'block';
    
    let category = '';
    if (bmi < 18.5) category = 'Thiếu cân';
    else if (bmi < 25) category = 'Bình thường';
    else if (bmi < 30) category = 'Thừa cân';
    else category = 'Béo phì';
    
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        BMI = m ÷ h²<br>
        BMI = ${weight} ÷ (${height})²<br>
        BMI = ${bmi.toFixed(2)}<br>
        Phân loại: ${category}
    `;
}

function calculatePopulationDensity() {
    const population = parseFloat(document.getElementById('population').value);
    const area = parseFloat(document.getElementById('area-volume').value);
    
    if (isNaN(population) || isNaN(area)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (area === 0) {
        alert('Diện tích/Thể tích không thể bằng 0!');
        return;
    }
    
    const density = population / area;
    const result = document.getElementById('populationResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        D = N ÷ S<br>
        D = ${population} ÷ ${area}<br>
        D = ${density.toFixed(2)} cá thể/m²
    `;
}

function calculateDensity() {
    const mass = parseFloat(document.getElementById('mass-density').value);
    const volume = parseFloat(document.getElementById('volume-density').value);
    
    if (isNaN(mass) || isNaN(volume)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (volume === 0) {
        alert('Thể tích không thể bằng 0!');
        return;
    }
    
    const density = mass / volume;
    const result = document.getElementById('densityResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        D = m ÷ V<br>
        D = ${mass} ÷ ${volume}<br>
        D = ${density.toFixed(2)} g/mL
    `;
}

function calculatePH() {
    const hConcentration = parseFloat(document.getElementById('h-concentration').value);
    
    if (isNaN(hConcentration)) {
        alert('Vui lòng nhập nồng độ H⁺!');
        return;
    }
    
    if (hConcentration <= 0) {
        alert('Nồng độ H⁺ phải lớn hơn 0!');
        return;
    }
    
    const pH = -Math.log10(hConcentration);
    const result = document.getElementById('phResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        pH = -log[H⁺]<br>
        pH = -log(${hConcentration})<br>
        pH = ${pH.toFixed(2)}
    `;
}

function calculateGrowthRate() {
    const n1 = parseFloat(document.getElementById('initial-population').value);
    const n2 = parseFloat(document.getElementById('final-population').value);
    const time = parseFloat(document.getElementById('time-growth').value);
    
    if (isNaN(n1) || isNaN(n2) || isNaN(time)) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    
    if (time === 0) {
        alert('Thời gian không thể bằng 0!');
        return;
    }
    
    if (n1 === 0) {
        alert('Số lượng ban đầu không thể bằng 0!');
        return;
    }
    
    const growthRate = ((n2 - n1) / (n1 * time));
    const result = document.getElementById('growthResult');
    result.style.display = 'block';
    result.innerHTML = `
        <strong>Kết quả:</strong><br>
        r = (N₂ - N₁)/(N₁ × t)<br>
        r = (${n2} - ${n1})/(${n1} × ${time})<br>
        r = ${growthRate.toFixed(4)} /ngày
    `;
}

// Thêm các hàm tính toán khác tương tự 