const menuClose = (i, link) => $(link).on('click', () => $("#menu-close").click())
$(
  () => {
    $('#sidebar li a').each(menuClose)
  }
)

