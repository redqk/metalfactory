<template>
  <footer class="bg-light text-center text-lg-start mt-auto">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Metal Factory</h5>
          <p>Contentul din Footer.</p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled mb-0">
            <li><a href="https://anpc.ro/" class="text-dark">Anpc.ro</a></li>
            <li><a href="#!" class="text-dark">Link 2</a></li>
            <li><a href="#!" class="text-dark">Link 3</a></li>
            <li><a href="#!" class="text-dark">Link 4</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Links</h5>
          <ul class="list-unstyled">
            <li><a href="#!" class="text-dark">Link 1</a></li>
            <li><a href="#!" class="text-dark">Link 2</a></li>
            <li><a href="#!" class="text-dark">Link 3</a></li>
            <li><a href="#!" class="text-dark">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2024 Copyright:
      <a class="text-dark" href="https://yourstore.com/">yourstore.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  margin-top: 20px;
}
h5 {
  font-size: 1.25rem;
}
a {
  color: #000;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>