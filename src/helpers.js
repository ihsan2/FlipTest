export const formatRupiah = (angka, prefix = 'Rp') => {
  if (typeof angka === 'undefined') {
    return '-';
  }

  angka = !isNaN(angka) ? angka.toString() : angka;

  let number_string = angka.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? prefix + rupiah : '';
};

export const formatDate = (date, type = 'short') => {
  let resDate = date.split(' ')[0];
  let year = resDate.split('-')[0];
  let month = resDate.split('-')[1];
  let day = resDate.split('-')[2];

  const monthStr =
    type === 'short'
      ? monthNameShort(Number(month))
      : monthNameLong(Number(month));

  let result = `${Number(day)} ${monthStr} ${year}`;

  return result;
};

const monthNameShort = mon => {
  return [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ags',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ][mon - 1];
};

const monthNameLong = mon => {
  return [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ][mon - 1];
};
