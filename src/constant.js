// region Website config
export const APP_CLIENT_ID = 5
export const LONG_DATE = 'DD-MM-YYYY HH:mm'
export const PAGES = {
  LOGIN: '/login',
  HOME: '/',
}

export const RESPONSE_CODE = {
  SUCCESS: 1, // Thành công
  PENDING: 0, // Giao dịch treo
  BILL_INVALID: -2,
  CREATE_ORDER_FAIL: -5, // tạo đơn hàng thất bại
  MERCHANT_INACTIVE: -7, // merchant không hoạt động
  REQUIRE_CONFIRM_BANK: -100303, // yêu cầu otp bank
  INVALID_OTP: -10015, // sai otp được nhập lại
}

// endregion
