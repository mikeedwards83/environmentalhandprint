import { ReactNode } from "react"

export const Typography = (props: {}) => {

  const { } = props;

  return (
    <div className={`Typography`}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>



      <p className="lead">
        <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Suspendisse sit amet faucibus libero. Integer ac magna sem. 
        Mauris pharetra ante a massa cursus, quis cursus enim mattis. Sed vel volutpat sem. Class aptent taciti sociosqu ad litora torquent per 
        conubia nostra, per inceptos himenaeos. Phasellus id imperdiet nulla, sit amet placerat nulla. Curabitur sagittis vestibulum mauris, a 
        accumsan tellus auctor id. Ut fringilla, urna sagittis mattis ultrices, leo sapien semper eros, sit amet bibendum orci turpis id ligula. 
        Phasellus tempor tristique mauris, posuere <a href="#">placerat libero blandit</a> sit amet. Aliquam erat volutpat. Quisque velit lectus, blandit eget erat id, 
        facilisis vehicula mauris. Etiam pulvinar risus orci, in tempor ligula maximus non. Aliquam faucibus ut neque a pretium. Aenean sed mollis tellus, 
        imperdiet tincidunt ligula. Suspendisse facilisis vestibulum lorem iaculis elementum.
      </p>

      <p>
        <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Suspendisse sit amet faucibus libero. Integer ac magna sem. 
        Mauris pharetra ante a massa cursus, quis cursus enim mattis. Sed vel volutpat sem. Class aptent taciti sociosqu ad litora torquent per 
        conubia nostra, per inceptos himenaeos. Phasellus id imperdiet nulla, sit amet placerat nulla. Curabitur sagittis vestibulum mauris, a accumsan 
        tellus auctor id. Ut fringilla, urna sagittis mattis ultrices, <a href="#">placerat libero blandit</a>, sit amet bibendum orci turpis id ligula. Phasellus tempor 
        tristique mauris, posuere placerat libero blandit sit amet. Aliquam erat volutpat. Quisque velit lectus, blandit eget erat id, facilisis vehicula 
        mauris. Etiam pulvinar risus orci, in tempor ligula maximus non. Aliquam faucibus ut neque a pretium. Aenean sed mollis tellus, imperdiet tincidunt 
        ligula. Suspendisse facilisis vestibulum lorem iaculis elementum.
      </p>
      <p>
        <em>Pellentesque efficitur pharetra quam,</em> ut convallis augue efficitur in. Nullam a interdum lorem, at condimentum tellus. Donec sit 
        amet ligula bibendum, hendrerit dui ut, consequat orci. Nunc tempus in mauris id pulvinar. Suspendisse sit amet diam ultrices, aliquet justo at, 
        luctus elit. Mauris at finibus est. Cras viverra porta ligula, ac vehicula sem eleifend ac. Nam tempor congue est, et pellentesque dui pulvinar at. 
        Etiam lobortis accumsan posuere. Vestibulum arcu nisi, tristique a quam a, sagittis elementum neque. Praesent nec nisl sollicitudin, malesuada dolor 
        eu, viverra justo. Maecenas consequat commodo quam, in volutpat erat viverra eu. Nulla dapibus purus ac turpis viverra sagittis. Donec ante justo, 
        mollis quis dapibus ut, maximus id ante.
      </p>

      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ol>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )
}