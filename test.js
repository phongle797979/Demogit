function isPrime(num) {
    // Số nguyên tố phải lớn hơn 1
    if (num <= 1) return false;
    // 2 và 3 là số nguyên tố
    if (num <= 3) return true;
    // Số chia hết cho 2 hoặc 3 không phải số nguyên tố
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    // Kiểm tra các số từ 5 đến căn bậc hai của num
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
  }
  