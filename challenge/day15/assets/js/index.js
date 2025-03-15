document.getElementById('convertBtn').addEventListener('click', convertTemperature);
        document.getElementById('swapBtn').addEventListener('click', swapUnits);
        
        function swapUnits() {
            const fromUnit = document.getElementById('fromUnit');
            const toUnit = document.getElementById('toUnit');
            
            const tempValue = fromUnit.value;
            fromUnit.value = toUnit.value;
            toUnit.value = tempValue;
            
            // If there's already a result, convert again
            if (!document.getElementById('resultContainer').classList.contains('hidden')) {
                convertTemperature();
            }
        }
        
        function convertTemperature() {
            const temperature = parseFloat(document.getElementById('temperature').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;
            
            // Show loading state
            document.getElementById('btnText').classList.add('hidden');
            document.getElementById('btnLoading').classList.remove('hidden');
            
            // Hide previous result
            document.getElementById('resultContainer').classList.add('hidden');
            
            if (isNaN(temperature)) {
                setTimeout(() => {
                    document.getElementById('result').textContent = 'Please enter a valid number';
                    document.getElementById('resultContainer').classList.remove('hidden');
                    document.getElementById('resultContainer').classList.add('result-appear');
                    
                    // Reset button
                    document.getElementById('btnText').classList.remove('hidden');
                    document.getElementById('btnLoading').classList.add('hidden');
                }, 800);
                return;
            }
            
            // Simulate processing time for animation effect
            setTimeout(() => {
                let result;
                
                // Convert to Celsius first (as intermediate step)
                let tempInCelsius;
                if (fromUnit === 'celsius') {
                    tempInCelsius = temperature;
                } else if (fromUnit === 'fahrenheit') {
                    tempInCelsius = (temperature - 32) * 5/9;
                } else if (fromUnit === 'kelvin') {
                    tempInCelsius = temperature - 273.15;
                }
                
                // Convert from Celsius to target unit
                if (toUnit === 'celsius') {
                    result = tempInCelsius;
                } else if (toUnit === 'fahrenheit') {
                    result = (tempInCelsius * 9/5) + 32;
                } else if (toUnit === 'kelvin') {
                    result = tempInCelsius + 273.15;
                }
                
                // Format and display the result
                const formattedResult = result.toFixed(2);
                const unitSymbol = getUnitSymbol(toUnit);
                document.getElementById('result').textContent = `${formattedResult} ${unitSymbol}`;
                
                // Show result with animation
                document.getElementById('resultContainer').classList.remove('hidden');
                document.getElementById('resultContainer').classList.add('result-appear');
                
                // Reset button
                document.getElementById('btnText').classList.remove('hidden');
                document.getElementById('btnLoading').classList.add('hidden');
            }, 800);
        }
        
        function getUnitSymbol(unit) {
            if (unit === 'celsius') return '°C';
            if (unit === 'fahrenheit') return '°F';
            if (unit === 'kelvin') return 'K';
            return '';
        }