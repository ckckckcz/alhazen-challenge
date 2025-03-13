function showOtherCity() {
    const kotaSelect = document.getElementById('kota');
    const otherCityDiv = document.getElementById('other-city');
    
    if (kotaSelect.value === 'lainnya') {
        otherCityDiv.style.display = 'block';
        document.getElementById('kota_lainnya').required = true;
    } else {
        otherCityDiv.style.display = 'none';
        document.getElementById('kota_lainnya').required = false;
    }
}