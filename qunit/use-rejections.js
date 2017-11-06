/* global $, QUnit, swal */

QUnit.test('confirm button', function (assert) {
  const done = assert.async()

  swal({
    title: 'Confirm me',
    useRejections: true
  }).then(function (result) {
    assert.equal(result, true)
    done()
  })

  swal.clickConfirm()
})

QUnit.test('cancel button', function (assert) {
  const done = assert.async()

  swal({
    title: 'Cancel me',
    useRejections: true
  }).then(
    function () {},
    function (dismiss) {
      assert.equal(dismiss, 'cancel')
      done()
    }
  ).catch(swal.noop)

  swal.clickCancel()
})

QUnit.test('esc key', function (assert) {
  const done = assert.async()

  swal({
    title: 'Esc me',
    useRejections: true
  }).then(
    function () {},
    function (dismiss) {
      assert.equal(dismiss, 'esc')
      done()
    }
  )

  $(document).trigger($.Event('keydown', {
    key: 'Escape'
  }))
})

QUnit.test('overlay click', function (assert) {
  const done = assert.async()

  swal({
    title: 'Overlay click',
    useRejections: true
  }).then(
    function () {},
    function (dismiss) {
      assert.equal(dismiss, 'overlay')
      done()
    }
  )

  $('.swal2-container').click()
})

QUnit.test('timer', function (assert) {
  const done = assert.async()

  swal({
    title: 'Timer test',
    timer: 10,
    animation: false,
    useRejections: true
  }).then(
    function () {},
    function (dismiss) {
      assert.equal(dismiss, 'timer')
      done()
    }
  )
})

QUnit.test('close button', function (assert) {
  const done = assert.async()

  swal({
    title: 'Close button test',
    showCloseButton: true,
    useRejections: true
  }).then(
    function () {},
    function (dismiss) {
      assert.equal(dismiss, 'close')
      done()
    }
  )

  const $closeButton = $('.swal2-close')
  assert.ok($closeButton.is(':visible'))
  $closeButton.click()
})

QUnit.test('input text', function (assert) {
  const done = assert.async()

  const string = 'Live for yourself'
  swal({
    input: 'text',
    useRejections: true
  }).then(function (result) {
    assert.equal(result, string)
    done()
  })

  $('.swal2-input').val(string)
  swal.clickConfirm()
})

QUnit.test('built-in email validation', function (assert) {
  const done = assert.async()

  var validEmailAddress = 'team+support+a.b@example.com'
  swal({
    input: 'email',
    useRejections: true
  }).then(function (result) {
    assert.equal(result, validEmailAddress)
    done()
  })

  $('.swal2-input').val(validEmailAddress)
  swal.clickConfirm()
})

QUnit.test('input select', function (assert) {
  const done = assert.async()

  const selected = 'dos'
  swal({
    input: 'select',
    inputOptions: {uno: 1, dos: 2},
    useRejections: true
  }).then(function (result) {
    assert.equal(result, selected)
    done()
  })

  $('.swal2-select').val(selected)
  swal.clickConfirm()
})

QUnit.test('input checkbox', function (assert) {
  const done = assert.async()

  swal({
    input: 'checkbox',
    inputAttributes: {
      name: 'test-checkbox'
    },
    useRejections: true
  }).then(function (result) {
    assert.equal(checkbox.attr('name'), 'test-checkbox')
    assert.equal(result, '1')
    done()
  })

  const checkbox = $('.swal2-checkbox input')
  checkbox.prop('checked', true)
  swal.clickConfirm()
})
